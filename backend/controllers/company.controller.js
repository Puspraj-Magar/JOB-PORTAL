import { Company } from "../models/company.model.js"
import getDataUri from "../utils/dataUri.js";
import cloudinary from "../utils/cloudinary.js";

export const registerCompany = async(req, res) => {
    try {
        const { companyName } = req.body;
        if (!companyName) {
            return res.status(400).json({
                message: " Company name is  required",
                success: false
            });
        };
        let company = await Company.findOne({ name: companyName });
        if (company) {
            return res.status(400).json({
                message: "Your can't register same company",
                success: false
            });
        };
        company = await Company.create({
            name: companyName,
            userId: req.id
        });

        return res.status(201).json({
            message: "Company register successfully",
            company,
            success: true
        });


    } catch (error) {
        console.log(error);

    }
}


export const getCompany = async(req, res) => {
    try {
        const userId = req.id; //logged in user ID
        const companies = await Company.find({ userId });
        if (!companies) {
            return res.status(404).json({
                message: "Companies not found",
                success: false
            })
        }
        return res.status(200).json({
            companies,
            success: true
        })
    } catch (error) {
        console.log(error);

    }
}

export const getCompanyById = async(req, res) => {
    try {
        const companyId = req.params.id;
        const company = await Company.findById(companyId);
        if (!company) {
            return res.status(404).json({
                message: "Company not found",
                success: false
            })
        }
        return res.status(200).json({
            company,
            success: true
        })

    } catch (error) {
        console.log(error);

    }
}

export const updateCompany = async(req, res) => {
    try {
        const { name, description, website, location } = req.body;

        // Check duplicate name
        const existingCompany = await Company.findOne({
            name,
            _id: { $ne: req.params.id }
        });

        if (existingCompany) {
            return res.status(400).json({
                success: false,
                message: "Company name already exists"
            });
        }

        const updateData = {
            name,
            description,
            website,
            location,
        };

        if (req.file) {
            const fileUri = getDataUri(req.file);
            const cloudResponse = await cloudinary.uploader.upload(fileUri.content);
            updateData.logo = cloudResponse.secure_url;
        }

        const company = await Company.findByIdAndUpdate(
            req.params.id,
            updateData, {
                returnDocument: "after",
                runValidators: true,
            }
        );

        if (!company) {
            return res.status(404).json({
                success: false,
                message: "Company not found",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Company updated successfully",
            company,
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};