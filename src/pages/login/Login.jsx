import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

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
          localStorage.setItem("authToken", token); // Save token to localStorage
          onLogin(token); // Call onLogin with token
          setError(""); // Clear any error
          navigate("/home"); // Redirect to home page
        } 
      } else {
        setError("مشکلی در سرور ایجاد شده است.");
      }
    } catch (error) {
     
      setError("آدرس ایمیل یا رمز عبور اشتباه است.")
    }
  };

  function handleChangeInput(event, identifier) {
    setInput((prevInputs) => ({
      ...prevInputs,
      [identifier]: event.target.value,
    }));
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
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 28 28"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.7469 15.4149C17.9855 14.8742 18.1188 14.2724 18.1188 14.0016C18.1188 11.6544 16.2952 9.7513 14.046 9.7513C11.7969 9.7513 9.97332 11.6544 9.97332 14.0016C9.97332 16.3487 12.0097 17.8886 14.046 17.8886C15.3486 17.8886 16.508 17.2515 17.2517 16.2595C17.4466 16.0001 17.6137 15.7168 17.7469 15.4149ZM14.046 15.7635C14.5551 15.7635 15.0205 15.5684 15.3784 15.2457C15.81 14.8566 16 14.2807 16 14.0016C16 12.828 15.1716 11.8764 14.046 11.8764C12.9205 11.8764 12 12.8264 12 14C12 14.8104 12.9205 15.7635 14.046 15.7635Z"
                    fill="#000000"
                    fillRule="evenodd"
                  />
                  <path
                    clip-rule="evenodd"
                    d="M1.09212 14.2724C1.07621 14.2527 1.10803 14.2931 1.09212 14.2724C0.96764 14.1021 0.970773 13.8996 1.09268 13.7273C1.10161 13.7147 1.11071 13.7016 1.11993 13.6882C4.781 8.34319 9.32105 5.5 14.0142 5.5C18.7025 5.5 23.2385 8.33554 26.8956 13.6698C26.965 13.771 27 13.875 27 13.9995C27 14.1301 26.9593 14.2399 26.8863 14.3461C23.2302 19.6702 18.6982 22.5 14.0142 22.5C9.30912 22.5 4.75717 19.6433 1.09212 14.2724ZM3.93909 13.3525C3.6381 13.7267 3.6381 14.2722 3.93908 14.6465C7.07417 18.5443 10.6042 20.3749 14.0142 20.3749C17.4243 20.3749 20.9543 18.5443 24.0894 14.6465C24.3904 14.2722 24.3904 13.7267 24.0894 13.3525C20.9543 9.45475 17.4243 7.62513 14.0142 7.62513C10.6042 7.62513 7.07417 9.45475 3.93909 13.3525Z"
                    fill="#000000"
                    fillRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 28 28"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    clip-rule="evenodd"
                    d="M22.6928 1.55018C22.3102 1.32626 21.8209 1.45915 21.6 1.84698L19.1533 6.14375C17.4864 5.36351 15.7609 4.96457 14.0142 4.96457C9.32104 4.96457 4.781 7.84644 1.11993 13.2641L1.10541 13.2854L1.09271 13.3038C0.970762 13.4784 0.967649 13.6837 1.0921 13.8563C3.79364 17.8691 6.97705 20.4972 10.3484 21.6018L8.39935 25.0222C8.1784 25.4101 8.30951 25.906 8.69214 26.1299L9.03857 26.3326C9.4212 26.5565 9.91046 26.4237 10.1314 26.0358L23.332 2.86058C23.553 2.47275 23.4219 1.97684 23.0392 1.75291L22.6928 1.55018ZM18.092 8.00705C16.7353 7.40974 15.3654 7.1186 14.0142 7.1186C10.6042 7.1186 7.07416 8.97311 3.93908 12.9239C3.63812 13.3032 3.63812 13.8561 3.93908 14.2354C6.28912 17.197 8.86102 18.9811 11.438 19.689L12.7855 17.3232C11.2462 16.8322 9.97333 15.4627 9.97333 13.5818C9.97333 11.2026 11.7969 9.27368 14.046 9.27368C15.0842 9.27368 16.0317 9.68468 16.7511 10.3612L18.092 8.00705ZM15.639 12.3137C15.2926 11.7767 14.7231 11.4277 14.046 11.4277C12.9205 11.4277 12 12.3906 12 13.5802C12 14.3664 12.8432 15.2851 13.9024 15.3624L15.639 12.3137Z"
                    fill="#000000"
                    fillRule="evenodd"
                  />
                  <path
                    d="M14.6873 22.1761C19.1311 21.9148 23.4056 19.0687 26.8864 13.931C26.9593 13.8234 27 13.7121 27 13.5797C27 13.4535 26.965 13.3481 26.8956 13.2455C25.5579 11.2677 24.1025 9.62885 22.5652 8.34557L21.506 10.2052C22.3887 10.9653 23.2531 11.87 24.0894 12.9239C24.3904 13.3032 24.3904 13.8561 24.0894 14.2354C21.5676 17.4135 18.7903 19.2357 16.0254 19.827L14.6873 22.1761Z"
                    fill="#000000"
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
