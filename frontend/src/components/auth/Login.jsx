import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: ""
  });
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.file?.[0] });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        header:{
          "Content-Type" : "application/json"
        },
        withCredentials:true,
      });
      if(res.data.success){
        navigate("/")
        toast.success(res.data.message); 
      }
    } catch (error) {
      console.log(error);
      
    }
  };
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onChange={submitHandler}
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Sign Up</h1>

          <div className="my-2">
            <Label className="mb-3"> Email </Label>
            <Input
              type="email"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              className="cursor-pointer"
              placeholder="Enter your email-id"
            />
          </div>
          <div className="my-2">
            <Label className="mb-3"> Password </Label>
            <Input
              type="password"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
              className="cursor-pointer"
              placeholder="Enter your password"
            />
          </div>

          <Button type="submit" className="w-full my-5">
            Login
          </Button>
          <span>
            Already have an account?
            <a class="text-blue-600" href="/signup">
              Signup
            </a>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
