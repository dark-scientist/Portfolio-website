import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row pb-6">
      <div className="w-full md:w-1/2 text-zinc-400 px-6 border-r-[1px] border-r-zinc-800 flex items-center">
        <div className="py-6">
          <h2 className="font-semibold mb-1">Hello! I'm Prithwin</h2>
          <p className="text-base leading-6 ">
          a CSE student passionate about IoT, AI/ML, and cloud solutions. Skilled in Python, and Azure, with hands-on experience in building scalable applications. I specialize in network security, DevOps, and NLP models, blending innovation with problem-solving to deliver impactful, real-world solutions."
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6">
        <ul className="flex flex-col gap-1">
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Age:</span>
            20
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Residence:</span>
            India
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Freelance:</span>
            Available
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Address:</span>
            India, TamilNadu, Chennai
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
