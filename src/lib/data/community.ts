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
  guideAudience: "participant";
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
      guideAudience: "participant",
      slideDocumentation: [
        { title: "Build with a plan", summary: "You will get a roadmap for the parts, wiring, and compatibility decisions behind a desktop build.", talkingPoints: ["Begin with your intended use and budget.", "Move from parts to compatibility to assembly."], provenance: "Provided workshop notes" },
        { title: "The core parts list", summary: "You will identify the main component categories before comparing brands or specific models.", talkingPoints: ["A balanced build matters more than one expensive part.", "Use this list as your compatibility checklist."], provenance: "Provided workshop notes" },
        { title: "CPU history and basics", summary: "You will see how on/off circuits, transistor density, and specialization shape modern CPU performance.", talkingPoints: ["Moore’s Law describes a historical trend in transistor counts.", "CPU cache is fast short-term memory for the processor."], provenance: "Provided workshop notes" },
        { title: "Choosing a CPU", summary: "You can compare CPUs through core count, threading, clock speed, socket type, and your actual workload—not one headline number.", talkingPoints: ["More cores are not always better for single-threaded software.", "Confirm the motherboard socket before you buy."], provenance: "Provided workshop notes" },
        { title: "Storage choices", summary: "You will compare HDDs and SSDs by speed, power use, capacity, and expected use, including faster M.2 SSDs.", talkingPoints: ["SSDs help when fast reads and writes matter.", "HDDs remain useful for large, long-lived storage."], provenance: "Provided workshop notes" },
        { title: "RAM and responsiveness", summary: "You will learn how RAM gives your CPU the short-term workspace it needs while applications run.", talkingPoints: ["Match the DIMM type and generation to your motherboard.", "Consider clock speed and CAS latency together."], provenance: "Provided workshop notes" },
        { title: "The motherboard", summary: "You will use the motherboard as the compatibility hub for your processor, memory, storage, I/O, networking, and expansion.", talkingPoints: ["Choose a board that fits your case and growth plans.", "PCIe slots let you add capabilities later."], provenance: "Provided workshop notes" },
        { title: "Power supply decisions", summary: "You will look for enough capacity, the right connectors, cooling, and cable layout for your build.", talkingPoints: ["Check that the unit supports your GPU and storage connectors.", "Modular cables can make your build easier to service."], provenance: "Provided workshop notes" },
        { title: "The GPU", summary: "You will see why GPUs are specialized for graphics and parallel work, then match one to your use case and physical space.", talkingPoints: ["Your GPU affects power, cooling, and case clearance.", "CUDA and tensor hardware matter for some AI-oriented builds."], provenance: "Provided workshop notes" },
        { title: "CPU cooling", summary: "You will compare air cooling, all-in-one liquid cooling, and custom loops by maintenance, compatibility, reliability, and performance.", talkingPoints: ["Air coolers are simple and long-lived.", "AIOs are closed loops; custom loops need ongoing maintenance."], provenance: "Provided workshop notes" },
        { title: "The case", summary: "You will use the case as a practical compatibility check for your motherboard, cooling, GPU, and I/O access.", talkingPoints: ["Physical GPU size can rule out a small case.", "Front I/O and build access affect your daily experience."], provenance: "Provided workshop notes" },
        { title: "Peripherals", summary: "You will plan monitors, input devices, audio, cameras, and other peripherals alongside the computer itself.", talkingPoints: ["Your build includes how you will actually use it.", "Some needs require extra PCIe or USB connectivity."], provenance: "Provided workshop notes" },
        { title: "Build-plan Q&A", summary: "You can turn the parts list into questions about your budget, compatibility, and priorities before you purchase.", talkingPoints: ["Start with the workload that matters most to you.", "Identify the constraint that could change the rest of your build."], provenance: "Provided workshop notes" },
        { title: "RGB as a system", summary: "You will treat lighting as a compatibility and cabling decision, not an afterthought.", talkingPoints: ["Check headers, cables, and software support.", "Keep lighting needs behind cooling and power requirements."], provenance: "Provided workshop notes" },
        { title: "Assembly order", summary: "You will follow a low-risk assembly sequence, including RAM placement, thermal paste, and PCIe installation.", talkingPoints: ["Use your motherboard manual for DIMM order.", "Verify each connection before you power on."], provenance: "Provided workshop notes" },
        { title: "References and next steps", summary: "You can use reputable resources to compare parts, learn terminology, and verify compatibility before ordering.", talkingPoints: ["Use PCPartPicker and manufacturer documentation for compatibility.", "Compare more than one trusted recommendation."], provenance: "Provided workshop notes" },
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
      guideAudience: "participant",
      slideDocumentation: [
        { title: "Welcome to Docker", summary: "You will meet Docker as a practical way to package and run software consistently for the projects you want to build.", talkingPoints: ["Focus on useful mental models, not memorizing commands.", "Connect each example to a maker project you recognize."], provenance: "Draft notes" },
        { title: "What you will cover", summary: "You will get a plain-language definition, the value of containers, maker-oriented use cases, and a deployment exercise.", talkingPoints: ["You can follow along during the hands-on portion.", "Bring your own questions to the discussion."], provenance: "Draft notes" },
        { title: "Why Docker is powerful", summary: "You will see how applications can share one host while remaining isolated and repeatable.", talkingPoints: ["Docker reduces setup drift between machines.", "Containers make your experiments easier to start and stop."], provenance: "Draft notes" },
        { title: "A working definition", summary: "You will understand containers as packaged application environments that share a host operating system instead of requiring full virtual machines.", talkingPoints: ["Containers still have resource limits.", "Portability depends on compatible architecture and configuration."], provenance: "Draft notes" },
        { title: "Why it matters to makers", summary: "You can use Docker to reduce setup friction, reuse working configurations, and try software with less risk.", talkingPoints: ["Start with the project you want to run.", "Prioritize repeatability over novelty."], provenance: "Draft notes" },
        { title: "Maker use cases", summary: "You will connect Docker to home automation, IoT, printer farms, astronomy, and shared data or monitoring systems.", talkingPoints: ["One small host can support several focused services.", "Protect your hardware and services with access controls."], provenance: "Draft notes" },
        { title: "More projects, less hardware", summary: "You will see how containers can support web tools, network management, local AI, dashboards, OS trials, and shared project documentation.", talkingPoints: ["You can remove abandoned experiments cleanly.", "Use deliberate security boundaries for remote access."], provenance: "Draft notes" },
        { title: "Images are the recipe", summary: "You will learn that a Docker image is an inspectable package of filesystem and runtime configuration used to create containers.", talkingPoints: ["An image is reusable; a container is its running instance.", "Read image documentation before you run it."], provenance: "Draft notes" },
        { title: "Hands-on: deploy Ollama", summary: "You will see how to approach an official Docker deployment after checking prerequisites, image source, GPU needs, ports, and data persistence.", talkingPoints: ["Use official instructions and verify the image source.", "Check your resource use before continuing."], provenance: "Draft notes" },
        { title: "Questions and next experiments", summary: "You can choose one small, reversible project to containerize next and ask about your own hardware or goals.", talkingPoints: ["Start with a simple first deployment.", "Use the discussion to connect Docker to your project."], provenance: "Draft notes" },
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
      guideAudience: "participant",
      slideDocumentation: [
        { title: "Workshop framing", summary: "You will use AI to accelerate maker work while keeping evidence, safety, and your own judgment in the loop.", talkingPoints: ["This workshop works for both beginner and technical audiences.", "You will see live demonstrations and have time for questions."], provenance: "Draft notes" },
        { title: "What success looks like", summary: "You will leave with a mental model, better prompts, a way to choose tools, local AI awareness, and verification habits.", talkingPoints: ["You do not need to memorize vocabulary.", "Verification is a skill you can practice."], provenance: "Draft notes" },
        { title: "AI is a stack", summary: "You will separate the chat product, agent workflow, router, model, and hardware so you can ask better questions about capability and data flow.", talkingPoints: ["‘I use ChatGPT’ does not identify the model or privacy path.", "Interfaces and models can change independently."], provenance: "Draft notes" },
        { title: "How an LLM generates", summary: "You will see a useful simplification: text is tokenized, represented, processed through attention, scored, and generated one token at a time.", talkingPoints: ["Next-token prediction is more capable than simple autocomplete.", "Generation is probabilistic, not a database lookup."], provenance: "Draft notes" },
        { title: "Tokens and capacity", summary: "You will learn that tokens are model-specific text chunks that affect your cost and context capacity.", talkingPoints: ["Tokens are not the same as words.", "Use a tokenizer or API count when precision matters."], provenance: "Draft notes" },
        { title: "Context is working memory", summary: "You will see what reaches a model during your request and why concise, relevant evidence often beats a huge uncurated prompt.", talkingPoints: ["Memory features are surrounding product systems.", "Attach the exact log, manual, photo, or code you are discussing."], provenance: "Draft notes" },
        { title: "Hallucinations need tests", summary: "You will distinguish fluent output from correct output, treating an AI answer as a hypothesis until evidence supports it.", talkingPoints: ["Ask for assumptions and uncertainty.", "Verify with primary evidence, tests, and qualified sources."], provenance: "Draft notes" },
        { title: "Prompting as a job specification", summary: "You will use a repeatable prompt structure: goal, context, constraints, evidence, desired output, then iteration.", talkingPoints: ["Clear constraints beat magic phrasing.", "Ask what evidence would reduce uncertainty."], provenance: "Draft notes" },
        { title: "Troubleshooting loop", summary: "You can use AI as a diagnostic partner: observe, hypothesize, run one safe test, update, fix, and verify.", talkingPoints: ["Avoid replacing multiple parts at once.", "Use safety and discriminating tests before a confident fix."], provenance: "Draft notes" },
        { title: "AI for code work", summary: "You can use AI as a fast pair programmer while keeping responsibility for diffs, versions, tests, and security-sensitive decisions.", talkingPoints: ["Give the exact reproduction and relevant files.", "Run generated code and feed failures back into your loop."], provenance: "Draft notes" },
        { title: "Research with sources", summary: "You will use a model for synthesis while treating sources as evidence that you open and check.", talkingPoints: ["Prefer primary and current sources.", "Separate fact, inference, and opinion."], provenance: "Draft notes" },
        { title: "Maker-space opportunities", summary: "You can apply AI to printing, electronics, CAD, fabrication, homelab, documentation, and learning workflows.", talkingPoints: ["Bring the real artifact into your prompt.", "Validate results against the physical world."], provenance: "Draft notes" },
        { title: "Choose a cloud product by workflow", summary: "You will compare products through your work, fresh-data needs, tools, privacy, cost, latency, and team workflow—not brand loyalty.", talkingPoints: ["There is no universal best model.", "Model menus change frequently."], provenance: "Draft notes" },
        { title: "Model families change", summary: "You will recognize the flagship, balanced, fast, and specialist pattern without treating this snapshot as a permanent recommendation.", talkingPoints: ["Check vendor pages and release notes before deciding.", "A dated slide is your prompt to re-check inventory."], provenance: "Draft notes" },
        { title: "Read benchmarks critically", summary: "You will read a benchmark as evidence about one task and harness, not as a universal quality score.", talkingPoints: ["Check who ran the test, version, date, and tradeoffs.", "Try your own representative task."], provenance: "Draft notes" },
        { title: "Local AI components", summary: "You will identify the roles of a local UI, agent layer, gateway, model runtime, low-level backend, and your hardware.", talkingPoints: ["‘Local’ can describe different pieces of a stack.", "Trace where your prompt can leave the machine."], provenance: "Draft notes" },
        { title: "Read model labels", summary: "You will decode common model-name signals: family, parameter count, instruction tuning, quantization, and context window.", talkingPoints: ["Parameter count is not file size or quality by itself.", "Longer context also consumes runtime memory."], provenance: "Draft notes" },
        { title: "Size a local model realistically", summary: "You will use practical starter tiers while accounting for quantization, context, GPU offload, concurrency, and architecture.", talkingPoints: ["Start with a model your machine can run comfortably.", "Treat sizing values as guidance, not vendor minimums."], provenance: "Draft notes" },
        { title: "Air-gapped means isolated", summary: "You will distinguish an offline setting from a true air gap that blocks network routes and uses controlled transfers.", talkingPoints: ["Verify hashes and provenance before transfer.", "Offline mode alone is not a network boundary."], provenance: "Draft notes" },
        { title: "Agents can act", summary: "You will see why agents that read files, run commands, browse, message, or call APIs need more care than chat.", talkingPoints: ["Use least privilege for every tool.", "Treat untrusted webpages and files as prompt-injection risks."], provenance: "Draft notes" },
        { title: "Classify data before sharing", summary: "You will use sensitivity and the real provider or tool configuration to decide what you can share with an AI system.", talkingPoints: ["Do not casually paste secrets or regulated data.", "Self-hosted does not automatically mean private."], provenance: "Draft notes" },
        { title: "Live demo sequence", summary: "You will follow three transferable demonstrations: improve a prompt with evidence, verify a current claim, and compare local and cloud tradeoffs.", talkingPoints: ["You can still practice locally if Wi-Fi fails.", "Focus on the method, not brand-specific tricks."], provenance: "Draft notes" },
        { title: "Copyable prompt patterns", summary: "You can reuse these templates for troubleshooting, code debugging, and research when you need evidence, constraints, tests, and uncertainty.", talkingPoints: ["Adapt each template to your task.", "Ask for one safe next test instead of a broad list of guesses."], provenance: "Draft notes" },
        { title: "A quick decision tree", summary: "You can choose an AI path by starting with sensitivity, air-gap needs, fresh information, and action-taking requirements.", talkingPoints: ["Quality on your real task is the final tie-breaker.", "Privacy, latency, cost, hardware, and workflow still matter."], provenance: "Draft notes" },
        { title: "Five rules to retain", summary: "You can carry five durable principles forward: verify output, provide evidence, choose for the task, trace privacy paths, and restrict agents.", talkingPoints: ["Use this short list when the details feel overwhelming.", "Apply one rule to your next project immediately."], provenance: "Draft notes" },
        { title: "Source pack", summary: "You can use these primary documents and independent benchmarks to revisit and verify the material after the workshop.", talkingPoints: ["Check live vendor pages because the AI landscape moves quickly.", "Use sources to validate workshop claims."], provenance: "Draft notes" },
        { title: "Questions and rabbit holes", summary: "You can turn questions into a working session with real projects, logs, screenshots, model names, and privacy or hardware decisions.", talkingPoints: ["Bring evidence, not just a vague problem statement.", "Use the workflow you can verify."], provenance: "Draft notes" },
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
