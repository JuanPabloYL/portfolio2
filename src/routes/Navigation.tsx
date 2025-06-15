import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { MobileNav } from "../components/MobileNav";
import { routes } from "./routes";
import { PersonalInfo } from "../components/PersonalInfo";
import ThankYouPage from "../pages/ThankYouPage";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className=" inset-0 -z-10 h-full w-full items-center px-5 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] text-white pb-12 lg:pb-10 min-h-[100vh]">
        <div className="max-w-[120rem] w-[95%] sm:w-[85%] pt-5 lg:pt-12 mx-auto lg:flex gap-4 h-full">
          <MobileNav />
          <PersonalInfo />

          <Routes>
            {routes.map(({ path, Component, to }) => (
              <Route path={path} element={<Component />} key={to} />
            ))}
            <Route path="/*" element={<Navigate to={routes[0].to} />} />
            <Route path="/thanks" element={<ThankYouPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};
