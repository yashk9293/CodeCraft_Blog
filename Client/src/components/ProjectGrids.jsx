import React from "react";
import { motion } from "framer-motion";
import eCommerce from "../assets/ecommerce.png";
import Moviestan from "../assets/moviestan.png";
import WhatsApp from "../assets/whatsapp.png";
import WeatherApp from "../assets/weatherApp.png";
import AiMock from "../assets/ai-mock.png";
import Netflix from "../assets/netflix.png"; 
import CallToAction from "./CallToAction";

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
    },
  }),
};

export const ProjectGrids = () => {
  const projects = [
    {
      id: "E-Commerce Website",
      image: eCommerce,
      description:
        "An e-commerce shopping app built using the MERN (MongoDB, Express, React, Node.js) stack, TypeScript, Redux Toolkit. This project provides both normal user and admin modes, offering a wide range of features to enhance the shopping experience.",
      demoLink: "https://mern-ecommerce-frontend-phi.vercel.app/",
      sourceCodeLink: "https://github.com/yashk9293/mern-ecommerce-server",
    },
    {
      id: "Moviestan",
      image: Moviestan,
      description:
        "Discover real-time movies and TV shows with detailed information using, Moviestan App: A dynamic and fully responsive web app built with React, Axios, Redux, and Custom Hooks, it fetches data in real-time from TMDB API.",
      demoLink: "https://moviestan-one.vercel.app/",
      sourceCodeLink: "https://github.com/yashk9293/moviestan",
    },
    {
      id: "WhatsApp Clone",
      image: WhatsApp,
      description:
        "It is a robust web application designed to replicate the core functionalities of WhatsApp. Built using Next.js, it leverages modern web technologies to provide a seamless and real-time communication experience.",
      demoLink: "https://whats-app-clone-ai-integrated.vercel.app/",
      sourceCodeLink: "https://github.com/yashk9293/WhatsApp-Clone-Ai-Integrated",
    },
    {
      id: "MERN Netflix Clone",
      image: Netflix,
      description:
        "The Netflix Clone project is a web application designed to mimic the functionality and user experience of the popular streaming service, Netflix. Built using the MERN stack (MongoDB, Express.js, React, and Node.js), this project demonstrates a comprehensive implementation of a modern, full-stack web application.",
      demoLink: "https://netflix-clone-a5qe.onrender.com/",
      sourceCodeLink: "https://github.com/yashk9293/Netflix-Clone",
    },
    {
      id: "Ai Mock Interviewer",
      image: AiMock,
      description:
        "AI Mock Interview App is a cutting-edge application built with Next.js designed to help users practice and prepare for technical interviews. Leveraging the power of the Gemini API for AI-driven responses, this app simulates real-world interview scenarios, providing users with a comprehensive and interactive mock interview experience.",
      demoLink: "https://ai-interview-mocker-delta.vercel.app/",
      sourceCodeLink: "https://github.com/yashk9293/Ai_Mock_Interviewer_with_NextJS",
    },
    {
      id: "Weather Web App",
      image: WeatherApp,
      description:
        "Crafted an intuitive weather application that is proficient in fetching and displaying real-time weather details like temperature, humidity, wind speed, current time, day and date of the specified city by integrating WeatherAPI and OpenWeatherMapAPI.",
      demoLink: "https://yashk9293.github.io/weather_webApp/",
      sourceCodeLink: "https://github.com/yashk9293/weather_webApp",
    },
  ];

  return (
    <div className="container mx-auto p-6 mb-5">
      <motion.h1
        className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        My Projects
      </motion.h1>
      <motion.h2
        className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Projects Completed till now in my B.Tech journey (Updated: June 2024)
      </motion.h2>
      <motion.p
        className="text-xl font-bold text-center mb-8 text-green-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        Here are some projects I've did: 👇🏻
      </motion.p>
      <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-700"
            initial="hidden"
            animate="visible"
            variants={variants}
            custom={i}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={project.image}
              alt={`Project ${project.id}`}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-lg font-bold mb-2 text-gray-800 dark:text-gray-100">
                {project.id}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>
              <div className="flex justify-between">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-600"
                >
                  Demo
                </a>
                <a
                  href={project.sourceCodeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-600"
                >
                  Source Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div className="mt-8">
        <CallToAction />
      </motion.div>
      <motion.p
        className="text-center font-semibold text-green-500 dark:text-blue-500 mt-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        Explore all my projects 👉🏻{" "}
        <span className="text-blue-500 dark:text-green-500">
          <a href="https://github.com/yashk9293" target="_blank">
            GitHub
          </a>
        </span>
      </motion.p>
    </div>
  );
};
