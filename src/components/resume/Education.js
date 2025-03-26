import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      {/* Experience Section */}
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Experience" icon={<MdWork />} />
        <ResumeCard
          badge="May 2024 – July 2024"
          title="Network Engineer Intern"
          subTitle="GREENWARE TECHNOLOGIES - Data Scouts & Guards (Remote – UAE, Trichy)"
          des="• Gained hands-on experience in AD & server management, PAM solutions, project management, customer handling, networking (Windows Server 19 and firewall), CyberArk, and RedHat. 
          • Managed and executed onsite projects, collaborated with diverse teams, and improved problem-solving skills."
        />
      </div>

      {/* Vertical Divider */}
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>

      {/* Education Section */}
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />
        <ResumeCard
  badge="2022 - Present"
  title="B.Tech in Computer Science Engineering (IoT)"
  subTitle="Shiv Nadar University, Chennai"
  des=""
  badgeStyle="bg-green-600 text-white" // Correctly passing the style prop
/>


        <ResumeCard
          badge="2020 – 2021"
          title="Senior Secondary (12th Grade)"
          subTitle="DAV Public School, Chennai"
          des=""
        />
      </div>
    </div>
  );
};

export default Education;
