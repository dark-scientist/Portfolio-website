import React from "react";
import { GiBoxingGlove, GiPunch, GiHighKick, GiMuscleUp } from "react-icons/gi";
import { FaDumbbell } from "react-icons/fa";
import FunFactCard from "./FunFactCard";

const FunFact = () => {
  return (
    <div>
      {/* Intro Section */}
      <div className="text-center mb-4">
        <h2 className="text-xl font-bold text-white">🥋 Beyond Tech: My MMA Journey</h2>
        <p className="text-sm text-gray-400 mt-1">
          I’m not just coding my way through life — I’m sharpening my mind and body through MMA. 
          From striking precision in <strong>Boxing</strong> to mastering ground control in <strong>BJJ</strong>, 
          I push my limits with discipline and growth. 💥
        </p>
      </div>

      {/* MMA Discipline Cards */}
      <div className="px-0 grid grid-cols-2 md:grid-cols-4 gap-4 pb-8">
        <FunFactCard icon={<GiBoxingGlove />} des="Boxing - Precision & Power" />
        <FunFactCard icon={<GiMuscleUp />} des="Wrestling - Control & Grit" />
        <FunFactCard icon={<GiHighKick />} des="BJJ - Technique & Strategy" />
        <FunFactCard icon={<GiPunch />} des="Muay Thai - Striking Mastery" />
        <FunFactCard icon={<FaDumbbell />} des="Building Discipline & Mental Strength" />
      </div>
    </div>
  );
};

export default FunFact;
