import React, { memo, useState } from "react";
import { useDispatch } from "react-redux";
import { cityActions } from "../store/city-slice";
import { filterActions } from "../store/filter-slice";
import { JOB_CITY, JOB_CONTRACT, JOB_TYPE } from "../constants/names";
import { jobActions } from "../store/job-slice";

const CheckboxLable = (props) => {
  const dispatch = useDispatch();

  return (
    <>
      <label className="flex items-center pb-2">
        <input
          type="checkbox"
          checked={!!props.checkedItems}
          onChange={(e) => {
            if (props.type===JOB_CITY) {
              props.onChangeHandler();
              if (!e.target.checked) {
                dispatch(cityActions.setMinusCityId(props.id)); // Dispatch action to remove city
              } 
            }
            if (props.type===JOB_TYPE) {
              props.onChangeHandler();
              if (!e.target.checked) {
                dispatch(jobActions.setMinusTypeId(props.id)); // Dispatch action to remove city
              } 
            }
            if (props.type===JOB_CONTRACT) {
              props.onChangeHandler();
              if (!e.target.checked) {
                dispatch(jobActions.setMinusContractId(props.id)); // Dispatch action to remove city
              } 
            }
            
          }}
          className={`hidden peer`}
        />
        <div className="w-5 h-5 border-[1px] border-gray-300 rounded-sm bg-gray-200 flex items-center justify-center peer-checked:bg-gray-200 peer-checked:border-[#3bb7ed]">
          {props.checkedItems && <span className="text-[#3bb7ed] text-lg">✔</span>}
        </div>
        <span className="text-[15px] text-[#444444] pr-2 font-light">
          {props.name}
        </span>
      </label>
    </>
  );
};

export default memo(CheckboxLable);
