import React from "react";

import ServicesCard from "./ServicesCard";

import { BiBrain } from "react-icons/bi";
import { IoCloudOutline } from "react-icons/io5";
import { FaShieldAlt, FaCode } from "react-icons/fa";
import { BsBarChartLine } from "react-icons/bs";
import { AiOutlineApi } from "react-icons/ai";

const MyServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <ServicesCard
        icons={<BiBrain />}
        title="AI/ML Solutions"
        subTitle="Developing AI/ML models for NLP, time-series prediction, and computer vision using TensorFlow, PyTorch, Hugging Face, and LLMs like GPT/BERT."
      />
      <ServicesCard
        icons={<IoCloudOutline />}
        title="Cloud & IoT Integration"
        subTitle="Building scalable cloud and IoT solutions using Azure IoT Hub, Databricks, and DPS with real-time analytics."
      />
      <ServicesCard
        icons={<FaShieldAlt />}
        title="Network Security & DevOps"
        subTitle="Implementing secure environments with Active Directory, Linux, and CI/CD pipelines. Experience with Docker, Git, and Postman APIs."
      />
      <ServicesCard
        icons={<FaCode />}
        title="Web & App Development"
        subTitle="Designing responsive front-end interfaces using React.js, Node.js, and HTML/CSS, with seamless backend integration."
      />
      <ServicesCard
        icons={<BsBarChartLine />}
        title="Data Analytics & Visualization"
        subTitle="Developing data pipelines and insightful visualizations with real-time dashboards using Power BI and Azure Stream Analytics."
      />
      <ServicesCard
        icons={<AiOutlineApi />}
        title="Automation & API Development"
        subTitle="Automating workflows and building REST APIs to streamline processes and improve efficiency."
      />
    </div>
  );
};

export default MyServices;

