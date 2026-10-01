import type { ComponentType, SVGProps } from "react";

import {
  BusinessIcon,
  DesignIcon,
  DevelopmentIcon,
  MarketingIcon,
  PhotographyIcon,
  SoftwareIcon,
} from "@/components/icons/CategoryIcons";

export type NavLink = { label: string; href: string };

export const mainNav: NavLink[] = [
  { label: "Home", href: "/#home" },
  { label: "Courses", href: "/courses" },
  { label: "Creators", href: "/#creators" },
];

export const authNav: NavLink[] = [
  { label: "Sign In", href: "/login" },
  { label: "Join Us", href: "/signup" },
];

export const learnerAvatars = [
  "/images/avatars/avatar-01.webp",
  "/images/avatars/avatar-02.webp",
  "/images/avatars/avatar-03.webp",
  "/images/avatars/avatar-04.webp",
  "/images/avatars/avatar-05.webp",
  "/images/avatars/avatar-06.webp",
  "/images/avatars/avatar-07.webp",
];

export const courseAvatars = [
  "/images/avatars/avatar-02.webp",
  "/images/avatars/avatar-08.webp",
  "/images/avatars/avatar-09.webp",
  "/images/avatars/avatar-10.webp",
];

export const partners = [
  { name: "Partner one", logo: "/logos/partner-1.svg", width: 167, height: 41 },
  { name: "Partner two", logo: "/logos/partner-2.svg", width: 168, height: 41 },
  {
    name: "Partner three",
    logo: "/logos/partner-3.svg",
    width: 170,
    height: 41,
  },
  {
    name: "Partner four",
    logo: "/logos/partner-4.svg",
    width: 170,
    height: 41,
  },
  {
    name: "Partner five",
    logo: "/logos/partner-5.svg",
    width: 169,
    height: 42,
  },
];

// Kept as rows because the design breaks the list at fixed points on desktop.
export const topicRows: string[][] = [
  [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
  ],
  [
    "Digital Illustration",
    "Film & Video",
    "Crafts",
    "Freelance & Entrepreneurship",
    "Graphic Design",
    "Photography",
  ],
  ["Productivity", "Web Development", "Data Science", "Cooking"],
];

export type Course = {
  title: string;
  image: string;
  creator: string;
  lessons: string;
  duration: string;
  comments: string;
  level: string;
  rating: string;
  price: string;
  learners: string;
  href?: string;
};

const courseDefaults = {
  creator: "purepearl studio",
  lessons: "17 Lessons",
  duration: "2 hours 16 mins",
  comments: "59 Comments",
  level: "Beginner",
  rating: "4.5",
  price: "$25",
  learners: "26+",
};

export const courses: Course[] = [
  {
    ...courseDefaults,
    title: "Learn Figma from Basic",
    image: "/images/courses/learn-figma.webp",
  },
  {
    ...courseDefaults,
    title: "Build Digital Asset",
    href: "/courses/build-digital-asset",
    image: "/images/courses/digital-asset.webp",
  },
  {
    ...courseDefaults,
    title: "the Power of Big Data",
    image: "/images/courses/big-data.webp",
  },
  {
    ...courseDefaults,
    title: "Balancing Productivity and Self-Care",
    image: "/images/courses/productivity.webp",
  },
  {
    ...courseDefaults,
    title: "Mastering Money Management",
    image: "/images/courses/money-management.webp",
  },
  {
    ...courseDefaults,
    title: "From Idea to Startup Success",
    image: "/images/courses/startup.webp",
  },
];

// Topics shown on the course search page, in the order of the design.
export const catalogTopics = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Cooking",
];

export type Category = {
  label: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export const categories: Category[] = [
  { label: "Design", icon: DesignIcon },
  { label: "Development", icon: DevelopmentIcon },
  { label: "IT & Software", icon: SoftwareIcon },
  { label: "Business", icon: BusinessIcon },
  { label: "Marketing", icon: MarketingIcon },
  { label: "Photography", icon: PhotographyIcon },
];

export const stats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

export const creatorBenefits = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

export const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "/images/avatars/avatar-09.webp",
    quote:
      '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "/images/avatars/avatar-11.webp",
    quote:
      '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "/images/avatars/avatar-12.webp",
    quote:
      '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
  },
];

export const footerColumns: NavLink[][] = [
  [
    { label: "Featured Courses", href: "/courses" },
    { label: "Featured Categories", href: "/#categories" },
    { label: "Business", href: "/#categories" },
    { label: "IT", href: "/#categories" },
    { label: "Design", href: "/#categories" },
  ],
  [
    { label: "Development", href: "/#categories" },
    { label: "Marketing", href: "/#categories" },
    { label: "Photography", href: "/#categories" },
    { label: "Finance", href: "#" },
    { label: "Sport", href: "#" },
  ],
  [
    { label: "Become a Creator", href: "/#creators" },
    { label: "Affiliate Program", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Help", href: "#" },
    { label: "About", href: "#" },
  ],
];

export const legalLinks: NavLink[] = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookies Settings", href: "#" },
];
