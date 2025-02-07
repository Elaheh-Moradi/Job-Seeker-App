import React, { memo, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterActions } from "../store/filter-slice";
import { useSearchParams } from "react-router-dom";
import { cityActions } from "../store/city-slice";
import { jobActions } from "../store/job-slice";

const Filter = () => {
  const filterItems = useSelector((state) => state.filter.filterItems);
  const [filterItemsArray, setFilterItemsArray] = useState();
  const [hiddenItems, setHiddenItems] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams(); //to set filter values in url

  const dispatch = useDispatch();

  //convert filterItems to Array
  useEffect(() => {
    if (filterItems === null) {
      setFilterItemsArray(null);
    } else {
      //   setFilterItemsArray(Object.values(filterItems));
      setFilterItemsArray(Object.entries(filterItems));
      if (filterItemsArray !== null) {
        for (let index = 0; index < filterItemsArray.length; index++) {
          setHiddenItems(
            hiddenItems.filter((hidden) => hidden !== filterItemsArray[index])
          ); // Show item again
        }
      }
    }
  }, [filterItems]);

  const handleHideItem = (key, item) => {
    setFilterItemsArray(
      filterItemsArray.filter(([key, value]) => value !== item)
    );
    if (key === "title") {
        dispatch(filterActions.setChange())
        dispatch(filterActions.setSearchQuery(""))
    } else if (key === "city") {
        dispatch(cityActions.setCityId(null))
    } else if (key === "type") {
        dispatch(jobActions.setClassId(null))

    }
    //remove item from url
    const newParams = new URLSearchParams(searchParams);
    newParams.delete(key);
    setSearchParams(newParams);
  };

  return (
    <div>
      {filterItemsArray &&
        filterItemsArray.map(
          ([key, value], index) =>
            value &&
            !hiddenItems.includes(value) && (
              <div
                key={index}
                className={`bg-[#3ab1e4] float-right py-[2px] px-3 text-[12px] text-[#fff] mt-1 mb-3 mx-1 rounded-sm`}
                onClick={() => handleHideItem(key, value)}
              >
                {value && (
                  <span className="pl-3 pr-0 text-[14px]"> &times; </span>
                )}
                <span>{value}</span>
              </div>
            )
        )}
    </div>
  );
};

export default memo(Filter);
