"use client";

import { useContext } from "react";
import UserContext from "@/context/UserDetailsContext";
import { FaBriefcase } from "react-icons/fa";

export default function Experience() {
  const user: any = useContext(UserContext);
  const experiences: any = user.experiences;

  return (
    <div className="bg-gray-900 rounded-xl shadow-lg space-y-8">
      <h2 className="text-3xl font-bold text-customGreen text-center mb-8">
        Experience
      </h2>

      {experiences?.map((exp: any, index: number) => (
        <div
          key={index}
          className="bg-gray-800 p-6 rounded-2xl shadow-xl transform hover:scale-105 hover:shadow-2xl transition-all duration-300"
        >
          <div className="flex items-center mb-5 border-b border-gray-500">
            <FaBriefcase className="text-customGreen text-3xl mr-4" />
            <div className="flex-grow">
              <h3 className="text-2xl font-semibold text-white">
                {exp.company_name}
              </h3>
              <p className="text-sm text-gray-400 mt-1 mb-4">{exp.role}</p>
            </div>
            <p className="text-sm text-gray-500 mt-1 ml-auto">{exp.duration}</p>
          </div>

          <ul className="list-disc list-inside space-y-3 pl-6">
            {exp.highlights.map((highlight: any, idx: number) => (
              <li key={idx} className="text-gray-300">
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
