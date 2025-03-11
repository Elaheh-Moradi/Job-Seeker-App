import React, { useState } from "react";
import Input from "../../components/Input";
import Label from "../../components/Lable";
import Button from "../../components/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth-slice";

const RegisterJobSeeker = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [repeatPassword, setRepeatPassword] = useState();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleChangeInput(event, identifier) {
    setInputs((prev) => ({
      ...prev,
      [identifier]: event.target.value,
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (repeatPassword === inputs.password) {
      try {
        const response = await axios.post(
          "http://localhost:4000/register",
          inputs
        );
        if (response.status === 201) {
          localStorage.setItem("token", response.data.token);

          setSuccess("ثبت‌نام کاربر با موفقیت انجام شد.");
          setError("");
          dispatch(authActions.setEnter(true));
          navigate("/home");
        }
      } catch (err) {
        //   console.error("Registration error:", err.response || err);
        setError(err.response?.data?.error || "Registration failed");
      }
    } else {
      setError("رمزعبور با تکرار آن مغایر است.");
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="text-red-600">{error}</div>}
      {success && <div className="text-green-600">{success}</div>}
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
          onChange={(e) => handleChangeInput(e, "email")}
          value={inputs.email}
          className="placeholder:text-right w-full p-2 border border-gray-300 rounded-sm focus:outline-none 
              focus:shadow-[inset_0px_-2px_4px_-2px_rgba(0,0,0,0.5),inset_2px_0_4px_-2px_rgba(0,0,0,0.5),inset_-2px_0_4px_-2px_rgba(0,0,0,0.5)] "
        />
      </div>
      <div className="flex flex-col items-start">
        <Label
          className="text-[16px] text-[#555555] font-light py-[3%]"
          title="نام و نام‌خانوادگی"
          htmlFor="name"
        />
        <Input
          id="name"
          placeholder="مثلا: الهه مرادی"
          onChange={(e) => handleChangeInput(e, "name")}
          value={inputs.name}
          className="placeholder:text-right w-full p-2 border border-gray-300 rounded-sm focus:outline-none 
              focus:shadow-[inset_0px_-2px_4px_-2px_rgba(0,0,0,0.5),inset_2px_0_4px_-2px_rgba(0,0,0,0.5),inset_-2px_0_4px_-2px_rgba(0,0,0,0.5)]"
        />
      </div>

      <div className="flex flex-col items-start">
        <Label
          className="text-[16px] text-[#555555] font-light py-[3%]"
          title="انتخاب رمز عبور"
          htmlFor="password"
        />
        <Input
          id="password"
          type="password"
          placeholder="رمز عبور خود را وارد کنید"
          onChange={(e) => handleChangeInput(e, "password")}
          value={inputs.password}
          className="placeholder:text-right w-full p-2 border border-gray-300 rounded-sm focus:outline-none 
                    focus:shadow-[inset_0px_-2px_4px_-2px_rgba(0,0,0,0.5),inset_2px_0_4px_-2px_rgba(0,0,0,0.5),inset_-2px_0_4px_-2px_rgba(0,0,0,0.5)]"
        />
      </div>

      <div className="flex flex-col items-start">
        <Label
          className="text-[16px] text-[#555555] font-light py-[3%]"
          title="تکرار رمز عبور"
          htmlFor="repeatpassword"
        />
        <Input
          id="repeatpassword"
          type="password"
          placeholder="رمز عبور خود را تکرار کنید"
          onChange={(event) => {
            setRepeatPassword(event.target.value);
          }}
          value={repeatPassword}
          className="placeholder:text-right w-full p-2 border border-gray-300 rounded-sm focus:outline-none 
                    focus:shadow-[inset_0px_-2px_4px_-2px_rgba(0,0,0,0.5),inset_2px_0_4px_-2px_rgba(0,0,0,0.5),inset_-2px_0_4px_-2px_rgba(0,0,0,0.5)]"
        />
      </div>

      <div className="mt-[10%]">
        <Button
          title="ثبت‌نام"
          className="w-full bg-[#1abc9c] text-[#FFFFFF] py-2 rounded-sm shadow-[inset_0px_-2px_4px_-2px_rgba(0,0,0,0.5)] hover:bg-[#1dd3af] hover:text-[#fff]"
          type="submit"
        />
      </div>
    </form>
  );
};

export default RegisterJobSeeker;
