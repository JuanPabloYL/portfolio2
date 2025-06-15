import { Container } from "../components/Container";
import { Project } from "../types";

const projects: Project[] = [
  {
    name: "Personal Expense Tracker",
    date: "March 2025 - Present",
    description:
      "A React and TypeScript-based expense tracker for managing personal finances. Features real-time budget tracking, category-based expense filtering, and local storage for data persistence.",
  },
  {
    name: "URL Shortener",
    date: "February 2025 - Present",
    description:
      "A pure TypeScript-based URL shortener with Firebase integration. Includes link management, custom short URLs, and a clean UI for easy usability.",
  },
  {
    name: "Note Taking App",
    date: "February 2025 - Present",
    description:
      "An app built with TypeScript, React, CSS, firebase database and Fitebase authentication.",
  },
];

const skills = [
  "React.js",
  "Astro",
  "JavaScript (ES6+)",
  "TypeScript",
  "Tailwind CSS",
  "CSS3",
  "HTML5",
  "Firebase (Authentication, Firestore)",
  "Axios",
  "SCSS",
];

const ResumePage = () => {
  return (
    <Container>
      <h1 className="text-3xl font-bold relative pb-3">
        Resume
        <span className="absolute bottom-0 left-0 w-[10%] border-b-8 border-b-indigo-500"></span>
      </h1>

      <section className="mt-10">
        <div>
          <h2 className="text-2xl font-bold">Education</h2>
          <ol className="relative border-s border-indigo-200 dark:border-indigo-700">
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-indigo-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-indigo-400 dark:text-indigo-500">
                January 2023
              </time>
              <h3 className="text-lg font-semibold text-indigo-900 dark:text-white">
                Associate of Science: Computer Science
              </h3>
              <p className="mb-4 text-base font-normal text-indigo-500 dark:text-gray-400">
                Relevant Courses: Algorithms and Data Structures I & II (C++),
                Object-Oriented Programming (Java), Modern Web Development
                Technologies (ReactJS, TypeScript, SCSS)
              </p>
            </li>
          </ol>
        </div>

        <div>
          <h2 className="text-2xl font-bold">Projects</h2>
          <ol className="relative border-s border-indigo-200 dark:border-indigo-700">
            {projects.map(({ date, description, name }) => (
              <li className="mb-10 ms-4" key={name}>
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-indigo-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-indigo-500">
                  {date}
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {name}
                </h3>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  {description}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <ol className="relative border-s border-indigo-200 dark:border-indigo-700">
            {skills.map((skill) => (
              <li className="mb-10 ms-4" key={skill}>
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-indigo-900 dark:bg-gray-700"></div>

                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {skill}
                </h3>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </Container>
  );
};

export default ResumePage;
