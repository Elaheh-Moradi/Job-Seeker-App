import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MobileFooter from "./MobileFooter";

export default function Footer() {
  return (
    <>
      <footer
        dir="rtl"
        className="bg-[#444] text-white text-center py-4  bottom-0 w-full sm:hidden "
      >
        <div className="flex justify-center pr-28">
          {/* Section 1: Navigation Links */}
          <div className="flex flex-col items-start w-1/3">
            <p className="text-[#999] text-[16px] text-right mb-2 w-4/5 border-b border-gray-500 pb-2">
              لینک‌های مهم
            </p>
            <ul className=" flex flex-col items-start text-[#f0f0f0] text-[14px]">
              <li>
                <a href="#" className="hover:text-orange-500">
                  درباره ما
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  قوانین و مقررات
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  حریم خصوصی
                </a>
              </li>
            </ul>
          </div>
          {/* Section 2: Contact Information */}
          <div className="flex flex-col items-start w-1/3 ">
            <p className="text-[#999] text-[16px] text-right mb-2 w-4/5 border-b border-gray-500 pb-2">
              تماس با ما
            </p>
            <div className="flex flex-col items-start text-[#f0f0f0] text-[14px]">
              <p className="hover:text-orange-500">تلفن: ۰۲۱-۱۲۳۴۵۶۷۸</p>
              <p className="hover:text-orange-500">ایمیل: info@website.com</p>
              <p className="hover:text-orange-500">
                آدرس: تهران، خیابان آزادی، پلاک ۱۰
              </p>
            </div>
          </div>

          {/* Section 3: Social Media Icons */}
          <div className="flex flex-col items-start w-1/3">
            <p className="text-[#999] text-[16px] text-right mb-2 w-4/5 border-b border-gray-500 pb-2">
              ما را دنبال کنید
            </p>
            <div className="flex space-x-4 space-x-reverse items-start text-[#f0f0f0] ">
              <a href="#" aria-label="Telegram" className="hover:text-white">
                <TelegramIcon size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-white">
                <InstagramIcon size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-white">
                <LinkedInIcon size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div
          dir="rtl"
          className="mt-6 font-thin text-[14px] text-[#999] text-center border-t border-gray-700 pt-4"
        >
          <p>
            <span className="text-[12px]">
              &copy;{" "}
              {
                new Intl.DateTimeFormat("fa-IR", {
                  calendar: "persian",
                })
                  .formatToParts(new Date())
                  .find((part) => part.type === "year").value
              }{" "}
            </span>
            تمامی حقوق محفوظ است.
          </p>
        </div>
      </footer>
      <MobileFooter/>
    </>
  );
}
