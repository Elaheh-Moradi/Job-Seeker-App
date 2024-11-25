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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/users", {
        email: inputs.email,
        password: inputs.password
      });
      const { token } = response.data;
      localStorage.setItem("authToken", token); // Save token to localStorage
      onLogin(token);
    } catch (err) {
      setError("Invalid username or password");
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
        <Input
          id="password"
          type="password"
          placeholder="رمز عبور خود را وراد کنید"
          onChange={(event) => {
            handleChangeInput(event, "password");
          }}
          value={inputs.password}
          className="placeholder:text-right w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:shadow-[0_2px_5px_rgba(0,0,0,0.3)]"
        />
        <Button
          title="ورود"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          type="submit"
        />
      </form>
    </div>
  );
}
