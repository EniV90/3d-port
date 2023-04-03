import React from 'react'
import Tilt from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] 
        rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title}
          className="w-16 h-16 object-contain" />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        As a self-taught developer, I have acquired skills in both frontend development and blockchain development. Throughout my journey, I have developed a strong passion for coding and i'm constantly seeking opportunities to expand my skill set. <br />

        In my frontend development experience, I have honed my skills in HTML, CSS, JavaScript, and various frontend frameworks such as React and Vue.js. I have also gained expertise in responsive design, cross-browser compatibility, and accessibility. <br />

        In my blockchain development experience, I have worked with Ethereum and Solidity, and have a strong understanding of blockchain architecture, smart contracts, and decentralized applications (dApps). <br />

        Overall, my experience as a self-taught developer has taught me the importance of being proactive and continuously learning. I am excited to take on new challenges and opportunities to further enhance my skills and contribute to innovative projects.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
           <ServiceCard key={service.title} index={index} {...service} />
           
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")