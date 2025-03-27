import { Activity } from "../types";
import dev from "../assets/img/icon-dev.svg";
import desing from "../assets/img/icon-design.svg";
import app from "../assets/img/icon-app.svg";
import { SkillsCard } from "../components/SkillsCard";
import { Technologies } from "../components/Technologies";
import { NavLink } from "react-router-dom";
import { routes } from "../routes/routes";

const currentActivities: Activity[] = [
  {
    name: "Software Development",
    icon: dev,
    content:
      "I build modern, responsive, and user-friendly web interfaces using React.js, TypeScript, and Tailwind CSS.",
  },
  {
    name: "Performance & Optimization",
    icon: desing,
    content:
      "I focus on optimizing performance to create fast, efficient, and accessible web experiences.",
  },
  {
    name: "Continuous Learning",
    icon: app,
    content:
      "I stay updated with the latest technologies to write clean, scalable, and future-proof code.",
  },
];

const AboutPage = () => {
  return (
    <div className="bg-zinc-700 rounded-lg px-4 py-6 overflow-hidden relative">
      <nav className="absolute right-0 py-5 top-0 flex gap-5 px-10 bg-zinc-600 rounded-b-lg">
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
      <h1 className="text-3xl font-bold relative pb-3">
        About Me
        <span className="absolute bottom-0 left-0 w-[10%] border-b-8 border-b-indigo-500"></span>
      </h1>

      <div className="flex flex-col gap-4 ">
        <p className="mt-3 text-lg leading-8">
          Hi! I'm Juan Pablo, a software developer who loves crafting intuitive
          and visually appealing web experiences. I specialize in React.js,
          JavaScript, TypeScript, SCSS, and Tailwind CSS, focusing on building
          clean, responsive, and dynamic user interfaces. I enjoy solving
          challenges through code and continuously improving my skills to stay
          up-to-date with modern web technologies.
        </p>
        <p className="text-lg leading-8">
          My goal is to create seamless digital experiences while writing
          efficient and maintainable code. Always eager to learn and grow, I’m
          looking for opportunities to contribute and collaborate in the
          software development space.
        </p>
      </div>

      <div className="mt-10">
        <h2 className="text-3xl font-bold relative pb-3 my-4">
          What I am doing?
          <span className="absolute bottom-0 left-0 w-[10%] border-b-8 border-b-indigo-500"></span>
        </h2>

        <div className="flex flex-col lg:grid grid-cols-2 gap-5 mt-6">
          {currentActivities.map((activity) => (
            <SkillsCard key={activity.name} activity={activity} />
          ))}
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text-3xl font-bold relative pb-5 my-4">
          Technologies that I use
          <span className="absolute bottom-0 left-0 w-[10%] border-b-8 border-b-indigo-500"></span>
        </h2>
        <Technologies />
      </div>
    </div>
  );
};

export default AboutPage;
