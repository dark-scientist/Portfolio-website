import React from "react";
import { FaFlag } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { IoIosPaper } from "react-icons/io";
import ResumeTitle from "./ResumeTitle";

const Skills = () => {
  return (
    <div className="w-full grid grid-cols-9 gap-10 lgl:gap-0 px-6">
      {/* =============== Languages Start here =================== */}
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Languages" icon={<FaFlag />} />
        <div className="py-4">
          {/* English */}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">English</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[100%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          {/* Tamil */}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">Tamil</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[95%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          {/* Hindi */}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">Hindi</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[90%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
        </div>
      </div>
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      {/* =============== Coding Skills =================== */}
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Coding" icon={<BiCodeAlt />} />
        <div className="py-4">
          {/* Python */}
          <div className="py-3 border-b-[1px] border-zinc-800 flex items-center">
            <p className="text-base text-textColor -mb-1.5">Python</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative ml-2">
              <span className="w-[95%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          {/* C */}
          <div className="py-3 border-b-[1px] border-zinc-800 flex items-center">
            <p className="text-base text-textColor -mb-1.5">C</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative ml-2">
              <span className="w-[90%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          {/* React.js */}
          <div className="py-3 border-b-[1px] border-zinc-800 flex items-center">
            <p className="text-base text-textColor -mb-1.5">React.js</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative ml-2">
              <span className="w-[85%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
        </div>
      </div>
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      {/* =============== Tech Skills =================== */}
      <div className="col-span-9">
        <ResumeTitle title="Tech Skills" icon={<IoIosPaper />} />
        <div className="py-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Skill Set with Subheadings */}
          <div className="text-base text-textColor">
            <h3 className="font-semibold text-lg text-white mb-1">
              Languages & Databases
            </h3>
            Python, C/C++, LaTeX, MySQL
          </div>
          <div className="text-base text-textColor">
            <h3 className="font-semibold text-lg text-white mb-1">
              Machine Learning & NLP
            </h3>
            TensorFlow, PyTorch, Hugging Face Transformers, OpenAI API, Scikit-learn, Pandas, NumPy, Facebook Prophet, LSTM, TextBlob, VADER (NLTK)
          </div>
          <div className="text-base text-textColor">
            <h3 className="font-semibold text-lg text-white mb-1">
              Visualization & Deployment
            </h3>
            Streamlit, Plotly, Streamlit Cloud, Hugging Face, Render
          </div>
          <div className="text-base text-textColor">
            <h3 className="font-semibold text-lg text-white mb-1">
              Tools & Technologies
            </h3>
            Power BI, Tableau, HTML5, CSS, Node.js, React.js
          </div>
          <div className="text-base text-textColor">
            <h3 className="font-semibold text-lg text-white mb-1">
              Version Control & DevOps
            </h3>
            Git, GitHub, Docker, Azure, Virtual Machines, Linux, Postman, API development
          </div>
          <div className="text-base text-textColor">
            <h3 className="font-semibold text-lg text-white mb-1">
              Azure Services
            </h3>
            Azure IoT Hub, Device Provisioning Service, Stream Analytics, Azure Storage, Databricks, Azure Web Services, Azure Server Hosting, Bastion, Azure Firewall & DNAT Config, IaaS, PaaS, SaaS, Azure PowerShell
          </div>
          <div className="text-base text-textColor">
            <h3 className="font-semibold text-lg text-white mb-1">
              Software (Implemented in Real-time)
            </h3>
            CyberArk (PAM Solution), Adobe Premiere Pro (Editing)
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
