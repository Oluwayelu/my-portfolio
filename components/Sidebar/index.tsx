import { FunctionComponent } from "react";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { GiTie, GiMoon, GiSun, GiEarthAfricaEurope } from "react-icons/gi";
import Fade from "react-reveal/Fade";
import { GoLocation } from "react-icons/go";
import { useTheme } from "next-themes";
import Image from "next/image";

const Sidebar: FunctionComponent = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <Image
        src="/images/ifeoluwa.jpg"
        alt="avatar"
        className=" mx-auto border rounded-full "
        height="128px"
        width="128px"
        layout="intrinsic"
        quality="100"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-primary ">Oluwayelu</span> Ifeoluwa
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500">
        Fullstack Developer
      </p>

      <a
        href="/assets/Sumit Dey Resume.pdf"
        download="Sumit Dey Resume.pdf"
        className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500"
      >
        <GiTie className="w-6 h-6" />
        <span>Download Resume</span>
      </a>

      <div className="flex justify-around w-9/12 mx-auto my-5 text-primary md:w-full ">
        <a href="https://www.iOluwayelu.netlify.app">
          <GiEarthAfricaEurope className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/oluwayelu-ifeoluwa-4a04431a9/">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://www.github.com/Oluwayelu">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />{" "}
        </a>
      </div>

      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center">
          <GoLocation className="mr-2" /> <span>Lagos, Nigeria </span>
        </div>
        <p className="my-2 ">oluwayeluifeoluwa@gmail.com </p>
        <p className="my-2"> +234 9053 156 229 </p>
      </div>

      <button
        className="w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-primary to-blue-500 hover:scale-105 focus:outline-none transform animate-bounce"
        onClick={() => window.open("mailto:oluwayeluifeoluwa@gmail.com")}
      >
        Email me
      </button>
      <br />
      <button
        onClick={changeTheme}
        className="px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-primary to-blue-500 focus:outline-none hover:scale-105 "
      >
        {theme == "light" ? <GiMoon size={30} /> : <GiSun size={30} />}
      </button>
    </>
  );
};

export default Sidebar;
