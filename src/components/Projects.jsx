import React from "react";
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
  imageColor
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", 0.5, 0.75)}
    initial="hidden" 
    whileInView="show" 
    viewport={{ once: true, amount: 0.05 }}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[500px] w-full w-[300px]'
      >
        <div className='relative w-full h-[300px] sm:h-[500px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          {link ? (
            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className={`${imageColor === "github" ? 'black-gradient' : 'blue-gradient'} w-10 h-10 rounded-full flex justify-center items-center cursor-pointer`}
            >
                <img
                  src={imageLink}
                  alt='source code'
                  className='w-1/2 h-1/2 object-contain'
                />
            </div>
          </div>
          ) : null}
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px] ' style={{ whiteSpace: 'pre-line' }}>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <motion.div variants={textVariant()} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>

      <div className='mt-10 flex flex-wrap gap-7 justify-center'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Projects, "");
