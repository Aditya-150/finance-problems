import problemImage1 from "../../public/images/pb1.png";
import problemImage2 from "../../public/images/pb2.png";
import problemImage3 from "../../public/images/pb3.png";
import solutionImage1 from "../../public/images/sol1.png";
import solutionImage2 from "../../public/images/sol2.png";
import solutionImage3 from "../../public/images/sol3.png";

export const problems = [
  {
    title: "Financial Illiteracy",
    text: "Many individuals lack basic financial knowledge, leading to poor money management decisions, debt accumulation, and insufficient savings for emergencies or retirement.",
    image: problemImage1,
    id: 0,
  },
  {
    title: "Complex Financial Products and Services",
    text: "The proliferation of intricate financial products and services can confuse consumers, making it challenging to choose the right options for their needs. Hidden fees, unclear terms, and fine print further exacerbate the problem.",
    image: problemImage2,
    id: 1,
  },
  {
    title: "Inadequate Retirement Planning",
    text: "Many individuals are not adequately prepared for retirement due to factors such as longer life expectancies, insufficient savings, and the decline of traditional pension plans.",
    image: problemImage3,
    id: 2,
  },
];

export const solutions = [
  {
    title: "Financial Illiteracy",
    text: "Design a user-friendly platform offering educational content, interactive tools, and personalized guidance. Include modules on budgeting, saving, investing, and debt management. Utilize clear language, visuals, and real-life examples to enhance understanding.",
    image: solutionImage1,
    id: 0,
  },
  {
    title: "Complex Financial Products and Services",
    text: "Create a tool that allows users to compare products such as savings accounts, credit cards, and loans based on key features, fees, and terms. Implement intuitive filters and visualizations to help users quickly identify the best options for their needs.",
    image: solutionImage2,
    id: 1,
  },
  {
    title: "Inadequate Retirement Planning",
    text: "Develop an interactive retirement planning wizard that guides users through the process step-by-step. Collect information about users' financial goals, income, expenses, and risk tolerance to generate personalized recommendations. Provide actionable tips and resources to help users improve their retirement readiness.",
    image: solutionImage3,
    id: 2,
  },
];
