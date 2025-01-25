export async function GET(req: Request) {
  console.log("req",req.url);
  const response = {
    name: "Swarna Bese",
    role: "Developer",
    email: "lakshmibese@gmail.com",
    skills: [
      "Solana",
      "Anchor",
      "Rust",
      "Vue.js",
      "React.js",
      "Next.js",
      "Node.js",
      "Mongo DB",
    ],
    summary:
      "I am a Full-Stack Web and Blockchain Developer who loves building efficient, scalable, and user-friendly applications. Over time, I’ve gained experience in both front-end and back-end development, allowing me to create smooth user experiences and strong system designs. I work with frameworks like React.js, Vue.js, and Next.js to create responsive and dynamic websites. On the back-end, I use Node.js and MongoDB to build secure and reliable systems. I have developed projects on the Solana blockchain and written smart contracts using Anchor, showcasing my expertise in decentralized technologies. I focus on writing clean, easy-to-maintain code and staying updated with the latest tools and trends in web and blockchain development.",
    links: {
      resume:
        "https://drive.google.com/file/d/17SFfrYyiMsdy6hj6leyk-D3l3mciMTHa/view?usp=drive_link",
      github: "https://github.com/swarnabese12",
      linkedin: "https://www.linkedin.com/in/swarna-lakshmi-bese-570a0122a",
    },
    experiences: [
      {
        company_name: "Hallmark Global Technologies",
        duration: "May 2022 - Present",
        role: "SOFTWARE ENGINEER",
        highlights: [
          "Developed a PDF rendering and auto-field placement system using Vue.js, increasing user adoption by 20% and reducing customer support inquiries by 15%.",
          "Designed and implemented a custom dashboard with tailored components, enhancing user interaction and supporting a 50% increase in user engagement without compromising performance.",
          "Developed a custom form builder and approval mechanism, streamlining workflows and reducing processing time by 40%.",
          "Strengthened API security, leading to a 40% reduction in vulnerabilities and improving data protection.",
          "Designed and implemented custom UI components, raising user satisfaction scores by 15%.",
        ],
      },
    ],
    projects: [
      {
        name: "Solana Bank",
        link: "https://solana-bank-ten.vercel.app",
        image:
          "https://raw.githubusercontent.com/swarnabese12/My-Images-Database/master/projects/solana-bank.png",
        git: "https://github.com/swarnabese12/Solana-Bank-dApp",
        description:
          "A decentralized banking system built on the Solana blockchain (SOLs) that allows users to deposit and withdraw funds, request and repay loans, and view detailed transaction history. The smart contract is written using Anchor and Rust to securely manage all functionalities directly on the blockchain. Loan repayments include interest calculations based on the loan amount, interest rate, and loan term. The user interface is built with Next.js and Tailwind CSS, providing a simple, visually appealing, and interactive dashboard. This system makes decentralized finance accessible and user-friendly without relying on a traditional backend.",
        technologies: [
          "Next.js",
          "React",
          "solana",
          "Rust",
          "Anchor",
          "Tailwind",
        ],
      },
      {
        name: "Naruto RPS Game",
        link: "https://naruto-nft-game.vercel.app",
        image:
          "https://raw.githubusercontent.com/swarnabese12/My-Images-Database/master/projects/naruto-nft-game.png",
        git: "https://github.com/swarnabese12/Naruto-RPS-NFT-game",
        description:
          "The Naruto-themed rock-paper-scissors game, built with Next.js, Tailwind CSS, and Solana Blockchain, allows players (connected wallet users) to play against the computer and earn exclusive NFTs as rewards. Users can view and transfer their NFTs, blending fun gameplay with blockchain-powered innovation. Additionally, players can create their own custom NFTs directly within the platform, adding a personal touch to their collection. Users can also view their NFT collection in a detailed way, ensuring a comprehensive and engaging experience.",
        technologies: ["React", "Next.js", "Rust", "Anchor", "Tailwind"],
      },
      {
        name: "Lottery",
        link: "https://lottery-blond-xi.vercel.app",
        image:
          "https://raw.githubusercontent.com/swarnabese12/My-Images-Database/master/projects/lottery.png",
        git: "https://github.com/swarnabese12/Lottery",
        description:
          "A lottery system on the Solana blockchain using Anchor (written as a smart contract) allows users to buy tickets, with each ticket requiring payment in SOL, and randomly selects a winner once all tickets are sold. 80% of the total ticket sales amount (lamports) is transferred to the winner, while 20% is retained. The system ensures fairness with random winner selection and provides transparency by recording all transactions on the blockchain. A user-friendly interface built with Next.js and Tailwind CSS enables users to participate easily and view lottery details in real time.",
        technologies: [
          "Next.js",
          "React",
          "solana",
          "Rust",
          "Anchor",
          "Tailwind",
        ],
      },

      {
        name: "Blog Posts",
        link: "https://blog-posts-next-js-five.vercel.app",
        image:
          "https://raw.githubusercontent.com/swarnabese12/My-Images-Database/master/projects/blog-posts.png",
        git: "https://github.com/swarnabese12/BlogPosts-NextJS",
        description:
          "A dynamic blog posts feed built with Next.js that displays blog posts fetched from an API in a responsive grid layout. Each blog post showcases its title, a summary, and user reactions like likes, dislikes, and loves in an attractively styled layout. Users can search for posts by title, content, or tags, with built-in SEO optimization to boost discoverability and performance. The 'Load More' feature dynamically fetches additional blog posts via API calls, ensuring seamless exploration of more content. Built with Next.js and Tailwind CSS, the app provides a fast, engaging, and visually appealing user experience.",
        technologies: ["Next.js", "React", "Tailwind "],
      },
      {
        name: "Smart Watch Landing Page",
        link: "https://smart-watch-landing.vercel.app",
        image:
          "https://raw.githubusercontent.com/swarnabese12/My-Images-Database/master/projects/smart-watch.png",
        git: "https://github.com/swarnabese12/Smart-Watch-LandingPage",
        description:
          "A Smart Watch landing page built with Next.js and Tailwind CSS, designed to showcase the features of a cutting-edge smart watch. The page provides a visually appealing and responsive layout, highlighting key watch features in an engaging and organized manner. It includes sections for features, testimonials, and a Contact Us section, creating an immersive experience for viewers. While navigation buttons are included for design purposes, they are non-functional, as the page is solely for viewing the watch features. The combination of Next.js and Tailwind CSS ensures a sleek, modern design and smooth performance.",
        technologies: ["React", "Next.js", "Tailwind"],
      },
      {
        name: "Filpkart.com",
        link: "https://flipkart-react-js.vercel.app",
        image:
          "https://raw.githubusercontent.com/swarnabese12/My-Images-Database/master/projects/flipkart.png",
        git: "https://github.com/swarnabese12/Flipkart-ReactJs",
        description:
          "An e-commerce website built with React and CSS, showcasing collections for Men, Women, and Kids. Users can explore a wide range of products, view individual item details such as images, descriptions, and prices, all without the need for a backend. The Add to Cart feature enables users to add items to their shopping cart, and the Cart Details section provides an overview of selected items, quantities, and total cost. The site is designed for a smooth, responsive shopping experience, with all interactions handled on the frontend.",
        technologies: ["React", "CSS3"],
      },
      {
        name: "SOL Transfer Tool",
        link: "https://sol-transfer-liard.vercel.app",
        image:
          "https://raw.githubusercontent.com/swarnabese12/My-Images-Database/master/projects/SOL-transfer.png",
        git: "https://github.com/swarnabese12/SOL-Transfer-Tool",
        description:
          "A basic tool for transferring SOL from browser connected wallet to other wallet. User can transfer SOLs from his/her wallet to the receiver address.",
        technologies: ["Solana", "Next.js", "Tailwind"],
      },
      {
        name: "Kodefast",
        link: "https://kodefast.com",
        image:
          "https://raw.githubusercontent.com/swarnabese12/My-Images-Database/master/projects/kodefast.jpeg",
        description:
          "Kodefast is a dynamic no-code platform that enables both non-technical users and professionals to quickly create custom applications using generative AI. It simplifies app development, offering a user-friendly interface with drag-and-drop functionality and AI enhancements.",
        technologies: ["Vue", "Node", "MongoDb"],
      },
      {
        name: "eSigns",
        link: "https://esigns.io",
        image:
          "https://raw.githubusercontent.com/swarnabese12/My-Images-Database/master/projects/eSigns.jpeg",
        description:
          "eSigns is a electronic signature platform. Its comprehensive document and data management solutions are powerful engines to accelerate growth by reaching customers with lightning speed.",
        technologies: ["Vue", "Node", "MongoDb"],
      },
    ],
  };
  return new Response(JSON.stringify(response), {
    headers: { "Content-Type": "application/json" },
  });
}
