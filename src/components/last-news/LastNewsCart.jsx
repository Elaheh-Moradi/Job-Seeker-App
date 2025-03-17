import React from "react";
import DefaultImage from "../../assets/images/organization-icon/Default.webp";
import BuildingIcon from "../../assets/icons/Building.svg";
import ContractIcon from "../../assets/icons/contract.svg";
import PlaceIcon from "@mui/icons-material/Place";

const LastNewsCart = ({
  jobTitle,
  icon,
  name,
  orgState,
  orgCity,
  contractType,
  salary,
  duration,
  emergency
}) => {
  return (
    <>
      <div dir="rtl" className="border border-[#eee] rounded-sm h-full">
        <div className="flex flex-col">
          <div className="flex">
            {icon ? (
              <img src={icon} className="h-[62px] w-[62px] mx-[2%] my-[7%]" />
            ) : (
              <img
                src={DefaultImage}
                className="h-[62px] w-[62px]  mx-[2%] my-[7%]"
              />
            )}
            <div className="flex flex-col  mr-[3%] my-[5%] h-[100px]">
              <span className={`${emergency?"text-[#c93d31]":"text-[#3ab1e4]"} font-medium ml-[5%] pb-[5%]`}>
                {jobTitle}
              </span>
              <div className="leading-7">
                <div className="flex items-center">
                  {/* building Icon */}
                  <img src={BuildingIcon} className="ml-1" />
                  <span className="text-[#777777] text-[12px]">{name}</span>
                </div>
                <div className="flex items-center text-[#777] text-[13px] font-light sm:text-[#333333] sm:flex-wrap">
                  <PlaceIcon
                    sx={{
                      fontSize: "12px",
                      color: "rgb(204, 204, 204)",
                      marginLeft: "3px",
                    }}
                  />
                  <div>{orgState}</div>
                  <span class="text-gray-500 sm:text-[#333333] ml-2">،</span>
                  <div>{orgCity}</div>
                </div>
                <div className="flex text-[#777] text-[13px] font-light sm:text-[#333333] sm:flex-wrap">
                  <img src={ContractIcon} className="ml-1" />
                  <div>{contractType}</div>
                  <span class="text-gray-500 sm:text-[#333333] ml-2">
                    ({salary})
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div  className="flex justify-end items-end h-[40px] m-[5%]">{emergency ? (
    <div className="flex items-end bg-[#c93d31] text-[#fff] rounded-sm px-[2px]">فوری</div>
  ) : (
    <div className="flex items-end text-[#777777] text-[14px]">{duration}</div>
  )}</div>
        </div>
      </div>
    </>
  );
};

export default LastNewsCart;
