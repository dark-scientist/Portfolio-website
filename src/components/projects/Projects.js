import React from "react";
import {
  FaSpotify,
  FaCreditCard,
  FaGlobe,
  FaCloud,
  FaBrain,
  FaWater,
} from "react-icons/fa";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div>
      <Title title="Recent" subTitle="Projects" />

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10 px-6">
        {/* Project 1 - DCRNN Groundwater */}
        <ProjectsCard
          icon={<FaWater className="text-cyan-400 text-2xl" />}
          title="DCRNN-Based Groundwater Quality Prediction"
          category="Deep Learning · Graph Neural Networks · GIS"
          date="2026"
          description="Developed a graph-based DCRNN model to predict groundwater quality indicators for Perambalur District using Copernicus land-use TIFF data, hydro-geochemical indices, and multi-year well observations. Engineered features from raster/tabular sources — ionic ratios, seasonal encodings, elevation attributes — and generated well-wise forecasts for WQI, Na, PI, SAR, and MHR."
        />

        {/* Project 2 - Spotify Insights */}
        <ProjectsCard
          icon={<FaSpotify className="text-green-500 text-2xl" />}
          title="Spotify Business Insights with LLM"
          category="AI/ML · NLP · Data Analytics"
          date="2025"
          description="Leveraged LLMs (GPT-4, BERT) and ML models (Facebook Prophet, LSTM) to analyze Spotify data for music trend predictions. Used Spotipy, Pandas, VADER for sentiment analysis, and Streamlit + Plotly for interactive visualizations."
        />

        {/* Project 3 - Credit Card Fraud Detection */}
        <ProjectsCard
          icon={<FaCreditCard className="text-red-500 text-2xl" />}
          title="Credit Card Fraud Detection System"
          category="Machine Learning · Finance · DevOps"
          date="2025"
          description="Developed under Worldline mentorship — a real-time fraud detection system using XGBoost, SMOTE for class imbalance, and RandomizedSearchCV for tuning. Integrated MQTT for live transaction streaming and Flask for simulation. Built an interactive Streamlit dashboard with Scikit-learn, Pandas, and Matplotlib."
        />

        {/* Project 4 - Anniversary Website */}
        <ProjectsCard
          icon={<FaGlobe className="text-blue-400 text-2xl" />}
          title="Anniversary Website"
          category="Web Development · React.js · Node.js"
          date="2025"
          description="Designed and developed a full-fledged front-end website for a 1st-year anniversary event using React.js for the UI and Node.js for the backend. Featured interactive elements, event details, and a dynamic RSVP system."
        />

        {/* Project 5 - IoT Solution in Azure */}
        <ProjectsCard
          icon={<FaCloud className="text-blue-600 text-2xl" />}
          title="End-to-End IoT Solution for Smart Meter Data Analysis"
          category="IoT · Azure · Cloud Architecture"
          date="2024"
          description="Built a lambda architecture to process high-velocity smart meter data in real-time using Azure IoT Hub, DPS, and Stream Analytics. Implemented long-term storage with Azure Storage and advanced analytics through Azure Databricks for data-driven insights."
        />

        {/* Project 6 - Computer Vision Azure */}
        <ProjectsCard
          icon={<FaBrain className="text-purple-400 text-2xl" />}
          title="Computer Vision App with Azure Cognitive Services"
          category="AI · Computer Vision · Cloud"
          date="2024"
          description="Created a computer vision application using Azure Cognitive Services to analyze images and extract meaningful insights. Optimized via API variations and integrated into a scalable web application."
        />
      </div>
    </div>
  );
};

export default Projects;
