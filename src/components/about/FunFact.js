import React from "react";
import { GiBoxingGlove, GiHighKick, GiMuscleUp } from "react-icons/gi";
import { FaDumbbell, FaFilm, FaPen } from "react-icons/fa";
import { MdSportsKabaddi } from "react-icons/md";
import FunFactCard from "./FunFactCard";

const FunFact = () => {
  return (
    <div>
      {/* MMA Section */}
      <div className="text-center mb-4">
        <h2 className="text-xl font-bold text-white">Beyond Tech: MMA & Filmmaking</h2>
        <p className="text-sm text-gray-400 mt-1">
          National-level MMA athlete training across Boxing, Wrestling, BJJ, Judo, and Muay Thai —
          and a filmmaker who writes, directs, and produces short films as Film Club Head.
        </p>
      </div>

      <div className="px-0 grid grid-cols-2 md:grid-cols-4 gap-4 pb-8">
        <FunFactCard icon={<GiBoxingGlove />} des="Boxing — Precision & Power" />
        <FunFactCard icon={<GiMuscleUp />} des="Wrestling — Control & Grit" />
        <FunFactCard icon={<GiHighKick />} des="BJJ & Judo — Ground Mastery" />
        <FunFactCard icon={<MdSportsKabaddi />} des="Muay Thai — Striking Art" />
        <FunFactCard icon={<FaDumbbell />} des="Discipline & Mental Strength" />
        <FunFactCard icon={<FaFilm />} des="Short Film Director & Producer" />
        <FunFactCard icon={<FaPen />} des="Script Writer — Sell Scripts" />
        <FunFactCard icon={<FaDumbbell />} des="Social Media Content Creator" />
      </div>
    </div>
  );
};

export default FunFact;
