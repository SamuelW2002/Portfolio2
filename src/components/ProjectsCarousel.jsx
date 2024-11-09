import React, { useState } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  link,
  imageLink,
  imageColor,
  isFocused,
  position,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.5 * index, 0.75)}
      initial="hidden"
      animate={{
        opacity: isFocused ? 1 : 0.5,
        scale: isFocused ? 1 : 0.8,
        x: position === "left" ? -200 : position === "right" ? 200 : 0,
        zIndex: isFocused ? 1 : 0,
      }}
      transition={{ duration: 0.5 }}
      className="absolute"
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[500px] w-full"
      >
        <div className="relative w-full h-[500px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          {link ? (
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className={`${
                  imageColor === "github"
                    ? "black-gradient"
                    : "blue-gradient"
                } w-10 h-10 rounded-full flex justify-center items-center cursor-pointer`}
              >
                <img
                  src={imageLink}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ) : null}
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]" style={{ whiteSpace: "pre-line" }}>
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Here are some of my projects showcasing the SOLID principles in .NET.
        </motion.p>
      </div>

      <div className="mt-20 flex items-center justify-center relative h-[600px]">
        <button onClick={handlePrev} className="absolute left-10 text-white bg-blue-500 rounded-full p-2">
          {"<"}
        </button>

        {projects.map((project, index) => {
          let position = "center";
          if (index === currentIndex - 1 || (currentIndex === 0 && index === projects.length - 1)) {
            position = "left";
          } else if (index === currentIndex + 1 || (currentIndex === projects.length - 1 && index === 0)) {
            position = "right";
          }

          return (
            <ProjectCard
              key={`project-${index}`}
              {...project}
              isFocused={index === currentIndex}
              position={position}
            />
          );
        })}

        <button onClick={handleNext} className="absolute right-10 text-white bg-blue-500 rounded-full p-2">
          {">"}
        </button>
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "");
