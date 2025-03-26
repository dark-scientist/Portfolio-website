import React from "react";
import SidenavTitle from "./SidenavTitle";

const Sidenav = () => {
  return (
    <div className="px-7 py-4">
      {/* ====== Menu Section ====== */}
      <SidenavTitle title="M" subTitle="enu" />
      <ul>
        <li className="sidenavLi">Home</li>
        <li className="sidenavLi">About Me</li>
        <li className="sidenavLi">Projects</li>
        <li className="sidenavLi">Contact</li>
      </ul>

      {/* ====== Projects Section ====== */}
      <SidenavTitle title="P" subTitle="rojects" />
      <ul>
        <li className="sidenavLi">Spotify Business Insights with LLM</li>
        <li className="sidenavLi">Credit Card Fraud Detection</li>
        <li className="sidenavLi">Anniversary Website</li>
        <li className="sidenavLi">Azure IoT Smart Meter Analysis</li>
        <li className="sidenavLi">Computer Vision App with Azure</li>
      </ul>

      {/* ====== Latest Posts Section ====== */}
      <SidenavTitle title="L" subTitle="atest Posts" />
      <ul>
        <li className="sidenavLi">Building a Full-Stack MERN App</li>
        <li className="sidenavLi">Deploying ML Models on Azure</li>
        <li className="sidenavLi">Guide to MQTT Protocol in IoT</li>
        <li className="sidenavLi">Optimizing Fraud Detection Models</li>
      </ul>

      {/* ====== Reach Me Section ====== */}
      <SidenavTitle title="R" subTitle="each Me" />
      <ul>
        <li className="sidenavLi">+91 9566009508</li>
        <li className="sidenavLi">18prithwin@gmail.com</li>
        <li className="sidenavLi">
          <a
            href="https://www.linkedin.com/in/prithwin-raj-r-m-9bb8b1257"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li className="sidenavLi">
          <a
            href="https://github.com/dark-scientist"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidenav;
