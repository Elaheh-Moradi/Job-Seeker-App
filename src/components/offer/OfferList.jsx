import { useSelector } from "react-redux";
import useFetch from "../../hooks/useFetch.js";
import Pagination from "../Pagination.jsx";
import OfferCart from "./OfferCart.jsx";
import { useEffect, useMemo, useState } from "react";

export default function OfferList() {
  let PageSize = 5;
  // const { data, error, loading } = useFetch("http://localhost:3000/jobOffers");
  const [currentPage, setCurrentPage] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const jobs = useSelector((state) => state.job.jobs);

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>;

  /**********************pagination**************************/
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;

    return jobs.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, jobs]);

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
