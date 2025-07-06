import { Container } from "../components/Container";
import { PortfolioProject } from "../types";

const projects: PortfolioProject[] = [
  {
    name: "URL Shrinker",
    url: "https://github.com/JuanPabloYL/url-shrink",
    description:
      "Project based in typescrupt using the apis to create the url shrinked.",
    imgURL: "./assets/img/project2.png",
  },
  {
    name: "Expense Tracker",
    url: "https://github.com/JuanPabloYL/expense-tracker",
    description:
      "Project based in typescrupt using the apis to create the url shrinked.",
    imgURL: "./assets/img/project1.png",
  },
  {
    name: "Note Taking App",
    url: "https://github.com/JuanPabloYL/note-taking-app",
    description:
      "Project based in React with Typescript. Firebase authentication and Firebase database.",
    imgURL: "./assets/img/project3.png",
  },
];

const ProjectsPage = () => {
  return (
    <Container>
      <h1 className="text-3xl font-bold relative pb-3">
        Projects
        <span className="absolute bottom-0 left-0 w-[10%] border-b-8 border-b-indigo-500"></span>
      </h1>

      <section className="flex flex-col md:flex-row justify-between mt-10 items-center gap-4 md:grid grid-cols-2">
        {projects.map(({ name, description, url, imgURL }) => (
          <a
            href={url}
            target="_blank"
            className="w-full h-80  rounded-xl hover:cursor-pointer hover:bg-zinc-800 transition-all p-3"
            key={name}
          >
            <div className="rounded overflow-hidden">
              <img src={imgURL} alt="Project Image" />
            </div>

            <div className="py-4 px-2">
              <h3 className="text-xl font-bold">{name}</h3>
              <p className="text-gray-300">{description}</p>
            </div>
          </a>
        ))}
      </section>
    </Container>
  );
};

export default ProjectsPage;
