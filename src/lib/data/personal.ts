export type PersonalInterest = {
  label: string;
  title: string;
  description: string;
};

/**
 * Human context that belongs beside — not inside — the professional story.
 * Keep this small and update it when the site is refreshed; it is not meant
 * to become an activity feed or a list of private life details.
 */
export const personalData = {
  intro:
    "The systems I build for fun tend to be smaller, stranger, and full of good lessons: tools for family, maker projects, community classes, and conversations that wander past the job description.",
  interests: [
    {
      label: "Make & teach",
      title: "A makerspace is a great place to stay curious.",
      description:
        "I volunteer around 3D printers, laser cutters, software development, hardware, and practical technology classes for the local community.",
    },
    {
      label: "Get outside",
      title: "Mountain bikes, campfires, and Colorado trips.",
      description:
        "My wife and I make time for mountain biking, hiking, camping, and Renaissance fairs—especially when we can head toward the mountains.",
    },
    {
      label: "Kitchen & workshop",
      title: "Cold brew, recipes, smokers, and print farms.",
      description:
        "At home I enjoy the small iteration loops: making coffee, cooking for family, tinkering with a smoker, home automation, and a 3D printer farm.",
    },
  ] satisfies PersonalInterest[],
  shelf: [
    {
      label: "Reading",
      title: "Usually three books at once.",
      description:
        "A technical book, a work of fiction, and something about personal growth make a reliably good stack.",
    },
    {
      label: "Listen",
      title: "Into the Nerdverse",
      description:
        "A small podcast about technology, science, pop culture, software development, and the stories people carry from their work.",
    },
    {
      label: "Watch & play",
      title: "Complex systems, even off the clock.",
      description:
        "I gravitate toward strategy, simulation, and role-playing games—the kinds of worlds where choices, tradeoffs, and consequences connect.",
    },
  ] satisfies PersonalInterest[],
  podcast: {
    title: "Into the Nerdverse",
    description:
      "A side project for conversations about technology, science, pop culture, and the lessons behind the work.",
    image: "/images/IntoTheNerdVerse.png",
    imageAlt: "Into the Nerdverse podcast website",
    href: "https://open.spotify.com/show/3CwC4tH9Yix6RIPuEo640u",
  },
} as const;
