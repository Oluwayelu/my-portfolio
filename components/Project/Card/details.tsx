import { FunctionComponent } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { ProjectCardDetailsType } from "@/interface/types";

import Image from "next/image";
import { fadeInUp, stagger } from "@/utils/animations";

const ProjectCardDetails: FunctionComponent<ProjectCardDetailsType> = ({
  name,
  image_path,
  deployed_url,
  description,
  github_url,
  key_techs,
  setShowDetail,
}) => {
  return (
    <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 md:p-5  text-black bg-gray-100 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100">
      <motion.div variants={stagger} initial="initial" animate="animate">
        <motion.div variants={fadeInUp}>
          <Image
            src={image_path}
            alt={name}
            layout="responsive"
            height="150"
            width="300"
          />
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className="flex justify-center my-4 space-x-3"
        >
          <a
            href={github_url}
            className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
          >
            <AiFillGithub /> <span>Github</span>
          </a>
          <a
            href={deployed_url}
            className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
          >
            <AiFillProject /> <span>Project</span>
          </a>
        </motion.div>
      </motion.div>

      <motion.div variants={stagger} initial="initial" animate="animate">
        <motion.h2
          variants={fadeInUp}
          className="mb-3 text-xl font-medium md:text-2xl"
        >
          {name}
        </motion.h2>
        <motion.h3 variants={fadeInUp} className="mb-3 font-medium">
          {description}
        </motion.h3>

        <motion.div
          variants={fadeInUp}
          className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider"
        >
          {key_techs.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200 rounde-sm"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </motion.div>

      <button
        onClick={() => setShowDetail(false)}
        className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
      >
        <MdClose size={30} />
      </button>
    </div>
  );
};

export default ProjectCardDetails;

ProjectCardDetails.propTypes = {
  name: PropTypes.string.isRequired,
  image_path: PropTypes.string.isRequired,
  deployed_url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  github_url: PropTypes.string.isRequired,
  key_techs: PropTypes.array.isRequired,
  setShowDetail: PropTypes.func.isRequired,
};
