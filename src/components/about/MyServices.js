import React from "react";
import ServicesCard from "./ServicesCard";
import { BiBrain } from "react-icons/bi";
import { IoCloudOutline } from "react-icons/io5";
import { FaShieldAlt, FaCode, FaRobot } from "react-icons/fa";
import { AiOutlineApi } from "react-icons/ai";

const MyServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <ServicesCard
        icons={<FaRobot />}
        title="LLM Engineering & RAG Systems"
        subTitle="Building production-grade LLM pipelines — speech-to-speech bots, graph RAG with Neo4j, document intelligence workflows, and self-training prompt pipelines using OpenAI and Claude."
      />
      <ServicesCard
        icons={<BiBrain />}
        title="AI / ML & Vision AI"
        subTitle="Developing AI/ML models for NLP, time-series prediction, graph neural networks (DCRNN), and computer vision including PPE detection and maritime bounding-box detection."
      />
      <ServicesCard
        icons={<IoCloudOutline />}
        title="Cloud & Edge Infrastructure"
        subTitle="Designing scalable cloud architectures on AWS (EC2, VPC) and Azure (IoT Hub, Databricks, Stream Analytics). Experience with OT systems and edge AI deployment."
      />
      <ServicesCard
        icons={<AiOutlineApi />}
        title="Automation & API Development"
        subTitle="Building MCP automation frameworks using Playwright and sequential thinking. Developing REST APIs, Telegram bots, and workflow automators that cut recurring support overhead."
      />
      <ServicesCard
        icons={<FaCode />}
        title="Web & App Development"
        subTitle="Designing responsive front-end interfaces using React.js, Node.js, and HTML/CSS — from event websites to real-time Streamlit dashboards with Plotly visualizations."
      />
      <ServicesCard
        icons={<FaShieldAlt />}
        title="Network Security & DevOps"
        subTitle="Implementing secure environments with AD, CyberArk PAM, Linux, and CI/CD pipelines. Hands-on with Docker, Git, AWS VPCs, CIDR routing, and firewall configuration."
      />
    </div>
  );
};

export default MyServices;
