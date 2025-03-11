import jwtDecode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";

const Welcome = (props) => {
  const [token, setToken] = useState();
  const [userName, setUserName] = useState();

  const auth = localStorage.getItem("token");

  const dispatch = useDispatch();

  useEffect(() => {
    setToken(auth);
  }, [auth]);

  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode(token);
      setUserName(decodedToken.username);
    }
  }, [token]);

  return (
    <div
      dir="rtl"
      className="flex justify-between items-center fixed top-[10.5%]  bg-[#e6fffa] text-[#00b38f] border border-[#00cca3] h-[5%] ml-[10%] w-[80%] z-50 sm:z-10"
    >
      <span dir="rtl" className="pr-[5%] text-[14px]">
        {props.title}
      </span>
      <span
        className="pl-[2%]"
        onClick={() => dispatch(authActions.setEnter(false))}
      >
        ✖
      </span>
    </div>
  );
};

export default Welcome;
