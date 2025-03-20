import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MobileNav } from "../components/MobileNav";
import { routes } from "./routes";
import { PersonalInfo } from "../components/PersonalInfo";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="bg-zinc-800 text-white h-screen">
        <div className="max-w-[120rem] w-[95%] sm:w-[85%] pt-5 mx-auto lg:flex gap-4 h-full">
          <MobileNav />
          <PersonalInfo />

          <Routes>
            {routes.map(({ path, Component, name, to }) => (
              <Route path={path} element={<Component />} key={to} />
            ))}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};
