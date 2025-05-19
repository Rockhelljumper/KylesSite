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
      "I learned a lot about Next.js, Tailwind CSS, and TypeScript by building this website.",
      "I am still actively updating it to this day.",
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
      "I learned a lot about C# and .NET by building this API.",
      "I am still actively updating it to this day.",
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
      "I am still actively updating it to this day.",
      "I built the website using Blazor and C# with my co-host mentoring her through web development and hosting.",
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
      "Designed and implemented a real-time analytics dashboard for monitoring system performance, Network Security Monitoring, and homelab system metrics.",
    technologies: ["Next.js", "InfluxDB", "Grafana", "Docker"],
    role: "Self-Taught Developer",
    impact: [
      "Enabled data-driven decision making with 98% accuracy",
      "Learned how to integrate Grafana with InfluxDB and MSSQL to create a real-time analytics dashboard.",
      "Realtime data transmission to the dashboard from the InfluxDB database.",
    ],
    links: {},
    image: "/images/GrafanaProd.png",
  },
];
