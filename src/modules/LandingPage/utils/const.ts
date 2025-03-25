import { ICardProps } from "@/components/Card";
import { IOurWorkingAccordion } from "../components/OurWorking/OurWorkingAccordion";
import { ITeamCard } from "../components/Team/components/TeamCard";

export const CARD_DATA: ICardProps[] = [
  {
    textFirstLine: "Search engine",
    textSecondLine: "optimization",
    image: "/LandingPage/card1.webp",
    variant: "outline",
    bgText: "bg-primary",
  },
  {
    textFirstLine: "Pay-per-click",
    textSecondLine: "advertising",
    image: "/LandingPage/card2.webp",
    variant: "primary",
    bgText: "bg-white",
  },
  {
    textFirstLine: "Social Media",
    textSecondLine: "Marketing",
    image: "/LandingPage/card3.webp",
    variant: "secondary",
    bgText: "bg-white",
  },
  {
    textFirstLine: "Email",
    textSecondLine: "Marketing",
    image: "/LandingPage/card4.webp",
    variant: "outline",
    bgText: "bg-primary",
  },
  {
    textFirstLine: "Content",
    textSecondLine: "Creation",
    image: "/LandingPage/card5.webp",
    variant: "primary",
    bgText: "bg-white",
  },
  {
    textFirstLine: "Analytics and",
    textSecondLine: "Tracking",
    image: "/LandingPage/card6.webp",
    variant: "secondary",
    bgText: "bg-primary",
  },
];

export const ACCORDION_DATA: IOurWorkingAccordion[] = [
  {
    title: "Consultation",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    number: "01",
  },
  {
    title: "Research and Strategy Development",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    number: "02",
  },
  {
    title: "Implementation",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    number: "03",
  },
  {
    title: "Monitoring and Optimization",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    number: "04",
  },
  {
    title: "Reporting and Communication",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    number: "05",
  },
  {
    title: "Continual Improvement",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    number: "06",
  },
];

export const TEAMCARD_DATA: ITeamCard[] = [
  {
    name: "John Smith",
    position: "CEO and Founder",
    image: "/LandingPage/cardTeam1.webp",
    description:
      "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
  },
  {
    name: "Jane Doe",
    position: "Director of Operations",
    image: "/LandingPage/cardTeam2.webp",
    description:
      "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
  },
  {
    name: "Michael Brown",
    position: "Senior SEO Specialist",
    image: "/LandingPage/cardTeam3.webp",
    description:
      "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
  },
  {
    name: "Emily Johnson",
    position: "PPC Manager",
    image: "/LandingPage/cardTeam4.webp",
    description:
      "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
  },
  {
    name: "Brian Williams",
    position: "Social Media Specialist",
    image: "/LandingPage/cardTeam5.webp",
    description:
      "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
  },
  {
    name: "Sarah Kim",
    position: "Content Creator",
    image: "/LandingPage/cardTeam6.webp",
    description:
      "2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries",
  },
];
