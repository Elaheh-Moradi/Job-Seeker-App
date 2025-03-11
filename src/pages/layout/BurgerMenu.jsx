import React, { useEffect, useRef, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import HomeIcon from "@mui/icons-material/Home";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import DiamondRoundedIcon from "@mui/icons-material/DiamondRounded";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth-slice";
import jwtDecode from "jwt-decode";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [userName, setUserName] = useState();
  const [token, setToken] = useState();
  const dropdownRef = useRef(null);
  const menuRef = useRef(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userDashboard = [
    `${userName}`,
    "درخواست های من",
    "ایمیل های اطلاع رسانی من",
    "فرصت های شغلی نشان شده",
    "فرصت های شغلی پیشنهادی",
    "رزومه ساز",
    "مشاهده رزومه",
    "تنظیمات حساب کاربری من",
    "خروج",
  ];

  const auth = localStorage.getItem("token");

  useEffect(() => {
    setToken(auth);
  }, [auth]);

  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode(token);
      setUserName(decodedToken.username);
    }
  }, [token]);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleToggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <>
      <div
        dir="rtl"
        className="hidden sm:flex justify-between items-center top-0 bg-[#444] h-[10.5vh] fixed w-full z-50 px-2 "
      >
        <div className="relative flex justify-center items-center">
          {!isOpen ? (
            <MenuIcon
              className="bg-[#5b5b5b] rounded-sm"
              style={{ color: "#fff", fontSize: "30px" }}
              onClick={handleToggleMenu}
            />
          ) : (
            <CloseRoundedIcon
              onClick={handleToggleMenu}
              sx={{ height: "30px", width: "30px" }}
              className="text-[#fff] bg-[#5b5b5b] text-[30px] rounded-sm "
            />
          )}
          {isOpen && (
            <nav
              ref={menuRef}
              className="fixed left-0 right-0 top-[10.5vh] text-[13px]  font-bold w-full overflow-hidden bg-[#555] text-[#fff]"
            >
              <ul className="flex flex-col" onClick={handleToggleMenu}>
                <Link to="/home">
                  <li className=" block border-b-[1px] border-b-gray-500 hover:bg-[#505050]">
                    <div class="flex items-center pt-3 pb-3 pl-3.5 pr-3.5 text-[14px] font-medium leading-relaxed ">
                      <HomeIcon style={{ fontSize: "1.5rem" }} />
                      <span className="pr-2">خانه</span>
                    </div>
                  </li>
                </Link>
                <li className=" block hover:bg-[#505050]">
                  <Link
                    to="/search-job"
                    class="flex items-center pt-3 pb-3 pl-3.5 pr-3.5 border-b-[1px] border-b-gray-500 hover:bg-[#505050] text-[#fff] "
                  >
                    <SearchRoundedIcon
                      style={{ color: "#fff", fontSize: "1.5rem" }}
                    />
                    <span className="pr-2">جستجوی مشاغل</span>
                  </Link>
                </li>
                <li className="block hover:bg-[#505050]">
                  <div class="flex items-center pt-3 pb-3 pl-3.5 pr-3.5 border-b-[1px] border-b-gray-500 text-[#fff] ">
                    <AutoAwesomeRoundedIcon
                      style={{ color: "#fff", fontSize: "1.5rem" }}
                    />
                    <span className="pr-2">رزومه ساز</span>
                  </div>
                </li>
                <li className=" relative hover:bg-[#505050]">
                  <div class="flex items-center pt-3 pb-3 pl-3.5 pr-3.5 text-[#fff]">
                    <DiamondRoundedIcon
                      style={{ color: "#fff", fontSize: "1.5rem" }}
                    />
                    <span className="pr-2">50 شرکت برتر</span>
                  </div>
                </li>
              </ul>
            </nav>
          )}

          <SearchRoundedIcon
            className="text-[#888] mr-3"
            style={{ fontSize: "35px" }}
            onClick={() => navigate("/search-job")}
          />
        </div>
        <div class="flex items-center italic text-[#fff] text-[28px] font-bold leading-relaxed">
          jobyab
        </div>
        <div className="flex justify-between items-center">
          <div className="relative flex items-center justify-center ml-3">
            {/* Bell Icon */}
            <NotificationsNoneRoundedIcon
              style={{ fontSize: "35px" }}
              className="text-[#888]"
            />

            {/* Badge */}
            <div className="absolute top-0 left-0 bg-red-500 text-white text-[11px] rounded-[4px] w-4 h-4 flex items-center justify-center translate-x-[-4px] -translate-y-[3px]">
              <p className="text-center">3</p>
            </div>
          </div>
          <div
            // data-dropdown-toggle="dropdown"
            // ref={dropdownRef}
            onClick={toggleDropdown}
          >
            <PersonRoundedIcon
              className="text-[#888] relative"
              style={{ fontSize: "35px" }}
            />
          </div>
          {isDropdownOpen &&
            (token ? (
              <div className="z-10 absolute top-16 left-1 bg-[#363636] rounded-lg shadow sm:z-1000">
                {/* Tringle above dropdown menu */}
                <div className="absolute border-b-[#333] top-[-8px] left-4 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[8px] border-l-transparent border-r-transparent"></div>

                <ul className="py-2 text-sm text-gray-700">
                  {userDashboard.map((item, index) => (
                    <li
                      key={index}
                      className={` text-[#f5f5f5] pt-2.5 pr-3.5 pb-2.5 pl-3.5 hover:bg-[#282828] whitespace-nowrap bg-[#363636] ${index===0?"text-[#888888]":""}`}
                      onClick={() => {
                        console.log(`Clicked item ${index}: ${item}`); // Debugging log
                        if (userDashboard.length - 1 === index) {
                          dispatch(authActions.logout());
                          toggleDropdown();
                        } else {
                          return;
                        }
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="z-10 absolute top-16 left-1 bg-[#363636] rounded-lg shadow sm:z-1000 sm:w-[40%] sm:rounded-sm">
                <div className="absolute border-b-[#333] top-[-8px] left-4 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[8px] border-l-transparent border-r-transparent"></div>
                <ul className="py-2 text-sm text-gray-700 ">
                  <li
                    className=" text-[#f5f5f5] pt-2.5 pr-3.5 pb-2.5 pl-3.5 hover:bg-[#282828] whitespace-nowrap bg-[#363636]"
                    onClick={() => navigate("/login/user")}
                  >
                    ورود کارجو
                  </li>
                  <li
                    className=" text-[#f5f5f5] pt-2.5 pr-3.5 pb-2.5 pl-3.5 hover:bg-[#282828] whitespace-nowrap bg-[#363636] "
                    onClick={() => navigate("/join/user")}
                  >
                    ثبت‌نام کارجو
                  </li>
                </ul>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
