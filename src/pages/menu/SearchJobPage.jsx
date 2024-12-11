import { Pagination } from "@mui/material";
import OfferList from "../../components/offer/OfferList";

export default function SearchJobPage() {
  return (
    <>
      <div className="flex justify-center space-x-5 mt-[5.5vh] mb-[5vh]">
        <div dir="rtl" className="rounded-sm w-3/5 h-full ">
          <OfferList />
        </div>
        <div
          dir="rtl"
          className="border-[1px] w-1/5 rounded-sm border-[#e7e7e7]"
        ></div>
      </div>
    </>
  );
}
