import SwiperCompanies from "../../components/swipers/swiperCompanies/SwiperCompanies";
import SwiperTopHomePage from "../../components/swipers/SwiperTop/SwiperTopHomePage";

export default function HomePage() {
  return (
    <>
      <div>
        <SwiperTopHomePage />
        <SwiperCompanies/>
      </div>
    </>
  );
}
