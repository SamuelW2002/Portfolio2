import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";

const isMobile = window.innerWidth <= 800;

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {isMobile ?
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Because u are viewing on a mobile device the 3D models could not be rendered in due to hardware limitations.
          </p>
           : null}
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          {isMobile ? null : <BallCanvas icon={technology.icon}/>}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
