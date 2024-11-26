import React from 'react'

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from '../utils/motion'
import { styles } from '../styles'

const Tech = () => {
  return (
    <div>
      


      <motion.div>
        <h2 className={styles.sectionHeadText}>
          Skills.
        </h2>
      </motion.div>  

      <div className='w-full flex'>
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[20px] max-w-3xl leading-[30px]"
        >
          <ul className="list-disc list-inside text-left">
            <li>Programming Languages: C, C++, HTML, CSS, JavaScript</li>
            <li>Frameworks: React, TailwindCSS, Three.js</li>
            <li>Tools: Git, Figma, Docker</li>
            <li>Backend: Go</li>
            <li>Others: WordPress</li>
          </ul>
        </motion.div>

      </div>


      <div className='flex flex-row flex-wrap justify-center gap-10 mt-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>

    </div>
  );
};

export default SectionWrapper(Tech, "");