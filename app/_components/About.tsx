import React from "react";
import Image from "next/image";
import Aboutcard from "./Aboutcard";
import Description from "./Description";

const About = () => {
  return (
    <div className="py-8">
      <Aboutcard />
      <Description />
    </div>
  );
};

export default About;
