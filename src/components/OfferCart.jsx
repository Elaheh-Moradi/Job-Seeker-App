import useFetch from "../hooks/useFetch";
import Button from "./Button.jsx";
//  import  { ReactComponent as MyIcon} from "../assets/icons/BuildingIcon.svg";

export default function OfferCart() {
  const { data, error, loading } = useFetch("http://localhost:3000/jobOffers");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {data.map((offerCart) => (
        <div className="flex justify-center">
          {/* job icon */}
          <div className="w-1/5 flex justify-center">
            <img src={offerCart["image-src"]} className="h-[64px] w-[64px]" />
          </div>
          {/* the midle part in offer cart */}
          <div dir="rtl" className="w-3/5 flex flex-col">
            <div className="font-medium text-[16px] text-red-600">
              {offerCart.jobTitle}
            </div>
            {/* organizatio title in farsi and english */}
            <div className="flex text-[#777] text-[12px] font-extralight ">
              <div className="flex items-center">
                {/* building Icon */}
                {/* <MyIcon /> */}
                {/* <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                  className="ml-1"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M21 20h2v2H1v-2h2V3a1 1 0 011-1h16a1 1 0 011 1v17zm-2 0V4H5v16h14zM8 11h3v2H8v-2zm0-4h3v2H8V7zm0 8h3v2H8v-2zm5 0h3v2h-3v-2zm0-4h3v2h-3v-2zm0-4h3v2h-3V7z" />
                </svg> */}
                {offerCart["organizationTitle-fa"]}
              </div>
              <span class="text-gray-500 mx-2">|</span>
              <div>{offerCart["organizationTitle-en"]}</div>
            </div>
            {/* location of organization */}
            <div className="flex text-[#777] text-[12px] font-extralight">
              <div>{offerCart.orgState}</div>
              <span class="text-gray-500 ml-2">،</span>
              <div>{offerCart.orgCity}</div>
            </div>
            {/* contract type and salary */}
            <div className="flex text-[#777] text-[12px] font-extralight">
              <div>{offerCart.contractType}</div>
              <span class="text-gray-500 ml-2">({offerCart.salary})</span>
            </div>
          </div>
          {/* Buttons */}
          <div className="w-1/5 flex flex-col justify-center items-center">
            <Button className="bg-gray-500" title="رزومه" />
            <Button className="bg-gray-500" title="نشان" />
          </div>
        </div>
      ))}
    </div>
  );
}
