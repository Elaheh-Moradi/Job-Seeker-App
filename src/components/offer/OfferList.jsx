import { useSelector } from "react-redux";
import useFetch from "../../hooks/useFetch.js";
import Pagination from "../Pagination.jsx";
import OfferCart from "./OfferCart.jsx";
import { useEffect, useMemo, useState } from "react";
// import Filter from "../Filter.jsx";
import FilterOld from "../FilterOld.jsx";
import Filter from "../Filter.jsx";

export default function OfferList() {
  let PageSize = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const jobs = useSelector((state) => state.job.jobs);

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

  return (
    <>
      <div className={`mt-5  ${isAnimating ? "animate-pulse" : ""}`}>
        <div className="flex justify-between py-6 border-[1px] border-[#e7e7e7] border-r-4 border-r-[#e7e7e7]">
          <div className="flex flex-col">
            <div>
              <span className="text-[#444] pr-3">
                {convertToPersianNumbers(jobs.length)} فرصت شغلی فعال یافت شد:{" "}
              </span>
            </div>
            {/* <FilterOld /> */}
            <Filter/>
          </div>
          <div>مرتب سازی</div>
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
    </>
  );
}
