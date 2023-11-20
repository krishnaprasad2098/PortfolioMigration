import Limra from "../assets/Limra.jpeg";
import Prodapt from "../assets/Prodapt.png";

const ExperienceData = [
  {
    id: 1,
    company: "Prodapt",
    title: "Project Intern",
    duration: "Sep 2023 to Feb 2024",
    description:
      "In my current role, I focus on front-end development, crafting UIs and reusable components. I rely on Nuxt as the framework, TailwindCSS for styling, and HeadlessUI for streamlined component creation. This combination allows for efficient and scalable UI development, enhancing user experiences seamlessly.",
    technologies: [
      {
        tech: "Nuxt JS",
      },
      {
        tech: "Typescript",
      },
      {
        tech: "Tailwind CSS",
      },
      {
        tech: "Python",
      },
    ],
    logo: Prodapt,
  },
  {
    id: 2,
    company: "Limra United Technologies",
    title: "Automation Tester Intern",
    duration: "Sep 2022 to May 2023",
    description:
      "During my internship, I specialized in automation testing, leveraging Cypress and TypeScript extensively to test their legacy applications. I also delved into Selenium with Java, gaining valuable hands-on experience in both frameworks.",
    technologies: [
      {
        tech: "Cypress",
      },
      {
        tech: "Typescript",
      },
      {
        tech: "Selenium",
      },
      {
        tech: "Java",
      },
      {
        tech: "MySQL",
      },
    ],
    logo: Limra,
  },
];

export default ExperienceData;
