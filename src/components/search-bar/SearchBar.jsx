import GradientImage from "../../assets/images/gradient.svg";
import Button from "../Button";
import Input from "../Input";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import SearchCityDropdown from "../search-dropdown/SearchCityDropdown";
import SearchClassDropdown from "../search-dropdown/SearchClassDropdown";

export default function SearchBar() {

  return (
    <>
      <div
        dir="rtl"
        style={{
          backgroundImage: `url(${GradientImage})`,
        }}
        className={`flex space-x-2 space-x-reverse rounded-sm mt-[3vh] mx-auto px-5 py-6 bg-repeat-y w-[81%] h-[95px] `}
      >
        {/* job title search */}
        <div className="flex justify-center relative">
          <Input
            placeholder="عنوان شغلی، مهارت یا ..."
            className="w-80 h-[45px] py-2 pr-10 rounded-[3px] border-[1px] border-[#e5e5e5] focus:outline-none focus:shadow-[inset_0_-1px_0_1px_#d0d0d0]"
          />
          <SearchRoundedIcon
            style={{
              color: "#9d9d9d",
              fontSize: "2rem",
              position: "absolute",
              right: 7,
              top: 7,
            }}
          />
        </div>
        {/* job city search */}
        <div className="flex justify-center relative">
          <SearchCityDropdown />
        </div>
        {/* job class search */}
        <div className="flex justify-center relative">
         <SearchClassDropdown/>
        </div>
        <Button className="bg-[#ffcd70] text-black text-opacity-95 shadow-[inset_0_-3px_0_0_#ffb833] px-14 text-[18px] rounded-sm" title="جستجو کن" />
      </div>
    </>
  );
}
