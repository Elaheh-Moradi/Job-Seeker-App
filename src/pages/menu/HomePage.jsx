import { useEffect, useState } from "react";
import SwiperCompanies from "../../components/swipers/swiperCompanies/SwiperCompanies";
import SwiperTopHomePage from "../../components/swipers/SwiperTop/SwiperTopHomePage";
import Welcome from "../../components/Welcome";
import useFetch from "../../hooks/useFetch";
import { useSelector } from "react-redux";
import jwtDecode from "jwt-decode";
import LastNews from "../../components/last-news/LastNews";
import EnterBox from "../../components/EnterBox";
import SearchBar from "../../components/search-bar/SearchBar";

export default function HomePage() {
  const { data } = useFetch("http://localhost:3000/jobOffers");
  const [welcome, setWelcome] = useState(false);
  const enter = useSelector((state) => state.auth.enter);
  const [userName, setUserName] = useState();
  const [token, setToken] = useState();

  const auth = localStorage.getItem("token");

  useEffect(() => {
    setToken(auth);
  }, [auth]);

  useEffect(() => {
    if (token ) {
      const decodedToken = jwtDecode(token);
      setUserName(decodedToken.username);
    }
  }, [token]);
  useEffect(() => {
    setWelcome((prev) => !prev);
  }, [enter]);

  return (
    <>
      <div className="overflow-x-hidden">
        <SearchBar/>
        {welcome && enter && <Welcome title={`${userName} عزیز، خوش آمدید.`} />}
        <SwiperTopHomePage data={data} />
        {!token&&<EnterBox/>}
        <LastNews data={data}/>
        <SwiperCompanies data={data} />
      </div>
    </>
  );
}
