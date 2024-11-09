import React, { useState } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { useDrag } from '@use-gesture/react';

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
        className="bg-tertiary p-5 rounded-2xl max-w-[600px]"
      >
        <div className="relative w-full h-full">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl aspect-w-1 aspect-h-1"
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
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const bind = useDrag(
    ({ swipe: [swipeX], movement: [moveX], memo = "pan-y" }) => {
      if (Math.abs(moveX) > 10) {
        memo = "none";
      }
  
      if (swipeX === -1) {
        handleNext();
      } else if (swipeX === 1) {
        handlePrev();
      }
  
      return memo;
    },
    { axis: "x", filterTaps: true }
  );

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

      <div {...bind()} style={{ touchAction: bind().memo }} className="xs:mb-10 md:mt-20 flex items-center justify-center relative h-[600px]">
        {currentIndex !== 0 && (
            <button
            onClick={handlePrev}
            className="absolute left-10 text-white bg-blue-500 rounded-full p-4 z-10 hidden-below-small"
            >
            {"<"}
            </button>
        )}

        {projects.map((project, index) => {
            let position = "hidden"; 

            if (index === currentIndex) {
                position = "center";
            } else if (index === currentIndex - 1){
                position = "left";
            } else if (index === currentIndex + 1){
                position = "right";
            }

            if (position !== "hidden") {
                return (
                    <ProjectCard
                      key={`project-${index}`}
                      {...project}
                      isFocused={index === currentIndex}
                      position={position}
                    />
                  );
            }
        })}

        {currentIndex !== projects.length - 1 && (
            <button
            onClick={handleNext}
            className="absolute right-10 text-white bg-blue-500 rounded-full p-4 z-10 hidden-below-small"
            >
            {">"}
            </button>
        )}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "");
