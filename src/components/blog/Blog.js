import React from "react";
import Title from "../home/Title";
import { FaAward, FaRobot, FaSatellite } from "react-icons/fa";
import { SiMicrosoft, SiAnthropic } from "react-icons/si";
import { MdVerified } from "react-icons/md";

const CertCard = ({ icon, issuer, title, date, credentialUrl }) => (
  <div className="py-5 flex items-start gap-4 border-b-[1px] border-b-zinc-800 group">
    <div className="w-12 h-12 flex-shrink-0 flex justify-center items-center bg-zinc-800 rounded-full text-designColor text-xl">
      {icon}
    </div>
    <div className="flex flex-col gap-1">
      <p className="text-xs text-designColor uppercase tracking-widest">{issuer}</p>
      <h3 className="text-base font-semibold text-[#ccc] group-hover:text-designColor duration-300 leading-snug">
        {title}
      </h3>
      <p className="text-xs text-gray-500">{date}</p>
      {credentialUrl && (
        <a
          href={credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-xs text-designColor hover:underline mt-1"
        >
          <MdVerified /> Verify Credential
        </a>
      )}
    </div>
  </div>
);

const Blog = () => {
  return (
    <div>
      <Title title="Certifications &" subTitle="Achievements" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 px-6">
        <div>
          <CertCard
            icon={<FaRobot />}
            issuer="Anthropic Academy"
            title="Claude 101"
            date="Jun 2026"
            credentialUrl="https://verify.skilljar.com/c/3xduawc6psvv"
          />
          <CertCard
            icon={<FaRobot />}
            issuer="Anthropic Academy"
            title="AI Fluency: AI Capabilities & Limitations"
            date="Jun 2026"
            credentialUrl="https://verify.skilljar.com/c/pjcc4n5s3ijk"
          />
          <CertCard
            icon={<FaRobot />}
            issuer="Anthropic Academy"
            title="AI Fluency: Framework & Foundations"
            date="Jun 2026"
            credentialUrl="https://verify.skilljar.com/c/xs3ecfuin6wh"
          />
        </div>
        <div>
          <CertCard
            icon={<SiMicrosoft />}
            issuer="Microsoft · Coursera"
            title="Build a Computer Vision App with Azure Cognitive Services"
            date="Oct 2024"
            credentialUrl="https://coursera.org/verify/JHQWA1137C29"
          />
          <CertCard
            icon={<FaSatellite />}
            issuer="International Astronomical Search Collaboration"
            title="Asteroid Discovery – Certificate of Recognition"
            date=""
            credentialUrl={null}
          />
          <CertCard
            icon={<FaAward />}
            issuer="Bharat Electric Summit"
            title="Presented Speech-to-Speech RAG Chatbot to Industry Stakeholders"
            date="2026"
            credentialUrl={null}
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
