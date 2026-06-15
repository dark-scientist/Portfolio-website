import React from "react";
import { FaFlag } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { IoIosPaper } from "react-icons/io";
import ResumeTitle from "./ResumeTitle";

const Skills = () => {
  return (
    <div className="w-full grid grid-cols-9 gap-10 lgl:gap-0 px-6">
      {/* =============== Languages =================== */}
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Languages" icon={<FaFlag />} />
        <div className="py-4">
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">English</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[100%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">Tamil</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[95%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">Hindi</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[85%] h-full absolute top-0 left-0 bg-designColor"></span>
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
          <div className="py-3 border-b-[1px] border-zinc-800 flex items-center gap-2">
            <p className="text-base text-textColor whitespace-nowrap">Python</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[95%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          <div className="py-3 border-b-[1px] border-zinc-800 flex items-center gap-2">
            <p className="text-base text-textColor whitespace-nowrap">C</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[80%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          <div className="py-3 border-b-[1px] border-zinc-800 flex items-center gap-2">
            <p className="text-base text-textColor whitespace-nowrap">React.js</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[75%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          <div className="py-3 border-b-[1px] border-zinc-800 flex items-center gap-2">
            <p className="text-base text-textColor whitespace-nowrap">SQL</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[80%] h-full absolute top-0 left-0 bg-designColor"></span>
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
          <div className="text-base text-textColor">
            <h3 className="font-semibold text-lg text-white mb-1">Languages & Databases</h3>
            Python, C, MySQL, PostgreSQL, SQLite
          </div>
          <div className="text-base text-textColor">
            <h3 className="font-semibold text-lg text-white mb-1">AI & LLMs</h3>
            OpenAI, Claude (Anthropic), Prompt Engineering, Retrieval-Augmented Generation (RAG), Graph RAG (Neo4j), Vision AI, BERT, LSTM, XGBoost, Scikit-learn, Pandas, NumPy, Facebook Prophet, VADER
          </div>
          <div className="text-base text-textColor">
            <h3 className="font-semibold text-lg text-white mb-1">Cloud & DevOps</h3>
            AWS (EC2, VPC, Route Tables, CIDR), Azure (IoT Hub, DPS, Stream Analytics, Storage, Databricks, Bastion, Firewall, DNAT), Git, GitHub, Bitbucket, Docker, Postman, Linux, Virtual Machines, IaaS, PaaS, SaaS
          </div>
          <div className="text-base text-textColor">
            <h3 className="font-semibold text-lg text-white mb-1">Web & Visualization</h3>
            React.js, Node.js, HTML5, CSS, Flask, Streamlit, Plotly, Power BI, Tableau
          </div>
          <div className="text-base text-textColor">
            <h3 className="font-semibold text-lg text-white mb-1">Protocols & Automation</h3>
            MQTT Protocol, REST APIs, Playwright (MCP), Sequential Thinking Automation, Azure PowerShell
          </div>
          <div className="text-base text-textColor">
            <h3 className="font-semibold text-lg text-white mb-1">Creative & Other Tools</h3>
            Adobe Premiere Pro, DaVinci Resolve Studio, CyberArk (PAM), OpenClaw
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
