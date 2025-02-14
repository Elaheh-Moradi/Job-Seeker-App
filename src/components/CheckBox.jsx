import React, { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterActions } from "../store/filter-slice";
import { JOB_CITY, JOB_CONTRACT, JOB_TYPE } from "../constants/names";

const CheckBox = (props) => {
  // const [checkedItems, setCheckedItems] = useState({});
  const [checkedItemsCity,setCheckedItemsCity]=useState({})
  const [checkedItemsType,setCheckedItemsType]=useState({})
  const [checkedItemsContract,setCheckedItemsContract]=useState({})
  const cityId = useSelector((state) => state.city.cityID);
  const typeId = useSelector((state) => state.job.classId);
  const changeCityDropDown = useSelector(
    (state) => state.city.changeCityDropDown
  );
  const changeTypeDropDown = useSelector((state) => state.job.changeDropDown);
  const dispatch = useDispatch();

  const handleCheckboxChange = (id, type) => {

    if (type===JOB_CITY) {
       setCheckedItemsCity((prev) => {
      return {
        ...prev,
        [id]: !prev[id],
        type,
      };
    });
    }
    if (type===JOB_TYPE) {
      setCheckedItemsType((prev) => {
     return {
       ...prev,
       [id]: !prev[id],
       type,
     };
   });
   }

   if (type===JOB_CONTRACT) {
    setCheckedItemsContract((prev) => {
   return {
     ...prev,
     [id]: !prev[id],
     type,
   };
 });
 }
  };

  useEffect(() => {
    setCheckedItemsCity({});
    handleCheckboxChange(cityId, JOB_CITY);
  }, [cityId, changeCityDropDown]);

  useEffect(() => {
    setCheckedItemsType({});
    handleCheckboxChange(typeId, JOB_TYPE);
  }, [typeId, changeTypeDropDown]);
  return (
    <>
      {props.list.map(
        (item, index) =>
          item[props.idKey] !== 0 && (
            <div>
          { props.type===JOB_CITY&& <label key={index} className="flex items-center pb-2">
              <input
                type="checkbox"
                checked={
                  !!checkedItemsCity[item[props.idKey]]
                } 
                onChange={() =>
                  handleCheckboxChange(item[props.idKey], props.type)
                }
                className={`hidden peer`}
              />
              <div className="w-5 h-5 border-[1px] border-gray-300 rounded-sm bg-gray-200 flex items-center justify-center peer-checked:bg-gray-200 peer-checked:border-[#3bb7ed]">
                {checkedItemsCity[item[props.idKey]] &&
                  (
                    <span className="text-[#3bb7ed] text-lg">✔</span>
                  )}
              </div>
              <span className="text-[15px] text-[#444444] pr-2 font-light">
                {item[props.nameKey]}
              </span>
            </label>}
            {props.type===JOB_TYPE&&<label key={index} className="flex items-center pb-2">
              <input
                type="checkbox"
                checked={
                  !!checkedItemsType[item[props.idKey]]
                } 
                onChange={() =>
                  handleCheckboxChange(item[props.idKey], props.type)
                }
                className={`hidden peer`}
              />
              <div className="w-5 h-5 border-[1px] border-gray-300 rounded-sm bg-gray-200 flex items-center justify-center peer-checked:bg-gray-200 peer-checked:border-[#3bb7ed]">
                {checkedItemsType[item[props.idKey]] &&
                  (
                    <span className="text-[#3bb7ed] text-lg">✔</span>
                  )}
              </div>
              <span className="text-[15px] text-[#444444] pr-2 font-light">
                {item[props.nameKey]}
              </span>
            </label>}
            {props.type===JOB_CONTRACT&&<label key={index} className="flex items-center pb-2">
              <input
                type="checkbox"
                checked={
                  !!checkedItemsContract[item[props.idKey]]
                } 
                onChange={() =>
                  handleCheckboxChange(item[props.idKey], props.type)
                }
                className={`hidden peer`}
              />
              <div className="w-5 h-5 border-[1px] border-gray-300 rounded-sm bg-gray-200 flex items-center justify-center peer-checked:bg-gray-200 peer-checked:border-[#3bb7ed]">
                {checkedItemsContract[item[props.idKey]] &&
                  (
                    <span className="text-[#3bb7ed] text-lg">✔</span>
                  )}
              </div>
              <span className="text-[15px] text-[#444444] pr-2 font-light">
                {item[props.nameKey]}
              </span>
            </label>}
            </div>
          )
      )}
    </>
  );
};

export default CheckBox;
