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
          badge="Feb 2026 – Present"
          title="DOTRYDER"
          subTitle="AI Software Developer → Full-Time · Hybrid – Pune, Bangalore"
          des="• Built a speech-to-speech RAG chatbot (English & Hindi) presented at the Bharat Electric Summit.
• Completed an on-site PPE detection & safety alert POC for NTPC Lara using Vision AI, deployed on client server, and presented to stakeholders."
        />

        <ResumeCard
          badge="Jan 2026 – Jun 2026"
          title="MOBIUS – XTRACT.IO"
          subTitle="AI Software Developer Intern – Paid · Chennai, India"
          des="• Built a Telegram financial report bot on EC2 using OpenAI to parse XLS/PDF files.
• Developed a self-training time card extraction pipeline inspired by Karpathy-style iterative prompting.
• Created a graph RAG system in Neo4j for PDF Q&A and lease documents; built a Tata Motors news POC.
• Implemented maritime bounding-box detection for sea safety use cases."
        />

        <ResumeCard
          badge="May 2025 – Aug 2025"
          title="Neeve.ai (IoTium)"
          subTitle="Software Engineer Intern (AI & Cloud Automation) – Paid · Chennai, India"
          des="• Automated backend & deployment processes on the Secure Edge platform using Python and REST APIs.
• Built the MCP (Model Context Protocol) automation framework using Playwright & sequential thinking, streamlining 10+ recurring support issues weekly and integrating with VS Code Copilot for fix suggestions."
        />

        <ResumeCard
          badge="Jan 2025 – Mar 2025"
          title="WORLDLINE – Financial Services"
          subTitle="Project Intern (Mentored) · Remote, Chennai"
          des="• Built a real-time Credit Card Fraud Detection system using XGBoost, SMOTE, and RandomizedSearchCV.
• Deployed a live transaction simulation pipeline with Flask and MQTT; built an interactive Streamlit monitoring dashboard."
        />

        <ResumeCard
          badge="May 2024 – Jul 2024"
          title="GREENWARE TECHNOLOGIES"
          subTitle="Network Engineer Intern · Remote – UAE, Trichy"
          des="• Gained hands-on experience in AD & Server Management, PAM solutions, CyberArk, RedHat, Windows Server 19, and firewall configuration.
• Managed onsite projects and collaborated with cross-functional teams across geographies."
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
          badge="2022 – 2026"
          title="B.Tech – Computer Science Engineering (IoT)"
          subTitle="Shiv Nadar University, Chennai"
          des="CGPA: 7.4 / 10"
        />

        <ResumeCard
          badge="2020 – 2021"
          title="Senior Secondary (12th Grade)"
          subTitle="DAV Public School, Chennai"
          des="Percentage: 80%"
        />

        <ResumeCard
          badge="2018 – 2019"
          title="Secondary (10th Grade)"
          subTitle="DAV Public School, Chennai"
          des="Percentage: 92%"
        />
      </div>
    </div>
  );
};

export default Education;
