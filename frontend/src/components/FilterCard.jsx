import React from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";

const filterData = [
  {
    filterType: "Location",
    array: ["Delhi", "Mumbai", "Bangalore", "Hyderabad"],
  },
  {
    filterType: "Industry",
    array: [
      "Frontend Developer",
      "Backend Developer",
      "Graphic Design",
      "FullStack Developer",
    ],
  },
  {
    filterType: "Salary",
    array: ["0-40k", "40k-1lakhs", "50k-1lakhs", "5-10lakhs"],
  },
];

const FilterCard = () => {
  return (
    <div className="w-full bg-white rounded-md p-6">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="mt-3" />
      <RadioGroup>
        {filterData.map((data) => (
          <div key={data.filterType}>
            <h1 className="font-bold text-lg">{data.filterType}</h1>

            {data.array.map((item) => (
              <div key={item} className="flex items-center space-x-2 my-2">
                <RadioGroupItem value={item} id={item} />
                <Label htmlFor={item}>{item}</Label>
              </div>
            ))}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
