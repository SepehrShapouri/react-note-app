import React from "react";
import Select from "react-select";
import { useSort } from "../context/SortContext";
const options = [
  { value: "newest", label: "Sort By Newest" },
  { value: "oldest", label: "Sort By Oldest" },
  { value: "completed", label: "Sort by Completed" },
];
const SortDropDown = () => {
  const {sort,setSort} = useSort()
  return (
    <Select
      onChange={(e) => setSort(e.value)}
      defaultValue={sort}
      options={options}
    />
  );
};

export default SortDropDown;
