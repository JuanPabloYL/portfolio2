import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MobileNav } from "../components/MobileNav";
import { routes } from "./routes";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="bg-zinc-800 text-white h-screen">
        <MobileNav />

        <Routes>
          {routes.map(({ path, Component, name, to }) => (
            <Route path={path} element={<Component />} key={to} />
          ))}
        </Routes>
      </div>
    </BrowserRouter>
  );
};
