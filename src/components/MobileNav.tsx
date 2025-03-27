import { NavLink } from "react-router-dom";
import { routes } from "../routes/routes";

export const MobileNav = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-zinc-600 rounded-t-lg backdrop-xl z-10">
      <nav className=" max-w-[120rem] w-[65%] mx-auto flex justify-between py-4">
        {routes.map(({ to, name }) => (
          <NavLink
            className={({ isActive }) =>
              `text-gray-100 capitalize ${isActive ? "text-indigo-400" : ""}`
            }
            key={to}
            to={to}
          >
            {name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};
