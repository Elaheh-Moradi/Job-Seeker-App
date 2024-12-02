import useFetch from "../../hooks/useFetch.js";
import OfferCart from "./OfferCart.jsx";

export default function OfferList() {
  const { data, error, loading } = useFetch("http://localhost:3000/jobOffers");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className="mt-5">
        {data.map((cart, index) => (
          <OfferCart
          index={index}
            id={cart.id}
            length={data.length}
            emergency={cart.emergency}
            imageSrc={cart["image-src"]}
            jobTitle={cart.jobTitle}
            duration={cart.duration}
            organizationTitleFa={cart["organizationTitle-fa"]}
            organizationTitleEn={cart["organizationTitle-en"]}
            orgState={cart.orgState}
            orgCity={cart.orgCity}
            contractType={cart.contractType}
            salary={cart.salary}
          />
        ))}
      </div>
    </>
  );
}
