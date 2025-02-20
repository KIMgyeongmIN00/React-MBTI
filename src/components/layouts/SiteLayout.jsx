import { Outlet } from "react-router-dom";
import Header from "./layout-shells/Header";
import Navigate from "./layout-shells/Navigate";

export default function SiteLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 pt-[56px] pb-[56px] justify-center text-center">
        <Outlet />
      </div>
      <Navigate />
    </div>
  );
}
