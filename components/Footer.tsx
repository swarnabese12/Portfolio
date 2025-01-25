import { TiHeartFullOutline } from "react-icons/ti";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8 border-b border-gray-700">
          <div>
            <h3 className="text-customGreen text-2xl font-bold">Swarna Bese</h3>
            <p className="text-gray-400 mt-2">Software Developer</p>
          </div>
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold">Follow Me</h4>
            <div className="flex justify-center md:justify-end space-x-6 mt-4">
              <a
                href="https://github.com/swarnabese12"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-customGreen transition-colors text-2xl"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/swarna-lakshmi-bese-570a0122a"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-customGreen transition-colors text-2xl"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:lakshmibese@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-customGreen transition-colors text-2xl"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-sm text-gray-500">
          <div className="flex items-center">
            Designed & Built with
            <TiHeartFullOutline className="text-customGreen text-xl ml-1 mr-1" />
            by Swarna Bese
          </div>
          <div className="mt-4 md:mt-0">© 2025 Swarna Bese. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
