import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { MobileNav } from "../components/MobileNav";
import { routes } from "./routes";
import { PersonalInfo } from "../components/PersonalInfo";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="bg-zinc-800 text-white pb-12 lg:pb-10">
        <div className="max-w-[120rem] w-[95%] sm:w-[85%] pt-5 lg:pt-12 mx-auto lg:flex gap-4 h-full">
          <MobileNav />
          <PersonalInfo />

          <Routes>
            {routes.map(({ path, Component, to }) => (
              <Route path={path} element={<Component />} key={to} />
            ))}
            <Route path="/*" element={<Navigate to={routes[0].to} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};
