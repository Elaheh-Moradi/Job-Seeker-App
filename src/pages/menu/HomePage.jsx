import { useEffect, useState } from "react";
import SwiperCompanies from "../../components/swipers/swiperCompanies/SwiperCompanies";
import SwiperTopHomePage from "../../components/swipers/SwiperTop/SwiperTopHomePage";
import Welcome from "../../components/Welcome";
import useFetch from "../../hooks/useFetch";
import { useDispatch, useSelector } from "react-redux";
import jwtDecode from "jwt-decode";
import LastNews from "../../components/last-news/LastNews";
import EnterBox from "../../components/EnterBox";
import SearchBar from "../../components/search-bar/SearchBar";
import { filterActions } from "../../store/filter-slice";
import { jobActions } from "../../store/job-slice";
import { cityActions } from "../../store/city-slice";
import OfferList from "../../components/offer/OfferList";

export default function HomePage() {
  const { data } = useFetch("http://localhost:3000/jobOffers");
  const [welcome, setWelcome] = useState(false);
  const enter = useSelector((state) => state.auth.enter);
  const [userName, setUserName] = useState();
  const [token, setToken] = useState();
  const [flag, setFlag] = useState(true);
  const hastoken = useSelector((state) => state.auth.hastoken);
  const auth = localStorage.getItem("token");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterActions.setJobTitleFilter(""));
    dispatch(jobActions.setClearTypeId());
    dispatch(cityActions.setClearCityId());
    dispatch(jobActions.setClearContractId());
  }, []);

  useEffect(() => {
    setToken(auth);
  }, [auth]);

  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode(token);
      setUserName(decodedToken.username);
    }
  }, [token]);
  useEffect(() => {
    setWelcome((prev) => !prev);
  }, [enter]);

  useEffect(() => {
    const hasReloaded = sessionStorage.getItem("hasReloaded");

    if (hastoken === false && !hasReloaded) {
      sessionStorage.setItem("hasReloaded", "true");
      window.location.reload();
    }
  }, [hastoken]);

  return (
    <>
      <div className="overflow-x-hidden">
        <SearchBar flag={flag} setFlag={setFlag} />
        {welcome && enter && <Welcome title={`${userName} عزیز، خوش آمدید.`} />}
        <SwiperTopHomePage data={data} />
        {!token && <EnterBox />}
        {!token && <LastNews data={data} />}
        {token && (
          <div>
            <div dir="rtl" className="flex justify-between mx-[10%] mt-[7%] my-0 border-b border-b-[#eee] pb-[1%] sm:mt-[30%]">
              <span className="text-[#555555] text-[18px] font-bold">
                آخرین آگهی‌ها
              </span>
            </div>
            <div dir="rtl" className="w-[80%] mx-auto mt-[3%]">
              <OfferList class={true} jobs={data} />
            </div>
          </div>
        )}
        <SwiperCompanies data={data} />
      </div>
    </>
  );
}
