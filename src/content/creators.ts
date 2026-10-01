export type CreatorProfile = {
  slug: string;
  name: string;
  handle: string;
  headline: string;
  avatar: string;
  intro: string[];
  products: number;
  followers: number;
};

export const creators: CreatorProfile[] = [
  {
    slug: "purepearl-studio",
    name: "PurePearl Studio",
    handle: "purepearl studio",
    headline: "Passionate UI/UX, Web designer",
    avatar: "/images/avatars/avatar-02.webp",
    // The design still has a "[Creator's Name]" placeholder and a dropped
    // letter in "Dive"; both are filled in here.
    intro: [
      "Welcome to the creative world of PurePearl Studio. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!",
      "Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.",
    ],
    products: 3,
    followers: 12,
  },
];

export function getCreator(slug: string) {
  return creators.find((creator) => creator.slug === slug);
}
