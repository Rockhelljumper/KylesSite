export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  role: string;
  impact: string[];
  links?: {
    github?: string;
    demo?: string;
    other?: Array<{
      name: string;
      url: string;
    }>;
  };
  featured?: boolean;
  image?: string;
};

export type ProjectCategory = {
  id: string;
  name: string;
};

export const projectCategories: ProjectCategory[] = [
  { id: "all", name: "All Projects" },
  { id: "engineering", name: "Software Engineering" },
  { id: "leadership", name: "Leadership" },
  { id: "community", name: "Community" },
];

// UPDATE THIS ARRAY WITH YOUR PROJECTS
export const projects: Project[] = [
  {
    id: "project-1",
    title: "Portfolio Website",
    description:
      "This is my personal website. I built it using Next.js, Tailwind CSS, and TypeScript.",
    technologies: ["React", "Node.js", "TypeScript", "Docker"],
    role: "Self-Taught Developer",
    impact: [
      "A good representation of my skills and abilities as a developer.",
      "This is the website your on. You can see the source code on my GitHub linked below. (Click the GitHub icon in the bottom of any of these cards to see the source code.)",
      "I have a lot of projects, ideas, and things that I never thought I'd share with the world. This is a place for me to share them with you, but converting all of my projects to a website is a work in progress.",
    ],
    links: {
      github: "https://github.com/Rockhelljumper/KylesSite",
      demo: "https://kylesimmons.tech",
    },
    featured: true,
    image: "/images/portfolio.png",
  },
  {
    id: "project-2",
    title: "Portfolio Website Backend API",
    description:
      "Backend C# .NET API for my Portfolio Website. It is a simple API that I built to retrieve data and provide a RESTful API for my frontend to consume.",
    technologies: ["C#", ".NET", "Entity Framework", "PostgreSQL"],
    role: "Self-Taught Developer",
    impact: [
      "A simple API that I built to retrieve data and provide a RESTful API for my frontend to consume.",
      "This API is written in C# .NET. It's still a work in progress, but I am actively updating it to this day.",
      "This project is a foundation to build my portfolio website on. Checkout my GitHub to see Issues I've crafted for future updates.",
    ],
    links: {
      github: "https://github.com/Rockhelljumper/KylesSiteBackend",
      other: [
        {
          name: "Swagger UI",
          url: "https://api.kylesimmons.tech/swagger/index.html",
        },
      ],
    },
    featured: true,
    image: "/images/portfoliobackend.png",
  },
  {
    id: "project-3",
    title: "Into The Nerdverse Podcast",
    description:
      "A podcast about the latest in technology, science, and pop culture.",
    technologies: [
      "Spotify for Podcasters (Formerly Anchor.fm)",
      "CakeWalk",
      "Audacity",
      "Docker",
      "C# Blazor",
    ],
    role: "Podcast Host",
    impact: [
      "A podcast about the latest in technology, science, and pop culture.",
      "I learned a lot about podcasting and production by building this podcast.",
      "Though life has interfered with our ability to record regularly, we are still actively recording and and will be publishing new episodes soon.",
      "I built the website for the podcast using Blazor and C# with my co-host mentoring her through web development and hosting.",
    ],
    links: {
      github: "https://github.com/Rockhelljumper/IntoTheNerdVerseWebApp",
      demo: "https://open.spotify.com/show/3CwC4tH9Yix6RIPuEo640u",
      other: [{ name: "Web Site", url: "https://intonerdverse.com/" }],
    },
    image: "/images/IntoTheNerdVerse.png",
  },
  {
    id: "project-4",
    title: "Real-time Analytics Dashboard",
    description:
      "Designed and implemented a real-time analytics dashboard for monitoring my home lab systems performance, Network Security Monitoring, and system metrics.",
    technologies: ["InfluxDB", "Grafana", "Docker"],
    role: "Self-Taught Developer",
    impact: [
      "This project has been something I have been adding to for a long time. I started it as a way to learn about Grafana and InfluxDB.",
      "Learned how to integrate Grafana with InfluxDB and MSSQL to create a real-time analytics dashboard.",
      "I've taken this technology and applied it to my work to monitor our systems and infrastructure.",
    ],
    links: {},
    image: "/images/GrafanaProd.png",
  },
];
