import { Pagination } from "@mui/material";
import OfferList from "../../components/offer/OfferList";
// import SearchBar from "../../components/search-bar/SearchBar";
import FilterList from "../../components/filter/FilterList";
import SearchBarOld from "../../components/search-bar/SearchBarOld";
import SearchBar from "../../components/search-bar/SearchBar";
import Filter from "../../components/Filter";
import TuneIcon from "@mui/icons-material/Tune";
import { filterActions } from "../../store/filter-slice.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { jobActions } from "../../store/job-slice.jsx";

export default function SearchJobPage() {
  const jobs = useSelector((state) => state.job.jobs);
  const [showFilterList, setShowFilterList] = useState(false);

  const dispatch = useDispatch();

  //convert the numbers to persian numbers
  const convertToPersianNumbers = (number) => {
    const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    return number
      .toString()
      .split("")
      .map((digit) => (/\d/.test(digit) ? persianDigits[digit] : digit))
      .join("");
  };
  return (
    <>
      <div className="flex flex-col">
        <SearchBar />

        <div className="flex justify-center space-x-5 mb-[5vh]">
          <div dir="rtl" className="rounded-sm w-3/5 h-full sm:w-[90%]">
{/* 
            <div className="flex justify-between sm:flex-col py-6 border-[1px] border-[#e7e7e7] border-r-4 border-r-[#e7e7e7] mt-[2.2%] ">
              <div className="flex flex-col">
                <div className="sm:flex sm:justify-between">
                  <span className="text-[#444] pr-3">
                    {convertToPersianNumbers(jobs.length)} فرصت شغلی فعال یافت
                    شد:{" "}
                  </span>
                  <div className="hidden sm:block ml-[2%] border border-gray-300">
                    <TuneIcon
                      style={{ color: "#555555" }}
                      onClick={() => {
                        setShowFilterList(true);
                        dispatch(filterActions.setSmallMode(true));
                      }}
                    />
                  </div>
                </div>
                <Filter />
              </div>
            </div> */}
            <OfferList/>
          </div>
          <div
            dir="rtl"
            className="mt-5 border-[1px] w-1/5 rounded-sm border-[#e7e7e7] sm:hidden"
          >
            <FilterList />
          </div>
        </div>
      </div>
      
    </>
  );
}
