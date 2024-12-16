import { Pagination } from "@mui/material";
import OfferList from "../../components/offer/OfferList";
import SearchBar from "../../components/search-bar/SearchBar";

export default function SearchJobPage() {
  return (
    <>
    <div className="flex flex-col">
      <SearchBar/>
      <div className="flex justify-center space-x-5 mb-[5vh]">
        <div dir="rtl" className="rounded-sm w-3/5 h-full ">
          <OfferList />
        </div>
        <div
          dir="rtl"
          className="mt-5 border-[1px] w-1/5 rounded-sm border-[#e7e7e7]"
        ></div>
      </div>
      </div>
    </>
  );
}
