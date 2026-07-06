import React from "react";
import Navbar from "../shared/Navbar";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "./badge";
import { Label } from "./label";
import AppliedJobTable from "../AppliedJobTable";

const skills = ["Java", "Python", "JavaScript", "React.js", "Node.js"];
const Profile = () => {

  const isResume = true;
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
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
        <div className="my-5">
          <h1>Skills</h1>
          <div className="flex items-center gap-1">
            {skills.length != 0 ? (
              skills.map((items, index) => <Badge key={index}>{items}</Badge>)
            ) : (
              <span>NA</span>
            )}
          </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className={'text-md font-bold'}>Resume</Label>
          {
            isResume ? <a target="blank" href="https://www.youtube.com/@KshitijRana-rb6rj" className="text-blue-500 w-full hover:underline cursor-pointer"> Kaji Magar </a> : <span>NA</span>
          }
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl">
        <h1 className="font-bold text-lg my-5">Applied Job</h1>
        <AppliedJobTable />
      </div>
    </div>
  );
};

export default Profile;
