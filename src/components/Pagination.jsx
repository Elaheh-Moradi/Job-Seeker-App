import React from "react";
import { usePagination, DOTS } from "../hooks/usePagination.js";

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  //convert the numbers to persian numbers
  const convertToPersianNumbers = (number) => {
    const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    return number
      .toString()
      .split("")
      .map((digit) => (/\d/.test(digit) ? persianDigits[digit] : digit))
      .join("");
  };

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);

    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adds smooth scrolling
    });
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);

    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adds smooth scrolling
    });
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <>
      <ul
        dir="ltr"
        className="flex justify-center items-center list-none w-[700px] h-[90px] my-5 mx-auto sm:hidden "
      >
        {/* Left navigation arrow */}

        <li
          onClick={onPrevious}
          className={`${
            currentPage === 1 ? "hidden" : ""
          } py-0 px-3 text-[#3ab1e4] text-center
             box-border flex items-center tracking-tight rounded-sm leading-normal
             font-[13px] min-w-10 h-10 border-[1px] border-[#e7e7e7] border-b-4 border-b-[#e7e7e7]
             hover:text-[#1988b8] hover:no-underline hover:bg-[#f5f5f5]`}
        >
          ←
        </li>
        {paginationRange.map((pageNumber) => {
          // If the pageItem is a DOT, render the DOTS unicode character
          if (pageNumber === DOTS) {
            return (
              <li
                className="py-0 px-3 text-[#3ab1e4] text-center
             box-border flex items-center tracking-tight rounded-sm leading-normal
             font-[13px] min-w-10 h-10 border-[1px] border-[#e7e7e7] border-b-4 border-b-[#e7e7e7]
             hover:text-[#1988b8] hover:no-underline hover:bg-[#f5f5f5]"
              >
                &#8230;
              </li>
            );
          }

          // Render our Page Pills
          return (
            <li
              className={`${
                pageNumber === currentPage
                  ? "text-[#fff] bg-[#3ab0e4] border-b-[1px] border-b-[#349cc9] relative top-[2px] hover:text-[#fff] hover:bg-[#3ab0e4] "
                  : ""
              } py-0 px-3 text-[#3ab1e4] text-center
            flex  box-border items-center tracking-tight rounded-none leading-normal
             font-[13px] min-w-10 h-10 border-[1px] border-[#e7e7e7] border-b-4 border-b-[#e7e7e7]
             hover:text-[#1988b8] hover:no-underline hover:bg-[#f5f5f5]`}
              onClick={() => onPageChange(pageNumber)}
            >
              {convertToPersianNumbers(pageNumber)}
            </li>
          );
        })}
        {/*  Right Navigation arrow */}
        <li
          onClick={onNext}
          className={`${
            currentPage === lastPage ? "hidden" : ""
          } py-0 px-3 text-[#3ab1e4] text-center
             box-border flex items-center tracking-tight rounded-sm leading-normal
             font-[13px] min-w-10 h-10 border-[1px] border-[#e7e7e7] border-b-4 border-b-[#e7e7e7]
             hover:text-[#1988b8] hover:no-underline hover:bg-[#f5f5f5]`}
        >
          →
        </li>
      </ul>

      {/* Mobile (sm) Mode */}
      <div className="hidden sm:flex justify-center items-center mt-4">
        {/* Next Button */}
        {currentPage < lastPage && (
          <button
            onClick={onNext}
            className="bg-white text-[#3ab1e4] rounded-sm px-3 py-2 ml-1 border-[1px] border-[#e7e7e7] border-b-4 border-b-[#e7e7e7]
             hover:text-[#1988b8] hover:no-underline hover:bg-[#f5f5f5]"
          >
            بعدی
          </button>
        )}

        {/* Current Page Number */}
        <div className="text-white bg-[#3ab0e4] rounded-sm px-4 py-2 relative top-[2px] border-[1px] border-[#e7e7e7] border-b-4 border-b-[#e7e7e7]
            ">
          {convertToPersianNumbers(currentPage)}
        </div>

        {/* Previous Button */}
        {currentPage > 1 && (
          <button
            onClick={onPrevious}
            className="bg-white text-[#3ab1e4] rounded-sm px-3 py-2 mr-1 border-[1px] border-[#e7e7e7] border-b-4 border-b-[#e7e7e7]
             hover:text-[#1988b8] hover:no-underline hover:bg-[#f5f5f5]"
          >
            قبلی
          </button>
        )}
      </div>
    </>
  );
};

export default Pagination;
