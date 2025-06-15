import { JSX, lazy, LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<() => JSX.Element> | JSXComponent;
  name: string;
}

const LazyAbout = lazy(() => import("../pages/AboutPage"));
const LazyResume = lazy(() => import("../pages/ResumePage"));
const LazyProjecs = lazy(() => import("../pages/ProjectsPage"));
const LazyContact = lazy(() => import("../pages/ContactPage"));

export const routes: Route[] = [
  {
    to: "/about",
    path: "/about",
    Component: LazyAbout,
    name: "about",
  },
  {
    to: "/resume",
    path: "/resume",
    Component: LazyResume,
    name: "resume",
  },
  {
    to: "/projects",
    path: "/projects",
    Component: LazyProjecs,
    name: "projects",
  },
  {
    to: "/Contact",
    path: "/contact",
    Component: LazyContact,
    name: "Contact",
  },
];
