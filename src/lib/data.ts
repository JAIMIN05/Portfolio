import { Code, Database, FileCode, Globe, Layout, Server, Settings, Terminal, Languages, Blocks, Container, PenTool as Tool } from 'lucide-react';

// Projects data
export const projects = [
  {
    id: 'ChatApplication_with_Realtime_AI_Code_Generation',
    title: 'ChatApplication with Realtime AI Code Generation',
    description: 'My project is ChatApplication with Realtime AI Code Generation. In this app, more than two users can connect and chat with each other in real time. Users can also generate code using Gemini AI and run the code directly in the browser. It combines chatting and live coding features in one platform.',
    image: 'https://static.vecteezy.com/system/resources/previews/022/223/650/non_2x/smart-ai-chat-bot-communicate-with-human-vector.jpg',
    tech: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB','Socket.io', 'WebContainer'],
    githubLink: 'https://github.com/JAIMIN05/ChatApplication_with_Realtime_AI_Code_Generation.git',
    featured: true,
  },
  {
    id: 'wanderlust',
    title: 'Wanderlust Travel App',
    description: 'Wanderlust is a travel platform that lets users effortlessly search and discover villas, resorts, and hotels tailored to their preferences. With secure and seamless login, users can manage bookings and saved destinations with ease. Travelers can also add new listings to share hidden gems with the community. The platform encourages users to rate and review stays, helping others make informed decisions.',
    image: 'https://aicontentfy-customer-images.s3.eu-central-1.amazonaws.com/airbnb_e98620c4-8959-4a96-97f8-70768648088e.jpeg',
    tech: ['Node.js', 'Express', 'MongoDB', 'HTML' ,' CSS','JavaScript','Bootstrap','Mapbox', 'Cloudinary', 'Passport'],
    liveLink: 'https://wanderlust-one-sooty.vercel.app/listings',
    githubLink: 'https://github.com/JAIMIN05/Wanderlust.git',
    featured: true,
  },
  {
    id: 'CareCrew',
    title: 'CareCrew - Roadside Assistance & Emergency Support',
    description: 'CareCrew is a smart roadside assistance platform that connects drivers with nearby service providers in real-time. It offers one-click emergency help, live tracking, transparent pricing, and 24/7 support. Users can access trusted services like towing, fuel delivery, and tire changes. The platform also includes a dashboard to manage service history, vehicle info, and emergency contacts.',
    image: 'https://cdn.prod.website-files.com/643c88f77d21c082a4c59e2e/64468f2a1fad0ae6ba0cb596_62f12ef5b7b092fc7999f9b7_6271763ec548ec5ddf8dbca0_what-is-roadside-assistance.webp',
    tech: ['React','Node.js', 'Express', 'MongoDB', 'MapBox','Nodemailer', 'TailwindCSS'],
    githubLink: 'https://github.com/DetrojaRadhey/Odoo_x_Mindbend.git',
    featured: false,
  },
  {
    id: 'Employee Management System',
    title: 'Employee Management System',
    description: 'The Employee Management System is a task management web app built with React and Vite. It enables admins to create and assign tasks, while employees can view and manage their tasks efficiently. The system supports tracking task statuses like New, Active, Completed, and Failed. With a responsive design, it works seamlessly across all devices.',
    image: 'https://desktrack.timentask.com/blog/wp-content/uploads/2022/07/Employee-Management-System.png',
    tech: ['React', 'Tailwind CSS'],
    liveLink: 'https://employee-management-system-vert-gamma.vercel.app/',
    githubLink: 'https://github.com/JAIMIN05/Employee_Management_System.git',
    featured: false,
  },
  {
    id: 'Weather_App',
    title: 'Weather App',
    description: 'This is a weather application built using ReactJS and Material-UI components. The application allows users to search for weather information of any city using the OpenWeatherMap API. It features a clean search interface with error handling and displays various weather metrics including temperature, humidity, and weather description',
    image: 'https://i.ytimg.com/vi/MIYQR-Ybrn4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD1b0XOWuIiAJ105lCfSAjWIrOBfw',
    tech: ['React', 'Material-UI'],
    githubLink: 'https://github.com/JAIMIN05/Weather_App.git',
    featured: false,
  },
  {
    id: 'Social Media Analyzer',
    title: 'Social Media Analyzer',
    description: 'Social Media Analyzer is a web app that helps businesses understand which types of social media posts get the most engagement. It uses Astra DB to store data like likes, shares, and comments, and Langflow to analyze that data and generate insights. Users can see which post types like reels, carousels, or images perform best. The tool makes it easier to improve social media strategies using AI-powered analysis.',
    image: 'https://www.aimtechnologies.co/wp-content/uploads/2023/05/Social-Media-Analytics-For-Brands-1.png',
    tech: ['React', 'Node.js', 'Express', 'Astra DB', 'Langflow'],
    liveLink: 'https://supermind-hackathon-frontend.vercel.app/',
    githubLink: 'https://github.com/DetrojaRadhey/supermind_hackathon.git',
    featured: false,
  },
];

// Skills data
export const skills = [
  {
    category: 'Programming Languages',
    icon: Code,
    items: [
      { name: 'JavaScript', proficiency: 90 },
      { name: 'Java', proficiency: 75 },
      { name: 'C', proficiency: 70 },
    ],
  },
  {
    category: 'Web Technologies',
    icon: Globe,
    items: [
      { name: 'HTML', proficiency: 90 },
      { name: 'CSS', proficiency: 85 },
      { name: 'Bootstrap', proficiency: 80 },
      { name: 'ReactJS', proficiency: 85 },
      { name: 'Material UI', proficiency: 75 },
      { name: 'Tailwind CSS', proficiency: 85 },
    ],
  },
  {
    category: 'Backend Development',
    icon: Server,
    items: [
      { name: 'Node.js', proficiency: 80 },
      { name: 'Express.js', proficiency: 85 },
      { name: 'Socket.io', proficiency: 75 },
      { name: 'Langflow', proficiency: 70 },
    ],
  },
  {
    category: 'Database Systems',
    icon: Database,
    items: [
      { name: 'MongoDB', proficiency: 80 },
      { name: 'SQL', proficiency: 75 },
    ],
  },
  {
    category: 'Developer Tools',
    icon: Tool,
    items: [
      { name: 'Git', proficiency: 85 },
      { name: 'GitHub', proficiency: 85 },
      { name: 'VS Code', proficiency: 90 },
    ],
  },
];

// Achievements data
export const achievements = [
  {
    id: 'Hackathon',
    title: 'Odoo x Mindbend Hackathon',
    description: ' Placed in the top 6 among 1200+ teams in the Odoo x Mindbend Hackathon 2025 at SVNIT, Suratselected among the top 50 finalists for innovative project execution',
    icon: FileCode,
    date: '6 April 2025',
    certificateUrl: 'https://media.licdn.com/dms/image/v2/D4D22AQEowR8asobsog/feedshare-shrink_2048_1536/B4DZZb7jDlGwA4-/0/1745299066646?e=1750896000&v=beta&t=f3Uh4mjrI6p_yrEpDze4JGyAtMuXKINkZnOgHI40tEM',
  },  
  {
    id: 'nptel',
    title: 'NPTEL Certificate',
    description: 'Completed Data Structures and Algorithms with Java certification from NPTEL with distinction.',
    icon: FileCode,
    date: 'July-Oct 2023',
    certificateUrl: 'https://media.licdn.com/dms/image/v2/D561FAQHGW0fGKWDtGw/feedshare-document-images_800/feedshare-document-images_800/1/1701239946307?e=1748476800&v=beta&t=WNOLuX3kkehmofj4WhJg1IetlrZEPx33-bvL77jYyxI',
  },  
  {
    id: 'nptel2',
    title: 'NPTEL Certificate',
    description: 'Completed Database Management System certification from NPTEL with distinction.',
    icon: FileCode,
    date: 'Jan-March 2024',
    certificateUrl: 'https://media.licdn.com/dms/image/v2/D4D1FAQF1zBMGk_7Cyw/feedshare-document-images_800/feedshare-document-images_800/1/1712161203723?e=1748476800&v=beta&t=N3hm8zkJby0Oq-B4swWjv-GJcM7yY8uQvG4tNcVw64A',
  },
  {
    id: 'Hackathon',
    title: 'Level SuperMind Hackathon',
    description: 'Finalist in the Level SuperMind Hackathon 2025 at Mumbai, ranking among 500+ teams in a national-level competition',
    icon: Terminal,
    date: 'January 2025',
    certificateUrl: '/supermind.jpg',
  },
  {
    id: 'leetcode',
    title: 'LeetCode Badge',
    description: 'Achieved Top 6.9% ranking on LeetCode by solving over 100+ problems, showcasing strong DSA skills.',
    icon: Code,
    date: 'Ongoing',
    certificateUrl: '/100_days.png',
  },
  {
    id: 'sparks',
    title: 'Sparks to Ideas Internship',
    description: 'I have successfully completed a one-month summer internship at Sparks to Ideas, where I focused on HTML, CSS, and JavaScript. This experience has been incredibly rewarding and has significantly enhanced my web development skills',
    icon: Globe,
    date: 'July 2023',
    certificateUrl: 'https://media.licdn.com/dms/image/v2/D4D1FAQH8kLOdX3EN-Q/feedshare-document-images_1280/feedshare-document-images_1280/1/1720333930758?e=1748476800&v=beta&t=qQZHttBqvNzHpoYFKSJbSFY2QUHV4sK8PC47xQ-jLWE',
  },
];

// About me data
export const aboutMe = {
  name: 'Jaimin Kaneriya',
  title: 'MERN Stack Developer',
  bio: `Hello! 👋 I'm Jaimin Kaneriya, a third-year student at CHARUSAT University with a burning passion for technology and a love for problem-solving. 💻

In my journey, I've delved deep into the MERN (MongoDB, Express.js, React.js, Node.js) stack, honing my skills in both frontend and backend development. Proficient in HTML, CSS, JavaScript, ReactJs, and Bootstrap for crafting beautiful and responsive user interfaces, while Node.js and Express.js empower me to build robust backend systems. MongoDB serves as my preferred database solution, enabling efficient data management for dynamic applications. 🌐

Additionally, my fascination with algorithms and data structures led me to excel in DSA (Data Structures and Algorithms), particularly in Java. I'm proud to have achieved an NPTEL certificate in DSA using Java and have solved over 200+ LeetCode problems, continuously sharpening my problem-solving skills. 💡

I'm currently seeking opportunities to leverage my skills in a professional setting and contribute to meaningful projects that make a difference.`,
  education: 'B.Tech in Computer Science (2022-2026)',
  location: 'Rajkot, Gujarat, India',
};