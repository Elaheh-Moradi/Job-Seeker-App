import BuildingIcon from "../../assets/icons/Building.svg";
import ContractIcon from "../../assets/icons/contract.svg";
import PlaceIcon from "@mui/icons-material/Place";
import Button from "../Button.jsx";
import { useState } from "react";

export default function OfferCart(props) {
  const [isStarred, setIsStarred] = useState({});
  const [isHovered, setIsHovered] = useState(false);

  const handleToggleFavorite = (id) => {
    setIsStarred((prevState) => ({
      ...prevState,
      [id]: !prevState[id], // Toggle the starred state for the specific item
    }));
  };

  return (
    <>
      <div className="relative">
        {/* Line above the first item */}
        {props.index === 0 && (
          <div className="absolute top-0 left-0 right-0 h-px bg-[#e7e7e7]"></div>
        )}
        {/* each item of list */}
        <div
          className={` flex justify-start py-6 border-r-4 ${
            props.emergency ? "border-r-red-600" : "border-[#e7e7e7]"
          }
          ${props.index !== props.length - 1 && "pb-0 mb-0"}
          `}
        >
          {/* job icon */}
          <div className="flex justify-center" style={{ width: "15%" }}>
            <img
              src={props.imageSrc}
              className="h-[64px] w-[64px] bg-[#f5f5f5]"
            />
          </div>
          {/* the midle part in offer cart */}
          <div dir="rtl" className="w-3/5 flex flex-col">
            {/* job title */}
            <div
              className={`font-medium text-[18px]  ${
                props.emergency ? "text-[#c93d31]" : "text-[#3ab1e4]"
              }  mb-3`}
            >
              {props.jobTitle}{" "}
              {props.emergency ? (
                <span class="inline-block px-1 py-0 bg-[#c93d31] text-[11px] text-[#fff] text-sm font-normal rounded-[3px]">
                  استخدام فوری
                </span>
              ) : (
                <span className="text-[#999] text-[12px] font-light inline">{`(${props.duration})`}</span>
              )}
            </div>
            {/* organizatio title in farsi and english */}
            <div className="flex flex-col leading-7">
              <div className="flex text-[#777] text-[13px] font-thin ">
                <div className="flex items-center">
                  {/* building Icon */}
                  <img src={BuildingIcon} className="ml-1" />
                  {props.organizationTitleFa}
                </div>
                <span class="text-gray-500 mx-2">|</span>
                <div>{props.organizationTitleEn}</div>
              </div>
              {/* location of organization */}
              <div className="flex items-center text-[#777] text-[13px] font-thin">
                <PlaceIcon
                  sx={{
                    fontSize: "12px",
                    color: "rgb(204, 204, 204)",
                    marginLeft: "3px",
                  }}
                />
                <div>{props.orgState}</div>
                <span class="text-gray-500 ml-2">،</span>
                <div>{props.orgCity}</div>
              </div>
              {/* contract type and salary */}
              <div className="flex text-[#777] text-[13px] font-thin">
                <img src={ContractIcon} className="ml-1" />
                <div>{props.contractType}</div>
                <span class="text-gray-500 ml-2">({props.salary})</span>
              </div>
            </div>
          </div>
          {/* Buttons */}
          <div className="w-1/5 flex flex-col justify-center items-center">
            <Button
              className="mb-[10px] bg-[#1abc9c] text-[#fff] hover:bg-[#1dd3af] h-[50px] w-[120px] flex justify-center items-center text-[16px] font-bold border-none rounded-[4px]"
              title="ارسال رزومه"
            />
            <button
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => handleToggleFavorite(props.id)}
              className={`flex items-center justify-center w-[120px] bg-white border  ${
                isStarred[props.id] ? "border-[#b87700]" : "border-[#e5e7eb]"
              } rounded text-[14px] leading-[28px]  text-[rgba(135,135,135,0.95)] font-normal transition`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={isStarred[props.id] ? "gold" : "none"}
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="currentColor"
                className={`w-4 h-4 ml-2 ${
                  isStarred[props.id] ? "text-yellow-500" : "text-gray-500"
                } transition`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                />
              </svg>
              {isStarred[props.id] ? (
                <span>نشان شده</span>
              ) : (
                <span>نشان کردن</span>
              )}
            </button>
          </div>
          {/* Line between items */}
          {props.index !== props.length - 1 && (
            <div className="absolute bottom-0 left-0 right-0 h-px bg-[#e7e7e7]"></div>
          )}
        </div>
      </div>
    </>
  );
}
