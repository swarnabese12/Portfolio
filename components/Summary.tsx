"use client";

import { useEffect, useContext } from "react";
import UserContext from "@/context/UserDetailsContext";

const Summary = () => {
  const user: any = useContext(UserContext);

  useEffect(() => {}, []);

  return (
    <main>
      <div className="w-full">
        <div className="border border-customGreen rounded-lg p-4">
          <p className="text-gray-300 leading-relaxed">
            {user.summary ||
              "I am a Full-Stack Web and Blockchain Developer who loves building efficient, scalable, and user-friendly applications. Over time, I’ve gained experience in both front-end and back-end development, allowing me to create smooth user experiences and strong system designs. I work with frameworks like React.js, Vue.js, and Next.js to create responsive and dynamic websites. On the back-end, I use Node.js and MongoDB to build secure and reliable systems. I have developed projects on the Solana blockchain and written smart contracts using Anchor, showcasing my expertise in decentralized technologies. I focus on writing clean, easy-to-maintain code and staying updated with the latest tools and trends in web and blockchain development." ||
              "No summary provided yet."}
          </p>
        </div>
      </div>
    </main>
  );
};

export default Summary;
