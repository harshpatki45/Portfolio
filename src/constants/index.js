import project1 from "../assets/projects/project1.jpeg";
import project2 from "../assets/projects/project2.jpg";
import project3 from "../assets/projects/project3.jpg";
import project4 from "../assets/projects/project4.jpeg";

export const HERO_CONTENT = ` A passionate Full Stack Developer with expertise in building dynamic, bring creativity, attention to detail, and a strong enthusiasm for crafting visually stunning and user-friendly web applications. I love transforming ideas into interactive, responsive designs. My goal is to build seamless digital experiences that not only look great but also provide intuitive functionality. Whether it's a sleek portfolio or a dynamic web app, I am eager to collaborate and grow in this ever-evolving field of full stack development. Let's create something amazing together!`;

export const ABOUT_TEXT =  `I am a dedicated full stack developer currently in my 4th year of studying Computer Science.I have gained hands-on experience through projects such as Travel Story, Employee Management System, etc., utilizing MERN Stack, React, and various databases. Currently, I am developing the IMC portal, which is helping me refine my project management and collaboration skills. I thrive in team environments and enjoy tackling complex challenges, always striving for innovative solutions. Outside of technology, I'm passionate about cricket and love engaging in outdoor activities, which keep my energy high and my competitive spirit alive! I also have an enthusiastic interest in entrepreneurship and emerging tech trends, always eager to explore innovative ideas and opportunities that shape the future. I look forward to connecting with like-minded professionals and contributing to impactful projects.`;



export const PROJECTS = [
  {
    title: "Project Store",
    image: project4,
    description:
      "Developed a dynamic web application using the MERN stack that allows users to create, read, update, and delete (CRUD) products. Features include product creation with name, price, and image URL, price updates, and product deletion. This project enhanced my understanding of RESTful APIs, efficient state management, and full-stack development principles. ",
    technologies: ["MERN Stack", "RESTful APIs", "Tailwind "],
  },
  {
    title: "Travel Story",
    image: project1,
    description:
      "A MERN stack-based website where users can share and explore travel stories. Features include secure user authentication, a feed of travel stories with options to create, edit, or delete personal stories, and filter stories by location or category. Users can also manage their profiles, making it a simple and engaging platform for travelers to document and discover adventures. ",
    technologies: ["MERN Stack", "RESTful APIs", "Tailwind "],
  },
  {
    title: " Employee Management System",
    image: project3,
    description:
      ` Employee Management System (EMS) with Role-Based Access Control (RBAC):  The EMS simplifies task allocation and management within organizations, using local storage for data handling. 
         "Admin Dashboard": For authorized administrators to create and assign tasks with details like title, due date, employee, category, and description. 
         "Employee Dashboard": For employees to view their assigned tasks, track progress, and update task status.`,
    technologies: ["React", "Tailwind", "Local Storage"],
  },
  {
    title: "Fitness Exercise App",
    image: project2,
    description:
      "Built a website which gives us details of all the exercises with the bodypart it is focusing on.The website also gives us the videos related to the exercises.",
    technologies: ["React", "Material-UI", "Rapid-Api"],
  },
];

export const EXPERIENCE = [{
  year: "January 2025 - Present",
  role: "React Developer Internship",
  company: "Young Decade IT Software Solutions",
  description:  ` I am currently working as a React Developer, utilizing the MERN stack to build dynamic and 
                  responsive web applications. My role involves creating user-friendly interfaces with React, 
                  managing state efficiently, and integrating frontend components with backend technologies like 
                  Node.js and MySql. This position is enhancing my expertise in modern web development while 
                  refining my problem-solving and collaboration skills in a distributed team environment. `,
  technologies: ["React", "Node", "Express", "MySql", "Xampp"]
}];

export const CONTACT = {
  address: "Address: 12, Ganesh Colony, Rambagh(Near Dadawadi), Indore, Madhya Pradesh 452007, India",
  phoneNo: "Phone: +91 8103183490",
  email: "patkiharsh2@gmail.com",
};
