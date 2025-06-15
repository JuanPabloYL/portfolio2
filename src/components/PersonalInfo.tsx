import { FiChevronDown } from "react-icons/fi";
import userIcon from "../assets/img/user.png";
import { LuGithub } from "react-icons/lu";
import { FaLinkedinIn, FaVoicemail } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { useState } from "react";

export const PersonalInfo = () => {
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal((prevState) => !prevState);
  };

  return (
    <div className="relative bg-zinc-700 rounded-xl p-4 mb-5 lg:mb-0 lg:sticky h-fit top-10 lg:h-[42rem]">
      <div
        onClick={toggleModal}
        className="absolute top-0 right-0 text-5xl bg-zinc-600 rounded-l-xl hover:cursor-pointer"
      >
        <p className="hidden sm:block text-lg px-2 text-indigo-500 lg:hidden">
          Show Contacts
        </p>
        <FiChevronDown
          className={`sm:hidden text-3xl text-indigo-500 transition-transform duration-300 ${
            openModal ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
      <div className="flex gap-4 items-center lg:flex-col lg:pb-5">
        <img
          className="w-20 h-20 rounded-[50%] lg:w-40 lg:h-40 object-cover"
          src={userIcon}
          alt="User picture"
        />
        <div className="lg:text-center">
          <h2 className="font-bold text-xl mb-2 lg:text-3xl">
            Juan Pablo Yagüe
          </h2>
          <span className="text-sm bg-zinc-500 px-2 py-1 rounded-xl">
            Software Developer
          </span>
        </div>
      </div>

      <div className="hidden lg:block mt-8 border-t border-t-zinc-500 pt-4 lg:pt-8">
        <ul className="flex flex-col gap-4 lg:gap-6">
          <li className="flex items-center gap-4">
            <div className=" bg-zinc-600 shadow-lg p-2 rounded-xl shadow-zinc-600/50">
              <FaVoicemail className="text-2xl text-indigo-500 " />
            </div>

            <div className="flex flex-col">
              <span className="text-zinc-300">Email</span>
              <a href="mailto:richard@example.com">juanpabloyague@gmail.com</a>
            </div>
          </li>
          <li className="flex items-center gap-4">
            <div className=" bg-zinc-600 shadow-lg p-2 rounded-xl shadow-zinc-600/50">
              <LuGithub className="text-2xl text-indigo-500 " />
            </div>

            <div className="flex flex-col">
              <span className="text-zinc-300">GitHub</span>
              <a href="https://github.com/JuanPabloYL" target="_blank">
                JuanPabloYL
              </a>
            </div>
          </li>
          <li className="flex items-center gap-4">
            <div className=" bg-zinc-600 shadow-lg p-2 rounded-xl shadow-zinc-600/50">
              <FaLinkedinIn className="text-2xl text-indigo-500 " />
            </div>

            <div className="flex  flex-col">
              <span className="text-zinc-300">LinkedIn</span>
              <a
                href="https://www.linkedin.com/in/juanpabloyague/"
                target="_blank"
              >
                juanpabloyague
              </a>
            </div>
          </li>
          <li className="flex items-center gap-4">
            <div className=" bg-zinc-600 shadow-lg p-2 rounded-xl shadow-zinc-600/50">
              <MdLocationPin className="text-2xl text-indigo-500 " />
            </div>

            <div>
              <span className="text-zinc-300">Location</span>
              <p>Vancouver, Canada</p>
            </div>
          </li>
        </ul>
      </div>
      {openModal && (
        <div className="mt-4 border-t border-t-zinc-500 pt-4">
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-4">
              <div className=" bg-zinc-600 shadow-lg p-2 rounded-xl shadow-zinc-600/50">
                <FaVoicemail className="text-2xl text-indigo-500 " />
              </div>

              <div className="flex flex-col">
                <span className="text-zinc-300">Email</span>
                <a href="mailto:richard@example.com">
                  juanpabloyague@gmail.com
                </a>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <div className=" bg-zinc-600 shadow-lg p-2 rounded-xl shadow-zinc-600/50">
                <LuGithub className="text-2xl text-indigo-500 " />
              </div>

              <div className="flex flex-col">
                <span className="text-zinc-300">GitHub</span>
                <a href="https://github.com/JuanPabloYL" target="_blank">
                  JuanPabloYL
                </a>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <div className=" bg-zinc-600 shadow-lg p-2 rounded-xl shadow-zinc-600/50">
                <FaLinkedinIn className="text-2xl text-indigo-500 " />
              </div>

              <div className="flex  flex-col">
                <span className="text-zinc-300">LinkedIn</span>
                <a
                  href="https://www.linkedin.com/in/juanpabloyague/"
                  target="_blank"
                >
                  juanpabloyague
                </a>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <div className=" bg-zinc-600 shadow-lg p-2 rounded-xl shadow-zinc-600/50">
                <MdLocationPin className="text-2xl text-indigo-500 " />
              </div>

              <div>
                <span className="text-zinc-300">Location</span>
                <p>Vancouver, Canada</p>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
