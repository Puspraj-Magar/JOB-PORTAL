import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import getDataUri from "../utils/dataUri.js";
import cloudinary from "../utils/cloudinary.js";

const getCookieOptions = () => {
    const isProduction = process.env.NODE_ENV === "production";
    return {
        httpOnly: true,
        sameSite: isProduction ? "none" : "lax",
        secure: isProduction,
        maxAge: 30 * 24 * 60 * 60 * 1000,
        path: "/"
    };
};

export const register = async(req, res) => {
    try {
        const { fullName, email, phoneNumber, password, role } = req.body;
        if (!fullName || !email || !phoneNumber || !password || !role) {
            return res.status(400).json({
                message: "Something is missing",
                success: false,
            });
        }
        const file = req.file;
        const fileUri = getDataUri(file);
        const cloudResponse = await cloudinary.uploader.upload(fileUri.content);
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({
                message: "User already existed",
                success: false,
            });
        }
        const hashPassword = await bcrypt.hash(password, 10);

        let profile = {};
        if (file) {
            const fileUri = getDataUri(file);
            const cloudResponse = await cloudinary.uploader.upload(fileUri.content, {
                resource_type: "auto",
            });
            profile.profilePhoto = cloudResponse.secure_url;
        }

        await User.create({
            fullName,
            email,
            phoneNumber,
            password: hashPassword,
            role,
            profile: {
                profilePhoto: cloudResponse.secure_url,
            },
        });
        return res.status(201).json({
            message: "Account Successfully Created",
            success: true,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Error during registration",
            success: false,
        });
    }
};

export const login = async(req, res) => {
    try {
        const { email, password, role } = req.body;
        if (!email || !password || !role) {
            return res.status(400).json({
                message: "Something is missing",
                success: false,
            });
        }
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                message: "Incorrect email and password",
                success: false,
            });
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(400).json({
                message: "Incorrect email and password",
                success: false,
            });
        }
        //check role is correct or not
        if (role != user.role) {
            return res.status(400).json({
                message: "Account doesn't exist with current role",
                success: false,
            });
        }
        const tokenData = {
            userId: user._id,
        };
        const token = await jwt.sign(tokenData, process.env.SECRET_KEY, {
            expiresIn: "30d",
        });

        const cookieOptions = getCookieOptions();

        user = {
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            profile: user.profile,
        };
        return res
            .status(200)
            .cookie("token", token, cookieOptions)
            .json({
                message: `Welcome back ${user.fullName}`,
                user,
                success: true,
            });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Login failed",
            success: false,
        });
    }
};

export const logout = async(req, res) => {
    try {
        return res.status(200)
            .cookie("token", "", {
                ...getCookieOptions(),
                maxAge: 0
            })
            .json({
                message: "Logged out successfully",
                success: true,
            });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Logout failed",
            success: false,
        });
    }
};

export const updateProfile = async(req, res) => {
    try {
        const { fullName, email, phoneNumber, bio, skills } = req.body;
        const file = req.file;

        let cloudResponse = null;

        if (file) {
            const fileUri = getDataUri(file);
            cloudResponse = await cloudinary.uploader.upload(fileUri.content, {
                resource_type: "auto",
            });
        }

        let skillsArray;
        if (skills) {
            skillsArray = skills.split(",");
        }

        const userId = req.id; //middleware authentication
        let user = await User.findById(userId);

        if (!user) {
            return res.status(400).json({
                message: "User not found",
                success: false,
            });
        }
        user.profile = user.profile || {};

        //updating data
        if (fullName) user.fullName = fullName;
        if (email) user.email = email;
        if (phoneNumber) user.phoneNumber = phoneNumber;
        if (bio) user.profile.bio = bio;
        if (skills) user.profile.skills = skillsArray;

        if (cloudResponse) {
            user.profile.resume = cloudResponse.secure_url; //save the cloudinary url
            user.profile.resumeOriginalName = file.originalname; //Save the original file name
        }

        //resume come later here:

        await user.save();

        user = {
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            profile: user.profile,
        };
        return res.status(200).json({
            message: "Profile updated successfully",
            user,
            success: true,
        });
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};