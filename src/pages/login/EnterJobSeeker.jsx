import React, { useState } from "react";
import Input from "../../components/Input";
import Label from "../../components/Lable";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { authActions } from "../../store/auth-slice";

const EnterJobSeeker = ({ onLogin }) => {
  const [inputs, setInput] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const dispatch=useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/users", {
        email: inputs.email,
        password: inputs.password,
      });

      // Check if the token exists in the response
      if (response.status === 200) {
        const token = response.data.token;
        if (token) {
          localStorage.setItem("token", token);
          onLogin(token); // Call onLogin with token
          setError(""); // Clear any error
          dispatch(authActions.setEnter(true));
          navigate("/home"); // Redirect to home page
        }
      } else {
        setError("مشکلی در سرور ایجاد شده است.");
      }
    } catch (error) {
      setError("آدرس ایمیل یا رمز عبور اشتباه است.");
    }
  };

  function handleChangeInput(event, identifier) {
    setInput((prevInputs) => ({
      ...prevInputs,
      [identifier]: event.target.value,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && (
        <div dir="rtl" className="text-red-600 mb-4 text-right">
          {error}
        </div>
      )}
      <div className="flex flex-col items-start">
        <Label
          className="text-[16px] text-[#555555] font-light py-[3%]"
          title="آدرس ایمیل"
          htmlFor="email"
        />
        <Input
          id="email"
          type="email"
          placeholder="آدرس ایمیل خود را وارد کنید"
          onChange={(event) => {
            handleChangeInput(event, "email");
          }}
          value={inputs.email}
          className="placeholder:text-right w-full p-2 border border-gray-300 rounded-sm focus:outline-none 
          focus:shadow-[inset_0px_-2px_4px_-2px_rgba(0,0,0,0.5),inset_2px_0_4px_-2px_rgba(0,0,0,0.5),inset_-2px_0_4px_-2px_rgba(0,0,0,0.5)] "
        />
      </div>
      <div className="flex flex-col items-start">
        <Label
          className="text-[16px] text-[#555555] font-light py-[3%]"
          title="رمز عبور"
          htmlFor="password"
        />
        <Input
          id="password"
          type="password"
          placeholder="رمز عبور خود را وارد کنید"
          onChange={(event) => {
            handleChangeInput(event, "password");
          }}
          value={inputs.password}
          className="placeholder:text-right w-full p-2 border border-gray-300 rounded-sm focus:outline-none 
          focus:shadow-[inset_0px_-2px_4px_-2px_rgba(0,0,0,0.5),inset_2px_0_4px_-2px_rgba(0,0,0,0.5),inset_-2px_0_4px_-2px_rgba(0,0,0,0.5)]"
        />
      </div>

      <div className="mt-[10%]">
        <Button
          title="وارد شوید"
          className="w-full bg-[#1abc9c] text-[#FFFFFF] py-2 rounded-sm shadow-[inset_0px_-2px_4px_-2px_rgba(0,0,0,0.5)] hover:bg-[#1dd3af] hover:text-[#fff]"
          type="submit"
        />
      </div>
    </form>
  );
};

export default EnterJobSeeker;
