import { FaReact, FaVuejs, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiSolana } from "react-icons/si"; 
import { FiAnchor } from "react-icons/fi";
import { SiNextdotjs } from "react-icons/si";
import { FaRust } from "react-icons/fa";

const skills = [
  { name: "Vue.js", icon: <FaVuejs size={30} className="text-customGreen" /> },
  { name: "React.js", icon: <FaReact size={30} className="text-customGreen" /> },
  { name: "Next.js", icon: <SiNextdotjs size={30} className="text-customGreen" /> },
  { name: "Node.js", icon: <FaNodeJs size={30} className="text-customGreen" /> },
  { name: "Mongo DB", icon: <FaDatabase size={30} className="text-customGreen"/> },
  { name: "Solana", icon: <SiSolana size={30} className="text-customGreen" /> },
  { name: "Anchor", icon: <FiAnchor size={30} className="text-customGreen" /> },
  { name: "Rust", icon: <FaRust size={30} className="text-customGreen" /> },
];

export default function Skills() {
  return (
    <div className="py-10 bg-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl text-customGreen font-bold mb-8">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center bg-gray-800 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-gray-600 hover:text-white"
            >
              <div className="mb-4">{skill.icon}</div>
              <h3 className="text-lg font-semibold text-gray-300">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
