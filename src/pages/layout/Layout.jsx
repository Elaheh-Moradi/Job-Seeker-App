import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
    <div class="min-h-screen flex flex-col justify-between">
      <Header />
      <main className="mt-[10.5vh]">
        <Outlet />
      </main>
      <Footer />
      </div>
    </>
  );
}
