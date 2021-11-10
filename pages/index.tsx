import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import Head from "next/head";
import { motion } from "framer-motion";
import { ServiceCard } from "../components";
import { services } from "../utils/data";
import { Service } from "../interface/types";
import React from "react";
import Fade from "react-reveal/Fade";
import { fadeInUp, routeAnimation, stagger } from "@/utils/animations";

const About: NextPage = () => {
  // console.log(services);

  return (
    <React.Fragment>
      <Head>
        <meta property="twitter:card" content="oluwayelu_large_image"></meta>
        <meta property="twitter:site" content="@oluwayelujpg"></meta>
        <meta property="twitter:title" content="iOluwayelu"></meta>
        <meta property="twitter:url" content="https://iOluwayelu.netlify.app" />
        <meta
          property="twitter:description"
          content="About Oluwayelu Ifeoluwa"
        ></meta>
        <meta property="twitter:image" content=""></meta>

        <meta property="og:image" content=""></meta>
        <meta
          property="og:description"
          content="About Oluwayelu Ifeoluwa"
        ></meta>
        <meta name="description" content="About Oluwayelu Ifeoluwa"></meta>
        <title>About iOluwayelu</title>
        <meta property="og:title" content="About | Oluwayelu Ifeoluwa"></meta>
      </Head>
      <motion.div
        variants={routeAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        className="flex flex-col flex-grow px-6 pt-1 "
      >
        <h6 className="my-3 text-base font-mediu m font-sans">
          <Fade left big cascade>
            I am currently pursuing B.Sc Degree(Final Year) in Systems
            Engineering from the University of Lagos, Akoka . I have 3+ years of
            experience in Web Development.
          </Fade>
        </h6>
        <div
          className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100 "
          style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
        >
          <h4 className="my-3 text-xl font-semibold tracking-wide">
            What I am doing
          </h4>

          <motion.div
            className="grid gap-6 my-3 md:grid-cols-2"
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            {/* children's initial and animate property should be same as the parent during a stagger effect  */}
            {services.map((service) => (
              <motion.div
                variants={fadeInUp}
                className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1 "
                key={service.title}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </React.Fragment>
  );
};

//!called every time  the page refreshed
// export const getServerSideProps: GetServerSideProps = async (
//    context: GetServerSidePropsContext
// ) => {
//    const res = await fetch('http://localhost:3000/api/services')
//    const data = await res.json()
//    console.log(data)
//    return { props: { services: data.services } }
// }

//!called only during the build of the project
//? make sure the server(localhost:3000)[this will receive the request during build] is running on a terminal during the build
//? also need to change the localhost during the deployment | see the todo
// https://aude53.medium.com/set-environment-variables-with-next-js-and-vercel-e544c0460a48

// export const getStaticProps: GetStaticProps = async (
//    context: GetStaticPropsContext
// ) => {
//    // console.log(context);

//    const res = await fetch('http://localhost:3000/api/services')
//    const { services } = await res.json()
//    console.log({ services })
//    return { props: { services: services } }
// }

export default About;
