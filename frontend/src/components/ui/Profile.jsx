import React from "react";
import Navbar from "../shared/Navbar";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./button";
import { Contact, Mail, Pen } from "lucide-react";

const Profile = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVAnXu7ZLHBJ7SGYk-2tvzs4VrXaWB5z2uNoL-OcPJtw&s=10" />
            </Avatar>
            <div>
              <h1 className="font-medium text-xl">Full Name</h1>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam, odio?
              </p>
            </div>
          </div>
          <Button className="text-right" variant="outline">
            <Pen />
          </Button>
          </div>
          <div>
            <div className="flex items-center gap-3 my-2">
              <Mail />
              <span>kaji@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 my-2">
              <Contact />
              <span>8080088088</span>
            </div>
          </div>
        
      </div>
    </div>
  );
};

export default Profile;
