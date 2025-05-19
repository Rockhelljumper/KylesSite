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
  updated: "May 2025",
  sections: [
    {
      title: "Professional",
      icon: "💼",
      items: [
        "Leading engineering initiatives in crypto/finance to generate revenue.",
        "Scaling Dockerized infrastructure for infrastructure as cost reduction.",
        "Refactoring legacy code to improve maintainability and scalability.",
        "Working on creating new and fun retrospectives for my team.",
        "Creating new processes and documentation automations to improve my team's productivity.",
        "Prioritizing my team's backlog to ensure we are always building the right things and maintianing a healthy pace.",
      ],
    },
    {
      title: "Personal",
      icon: "🌱",
      items: [
        "Working on perfecting multiple recipes for my wife. Food is the heart of a home.",
        "Improving my home automation setup to be more efficient and secure.",
        "Reading: Finishign the Noobtown Serries by Ryan Rimmel.",
        "Finishing a smoker for summer time BBQs.",
        "Learning to grow a beard.",
        "Fixing my 3D printer farm.",
      ],
    },
    {
      title: "Community",
      icon: "🤝",
      items: [
        "Mentoring early-career engineers 1:1.",
        "Working on creating new adult learning programs for the local makerspace.",
        "Setting up new opportunities for the local makerspace to grow.",
      ],
    },
    {
      title: "Goals",
      icon: "🎯",
      items: [
        "Soft-launch of Bathroom Buddy Mobile App.",
        "Fixing Automated update services for my home lab.",
        "Finding the next milestone in my career.",
      ],
    },
  ],
};
