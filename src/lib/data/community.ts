export type SpeakingEngagement = {
  title: string;
  event: string;
  year: number;
  link?: string;
  description: string;
};

export type MentoringProgram = {
  programOrOrg: string;
  role: string;
  description: string;
  years: string; // Could be "2020-Present" or "2018-2020"
};

export type OpenSourceContribution = {
  project: string;
  role: string;
  link?: string;
  description: string;
};

export type CommunityLeadership = {
  org: string;
  title: string;
  years: string;
  description: string;
};

export type CommunityItem = {
  title: string;
  subtitle: string;
  description: string;
  years?: string;
  link?: string;
};

export type MakerspacePresentation = CommunityItem & {
  slug: string;
  slides: number;
  thumbnail?: string;
  thumbnailAlt?: string;
  slideImageDirectory: string;
  slideDocumentation: readonly PresentationSlideDocumentation[];
};

export type PresentationSlideDocumentation = {
  title: string;
  summary: string;
  talkingPoints?: readonly string[];
  provenance: "Provided workshop notes" | "Draft notes";
};

export type CommunityData = {
  intro: string;
  mentoring: CommunityItem[];
  speaking: CommunityItem[];
  presentations: MakerspacePresentation[];
  writing: CommunityItem[];
  openSource: CommunityItem[];
  leadership: CommunityItem[];
};

export const communityData: CommunityData = {
  intro:
    "Technology has given me incredible opportunities to grow, learn, and build. I believe in giving back to the community that supported me by sharing knowledge, mentoring others, and creating spaces where everyone can thrive. My community work is as much a part of my professional identity as my technical skills.",

  speaking: [
    {
      title: "How to Build a Desktop Computer",
      subtitle: "Tye Preston Memorial Library - Makerspace",
      description:
        "A presentation to the public about all of the components that make up a desktop computer, what they do, how they work, and how to build one.",
      years: "2023",
    },
    {
      title: "What is Docker?",
      subtitle: "Tye Preston Memorial Library - Makerspace",
      description:
        "A presentation to the public about Docker, what it is, how it works, and how to use it.",
      years: "2023",
    },
    {
      title: "AI ~ The Buzz Word of Today",
      subtitle: "Tye Preston Memorial Library - Makerspace",
      description:
        "A presentation to the public about AI, what it is, how it works, and how to use it. LLMs vs Machine Learning, what's the difference?",
      years: "2023",
    },
  ],

  presentations: [
    {
      title: "How to Build a Desktop Computer",
      subtitle: "Tye Preston Memorial Library · Makerspace",
      description:
        "A practical tour of desktop components, how they work together, and what to consider when building a computer.",
      years: "2023",
      slug: "computer-building-2023",
      slides: 16,
      thumbnail: "/images/community/presentations/computer-building-2023.jpeg",
      thumbnailAlt: "Thumbnail from the Computer Building 2023 presentation",
      slideImageDirectory: "/images/community/presentations/computer-building-2023/slides",
      slideDocumentation: [
        { title: "Build with a plan", summary: "Set the expectation: this is a practical tour of the parts, wiring, and compatibility decisions behind a desktop build.", talkingPoints: ["Start with the intended use and budget.", "Follow the parts first, then compatibility, then assembly."], provenance: "Provided workshop notes" },
        { title: "The core parts list", summary: "Introduce the main component categories before choosing brands or shopping for specific models.", talkingPoints: ["A balanced build matters more than one expensive part.", "Use the list as a compatibility checklist."], provenance: "Provided workshop notes" },
        { title: "CPU history and basics", summary: "Explain that CPUs use tiny circuits in on/off states; transistor density and specialization shape modern performance.", talkingPoints: ["Moore’s Law describes a historical trend in transistor counts.", "CPU cache is fast short-term memory built for the processor."], provenance: "Provided workshop notes" },
        { title: "Choosing a CPU", summary: "Compare CPU choices through core count, threading, clock speed, socket type, and the workload rather than a single headline number.", talkingPoints: ["More cores are not always better for single-threaded software.", "Confirm the motherboard socket before buying."], provenance: "Provided workshop notes" },
        { title: "Storage choices", summary: "Contrast HDDs and SSDs by speed, power use, capacity, and expected use; introduce M.2 SSDs as a faster form factor.", talkingPoints: ["SSDs excel where fast reads and writes matter.", "HDDs remain useful for large, long-lived storage."], provenance: "Provided workshop notes" },
        { title: "RAM and responsiveness", summary: "Describe RAM as the short-term workspace that lets the CPU open files and move data while applications run.", talkingPoints: ["Match DIMM type and generation to the motherboard.", "Clock speed and CAS latency need to be considered together."], provenance: "Provided workshop notes" },
        { title: "The motherboard", summary: "Frame the motherboard as the compatibility hub for processor, memory, storage, I/O, networking, and future expansion.", talkingPoints: ["Choose the board to fit the case and intended growth.", "PCIe slots make later expansion possible."], provenance: "Provided workshop notes" },
        { title: "Power supply decisions", summary: "A power supply needs sufficient capacity, the right connectors, cooling, and a cable arrangement that suits the build.", talkingPoints: ["Check that it has the connectors your GPU and storage need.", "Modular cables can make a build cleaner and easier to service."], provenance: "Provided workshop notes" },
        { title: "The GPU", summary: "Explain that GPUs are specialized for graphics and highly parallel work; select one according to use case and physical compatibility.", talkingPoints: ["GPU choices affect power, cooling, and case clearance.", "CUDA and tensor hardware are useful concepts for AI-oriented builds."], provenance: "Provided workshop notes" },
        { title: "CPU cooling", summary: "Compare air cooling, all-in-one liquid cooling, and custom loops through maintenance, compatibility, reliability, and performance.", talkingPoints: ["Air coolers are simple and long-lived.", "AIOs are closed loops; custom loops require ongoing maintenance."], provenance: "Provided workshop notes" },
        { title: "The case", summary: "Use the case as a practical compatibility check: it must fit the motherboard, cooling, GPU, and the way the builder wants to access I/O.", talkingPoints: ["Physical GPU size can rule out a small case.", "Front I/O and ease of building affect daily experience."], provenance: "Provided workshop notes" },
        { title: "Peripherals", summary: "Plan monitors, input devices, audio, cameras, and other peripherals early so the motherboard and expansion needs are clear.", talkingPoints: ["A complete build includes the way people actually use it.", "Some needs may require additional PCIe or USB connectivity."], provenance: "Provided workshop notes" },
        { title: "Build-plan Q&A", summary: "Turn the parts list into questions about budget, compatibility, and priorities before committing to purchases.", talkingPoints: ["Ask what workload matters most.", "Identify the one constraint that can change the rest of the build."], provenance: "Provided workshop notes" },
        { title: "RGB as a system", summary: "Treat lighting as a compatibility and cabling decision, not an afterthought; components need to work with the motherboard and controller ecosystem.", talkingPoints: ["Check headers, cables, and software support.", "Do not let lighting needs override cooling or power requirements."], provenance: "Provided workshop notes" },
        { title: "Assembly order", summary: "Cover a low-risk assembly sequence, including RAM placement, thermal paste, and PCIe installation.", talkingPoints: ["Consult the motherboard manual for DIMM order.", "Work deliberately and verify each connection before powering on."], provenance: "Provided workshop notes" },
        { title: "References and next steps", summary: "Close with reputable places to compare parts, learn terminology, and verify compatibility before ordering.", talkingPoints: ["Use PCPartPicker and manufacturer documentation for compatibility.", "Keep learning from multiple sources rather than a single recommendation."], provenance: "Provided workshop notes" },
      ],
    },
    {
      title: "What Is Docker?",
      subtitle: "Tye Preston Memorial Library · Makerspace",
      description:
        "A beginner-friendly introduction to containers: what Docker is, how it works, and how to start using it.",
      years: "2023",
      slug: "what-is-docker",
      slides: 10,
      thumbnail: "/images/community/presentations/what-is-docker.jpeg",
      thumbnailAlt: "Thumbnail from the What Is Docker presentation",
      slideImageDirectory: "/images/community/presentations/what-is-docker/slides",
      slideDocumentation: [
        { title: "Welcome to Docker", summary: "Introduce Docker as a practical way to package and run software consistently; invite the audience to connect it to projects they already want to build.", talkingPoints: ["This workshop is about useful mental models, not memorizing commands.", "Keep examples tied to maker projects."], provenance: "Draft notes" },
        { title: "What we will cover", summary: "Preview the session: a plain-language definition, the value of containers, maker-oriented use cases, and a deployment exercise.", talkingPoints: ["Set expectations for the hands-on portion.", "Leave room for questions at the end."], provenance: "Draft notes" },
        { title: "Why Docker is powerful", summary: "Use the visual to introduce the idea that applications can share a host while remaining isolated and repeatable.", talkingPoints: ["Docker reduces setup drift between machines.", "Containers make experiments easier to start and stop."], provenance: "Draft notes" },
        { title: "A working definition", summary: "Describe containers as packaged application environments that run on a shared host operating system rather than full virtual machines.", talkingPoints: ["Avoid implying that containers remove every resource limit.", "Clarify that portability still depends on compatible architecture and configuration."], provenance: "Draft notes" },
        { title: "Why it matters to makers", summary: "Translate the technology into practical benefits: less setup friction, easier reuse, and a safer way to try software.", talkingPoints: ["Lead with the project the audience wants to run.", "Emphasize repeatability over novelty."], provenance: "Draft notes" },
        { title: "Maker use cases", summary: "Connect Docker to home automation, IoT, printer farms, astronomy, and shared data or monitoring systems.", talkingPoints: ["One small host can support several focused services.", "Do not expose hardware or services publicly without access controls."], provenance: "Draft notes" },
        { title: "More projects, less hardware", summary: "Extend the examples to web tools, network management, local AI, dashboards, OS trials, and shared project documentation.", talkingPoints: ["Containers make abandoned experiments easy to remove.", "Remote access should use deliberate security boundaries such as Zero Trust."], provenance: "Draft notes" },
        { title: "Images are the recipe", summary: "Explain that a Docker image is a packaged filesystem and runtime configuration used to create containers; it is inspectable rather than magical.", talkingPoints: ["An image is reusable; a container is a running instance.", "Read the image documentation before running it."], provenance: "Draft notes" },
        { title: "Hands-on: deploy Ollama", summary: "Walk through an official Docker deployment only after prerequisites, source authenticity, GPU needs, ports, and data persistence are understood.", talkingPoints: ["Use official instructions and verify the image source.", "Stop and reflect on resource use before moving to the next experiment."], provenance: "Draft notes" },
        { title: "Questions and next experiments", summary: "Close by asking what participants want to containerize, then point them toward one small, reversible next project.", talkingPoints: ["Encourage a simple first deployment.", "Make time for questions about their own hardware and goals."], provenance: "Draft notes" },
      ],
    },
    {
      title: "AI for Makers: From Prompt to Prototype",
      subtitle: "Tye Preston Memorial Library · Makerspace",
      description:
        "A workshop on how AI and LLMs work, practical prompting, model selection, coding and research uses, safety, and local AI.",
      years: "2026",
      slug: "ai-for-makers-workshop-2026-08-17",
      slides: 27,
      slideImageDirectory: "/images/community/presentations/ai-for-makers-workshop-2026-08-17/slides",
      slideDocumentation: [
        { title: "Workshop framing", summary: "Set a practical tone: this is about using AI to accelerate maker work while keeping evidence, safety, and judgment in the loop.", talkingPoints: ["Name the mixed beginner and technical audience.", "Preview live demos and questions."], provenance: "Draft notes" },
        { title: "What success looks like", summary: "Describe the five usable outcomes: a mental model, better prompts, tool choice, local AI awareness, and verification habits.", talkingPoints: ["This is not a vocabulary test.", "Verification is a skill, not an afterthought."], provenance: "Draft notes" },
        { title: "AI is a stack", summary: "Separate the chat product, agent workflow, router, model, and hardware/runtime so participants can ask better questions about data flow and capability.", talkingPoints: ["‘I use ChatGPT’ does not identify the model or privacy path.", "Interfaces and models change independently."], provenance: "Draft notes" },
        { title: "How an LLM generates", summary: "Offer a useful simplification: text is tokenized, represented, processed through attention, scored, and generated one token at a time.", talkingPoints: ["Next-token prediction is more capable than simple autocomplete.", "It is probabilistic generation, not a database lookup."], provenance: "Draft notes" },
        { title: "Tokens and capacity", summary: "Explain that tokens are model-specific chunks of text that affect cost and context capacity.", talkingPoints: ["Tokens are not the same as words.", "Use a tokenizer or API count when precision matters."], provenance: "Draft notes" },
        { title: "Context is working memory", summary: "Show what reaches a model during a request and why concise, relevant evidence often beats a huge uncurated prompt.", talkingPoints: ["Memory features are surrounding product systems.", "Attach the exact log, manual, photo, or code under discussion."], provenance: "Draft notes" },
        { title: "Hallucinations need tests", summary: "Make the core distinction explicit: fluent output can still be wrong, so AI output starts as a hypothesis.", talkingPoints: ["Ask for assumptions and uncertainty.", "Verify with primary evidence, tests, and qualified sources."], provenance: "Draft notes" },
        { title: "Prompting as a job specification", summary: "Teach a repeatable prompt structure: goal, context, constraints, evidence, desired output, then iteration.", talkingPoints: ["Clear constraints beat magic phrasing.", "Ask the model what evidence would reduce uncertainty."], provenance: "Draft notes" },
        { title: "Troubleshooting loop", summary: "Use AI as a diagnostic partner: observe, hypothesize, run one safe test, update, fix, and verify.", talkingPoints: ["Avoid replacing multiple parts at once.", "Safety and discriminating tests come before a confident fix."], provenance: "Draft notes" },
        { title: "AI for code work", summary: "Position AI as a fast pair programmer whose diffs, versions, tests, and security-sensitive decisions still require review.", talkingPoints: ["Give the exact reproduction and relevant files.", "Run the generated code and feed failures back into the loop."], provenance: "Draft notes" },
        { title: "Research with sources", summary: "Explain that a model synthesizes while sources carry the evidence; citations need to be opened and checked.", talkingPoints: ["Prefer primary and current sources.", "Separate fact, inference, and opinion."], provenance: "Draft notes" },
        { title: "Maker-space opportunities", summary: "Map AI to real maker workflows: printing, electronics, CAD, fabrication, homelab, documentation, and learning.", talkingPoints: ["Bring the real artifact into the prompt.", "Validate against the physical world."], provenance: "Draft notes" },
        { title: "Choose a cloud product by workflow", summary: "Compare products through the work to be done, fresh-data needs, tools, privacy, cost, latency, and team workflow instead of brand loyalty.", talkingPoints: ["There is no universal best model.", "Model menus change frequently."], provenance: "Draft notes" },
        { title: "Model families change", summary: "Use the snapshot to teach the flagship, balanced, fast, and specialist pattern—not to make a permanent buying recommendation.", talkingPoints: ["Verify vendor pages and release notes before deciding.", "A dated slide is a prompt to re-check current inventory."], provenance: "Draft notes" },
        { title: "Read benchmarks critically", summary: "A benchmark measures performance on a particular task and harness; it is not a universal quality score.", talkingPoints: ["Check who ran the test, version, date, and tradeoffs.", "Try your own representative task."], provenance: "Draft notes" },
        { title: "Local AI components", summary: "Clarify the roles of a local UI, agent layer, gateway, model runtime, low-level backend, and hardware.", talkingPoints: ["‘Local’ can describe different pieces of a stack.", "Trace where a prompt can leave the machine."], provenance: "Draft notes" },
        { title: "Read model labels", summary: "Decode common model-name signals: family, parameter count, instruction tuning, quantization, and context window.", talkingPoints: ["Parameter count is not file size or quality by itself.", "Longer context also consumes runtime memory."], provenance: "Draft notes" },
        { title: "Size a local model realistically", summary: "Offer practical starter tiers while stressing that quantization, context, GPU offload, concurrency, and architecture change memory needs.", talkingPoints: ["Start with a model your machine can run comfortably.", "Treat sizing values as workshop guidance, not vendor minimums."], provenance: "Draft notes" },
        { title: "Air-gapped means isolated", summary: "Distinguish an offline setting from an actual air gap that blocks network routes and uses a controlled transfer process.", talkingPoints: ["Verify hashes and provenance before transfer.", "Offline mode alone is not a network boundary."], provenance: "Draft notes" },
        { title: "Agents can act", summary: "Explain that agents can read files, run commands, browse, message, and call APIs, which creates a broader risk profile than chat.", talkingPoints: ["Use least privilege.", "Treat untrusted webpages and files as potential prompt-injection sources."], provenance: "Draft notes" },
        { title: "Classify data before sharing", summary: "Use sensitivity and the actual provider/tool configuration to decide what can be shared with an AI system.", talkingPoints: ["Do not casually paste secrets or regulated data.", "Self-hosted does not automatically mean private."], provenance: "Draft notes" },
        { title: "Live demo sequence", summary: "Use three transferable demonstrations: improve a prompt with evidence, verify a current claim, and compare local versus cloud tradeoffs.", talkingPoints: ["Have local fallbacks if Wi-Fi fails.", "Teach the method, not brand-specific tricks."], provenance: "Draft notes" },
        { title: "Copyable prompt patterns", summary: "Give participants reusable templates for troubleshooting, code debugging, and research that request evidence, constraints, tests, and uncertainty.", talkingPoints: ["Adapt the template to the audience and task.", "Ask for one safe next test rather than a broad list of guesses."], provenance: "Draft notes" },
        { title: "A quick decision tree", summary: "Start AI tool selection with sensitivity, air-gap needs, fresh information, and action-taking requirements.", talkingPoints: ["Quality on the real task is the final tie-breaker.", "Privacy, latency, cost, hardware, and workflow still matter."], provenance: "Draft notes" },
        { title: "Five rules to retain", summary: "Close the main instruction with durable principles: verify output, provide evidence, choose for the task, trace privacy paths, and restrict agents.", talkingPoints: ["A short list helps the workshop survive the details.", "Invite participants to apply one rule immediately."], provenance: "Draft notes" },
        { title: "Source pack", summary: "Provide the primary documentation and independent benchmark references needed to revisit the material after the session.", talkingPoints: ["Check live vendor pages because the AI landscape moves quickly.", "Use sources to validate claims from the workshop."], provenance: "Draft notes" },
        { title: "Questions and rabbit holes", summary: "Turn Q&A into a working session around real projects, logs, screenshots, model names, and privacy or hardware decisions.", talkingPoints: ["Bring evidence, not just a vague problem statement.", "The strongest workflow is one the maker can verify."], provenance: "Draft notes" },
      ],
    },
  ],

  mentoring: [
    {
      title: "Friends & Family",
      subtitle: "Technical Mentor",
      description:
        "Guided teams of junior developers in building applications that we agreed upon as a starting point, focusing on technical architecture, agile methodologies, and best practices.",
      years: "2019-Present",
    },
    {
      title: "Women Who Code",
      subtitle: "Career Coach",
      description:
        "Provided one-on-one mentoring sessions for women transitioning into tech careers or advancing to senior technical roles.",
      years: "2022-2025",
    },
  ],

  writing: [],

  openSource: [],

  leadership: [
    {
      title: "Tye Preston Memorial Library - Makerspace",
      subtitle: "Technical Mentor",
      description:
        "Working weekly with the local makerspace to help others learn and grow in their technical careers, help the community, and build a better future by providing insights into software development, hardware, and more.",
      years: "2022-Present",
    },
    {
      title: "Tye Preston Memorial Library - Makerspace",
      subtitle: "Presenter",
      description:
        "Building programs to present to the public about the benefits of software development, docker containerization, AI, security best practices, networking, hardware, and more.",
      years: "2023-Present",
    },
  ],
};

export function getMakerspacePresentation(slug: string): MakerspacePresentation | undefined {
  return communityData.presentations.find((presentation) => presentation.slug === slug);
}
