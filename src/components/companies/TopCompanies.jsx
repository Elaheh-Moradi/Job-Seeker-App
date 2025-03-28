import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import TopCompaniesAcardion from "./TopCompaniesAcardion";

const TopCompanies = () => {
  const { data } = useFetch("http://localhost:3000/jobOffers");
  const [sortList, setSortList] = useState([]);

  const sortListsByAverage = () => {
    const topCompanies = data.filter((item) => item.top === true);
    const sortedLists = [...topCompanies].sort((a, b) => {
      const avgA = (a.popularity + a.diversity + a.checkResume) / 3;
      const avgB = (b.popularity + b.diversity + b.checkResume) / 3;
      return avgB - avgA;
    });
    setSortList(sortedLists);
  };
  useEffect(() => {
    sortListsByAverage();
  }, [data]);

  return (
    <div
      dir="rtl"
      className="border border-gray-300 shadow-md rounded-sm w-[60%] mx-auto my-[2%] sm:w-[90%]"
    >
      {sortList.map((item, index) => (
        <TopCompaniesAcardion
          index={index + 1}
          titleFa={item["organizationTitle-fa"]}
          titleEn={item["organizationTitle-en"]}
          icon={item["image-src"]}
          avg={((item.popularity + item.diversity + item.checkResume) / 3)
            .toFixed(1)
            .toString()
            .replace(".", "/")}
          popularity={item.popularity}
          diversity={item.diversity}
          checkResume={item.checkResume}
          image={item["company-image"]}
          number={item.employeeNumbers}
          defaultOpen={true}
        />
      ))}
    </div>
  );
};

export default TopCompanies;
