import { useContext } from "react";
import UserContext from "@/context/UserDetailsContext";
import { FaGithub } from "react-icons/fa";
import { Tooltip } from "@nextui-org/tooltip";
import Image from "next/image";

const Projects = () => {
  const user: any = useContext(UserContext);
  const projects: any = user.projects;

  return (
    <div className="mt-8">
      <h2 className="text-3xl font-bold text-center text-customGreen mb-8">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {projects?.map((project: any, index: number) => (
          <div
            key={index}
            className="bg-gray-800 shadow-md rounded-lg overflow-hidden transition-all snake-border"
          >
            <Image
              src={project.image}
              alt={project.name}
              width={400}
              height={250}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">
                  {project.name}
                </h3>
                <Tooltip
                  content="View in Github"
                  placement="left"
                  className="text-green-500"
                >
                  <a
                    href={project.git}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-customGreen text-lg hover:text-customGreen/80"
                  >
                    <FaGithub size={26} />
                  </a>
                </Tooltip>
              </div>
              <p className="text-gray-300 text-sm my-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project?.technologies?.map((tech: any, idx: number) => (
                  <span
                    key={idx}
                    className="text-xs bg-customGreen/10 px-2 py-1 rounded-full text-customGreen"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center mt-4">
                <span className="text-sm">View live project:</span>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-customGreen hover:underline text-sm ml-1"
                >
                  {project.link}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
