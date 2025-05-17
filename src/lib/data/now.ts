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
        "Leading engineering initiatives in crypto/finance.",
        "Scaling Dockerized infrastructure for personal projects.",
        "Exploring AI tooling integration into daily workflows.",
      ],
    },
    {
      title: "Personal",
      icon: "🌱",
      items: [
        "Running 3x/week, aiming for a fall half-marathon.",
        "Learning pixel art for an indie game.",
        "Reading *The Cold Start Problem* by Andrew Chen.",
      ],
    },
    {
      title: "Community",
      icon: "🤝",
      items: [
        "Mentoring early-career engineers 1:1 via ADPList.",
        "Organizing monthly local dev meetups.",
        "Preparing talk for React Miami 2025.",
      ],
    },
    {
      title: "Goals",
      icon: "🎯",
      items: [
        "Soft-launch my IdleFarmer mobile game.",
        "Implement zero-trust networking at home lab.",
        "Submit PR to an open-source infrastructure tool.",
      ],
    },
  ],
};
