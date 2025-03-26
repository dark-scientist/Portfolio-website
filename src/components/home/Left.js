import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { BsCloudLightningFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiInstagram, FiMail, FiSend } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io";
import CV from "../../assets/prithwin_resume(updated).pdf";
import { bannerImg } from "../../assets/index";

const Left = () => {
  const [text] = useTypewriter({
    words: [
      "AI & ML",
      "Cloud Solutions",
      "Security & Networking",
      "Web-dev",
      "Analytics",
      "Real-World Applications",
    ],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full lgl:w-5/12 h-full bg-bodyColor rounded-2xl shadow-testShwdow z-10">
      {/* ===== Banner Section ===== */}
      <div className="w-full h-3/5">
        <img
          className="w-full h-full object-cover rounded-2xl"
          src={bannerImg}
          loading="priority"
          alt="bannerImage"
        />
      </div>

      {/* ===== Info Section ===== */}
      <div className="w-full h-2/5 flex flex-col justify-between border-t-0 rounded-bl-xl rounded-br-xl">
        <div className="flex flex-col items-center gap-2 py-10">
          <h1 className="text-textColor text-4xl font-semibold">
            Prithwinraj RM
          </h1>
          <p className="text-base text-designColor tracking-wide">
            {text}
            <Cursor cursorBlinking="false" cursorStyle="|" />
          </p>

          {/* ===== Social Icons ===== */}
          <div className="flex justify-center gap-2 mt-2">
            {/* GitHub */}
            <a
              href="https://github.com/dark-scientist"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-designColor duration-300 cursor-pointer text-xl"
            >
              <FaGithub />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/prithwin-raj-r-m-9bb8b1257"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-designColor duration-300 cursor-pointer text-xl"
            >
              <FaLinkedin />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/_prithwin._?igsh=MW1uZ2ljNnl4ZDBpag=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-designColor duration-300 cursor-pointer text-xl"
            >
              <FiInstagram />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/qr/WNRPCDL7T3X6J1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-designColor duration-300 cursor-pointer text-xl"
            >
              <IoLogoWhatsapp />
            </a>

            {/* Email */}
            <a
              href="mailto:18prithwin@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-designColor duration-300 cursor-pointer text-xl"
            >
              <FiMail />
            </a>
          </div>
        </div>

        {/* ===== Buttons: Download CV & Contact Me ===== */}
        <div className="flex h-14">
          {/* Download CV Button */}
          <a
            href={CV}
            target="_blank"
            className="w-1/2 border-t-[1px] borderRight border-t-zinc-800 text-sm tracking-wide uppercase gap-2 hover:text-designColor duration-300"
            rel="noreferrer"
          >
            <button className="w-full h-full flex justify-center items-center gap-2">
              Download CV <BsCloudLightningFill />
            </button>
          </a>

          {/* Contact Me Button */}
          <a
            href="https://wa.me/qr/WNRPCDL7T3X6J1"
            target="_blank"
            rel="noopener noreferrer"
            className="w-1/2"
          >
            <button className="w-full h-full border-t-[1px] border-t-zinc-800 text-sm tracking-wide uppercase flex justify-center items-center gap-2 hover:text-designColor duration-300">
              Contact Me <FiSend />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Left;
