import { NextPage } from "next";
import { motion } from "framer-motion";
import Head from "next/head";
import React from "react";
import { Bar, Education, Experience } from "@/components/index";
import { educations, experiences, languages, tools } from "@/utils/data";
import { fadeInUp, routeAnimation } from "@/utils/animations";

const Resume: NextPage = () => {
  const variants = {
    initial: {
      opacity: 0,
      y: 60,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <React.Fragment>
      <Head>
        <meta property="twitter:card" content="oluwayelu_large_image"></meta>
        <meta property="twitter:site" content="@oluwayelu"></meta>
        <meta property="twitter:title" content="iOluwayelu"></meta>
        <meta property="twitter:url" content="https://iOluwayelu.netlify.app" />
        <meta
          property="twitter:description"
          content="Resume of Oluwayelu Ifeoluwa"
        ></meta>
        <meta property="twitter:image" content=""></meta>

        <meta property="og:image" content=""></meta>
        <meta
          property="og:description"
          content="Resume of Oluwayelu Ifeoluwa"
        ></meta>
        <meta name="description" content="Resume of Oluwayelu Ifeoluwa"></meta>
        <title>iOluwayelu Resume</title>
        <meta property="og:title" content="Resume | Oluwayelu Ifeoluwa"></meta>
      </Head>
      <motion.div
        variants={routeAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        className="px-6 py-2"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <motion.div variants={fadeInUp} initial="initial" animate="animate">
            <h5 className="my-3 text-2xl font-bold">Education</h5>
            {educations.map((education, i) => (
              <Education value={education} key={i} />
            ))}
          </motion.div>
          <motion.div variants={variants} initial="initial" animate="animate">
            <h5 className="my-3 text-2xl font-bold">Experience</h5>
            {experiences.map((experience, i) => (
              <Experience value={experience} key={i} />
            ))}
          </motion.div>
        </div>

        <div className="grid gap-9 md:grid-cols-2">
          <div>
            <h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
            <div className="my-2">
              {languages.map((language, i) => (
                <Bar value={language} key={i} />
              ))}
            </div>
          </div>

          <div>
            <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
            <div className="my-2">
              {tools.map((tool, i) => (
                <Bar value={tool} key={i} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </React.Fragment>
  );
};

export default Resume;
