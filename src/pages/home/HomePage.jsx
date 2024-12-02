import OfferCart from "../../components/OfferCart";

export default function HomePage() {
  return (
    <>
      <div className="flex justify-center space-x-5 mt-[5.5vh] mb-[5vh]">
        <div dir="rtl" className="border-[1px] rounded-sm w-3/5 border-[#e7e7e7] h-full "><OfferCart/></div>
        <div dir="rtl"className="border-[1px] w-1/5 rounded-sm border-[#e7e7e7]"></div>
       </div>
    </>
  );
}
