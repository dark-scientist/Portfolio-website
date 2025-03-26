import React from "react";
import {
  FaSpotify,
  FaCreditCard,
  FaGlobe,
  FaCloud,
  FaBrain,
} from "react-icons/fa";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div>
      {/* Section Title */}
      <Title title="Recent" subTitle="Projects" />

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10 px-6">
        {/* Project 1 - Spotify Insights */}
        <ProjectsCard
          icon={<FaSpotify className="text-green-500 text-2xl" />}
          title="Spotify Business Insights with LLM"
          category="AI/ML Project"
          date="2025 - Ongoing"
          description="Leveraging LLMs (GPT-4, BERT) and ML models (Facebook Prophet, LSTM) to analyze Spotify data for music trend predictions. Utilizing Spotipy, Pandas, VADER for sentiment analysis and Streamlit, Plotly for interactive visualizations."
        />

        {/* Project 2 - Credit Card Fraud Detection */}
        <ProjectsCard
          icon={<FaCreditCard className="text-red-500 text-2xl" />}
          title="Credit Card Fraud Detection"
          category="Machine Learning, Finance & DevOps"
          date="2025 - Ongoing"
          description="Guided under the mentorship from Worldline (Financial services company) - creating own ML model to flag the fraud card and interrupt the transaction in the middle where the communication is done with MQTT protocol."
        />

        {/* Project 3 - Anniversary Website */}
        <ProjectsCard
          icon={<FaGlobe className="text-blue-400 text-2xl" />}
          title="Anniversary Website"
          category="Web Development"
          date="2025"
          description="Designed and developed a full-fledged front-end website for a 1st-year anniversary event using React.js for the UI and Node.js for the backend. The website featured interactive elements, event details, and a dynamic RSVP system."
        />

        {/* Project 4 - IoT Solution in Azure */}
        <ProjectsCard
          icon={<FaCloud className="text-blue-600 text-2xl" />}
          title="End-to-End IoT Solution for High-Velocity Smart Meter Data Analysis in Azure"
          category="IoT & Cloud"
          date="2024"
          description="Developed a lambda architecture to process high-velocity smart meter data in real-time using Azure IoT Hub, DPS, and Stream Analytics. Implemented long-term data storage with Azure Storage and advanced analytics through Azure Databricks, enabling insights and visualization for data-driven decision-making."
        />

        {/* Project 5 - Computer Vision with Azure Cognitive */}
        <ProjectsCard
          icon={<FaBrain className="text-purple-400 text-2xl" />}
          title="Build a Computer Vision App with Azure Cognitive Services"
          category="AI & Computer Vision"
          date="2024"
          description="Created a computer vision application using Azure Cognitive Services to analyze images and extract meaningful insights. Utilized API variations to optimize performance and integrated the model into a scalable web application."
        />
      </div>
    </div>
  );
};

export default Projects;
