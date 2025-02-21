import LocationOnIcon from "@mui/icons-material/LocationOn";
import useFetch from "../../hooks/useFetch";
import FilterAcardion from "./FilterAcardion";
import CheckBox from "../CheckBox";
import MenuIcon from "@mui/icons-material/Menu";
import ContractIcon from "../../assets/icons/contract.svg";
import { JOB_CITY, JOB_CONTRACT, JOB_TYPE } from "../../constants/names";

const FilterList = () => {
  const { data: cities } = useFetch("http://localhost:3000/stateOptions");
  const { data: types } = useFetch("http://localhost:3000/classOptions");
  const { data: contracts } = useFetch("http://localhost:3000/contractType");

  const citiesList = (
    <CheckBox list={cities} idKey="id" nameKey="name" type={JOB_CITY} />
  );
  const typesList = (
    <CheckBox list={types} idKey="id" nameKey="title" type={JOB_TYPE} />
  );
  const contractsList = (
    <CheckBox list={contracts} idKey="id" nameKey="title" type={JOB_CONTRACT} />
  );
  return (
    <>
      <div className="sm:h-full">
        <FilterAcardion title={JOB_TYPE} content={typesList} Icon={MenuIcon} />
        <FilterAcardion
          title={JOB_CITY}
          content={citiesList}
          Icon={LocationOnIcon}
        />
        <FilterAcardion
          title={JOB_CONTRACT}
          content={contractsList}
          Icon={() => <img src={ContractIcon} className="pl-2" />}
        />

      </div>
    </>
  );
};

export default FilterList;
