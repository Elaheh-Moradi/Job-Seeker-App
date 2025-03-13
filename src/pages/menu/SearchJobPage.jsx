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
  const tempjobs = useSelector((state) => state.job.tempJobs);
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
            </div>
            <OfferList jobs={jobs}/>
          </div>
          <div
            dir="rtl"
            className="mt-5 border-[1px] w-1/5 rounded-sm border-[#e7e7e7] sm:hidden"
          >
            <FilterList />
          </div>
        </div>
      </div>
       {/* modal for small screen mode */}
       {showFilterList && (
        <div dir="rtl" className="hidden fixed inset-0  bg-gray-300  sm:flex justify-center items-center z-50">
          <div
            className="fixed h-[6%] z-10 top-0 right-0 left-0 bg-[#FFFFFF] text-[#555555] border-b border-b-gray-200 shadow-md"
          >
            <div className="flex justify-between px-[3%] py-[3%]">
              <div>
                <TuneIcon style={{ color: "#aaa" }} />
                جستجوی پیشرفته
              </div>
              <button
                onClick={() => {
                  setShowFilterList(false);
                  dispatch(filterActions.setSmallMode(false));
                  dispatch(filterActions.setShowFilters(false));
                }}
                className=" text-[#A5A5A5] text-xl"
              >
                ✖
              </button>
            </div>
          </div>
          <div className="bg-white w-[95%] h-[90%] p-5 rounded-lg shadow-lg relative">
            {/* FilterList Component */}
            <FilterList />
          </div>
          <div 
              className="flex justify-center bottom-0 fixed right-0 left-0 bg-[#F9F9F9] border-t border-t-gray-200 h-[8%]  shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_-2px_4px_-1px_rgba(0,0,0,0.06)]"
          
          >
            <button
              onClick={() => {
                dispatch(filterActions.setShowFilters(true));
                dispatch(jobActions.setJobs(tempjobs));
                setShowFilterList(false);
                dispatch(filterActions.setSmallMode(false));
              }}
              
              className="bg-[#1ABC9C] my-[2%] text-[#FFFFFF] px-[30%]  rounded-sm shadow-[inset_0_-3px_0_0_#12876f]"
            >
              نمایش نتایج
            </button>
          </div>
        </div>
      )}
    </>
  );
}
