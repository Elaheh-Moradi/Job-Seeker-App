import SwiperCompanies from "../../components/swipers/swiperCompanies/SwiperCompanies";
import SwiperTopHomePage from "../../components/swipers/SwiperTop/SwiperTopHomePage";
import useFetch from "../../hooks/useFetch";

export default function HomePage() {
  const { data } = useFetch("http://localhost:3000/jobOffers");

  return (
    <>
      <div >
        <SwiperTopHomePage data={data}/>
        <SwiperCompanies data={data}/>
      </div>
    </>
  );
}
