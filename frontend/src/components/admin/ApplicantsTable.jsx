import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../ui/popover";

import { MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";

const shortListingStatus = ["Accepted", "Rejected"];

const ApplicantsTable = () => {
  const { applicants } = useSelector((store) => store.application);

  console.log("Applicants:", applicants);

  return (
    <div>
      <Table>
        <TableCaption>
          A list of recent applied users
        </TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead>FullName</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Resume</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {applicants?.map((item) => (
            <TableRow key={item._id}>

              <TableCell>
                {item?.applicant?.fullName}
              </TableCell>

              <TableCell>
                {item?.applicant?.email}
              </TableCell>

              <TableCell>
                {item?.applicant?.phoneNumber}
              </TableCell>

              <TableCell>
                {item?.applicant?.profile?.resume ? (
                  <a
                    href={item.applicant.profile.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {item?.applicant?.profile?.resumeOriginalName ||
                      "View Resume"}
                  </a>
                ) : (
                  "No Resume"
                )}
              </TableCell>

              <TableCell>
                {item?.createdAt?.split("T")[0]}
              </TableCell>

              <TableCell className="text-right">
                <Popover>
                  <PopoverTrigger>
                    <MoreHorizontal />
                  </PopoverTrigger>

                  <PopoverContent className="w-32">
                    {shortListingStatus.map((status) => (
                      <div
                        key={status}
                        className="cursor-pointer py-2"
                      >
                        {status}
                      </div>
                    ))}
                  </PopoverContent>
                </Popover>
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ApplicantsTable;