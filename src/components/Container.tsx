import { JSX } from "react";
import { routes } from "../routes/routes";
import { NavLink } from "react-router-dom";

type ContainerType = {
  children: JSX.Element[];
};
export const Container = ({ children }: ContainerType) => {
  return (
    <div className="bg-zinc-700 rounded-lg px-7 py-6 overflow-hidden relative w-full min-h-screen">
      <nav className="hidden  absolute right-0 py-5 top-0 md:flex gap-5 px-10 bg-zinc-600 rounded-b-lg">
        {routes.map(({ to, name }) => (
          <NavLink
            className={({ isActive }) =>
              `text-gray-100 capitalize ${
                isActive ? "text-indigo-400" : ""
              } z-10`
            }
            key={to}
            to={to}
          >
            {name}
          </NavLink>
        ))}
      </nav>
      {children}
    </div>
  );
};
