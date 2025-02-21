import { useDispatch, useSelector } from "react-redux";
import useFetch from "../../hooks/useFetch.js";
import Pagination from "../Pagination.jsx";
import OfferCart from "./OfferCart.jsx";
import { useEffect, useMemo, useState } from "react";
// import Filter from "../Filter.jsx";
import FilterOld from "../FilterOld.jsx";
import Filter from "../Filter.jsx";
import TuneIcon from "@mui/icons-material/Tune";
import FilterList from "../filter/FilterList.jsx";
import { filterActions } from "../../store/filter-slice.jsx";
import { jobActions } from "../../store/job-slice.jsx";

export default function OfferList() {
  let PageSize = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showFilterList, setShowFilterList] = useState(false);
  const [smallSize, setSmallSize] = useState(false);
  const jobs = useSelector((state) => state.job.jobs);
  const tempjobs = useSelector((state) => state.job.tempJobs);
  const tempTypeId = useSelector((state) => state.job.tempTypeId);
  const dispatch = useDispatch();

  //pagination
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;

    return jobs.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, jobs]);

  //convert the numbers to persian numbers
  const convertToPersianNumbers = (number) => {
    const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    return number
      .toString()
      .split("")
      .map((digit) => (/\d/.test(digit) ? persianDigits[digit] : digit))
      .join("");
  };

  function handlePageChange(page) {
    setIsAnimating(true); // Start fade-out
    setTimeout(() => {
      setCurrentPage(page);
      setIsAnimating(false); // Start fade-in
    }, 1000);

    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adds smooth scrolling
    });
  }
  useEffect(() => {
    setIsAnimating(true); // Start fade-out
    setTimeout(() => {
      setIsAnimating(false); // Start fade-in
    }, 1000);
  }, [jobs]);

  //remove scroll when show modal
  useEffect(() => {
    if (showFilterList) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    // return () => {
    //   document.body.classList.remove("overflow-hidden");
    // };
  }, [showFilterList]);
  return (
    <>
      <div className={`mt-5  ${isAnimating ? "animate-pulse" : ""}`}>
        {isAnimating && (
          <div className="hidden fixed inset-0 bg-black bg-opacity-90 items-center justify-center z-50 transition-opacity duration-100 sm:flex ">
            <div className="w-12 h-12 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
          </div>
        )}
        <div className="flex justify-between sm:flex-col py-6 border-[1px] border-[#e7e7e7] border-r-4 border-r-[#e7e7e7] ">
          <div className="flex flex-col">
            <div className="sm:flex sm:justify-between">
              <span className="text-[#444] pr-3">
                {convertToPersianNumbers(jobs.length)} فرصت شغلی فعال یافت شد:{" "}
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
          {/* <div className="hidden sm:block ml-[2%] border border-gray-300">
            <TuneIcon
              style={{ color: "#555555" }}
              onClick={() => {
                setShowFilterList(true);
                dispatch(filterActions.setSmallMode(true));
              }}
            />
          </div> */}
        </div>
        {currentTableData.map((cart, index) => (
          <OfferCart
            index={index}
            id={cart.id}
            length={jobs.length}
            emergency={cart.emergency}
            imageSrc={cart["image-src"]}
            jobTitle={cart.jobTitle}
            duration={cart.duration}
            organizationTitleFa={cart["organizationTitle-fa"]}
            organizationTitleEn={cart["organizationTitle-en"]}
            orgState={cart.orgState}
            orgCity={cart.orgCity}
            contractType={cart.contractType}
            salary={cart.salary}
          />
        ))}
      </div>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={jobs.length}
        pageSize={PageSize}
        onPageChange={(page) => handlePageChange(page)}
      />

      {/* modal for small screen mode */}
      {showFilterList && (
        <div className="hidden fixed inset-0  bg-gray-300  sm:flex justify-center items-center z-50">
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
