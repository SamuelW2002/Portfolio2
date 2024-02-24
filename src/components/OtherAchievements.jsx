import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { achievements } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const AchievementCard = ({ index, name, video }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        
        <video controls>
            <source src={video} type='video/mp4' />
            Your browser does not support the video tag.
        </video>


        <h3 className='text-white text-[20px] font-bold text-center'>
          {name}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const OtherAchievements = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Other Achievements</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {achievements.map((achievement, index) => (
          <AchievementCard key={achievement.name} index={index} {...achievement} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(OtherAchievements, "other achievements");
