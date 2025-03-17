import { useDispatch, useSelector } from "react-redux";
import useFetch from "../../hooks/useFetch.js";
import Pagination from "../Pagination.jsx";
import OfferCart from "./OfferCart.jsx";
import { useEffect, useMemo, useState } from "react";


export default function OfferList(props) {
  let PageSize = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showFilterList, setShowFilterList] = useState(false);
  const [smallSize, setSmallSize] = useState(false);
  // const jobs = useSelector((state) => state.job.jobs);
  const tempjobs = useSelector((state) => state.job.tempJobs);
  const tempTypeId = useSelector((state) => state.job.tempTypeId);
  const dispatch = useDispatch();

  //pagination
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;

    return props.jobs.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, props.jobs]);

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
  }, [props.jobs]);

  //remove scroll when show modal
  useEffect(() => {
    if (showFilterList) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [showFilterList]);
  return (
    <>
      <div className={`  ${isAnimating ? "animate-pulse" : ""}`}>
        {isAnimating && (
          <div className="hidden fixed inset-0 bg-black bg-opacity-90 items-center justify-center z-50 transition-opacity duration-100 sm:flex ">
            <div className="w-12 h-12 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
          </div>
        )}
       
        {currentTableData.map((cart, index) => (
          <OfferCart
            index={index}
            id={cart.id}
            length={props.jobs.length}
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
            class={props.class}
          />
        ))}
      </div>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={props.jobs.length}
        pageSize={PageSize}
        onPageChange={(page) => handlePageChange(page)}
      />
    </>
  );
}
