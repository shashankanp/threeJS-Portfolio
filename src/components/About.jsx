import React from "react";
import Tilt from "react-parallax-tilt";
import { motion, spring } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        ></div>
      </motion.div>
    </Tilt>
  );
};

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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida
        lectus sit amet mollis tempus. Sed quis faucibus turpis. Phasellus ac ex
        varius, sagittis lorem et, tincidunt neque. Vestibulum sed tristique
        elit, ut accumsan metus. Phasellus id magna a orci imperdiet luctus. In
        non molestie enim. Aenean hendrerit, risus bibendum iaculis finibus,
        nulla nisi elementum tellus, at volutpat arcu arcu sed sapien. Quisque
        pulvinar ex mi, dapibus mollis lectus pulvinar quis. Nunc vitae luctus
        est. Pellentesque at convallis lorem, a fermentum erat. Sed venenatis
        erat sed mauris iaculis consectetur.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default About;
