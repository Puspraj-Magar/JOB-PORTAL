import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const Job = ({job}) => {
  const navigate = useNavigate();

  const daysAgoFunction = (mongobdTime) =>{
    const createdAt = new Date(mongobdTime);
    const currenTime = new Date();
    const timeDifference = currenTime - createdAt;
    return  Math.floor(timeDifference / (1000*24*60*60));
  }
  
  return (
    <div className="p-6 rounded-md shadow-xl bg-white border border-gray-100">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600">{daysAgoFunction(job?.createdAt) != 0 ? "Today" : `${daysAgoFunction(job?.createdAt)} days ago`}</p>
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
          <h1 className="font-medium text-lg">{ job?.company?.name } </h1>
          <p className="text-sm text-gray-400"> India</p>
        </div>
        </div>
        <div>
            <h1 className="text-lg font-bold my-2">{job?.title}</h1>
            <p className="text-sm text-gray-500">{job?.description}</p>
        </div>
        <div className="flex items-center gap-2 mt-4">
        <Badge className={'text-blue-700 font-bold'} variant="ghost" >{job?.position} positions</Badge>
        <Badge className={'text-[#F83002] font-bold'} variant="ghost" >{job?.jobType}</Badge>
        <Badge className={'text-[#7209b7] font-bold'} variant="ghost" >{job?.salary} LPA</Badge>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <Button onClick = {()=> navigate(`/description/${job?._id}`)} variant="outline">Details</Button>
        <Button className="bg-gray-600">Save for later</Button>
      </div>
      
    </div>
  );
};

export default Job;
