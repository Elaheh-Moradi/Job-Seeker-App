
import GradientImage from "../../assets/images/gradient.svg";

export default function SearchBar() {
  return (
    <>
      <div
       style={{
        backgroundImage: `url(${GradientImage})`,
      }}
        className={`rounded-sm mt-[3vh] mx-auto p-5 bg-repeat-y w-[81%] h-[95px]`}
      >
      </div>
    </>
  );
}
