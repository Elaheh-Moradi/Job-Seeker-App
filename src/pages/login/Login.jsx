import { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Label from "../../components/Lable";
import axios from "axios";

export default function Login({ onLogin }) {
  const [inputs, setInput] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  //////////////////test///////////////////////
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  //////////////////test///////////////////////

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/users", {
        email: inputs.email,
        password: inputs.password,
      });
      if (!response.ok) {
        // Extract error message from response or set a default
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed. Please try again.");
      }

      const { token } = response.data;
      localStorage.setItem("authToken", token); // Save token to localStorage
      onLogin(token);
    } catch (err) {
      setError("آدرس ایمیل یا رمزعبور اشتباه است."); // Set error message for display
    }
  };

  function handleChangeInput(event, identifier) {
    setInput((prevInputs) => ({
      ...prevInputs,
      [identifier]: event.target.value,
    }));
    console.log(event);
  }
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      {/* cart */}
      <form
        onSubmit={handleSubmit}
        className="w-96 bg-white p-6 rounded-lg shadow-lg space-y-3"
      >
        <h2 className="text-xl font-semibold text-gray-800 text-center mb-4">
          فرم ورود
        </h2>
        {error && (
          <div dir="rtl" className="text-red-600 mb-4 text-right">
            {error}
          </div>
        )}
        <div className="flex space-x-0 text-gray-800">
          <span className="ml-auto">*</span>
          <Label className="ml-aut" title="آدرس ایمیل" htmlFor="email" />
        </div>

        <Input
          id="email"
          type="email"
          placeholder="آدرس ایمیل خود را وارد کنید"
          onChange={(event) => {
            handleChangeInput(event, "email");
          }}
          value={inputs.email}
          className="placeholder:text-right w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:shadow-[0_2px_5px_rgba(0,0,0,0.3)]"
        />
        <div className="flex space-x-0 text-gray-800">
          <span className="ml-auto">*</span>
          <Label className="ml-auto" title="رمز عبور" htmlFor="password" />
        </div>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? "text" : "password"} //show password just if visible button is clicked
            placeholder="رمز عبور خود را وارد کنید"
            onChange={(event) => {
              handleChangeInput(event, "password");
            }}
            value={inputs.password}
            className="placeholder:text-right w-full p-2 placeholder:pr-10 border border-gray-300 rounded-lg focus:outline-none focus:shadow-[0_2px_5px_rgba(0,0,0,0.3)]"
          />
          <Button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700 focus:outline-none"
            title={
              showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-3.93 0-7.26-2.292-9-5.68m1.258-3.29A9.976 9.976 0 0112 5c3.93 0 7.26 2.292 9 5.68m-1.258 3.29A9.976 9.976 0 0112 19c-3.93 0-7.26-2.292-9-5.68m5-2.89L15 15m0-5l-5 5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3l18 18M9.53 9.53a4.5 4.5 0 016.36 6.36M10.5 4.21c2.07-.58 4.43-.58 6.5 0 3.39 1 5.9 3.62 6.99 6.79a10.05 10.05 0 01-2.41 3.66m-3.17 1.82a10.05 10.05 0 01-7.87 0c-3.39-1-5.9-3.62-6.99-6.79A10.05 10.05 0 014.62 7.86"
                  />
                </svg>
              )
            }
          />
        </div>
        <Button
          title="ورود"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          type="submit"
        />
      </form>
    </div>
  );
}
