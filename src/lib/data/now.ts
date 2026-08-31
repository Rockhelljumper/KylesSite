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
      title: "Professional",
      icon: "Work",
      items: [
        "Positioning my work around platform engineering, SRE, DevSecOps, and developer experience roles in fintech and other regulated environments.",
        "Improving this portfolio into a proof-of-work site with case studies, resume variants, and clearer production impact.",
        "Studying practical AI use in engineering workflows: testing, documentation, code review, support automation, and platform governance.",
        "Refining incident response, compliance automation, and internal platform patterns that reduce operational toil.",
      ],
    },
    {
      title: "Personal",
      icon: "Life",
      items: [
        "Perfecting recipes for my family. Food is the heart of a home.",
        "Improving my home automation setup to be more efficient and secure.",
        "Reading technical, fiction, and personal growth books in parallel.",
        "Finishing a smoker for summer BBQs.",
        "Fixing my 3D printer farm.",
      ],
    },
    {
      title: "Community",
      icon: "Community",
      items: [
        "Mentoring early-career engineers 1:1.",
        "Creating adult learning programs for the local makerspace.",
        "Helping people learn practical software, hardware, AI, security, and small business technology skills.",
      ],
    },
    {
      title: "Goals",
      icon: "Goals",
      items: [
        "Continue improving Bathroom Buddy across product quality, data freshness, and release readiness.",
        "Improve automated update services for my home lab.",
        "Find the next career milestone where platform engineering, security, reliability, and leadership all matter.",
      ],
    },
  ],
};
