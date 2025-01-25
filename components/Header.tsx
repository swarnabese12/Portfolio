"use client";

import { useContext } from "react";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { Tooltip } from "@nextui-org/tooltip";
import women from "../images/hinata5.jpg";
import UserContext from "../context/UserDetailsContext";

export default function Header() {
  const user: any = useContext(UserContext);
  return (
    <main>
      <div className="w-full container mx-auto flex flex-col items-center text-center">
        <div className="relative">
          <div className="absolute inset-0 w-32 h-32 rounded-full bg-customGreen blur-lg animate-pulse"></div>
          <Image
            src={women}
            alt="Your Name"
            width={128}
            height={128}
            className="relative z-10 rounded-full border-4 border-gray-700"
          />
        </div>

        <h1 className="text-3xl font-bold text-gray-200 mt-4">Swarna Bese</h1>
        <p className="text-lg text-customGreen">Software Engineer</p>

        <div className="flex space-x-6 mt-4">
          <Tooltip content="Github" className="text-green-500">
            <a
              href={user?.links?.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-customGreen"
            >
              <FaGithub size={28} />
            </a>
          </Tooltip>
          <Tooltip content="Mail" className="text-green-500">
            <a
              href="mailto:lakshmibese@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-customGreen"
            >
              <FaEnvelope size={28} />
            </a>
          </Tooltip>
          <Tooltip content="LinkedIn" className="text-green-500">
            <a
              href={user?.links?.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-customGreen"
            >
              <FaLinkedin size={28} />
            </a>
          </Tooltip>
        </div>
      </div>
    </main>
  );
}
