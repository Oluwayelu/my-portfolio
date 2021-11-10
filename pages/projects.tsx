import { NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ProjectCard, ProjectsNavbar } from "@/components/index";
import { projects as projectsData } from "@/utils/data";
import { Category } from "@/interface/types";
import { fadeInUp, routeAnimation, stagger } from "@/utils/animations";

const Projects: NextPage = () => {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("all");

  const handlerFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setProjects(projectsData);
      setActive(category);
      return;
    }

    const newArray = projectsData.filter((project) =>
      project.category.includes(category)
    );
    setProjects(newArray);
    setActive(category);
  };

  return (
    <React.Fragment>
      <Head>
        <meta property="twitter:card" content="oluwayelu_large_image"></meta>
        <meta property="twitter:site" content="@oluwayelujpg"></meta>
        <meta property="twitter:title" content="iOluwayelu"></meta>
        <meta property="twitter:url" content="https://iOluwayelu.netlify.app" />
        <meta
          property="twitter:description"
          content="Projects written by Oluwayelu Ifeoluwa"
        ></meta>
        <meta property="twitter:image" content=""></meta>

        <meta property="og:image" content=""></meta>
        <meta
          property="og:description"
          content="Projects written by Oluwayelu Ifeoluwa"
        ></meta>
        <meta
          name="description"
          content="Projects written by Oluwayelu Ifeoluwa"
        ></meta>
        <title>iOluwayelu Projects</title>
        <meta
          property="og:title"
          content="Projects | Oluwayelu Ifeoluwa"
        ></meta>
      </Head>
      <motion.div
        variants={routeAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        className="px-5 py-2 overflow-y-scroll"
        style={{ height: "65vh" }}
      >
        <ProjectsNavbar
          handlerFilterCategory={handlerFilterCategory}
          active={active}
        />

        <motion.div
          className="relative grid grid-cols-12 gap-4 my-3"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
            >
              <ProjectCard project={project} key={project.name} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </React.Fragment>
  );
};

export default Projects;
