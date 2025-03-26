import React from "react";
import Title from "../home/Title";

const Contact = () => {
  return (
    <div className="w-full">
      {/* Section Title */}
      <Title title="Get" subTitle="in Touch" />

      {/* Contact Info Section */}
      <div className="p-6 w-full flex flex-col md:flex-row justify-between gap-4 md:gap-10 lgl:gap-20">
        <div className="w-full lgl:w-1/2">
          {/* Address */}
          <p className="flex gap-6 justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
            <span className="bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center">
              Address:
            </span>
            Chennai, India
          </p>

          {/* Phone */}
          <p className="flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
            <span className="bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center">
              Phone:
            </span>
            +91 9566009508
          </p>
        </div>

        <div className="w-full lgl:w-1/2">
          {/* Email */}
          <p className="flex justify-between lgl:gap-6 w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
            <span className="bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center">
              Email:
            </span>
            18prithwin@gmail.com
          </p>

          {/* Freelance Availability */}
          <p className="flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
            <span className="bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center">
              Freelance:
            </span>
            Available
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
