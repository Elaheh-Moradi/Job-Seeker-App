import Button from "../../components/Button";
import Input from "../../components/Input";
import Label from "../../components/Lable";

export default function () {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      {/* کارت */}
      <div className="w-96 bg-white p-6 rounded-lg shadow-lg space-y-4">
        <h2 className="text-xl font-semibold text-gray-800 text-center mb-4">
          فرم ورود
        </h2>
        <div className="flex space-x-0 text-gray-800">
          <span className="ml-auto">*</span>
          <Label className="ml-aut" title="آدرس ایمیل" />
        </div>

        <Input
          type="text"
          placeholder="آدرس ایمیل خود را وارد کنید"
          className="placeholder:text-right w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:shadow-[0_2px_5px_rgba(0,0,0,0.3)]"
        />
        <div className="flex space-x-0 text-gray-800">
          <span className="ml-auto">*</span>
          <Label className="ml-auto" title="رمز عبور" />
        </div>
        <Input
          type="password"
          placeholder="رمز عبور خود را وراد کنید"
          className="placeholder:text-right w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:shadow-[0_2px_5px_rgba(0,0,0,0.3)]"
        />
        <Button
          title="ورود"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        />
      </div>
    </div>
  );
}
