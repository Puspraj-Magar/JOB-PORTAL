import React, { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";

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
  const [ selectedValue, setSelectedValue ] = useState(' ');
  const dispatch = useDispatch();

  const changeHandler = (value) => {
    setSelectedValue(value);
  }
  useEffect(()=> {
    dispatch(setSearchedQuery(selectedValue));
    
  },[selectedValue]);
  return (
    <div className="w-full bg-white rounded-md p-6">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="mt-3" />
      <RadioGroup value={selectedValue} onValueChange={changeHandler}>
        {filterData.map((data,index) => (
          <div key={data.filterType}>
            <h1  className="font-bold text-lg">{data.filterType}</h1>

            {data.array.map((item, idx) => {
              const itemId = `id${index}-${idx}`
              return (
              <div key={item} className="flex items-center space-x-2 my-2">
                <RadioGroupItem value={item} id={itemId} />
                <Label htmlFor={itemId}>{item}</Label>
              </div>
              )
})}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
