import { styles } from "../styles";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const Hero = () => {
  return (
    <section className={`relative w-full h-[50vh] mx-auto mb-40 sm:mb-0`}>
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <motion.h1 variants={fadeIn("", "", 0.1, 1)} className={`${styles.heroHeadText} text-white`}>
            <span className="text-[#915EFF]">Samuel Wouters</span>
          </motion.h1>
        
          <motion.p variants={fadeIn("", "", 0.2, 1)} className="mt-2 text-secondary text-[17px] max-w-3xl leading-[30px]">
            I am a .NET developer with additional skills in frontend, cloud technologies, and managed service provider (MSP) environments. After a productive workday, I like to unwind by hitting the gym or relaxing with friends over a good board game.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
