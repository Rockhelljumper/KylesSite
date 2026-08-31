export type NowSection = {
  title: string;
  icon?: string;
  items: string[];
};

export type NowData = {
  updated: string;
  sections: NowSection[];
};

export const nowData: NowData = {
  updated: "August 2026",
  sections: [
    {
      title: "On the desk",
      icon: "Build",
      items: [
        "Making this site a better record of real work, side projects, and the people behind both.",
        "Studying practical AI use in engineering workflows—especially testing, documentation, code review, support automation, and human accountability.",
        "Keeping an eye on the small platform and process changes that make production work less dramatic.",
      ],
    },
    {
      title: "In the workshop",
      icon: "Make",
      items: [
        "Perfecting recipes for my family. Food is the heart of a home.",
        "Improving my home automation setup to be more efficient and secure.",
        "Finishing a smoker for summer BBQs.",
        "Fixing my 3D printer farm.",
      ],
    },
    {
      title: "On the shelf & in the queue",
      icon: "Read",
      items: [
        "Keeping technical, fiction, and personal-growth books in rotation at the same time.",
        "Making room for technology, science, pop culture, strategy games, simulations, and RPGs that reward curiosity and good decisions.",
        "Looking for the next good trail, campsite, mountain bike route, or Renaissance fair with my wife.",
      ],
    },
    {
      title: "With people",
      icon: "Share",
      items: [
        "Mentoring early-career engineers and creating adult learning opportunities at the local makerspace.",
        "Keeping the Into the Nerdverse conversation open to technology, science, pop culture, and the stories people learn through their work.",
        "Continuing to improve Bathroom Buddy with care for product quality, data freshness, and release readiness.",
      ],
    },
  ],
};
