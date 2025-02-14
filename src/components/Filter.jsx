import React, { memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterActions } from "../store/filter-slice";

const Filter = () => {
  const jobTitleFilter = useSelector((state) => state.filter.jobTiltleFilter);
  
  const dispatch=useDispatch()

  const handleHideJobTitleFilter = () => {
    dispatch(filterActions.setJobTitleFilter(""))
  };

  return (
    <>
      {jobTitleFilter && (
        <div
          className={`float-right w-fit py-[2px] px-3 mt-2 mb-1 mx-1 bg-[#3ab1e4]  text-[12px] text-[#fff]  rounded-sm`}
          onClick={handleHideJobTitleFilter}
        >
          <span className="pl-3 pr-0 text-[14px]"> &times; </span>
          <span>{jobTitleFilter}</span>
        </div>
      )}
    </>
  );
};

export default memo(Filter);
