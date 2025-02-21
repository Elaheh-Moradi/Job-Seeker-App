import { useEffect, useState } from "react";
import Input from "../Input";
import useFetch from "../../hooks/useFetch";
import MenuIcon from "@mui/icons-material/Menu";
import { jobActions } from "../../store/job-slice";
import { useDispatch } from "react-redux";
import { filterActions } from "../../store/filter-slice";

export default function SearchClassDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("همه دسته‌بندی‌ها");
  const { data } = useFetch("http://localhost:3000/classOptions");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(data);

  const dispatch = useDispatch();

  const ArrowDown = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      color="#9d9d9d"
    >
      <path d="M7 10l5 5 5-5z" />
    </svg>
  );

  const ArrowUp = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 24 24"
      color="#9d9d9d"
    >
      <path d="M7 14l5-5 5 5z" />
    </svg>
  );

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setQuery("");
  };

  const handleOptionClick = (option) => {
    if (option !== null) {
      dispatch(jobActions.setTypeOption(+option));
      //dispatch(filterActions.setShowFilters(true))
    }
    const filteredId = data.filter((item) => item.id === +option);
    setSelectedOption(filteredId[0].title);
    
     //dispatch(jobActions.setClassId(+option));
    
    dispatch(jobActions.setClassName(filteredId[0].title));
    setIsOpen(false);
  };

  useEffect(() => {
    const filteredResults = data.filter((item) => {
      return item.title.toLowerCase().includes(query.toLowerCase());
    });
    setResults(filteredResults);
  }, [query, data]);

  return (
    <>
      <div className="relative w-80 sm:w-full">
        {/* Dropdown Trigger */}
        <div
          className={`relative w-full py-2 pr-10 pl-2 border border-gray-300 rounded-[3px] cursor-pointer bg-white 
        flex items-center justify-between bg-no-repeat bg-[right_0.7rem_center] bg-[length:1rem_1rem] h-[45px] `}
          onClick={toggleDropdown}
        >
          <MenuIcon
            style={{
              position: "absolute",
              right: 10,
              color: "#9d9d9d",
              fontSize: "1.5rem",
            }}
          />
          <span className="text-[#9d9d9d]">{selectedOption}</span>
          {isOpen ? <ArrowUp /> : <ArrowDown />}
        </div>

        {/* Dropdown Options */}
        {isOpen && (
          <ul className="absolute max-h-[170px] overflow-scroll overflow-x-hidden  top-12 left-0 w-full bg-white border border-gray-300 rounded-md shadow-md z-10">
            <li>
              <Input
                autoFocus={true}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-[90%] mr-4 mt-3 mb-3 focus:outline-none focus:border-[#3ab1e4] focus:border-[1px] p-2 border-[#3ab1e4] border-[1px] text-[12px] text-gray-500 "
                placeholder="جستجو..."
              />
            </li>
            {results.map((option, index) => (
              <>
                <li
                  key={index}
                  className={`pt-1 pb-1 pr-5 ${
                    index === 1 ? "selected" : ""
                  } hover:bg-gray-100 cursor-pointer text-[#9d9d9d]`}
                  onClick={() => handleOptionClick(`${option.id}`)}
                >
                  {option.title}
                </li>
                {index < data.length - 1 && (
                  <span className="flex ml-2 border-b-[1px] border-gray-300"></span>
                )}
              </>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
