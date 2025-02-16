import React, { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterActions } from "../store/filter-slice";
import useFetch from "../hooks/useFetch";
import { cityActions } from "../store/city-slice";
import { jobActions } from "../store/job-slice";

const Filter = () => {
  const { data: cityOptions } = useFetch("http://localhost:3000/stateOptions");
  const { data: typeOptions } = useFetch("http://localhost:3000/classOptions");
  const { data: contractOptions } = useFetch(
    "http://localhost:3000/contractType"
  );

  const jobTitleFilter = useSelector((state) => state.filter.jobTiltleFilter);
  const cityId = useSelector((state) => state.city.cityID);
  const typeId = useSelector((state) => state.job.classId);
  const contractId = useSelector((state) => state.job.contractId);
  const [cityTag, setCityTag] = useState();
  const [typeTag, setTypeTag] = useState();
  const [contractTag, setContractTag] = useState();

  const dispatch = useDispatch();

  const handleHideJobTitleFilter = () => {
    dispatch(filterActions.setJobTitleFilter(""));
  };

  const handleRemoveCityFilter = (id) => {
    dispatch(cityActions.setMinusCityId(id));
  };
  const handleRemoveTypeFilter = (id) => {
    dispatch(jobActions.setMinusTypeId(id));
  };
  const handleRemoveContractFilter = (id) => {
    dispatch(jobActions.setMinusContractId(id));
  };

  useEffect(() => {
    setCityTag(() => {
      return cityOptions.filter((item) => cityId.includes(item.id));
    });
  }, [cityId]);

  useEffect(() => {
    setTypeTag(() => {
      return typeOptions.filter((item) => typeId.includes(item.id));
    });
  }, [typeId]);

  useEffect(() => {
    setContractTag(() => {
      return contractOptions.filter((item) => contractId.includes(item.id));
    });
  }, [contractId]);

  return (
    <>
      <div className="flex flex-row">
        {jobTitleFilter && (
          <div
            className={`float-right w-fit py-[2px] px-3 mt-2 mb-1 mx-1 bg-[#3ab1e4]  text-[12px] text-[#fff]  rounded-sm`}
            onClick={handleHideJobTitleFilter}
          >
            <span className="pl-3 pr-0 text-[14px]"> &times; </span>
            <span>{jobTitleFilter}</span>
          </div>
        )}
        {cityTag &&
          cityTag.map((option, index) => (
            <div
              key={index}
              className={`float-right w-fit py-[2px] px-3 mt-2 mb-1 mx-1 bg-[#3ab1e4]  text-[12px] text-[#fff]  rounded-sm`}
              onClick={() => handleRemoveCityFilter(option.id)}
            >
              <span className="pl-3 pr-0 text-[14px]"> &times; </span>
              <span>{option.name}</span>
            </div>
          ))}

        {typeTag &&
          typeTag.map((option, index) => (
            <div
              key={index}
              className={`float-right w-fit py-[2px] px-3 mt-2 mb-1 mx-1 bg-[#3ab1e4]  text-[12px] text-[#fff]  rounded-sm`}
              onClick={() => handleRemoveTypeFilter(option.id)}
            >
              <span className="pl-3 pr-0 text-[14px]"> &times; </span>
              <span>{option.title}</span>
            </div>
          ))}

        {contractTag &&
          contractTag.map((option, index) => (
            <div
              key={index}
              className={`float-right w-fit py-[2px] px-3 mt-2 mb-1 mx-1 bg-[#3ab1e4]  text-[12px] text-[#fff]  rounded-sm`}
              onClick={() => handleRemoveContractFilter(option.id)}
            >
              <span className="pl-3 pr-0 text-[14px]"> &times; </span>
              <span>{option.title}</span>
            </div>
          ))}
      </div>
    </>
  );
};

export default memo(Filter);
