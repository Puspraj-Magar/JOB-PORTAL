import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";

const Job = () => {
  return (
    <div className="p-6 rounded-md shadow-xl bg-white border border-gray-100">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600">2 days ago</p>
        <Button variant="outline" className={"rounded-full"} size="icon">
          <Bookmark />
        </Button>
      </div>

      <div className="flex items-center gap-2 my-2">
        <Button className={"p-6"} variant="outline" size="icon">
          <Avatar>
            <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVAnXu7ZLHBJ7SGYk-2tvzs4VrXaWB5z2uNoL-OcPJtw&s=10" />
          </Avatar>
        </Button>
        <div>
          <h1 className="font-medium text-lg">Company Name</h1>
          <p className="text-sm text-gray-400"> India</p>
        </div>
        </div>
        <div>
            <h1 className="text-lg font-bold my-2">Title</h1>
            <p className="text-sm text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam est molestias maxime deserunt impedit aperiam, provident id error soluta repudiandae.</p>
        </div>
        <div>
        <Badge className={'text-blue-700 font-bold'} variant="ghost" >Full Time</Badge>
        <Badge className={'text-[#F83002] font-bold'} variant="ghost" >12 positions</Badge>
        <Badge className={'text-[#7209b7] font-bold'} variant="ghost" >25 LPA</Badge>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <Button variant="outline">Details</Button>
        <Button className="bg-gray-600">Save for later</Button>
      </div>
      
    </div>
  );
};

export default Job;
