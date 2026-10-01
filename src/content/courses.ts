import type { ComponentType, SVGProps } from "react";

import {
  CertificateIcon,
  ConsultationIcon,
  FolderIcon,
  VideoIcon,
} from "@/components/icons/Icons";

export type CourseDetail = {
  slug: string;
  title: string;
  tagline: string;
  creator: {
    name: string;
    handle: string;
    role: string;
    avatar: string;
    href: string;
  };
  level: string;
  rating: string;
  students: string;
  preview: string;
  price: string;
  lessonsSummary: string;
  highlights: { number: string; title: string; duration: string }[];
  moreLessons: string;
  callToAction: string;
  includes: { label: string; icon: ComponentType<SVGProps<SVGSVGElement>> }[];
  about: {
    description: string[];
    sneakPeek: { src: string; width: number; height: number }[];
    keyPoints: string[];
  };
  lessons: {
    intro: string;
    modules: { title: string; summary: string }[];
    content: string;
    progressIntro: string;
    progress: number;
  };
  reviews: {
    intro: string;
    average: string;
    breakdown: { count: string; percent: number }[];
    items: {
      name: string;
      role: string;
      avatar: string;
      date: string;
      rating: number;
      quote: string;
    }[];
  };
};

const imageRoot = "/images/courses/build-digital-asset";

export const courseDetails: CourseDetail[] = [
  {
    slug: "build-digital-asset",
    title: "Build Digital Asset: A Comprehensive Guide",
    tagline: "Unlock the Power of Digital Creation with Expert Guidance",
    creator: {
      name: "PurePearl Studio",
      handle: "purepearl studio",
      role: "Professional Creator",
      avatar: "/images/creators/purepearl-studio.webp",
      href: "/creators/purepearl-studio",
    },
    level: "Intermediate",
    rating: "4.8 (172 reviews)",
    students: "199 Students",
    preview: `${imageRoot}/preview.webp`,
    price: "$25",
    lessonsSummary: "112 Lessons (24 hours)",
    highlights: [
      {
        number: "01",
        title: "Introduction to Digital Assets",
        duration: "12 mins",
      },
      {
        number: "02",
        title: "Design Principles for Impacts",
        duration: "21 mins",
      },
      {
        number: "03",
        title: "Advanced Techniques in Digital Creation",
        duration: "16 mins",
      },
    ],
    moreLessons: "99 more videos",
    callToAction:
      "Ready to Dive In? Enroll Now and Start Building Your Digital Future!",
    includes: [
      { label: "Learning Resources", icon: FolderIcon },
      { label: "Quality Lesson Videos", icon: VideoIcon },
      { label: "Certificate of Completion", icon: CertificateIcon },
      { label: "Private Consultation", icon: ConsultationIcon },
    ],
    about: {
      description: [
        'Embark on an enlightening exploration into the world of digital creation with our comprehensive course, "Build Digital Assets: A Comprehensive Guide." This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.',
        "In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.",
        "As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.",
      ],
      sneakPeek: [
        { src: `${imageRoot}/peek-1.webp`, width: 480, height: 320 },
        { src: `${imageRoot}/peek-2.webp`, width: 480, height: 270 },
        { src: `${imageRoot}/peek-3.webp`, width: 384, height: 480 },
        { src: `${imageRoot}/peek-4.webp`, width: 480, height: 309 },
      ],
      keyPoints: [
        "Foundational Concepts",
        "Design Principles Mastery",
        "Advanced Techniques in Digital Creation",
        "Project Showcase and Critique",
        "Optimizing for Various Platforms",
        "Digital Asset Management Best Practices",
        "Monetization Strategies",
        "Capstone Project: Building Your Portfolio",
      ],
    },
    lessons: {
      intro:
        "Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.",
      modules: [
        {
          title: "Module 1: Introduction to Digital Assets",
          summary:
            "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
        },
        {
          title: "Module 2: Design Principles for Impact",
          summary:
            "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
        },
        {
          title: "Module 4: User-Centric Design Strategies",
          summary:
            "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
        },
        {
          title: "Module 5: Interactive Media and Engagement",
          summary:
            "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
        },
        {
          title: "Module 6: Project Showcase and Critique",
          summary:
            "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
        },
        {
          title: "Module 7: Optimizing Digital Assets for Various Platforms",
          summary:
            "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
        },
      ],
      content:
        "Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.",
      progressIntro:
        "Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.",
      progress: 55,
    },
    reviews: {
      intro:
        "Discover what our learners have to say about their experience with 'Build Digital Assets: A Comprehensive Guide.' Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.",
      average: "4.7",
      breakdown: [
        { count: "720", percent: 92.28 },
        { count: "120", percent: 36.49 },
        { count: "21", percent: 9.47 },
        { count: "12", percent: 3.51 },
        { count: "16", percent: 5.26 },
      ],
      items: [
        {
          name: "PurePearl Studio",
          role: "UI/UX Designer",
          avatar: "/images/avatars/avatar-13.webp",
          date: "a year ago",
          rating: 5,
          quote:
            '"The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!"',
        },
        {
          name: "Albert Flores",
          role: "UI/UX Designer",
          avatar: "/images/avatars/avatar-14.webp",
          date: "a year ago",
          rating: 5,
          quote:
            "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
        },
        {
          name: "Cody Fisher",
          role: "UI/UX Designer",
          avatar: "/images/avatars/avatar-11.webp",
          date: "a year ago",
          rating: 5,
          quote:
            "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
        },
        {
          name: "Brooklyn Simmons",
          role: "UI/UX Designer",
          avatar: "/images/avatars/avatar-01.webp",
          date: "a year ago",
          rating: 5,
          quote:
            "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
        },
      ],
    },
  },
];

export function getCourse(slug: string) {
  return courseDetails.find((course) => course.slug === slug);
}
