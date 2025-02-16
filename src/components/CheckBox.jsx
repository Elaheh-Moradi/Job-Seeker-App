import React, { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterActions } from "../store/filter-slice";
import { JOB_CITY, JOB_CONTRACT, JOB_TYPE } from "../constants/names";
import CheckboxLable from "./CheckboxLable";
import { cityActions } from "../store/city-slice";
import { jobActions } from "../store/job-slice";

const CheckBox = (props) => {
  const [checkedItemsCity, setCheckedItemsCity] = useState({});
  const [checkedItemsType, setCheckedItemsType] = useState({});
  const [checkedItemsContract, setCheckedItemsContract] = useState({});
  const cityflag = useSelector((state) => state.filter.cityflag);
  const cityId = useSelector((state) => state.city.cityID);
  const typeId = useSelector((state) => state.job.classId);
  const contractId = useSelector((state) => state.job.contractId);
  const changeCityDropDown = useSelector(
    (state) => state.city.changeCityDropDown
  );
  const changeTypeDropDown = useSelector((state) => state.job.changeDropDown);

  const dispatch = useDispatch();

  useEffect(() => {
    setCheckedItemsCity({});
  }, [changeCityDropDown]);

  useEffect(() => {
    setCheckedItemsType({});
  }, [changeTypeDropDown]);

  return (
    <>
      {props.list.map(
        (item, index) =>
          item[props.idKey] !== 0 && (
            <div key={index}>
              {props.type === JOB_CITY && (
                <CheckboxLable
                  checkedItems={cityId.includes(item[props.idKey])}
                  id={item[props.idKey]}
                  name={item[props.nameKey]}
                  onChangeHandler={() => {
                    dispatch(cityActions.setCityId(item[props.idKey]));
                  }}
                  type={JOB_CITY}
                />
              )}

              {props.type === JOB_TYPE && (
                <CheckboxLable
                  checkedItems={typeId.includes(item[props.idKey])}
                  name={item[props.nameKey]}
                  id={item[props.idKey]}
                  onChangeHandler={() =>
                    dispatch(jobActions.setClassId(item[props.idKey]))
                  }
                  type={JOB_TYPE}
                />
              )}

              {props.type === JOB_CONTRACT && (
                <CheckboxLable
                  checkedItems={contractId.includes(item[props.idKey])}
                  name={item[props.nameKey]}
                  id={item[props.idKey]}
                  onChangeHandler={() =>
                    dispatch(jobActions.setContractId(item[props.idKey]))
                  }
                  type={JOB_CONTRACT}
                />
              )}
            </div>
          )
      )}
    </>
  );
};

export default memo(CheckBox);
