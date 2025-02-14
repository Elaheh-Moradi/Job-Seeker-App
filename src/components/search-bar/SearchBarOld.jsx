import GradientImage from "../../assets/images/gradient.svg";
import Button from "../Button";
import Input from "../Input";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import SearchCityDropdown from "../search-dropdown/SearchCityDropdown";
import SearchClassDropdown from "../search-dropdown/SearchClassDropdown";
import React, { useState, useEffect, useMemo } from "react";
import useFetch from "../../hooks/useFetch";
import { useDispatch, useSelector } from "react-redux";
import { jobActions } from "../../store/job-slice";
import { useSearchParams } from "react-router-dom";
import { filterActions } from "../../store/filter-slice";
import { cityActions } from "../../store/city-slice";

function debounce(func, delay) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
}

export default function SearchBarOld() {
  const [query, setQuery] = useState("");
  const { data } = useFetch("http://localhost:3000/jobOffers");
  const classId = useSelector((state) => state.job.classId);
  const cityId = useSelector((state) => state.city.cityID);
  const className = useSelector((state) => state.job.className);
  const cityName = useSelector((state) => state.city.cityName);
  const cityOption = useSelector((state) => state.city.option);
  const typeOption = useSelector((state) => state.job.typeOption);
  const filterQuery = useSelector((state) => state.filter.searchQuery);
  const changeQuery = useSelector((state) => state.filter.changeQuery);
  const [searchParams, setSearchParams] = useSearchParams(); //to set filter values in url

  const dispatch = useDispatch();

  const normalizeText = (str) => {
    return str
      .toLowerCase()
      .trim()
      .replace(/ي/g, "ی")
      .replace(/ك/g, "ک")
      .replace(/[\u064B-\u065F]/g, "")
      .replace(/[^a-zA-Z0-9\u0600-\u06FF\s]/g, "")
      .replace(/\s+/g, ""); // Convert to lowercase and remove special characters
  };

  const updateFilters = (params) => {
    const newParams = new URLSearchParams(searchParams);
    // Loop through each key-value pair and update the URL
    Object.entries(params).forEach(([key, value]) => {
      if (value) newParams.set(key, value);
      else newParams.delete(key);
    });

    setSearchParams(newParams);
  };

  const handleFilterAllFilds = (searchQuery ) => {
    let filteredResults = null;

    if (searchQuery === "") {
      filteredResults = data;
    } else {
      const queryTokens = searchQuery.split(" "); // Split query into tokens (words)

      filteredResults = data.filter((item) => {
        const normalizedItem = normalizeText(item.jobTitle); // Normalize dataset item

        // Check if all tokens in query exist in the normalized dataset item
        return queryTokens.every((token) => normalizedItem.includes(token));
      });
    }

    if (cityId !== null && classId !== null) {
      if (cityId === 0) {
        return filteredResults.filter((item) => {
          return item.classId === classId;
        });
      } else if (classId === 0) {
        return filteredResults.filter((item) => {
          return item.stateId === cityId;
        });
      } else {
        return filteredResults.filter((item) => {
          return item.stateId === cityId && item.classId === classId;
        });
      }
    } else if (cityId === null && classId !== null) {
      if (classId === 0) {
        return filteredResults;
      } else {
        return filteredResults.filter((item) => {
          return item.classId === classId;
        });
      }
    } else if (classId === null && cityId !== null) {
      if (cityId === 0) {
        return filteredResults;
      } else {
        return filteredResults.filter((item) => {
          return item.stateId === cityId;
        });
      }
    } else if (classId === null && cityId === null) {
      return filteredResults;
    }
    
  };

  const handleSearch = (searchQuery) => {
    const finalFilterResult = handleFilterAllFilds(searchQuery);
    dispatch(jobActions.setJobs(finalFilterResult));
    updateFilters({
      title: searchQuery,
      city: cityName,
      type: className,
    });
  };
useEffect(()=>{
  debouncedSearch(filterQuery);
},[changeQuery,cityId,classId])

  useEffect(() => {
    dispatch(jobActions.setJobs(data));
  }, [data]);

  const debouncedSearch = debounce(handleSearch, 300);

  const handleButtonClick = () => {
    dispatch(cityActions.setCityId(cityOption))
    dispatch(jobActions.setClassId(typeOption))
    dispatch(filterActions.setSearchQuery(query));
    dispatch(
      filterActions.setFilterItems({
        title: query,
        city: cityName,
        type: className,
      })
    );
    debouncedSearch(query);
  };

  return (
    <>
      <div
        dir="rtl"
        style={{
          backgroundImage: `url(${GradientImage})`,
        }}
        className={`flex space-x-2 space-x-reverse rounded-sm mt-[3vh] mx-auto px-5 py-6 bg-repeat-y w-[81%] h-[95px] `}
      >
        {/* job title search */}
        <div className="flex justify-center relative">
          <Input
            placeholder="عنوان شغلی، مهارت یا ..."
            className="w-80 h-[45px] py-2 pr-10 text-[#9d9d9d] rounded-[3px] border-[1px] border-[#e5e5e5] focus:text-[#9d9d9d] focus:outline-none focus:shadow-[inset_0_-1px_0_1px_#d0d0d0]"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <SearchRoundedIcon
            style={{
              color: "#9d9d9d",
              fontSize: "2rem",
              position: "absolute",
              right: 7,
              top: 7,
            }}
          />
        </div>
        {/* job city search */}
        <div className="flex justify-center relative">
          <SearchCityDropdown />
        </div>
        {/* job class search */}
        <div className="flex justify-center relative">
          <SearchClassDropdown />
        </div>
        <Button
          onClick={handleButtonClick}
          className="bg-[#ffcd70] text-black text-opacity-95 shadow-[inset_0_-3px_0_0_#ffb833] px-14 text-[18px] rounded-sm"
          title="جستجو کن"
        />
      </div>
    </>
  );
}
