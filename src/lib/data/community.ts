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
  whyItMatters: string;
  tryThis: string;
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
        { title: "Build with a plan", summary: "You will get a roadmap for the parts, wiring, and compatibility decisions behind a desktop build.", whyItMatters: "A build is a system: one early choice can narrow your budget, physical space, power, and upgrade options later.", tryThis: "Write down the two jobs your computer must do best and one budget limit before looking at parts.", talkingPoints: ["Begin with your intended use and budget.", "Move from parts to compatibility to assembly."], provenance: "Provided workshop notes" },
        { title: "The core parts list", summary: "You will identify the main component categories before comparing brands or specific models.", whyItMatters: "Knowing the role of each part helps you spend money where your workload benefits rather than following a generic parts list.", tryThis: "Make a blank checklist for CPU, motherboard, RAM, storage, GPU, power, cooling, case, and peripherals.", talkingPoints: ["A balanced build matters more than one expensive part.", "Use this list as your compatibility checklist."], provenance: "Provided workshop notes" },
        { title: "CPU history and basics", summary: "You will see how on/off circuits, transistor density, and specialization shape modern CPU performance.", whyItMatters: "CPU labels make more sense when you know that cache, cores, clock speed, and architecture solve different performance problems.", tryThis: "Find the cache size, core count, and clock range for the CPU in your current computer or a candidate build.", talkingPoints: ["Moore’s Law describes a historical trend in transistor counts.", "CPU cache is fast short-term memory for the processor."], provenance: "Provided workshop notes" },
        { title: "Choosing a CPU", summary: "You can compare CPUs through core count, threading, clock speed, socket type, and your actual workload—not one headline number.", whyItMatters: "A processor that looks faster on paper can be a poor fit if it does not match your software, budget, or motherboard socket.", tryThis: "Compare two CPUs for one task you actually do and note their socket, core count, and single-core performance.", talkingPoints: ["More cores are not always better for single-threaded software.", "Confirm the motherboard socket before you buy."], provenance: "Provided workshop notes" },
        { title: "Storage choices", summary: "You will compare HDDs and SSDs by speed, power use, capacity, and expected use, including faster M.2 SSDs.", whyItMatters: "Storage changes how fast your computer starts, loads projects, and handles large files, while capacity affects what you can keep locally.", tryThis: "Separate the files that need speed from the files that need inexpensive long-term capacity.", talkingPoints: ["SSDs help when fast reads and writes matter.", "HDDs remain useful for large, long-lived storage."], provenance: "Provided workshop notes" },
        { title: "RAM and responsiveness", summary: "You will learn how RAM gives your CPU the short-term workspace it needs while applications run.", whyItMatters: "Insufficient or incompatible memory can limit a system even when the CPU and storage are strong.", tryThis: "Check your motherboard’s supported memory generation and decide how much RAM your largest regular task needs.", talkingPoints: ["Match the DIMM type and generation to your motherboard.", "Consider clock speed and CAS latency together."], provenance: "Provided workshop notes" },
        { title: "The motherboard", summary: "You will use the motherboard as the compatibility hub for your processor, memory, storage, I/O, networking, and expansion.", whyItMatters: "The motherboard determines which parts can connect today and what upgrades remain possible tomorrow.", tryThis: "Choose one motherboard and verify its CPU socket, RAM slots, storage connectors, PCIe slots, and rear I/O against your checklist.", talkingPoints: ["Choose a board that fits your case and growth plans.", "PCIe slots let you add capabilities later."], provenance: "Provided workshop notes" },
        { title: "Power supply decisions", summary: "You will look for enough capacity, the right connectors, cooling, and cable layout for your build.", whyItMatters: "A power supply is a reliability and safety decision; it has to support peak demand and the actual connectors your parts require.", tryThis: "Add your planned CPU and GPU requirements, then verify that a candidate power supply has headroom and the matching cables.", talkingPoints: ["Check that the unit supports your GPU and storage connectors.", "Modular cables can make your build easier to service."], provenance: "Provided workshop notes" },
        { title: "The GPU", summary: "You will see why GPUs are specialized for graphics and parallel work, then match one to your use case and physical space.", whyItMatters: "A GPU choice affects visual performance, creative or AI workloads, power draw, cooling, and whether the card physically fits.", tryThis: "Measure your candidate case’s GPU clearance and compare it with the exact model length before you buy.", talkingPoints: ["Your GPU affects power, cooling, and case clearance.", "CUDA and tensor hardware matter for some AI-oriented builds."], provenance: "Provided workshop notes" },
        { title: "CPU cooling", summary: "You will compare air cooling, all-in-one liquid cooling, and custom loops by maintenance, compatibility, reliability, and performance.", whyItMatters: "Cooling affects sustained performance, noise, and how much maintenance you take on after the system is built.", tryThis: "Decide whether low maintenance, low noise, compact size, or maximum thermal headroom matters most to you.", talkingPoints: ["Air coolers are simple and long-lived.", "AIOs are closed loops; custom loops need ongoing maintenance."], provenance: "Provided workshop notes" },
        { title: "The case", summary: "You will use the case as a practical compatibility check for your motherboard, cooling, GPU, and I/O access.", whyItMatters: "The case is where abstract compatibility becomes physical: clearances, airflow, cable routing, and front ports shape the finished build.", tryThis: "Open a case specification page and compare its motherboard, cooler, GPU, and radiator limits to your chosen components.", talkingPoints: ["Physical GPU size can rule out a small case.", "Front I/O and build access affect your daily experience."], provenance: "Provided workshop notes" },
        { title: "Peripherals", summary: "You will plan monitors, input devices, audio, cameras, and other peripherals alongside the computer itself.", whyItMatters: "The parts you touch and look at determine much of your daily experience, and they can create extra connectivity requirements.", tryThis: "List the ports and accessories you will use on day one so you can confirm the motherboard or expansion plan supports them.", talkingPoints: ["Your build includes how you will actually use it.", "Some needs require extra PCIe or USB connectivity."], provenance: "Provided workshop notes" },
        { title: "Build-plan Q&A", summary: "You can turn the parts list into questions about your budget, compatibility, and priorities before you purchase.", whyItMatters: "A clear constraint—such as budget, quiet operation, small size, or a specific application—makes tradeoffs easier to evaluate.", tryThis: "Write one question you still need answered before buying a part, then identify the specification or manual that can answer it.", talkingPoints: ["Start with the workload that matters most to you.", "Identify the constraint that could change the rest of your build."], provenance: "Provided workshop notes" },
        { title: "RGB as a system", summary: "You will treat lighting as a compatibility and cabling decision, not an afterthought.", whyItMatters: "Lighting components often use different headers, voltages, controllers, and software, so a small mismatch can create unnecessary returns or adapters.", tryThis: "Check whether the lighting parts you like use the same connector and control ecosystem as your motherboard or controller.", talkingPoints: ["Check headers, cables, and software support.", "Keep lighting needs behind cooling and power requirements."], provenance: "Provided workshop notes" },
        { title: "Assembly order", summary: "You will follow a low-risk assembly sequence, including RAM placement, thermal paste, and PCIe installation.", whyItMatters: "A deliberate order keeps fragile components accessible, reduces rework, and makes it easier to diagnose a problem before the system is fully closed.", tryThis: "Keep the motherboard manual open and mark the RAM slots, front-panel headers, and storage locations before you begin assembly.", talkingPoints: ["Use your motherboard manual for DIMM order.", "Verify each connection before you power on."], provenance: "Provided workshop notes" },
        { title: "References and next steps", summary: "You can use reputable resources to compare parts, learn terminology, and verify compatibility before ordering.", whyItMatters: "Good sources help you separate current specifications from marketing claims and find issues before they become expensive mistakes.", tryThis: "Cross-check one candidate part in a compatibility tool, its manufacturer manual, and an independent review before committing.", talkingPoints: ["Use PCPartPicker and manufacturer documentation for compatibility.", "Compare more than one trusted recommendation."], provenance: "Provided workshop notes" },
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
        { title: "Welcome to Docker", summary: "You will meet Docker as a practical way to package and run software consistently for the projects you want to build.", whyItMatters: "A repeatable package gives you a clearer path from ‘it worked on my machine’ to something you can run again, move, or share.", tryThis: "Name one project you have postponed because installation or setup looked fragile, then keep it in mind as you move through the deck.", talkingPoints: ["Focus on useful mental models, not memorizing commands.", "Connect each example to a maker project you recognize."], provenance: "Draft notes" },
        { title: "What you will cover", summary: "You will get a plain-language definition, the value of containers, maker-oriented use cases, and a deployment exercise.", whyItMatters: "The sequence moves from the reason for containers to the practical choices you will make when you run one yourself.", tryThis: "Choose whether you want to follow the hands-on example today or simply identify the prerequisite you would need first.", talkingPoints: ["You can follow along during the hands-on portion.", "Bring your own questions to the discussion."], provenance: "Draft notes" },
        { title: "Why Docker is powerful", summary: "You will see how applications can share one host while remaining isolated and repeatable.", whyItMatters: "Isolation and reproducibility let you host focused services without rebuilding a whole machine every time you experiment.", tryThis: "Think of one service you could stop, recreate, or move without losing your entire computer setup.", talkingPoints: ["Docker reduces setup drift between machines.", "Containers make your experiments easier to start and stop."], provenance: "Draft notes" },
        { title: "A working definition", summary: "You will understand containers as packaged application environments that share a host operating system instead of requiring full virtual machines.", whyItMatters: "This distinction explains why containers typically start quickly and use fewer resources, while still needing sensible limits and compatible configuration.", tryThis: "Compare a virtual machine and a container in your own words: what does each package, and what does each share?", talkingPoints: ["Containers still have resource limits.", "Portability depends on compatible architecture and configuration."], provenance: "Draft notes" },
        { title: "Why it matters to makers", summary: "You can use Docker to reduce setup friction, reuse working configurations, and try software with less risk.", whyItMatters: "The payoff is not Docker itself; it is the ability to spend more time on a project and less time reconstructing its environment.", tryThis: "Choose the smallest useful service in one of your projects—a dashboard, wiki, automation, or local tool—as a possible first container.", talkingPoints: ["Start with the project you want to run.", "Prioritize repeatability over novelty."], provenance: "Draft notes" },
        { title: "Maker use cases", summary: "You will connect Docker to home automation, IoT, printer farms, astronomy, and shared data or monitoring systems.", whyItMatters: "These projects often combine specialized software and long-running services, which are exactly where a consistent deployment can help.", tryThis: "Pick one example and list the data, hardware access, and users it would need before you expose it on your network.", talkingPoints: ["One small host can support several focused services.", "Protect your hardware and services with access controls."], provenance: "Draft notes" },
        { title: "More projects, less hardware", summary: "You will see how containers can support web tools, network management, local AI, dashboards, OS trials, and shared project documentation.", whyItMatters: "A container can be a bounded experiment: you can keep configuration with the project and remove it cleanly when the experiment is over.", tryThis: "Identify one tool you currently avoid installing because you do not want it permanently changing your computer.", talkingPoints: ["You can remove abandoned experiments cleanly.", "Use deliberate security boundaries for remote access."], provenance: "Draft notes" },
        { title: "Images are the recipe", summary: "You will learn that a Docker image is an inspectable package of filesystem and runtime configuration used to create containers.", whyItMatters: "Knowing the image-versus-container distinction helps you reason about updates, persistence, and why deleting a container is not the same as deleting its data.", tryThis: "When you see a container example, ask where its image comes from and where any data should persist outside it.", talkingPoints: ["An image is reusable; a container is its running instance.", "Read image documentation before you run it."], provenance: "Draft notes" },
        { title: "Hands-on: deploy Ollama", summary: "You will see how to approach an official Docker deployment after checking prerequisites, image source, GPU needs, ports, and data persistence.", whyItMatters: "A safe deployment starts before the command: you need to know what runs, what it can reach, which resources it consumes, and where it stores data.", tryThis: "Before following a command, locate the official image, list the ports it opens, and decide whether you need GPU access or persistent storage.", talkingPoints: ["Use official instructions and verify the image source.", "Check your resource use before continuing."], provenance: "Draft notes" },
        { title: "Questions and next experiments", summary: "You can choose one small, reversible project to containerize next and ask about your own hardware or goals.", whyItMatters: "A scoped first project lets you practice the full loop—image, configuration, data, network access, and cleanup—without creating an unmanageable system.", tryThis: "Write down your first container experiment, the success signal you will check, and how you will stop or remove it afterward.", talkingPoints: ["Start with a simple first deployment.", "Use the discussion to connect Docker to your project."], provenance: "Draft notes" },
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
        { title: "Workshop framing", summary: "You will use AI to accelerate maker work while keeping evidence, safety, and your own judgment in the loop.", whyItMatters: "The useful skill is not getting an impressive answer once; it is building a repeatable way to turn uncertain output into a safe next step.", tryThis: "Choose one real maker problem you have now and use it as your running example through the workshop.", talkingPoints: ["This workshop works for both beginner and technical audiences.", "You will see live demonstrations and have time for questions."], provenance: "Draft notes" },
        { title: "What success looks like", summary: "You will leave with a mental model, better prompts, a way to choose tools, local AI awareness, and verification habits.", whyItMatters: "These outcomes are connected: better tool choices and better prompts only help when you also know how to check the result.", tryThis: "Circle the outcome that would help your next project most and listen for one technique you can use this week.", talkingPoints: ["You do not need to memorize vocabulary.", "Verification is a skill you can practice."], provenance: "Draft notes" },
        { title: "AI is a stack", summary: "You will separate the chat product, agent workflow, router, model, and hardware so you can ask better questions about capability and data flow.", whyItMatters: "When you separate the layers, you can change a model, privacy setting, or runtime without assuming the whole system works the same way.", tryThis: "Pick one AI tool you use and identify its interface, model, tools, and whether your data leaves your device.", talkingPoints: ["‘I use ChatGPT’ does not identify the model or privacy path.", "Interfaces and models can change independently."], provenance: "Draft notes" },
        { title: "How an LLM generates", summary: "You will see a useful simplification: text is tokenized, represented, processed through attention, scored, and generated one token at a time.", whyItMatters: "This model explains why an answer can sound coherent without being grounded in a current fact, a manual, or your exact environment.", tryThis: "When an answer surprises you, ask which evidence in your prompt could actually support it and which parts still need checking.", talkingPoints: ["Next-token prediction is more capable than simple autocomplete.", "Generation is probabilistic, not a database lookup."], provenance: "Draft notes" },
        { title: "Tokens and capacity", summary: "You will learn that tokens are model-specific text chunks that affect your cost and context capacity.", whyItMatters: "A long log, document, or conversation can consume the room available for the facts that matter most to your task.", tryThis: "Estimate which attachments or chat history are essential before asking a model to diagnose something complicated.", talkingPoints: ["Tokens are not the same as words.", "Use a tokenizer or API count when precision matters."], provenance: "Draft notes" },
        { title: "Context is working memory", summary: "You will see what reaches a model during your request and why concise, relevant evidence often beats a huge uncurated prompt.", whyItMatters: "The model cannot reliably act on information it never sees, and irrelevant context can hide the clue you care about.", tryThis: "For your running example, name the one log, photo, manual page, or code file that would reduce guesswork most.", talkingPoints: ["Memory features are surrounding product systems.", "Attach the exact log, manual, photo, or code you are discussing."], provenance: "Draft notes" },
        { title: "Hallucinations need tests", summary: "You will distinguish fluent output from correct output, treating an AI answer as a hypothesis until evidence supports it.", whyItMatters: "This habit protects you from plausible mistakes in technical work, research, repairs, and decisions where confidence is not proof.", tryThis: "Ask an AI for the assumptions behind one answer, then choose one observation or source that could prove it wrong.", talkingPoints: ["Ask for assumptions and uncertainty.", "Verify with primary evidence, tests, and qualified sources."], provenance: "Draft notes" },
        { title: "Prompting as a job specification", summary: "You will use a repeatable prompt structure: goal, context, constraints, evidence, desired output, then iteration.", whyItMatters: "A well-specified request gives the model fewer chances to fill gaps with an invented assumption or an unusable format.", tryThis: "Rewrite a vague request using the six fields on this slide, then add the evidence you would want a human helper to see.", talkingPoints: ["Clear constraints beat magic phrasing.", "Ask what evidence would reduce uncertainty."], provenance: "Draft notes" },
        { title: "Troubleshooting loop", summary: "You can use AI as a diagnostic partner: observe, hypothesize, run one safe test, update, fix, and verify.", whyItMatters: "A single discriminating test is cheaper and safer than changing several things and losing the clue about what actually solved the problem.", tryThis: "Describe one issue you have and ask for three ranked causes plus one safe test that separates each cause from the others.", talkingPoints: ["Avoid replacing multiple parts at once.", "Use safety and discriminating tests before a confident fix."], provenance: "Draft notes" },
        { title: "AI for code work", summary: "You can use AI as a fast pair programmer while keeping responsibility for diffs, versions, tests, and security-sensitive decisions.", whyItMatters: "Generated code can be syntactically valid while still using the wrong dependency, missing an edge case, or introducing a security problem.", tryThis: "Give a model one small failing test or error message and ask for the smallest patch plus the test that would validate it.", talkingPoints: ["Give the exact reproduction and relevant files.", "Run generated code and feed failures back into your loop."], provenance: "Draft notes" },
        { title: "Research with sources", summary: "You will use a model for synthesis while treating sources as evidence that you open and check.", whyItMatters: "A citation only helps when it actually supports the claim, is current enough, and comes from a source appropriate to the decision.", tryThis: "Choose one current question and require a primary source, a publication date, and a statement of what could change the answer.", talkingPoints: ["Prefer primary and current sources.", "Separate fact, inference, and opinion."], provenance: "Draft notes" },
        { title: "Maker-space opportunities", summary: "You can apply AI to printing, electronics, CAD, fabrication, homelab, documentation, and learning workflows.", whyItMatters: "AI is most useful when it shortens the lookup or drafting step while you still validate the result against a real object, measurement, or manual.", tryThis: "Pick one maker workflow and list the artifact you could attach—photo, schematic, settings file, log, or bill of materials.", talkingPoints: ["Bring the real artifact into your prompt.", "Validate results against the physical world."], provenance: "Draft notes" },
        { title: "Choose a cloud product by workflow", summary: "You will compare products through your work, fresh-data needs, tools, privacy, cost, latency, and team workflow—not brand loyalty.", whyItMatters: "The right choice for source-backed research may be wrong for private code, rapid prototyping, or a low-latency interactive task.", tryThis: "Score two tools against your next task using quality, current information, privacy, latency, cost, and integrations.", talkingPoints: ["There is no universal best model.", "Model menus change frequently."], provenance: "Draft notes" },
        { title: "Model families change", summary: "You will recognize the flagship, balanced, fast, and specialist pattern without treating this snapshot as a permanent recommendation.", whyItMatters: "Model names and capabilities change quickly, but the tradeoff pattern helps you choose even when the exact menu is different.", tryThis: "Before you choose a model, check the vendor’s current page and decide whether your task needs maximum capability, speed, or cost control.", talkingPoints: ["Check vendor pages and release notes before deciding.", "A dated slide is your prompt to re-check inventory."], provenance: "Draft notes" },
        { title: "Read benchmarks critically", summary: "You will read a benchmark as evidence about one task and harness, not as a universal quality score.", whyItMatters: "A leaderboard can hide the prompt style, tools, number of attempts, latency, cost, and task definition that made one result look better.", tryThis: "When you see a benchmark claim, ask what it measured, who ran it, when it ran, and whether it resembles your task.", talkingPoints: ["Check who ran the test, version, date, and tradeoffs.", "Try your own representative task."], provenance: "Draft notes" },
        { title: "Local AI components", summary: "You will identify the roles of a local UI, agent layer, gateway, model runtime, low-level backend, and your hardware.", whyItMatters: "A local-looking interface can still route requests, retrieval, telemetry, or tools elsewhere, so privacy depends on the full path.", tryThis: "Draw the path your prompt takes in a local setup and mark every place it could be stored, forwarded, or acted on.", talkingPoints: ["‘Local’ can describe different pieces of a stack.", "Trace where your prompt can leave the machine."], provenance: "Draft notes" },
        { title: "Read model labels", summary: "You will decode common model-name signals: family, parameter count, instruction tuning, quantization, and context window.", whyItMatters: "A model label gives you a first estimate of capability and memory needs, but it does not guarantee quality or a comfortable hardware fit.", tryThis: "Take one local-model label and identify its family, parameter count, quantization, and advertised context before downloading it.", talkingPoints: ["Parameter count is not file size or quality by itself.", "Longer context also consumes runtime memory."], provenance: "Draft notes" },
        { title: "Size a local model realistically", summary: "You will use practical starter tiers while accounting for quantization, context, GPU offload, concurrency, and architecture.", whyItMatters: "A model that technically starts may still be too slow or memory-hungry for your hardware once you add context, users, or tools.", tryThis: "Check your available RAM and VRAM, then select a small model tier you can test before reaching for a larger one.", talkingPoints: ["Start with a model your machine can run comfortably.", "Treat sizing values as guidance, not vendor minimums."], provenance: "Draft notes" },
        { title: "Air-gapped means isolated", summary: "You will distinguish an offline setting from a true air gap that blocks network routes and uses controlled transfers.", whyItMatters: "An offline checkbox may disable conveniences, but only network isolation prevents unapproved outbound paths from reaching the internet.", tryThis: "For an air-gapped use case, list the model files, containers, updates, and checksums you would stage before disconnecting the network.", talkingPoints: ["Verify hashes and provenance before transfer.", "Offline mode alone is not a network boundary."], provenance: "Draft notes" },
        { title: "Agents can act", summary: "You will see why agents that read files, run commands, browse, message, or call APIs need more care than chat.", whyItMatters: "The ability to act turns an incorrect instruction, exposed secret, or malicious webpage into an operational risk rather than just a bad answer.", tryThis: "List the minimum permissions an agent would need for one useful task and remove every permission outside that boundary.", talkingPoints: ["Use least privilege for every tool.", "Treat untrusted webpages and files as prompt-injection risks."], provenance: "Draft notes" },
        { title: "Classify data before sharing", summary: "You will use sensitivity and the real provider or tool configuration to decide what you can share with an AI system.", whyItMatters: "Data handling is a system property: a private-looking interface can still involve plugins, logs, remote APIs, or browser tools.", tryThis: "Classify one file you considered pasting into AI as public, internal, confidential, or secret, then choose an appropriate environment.", talkingPoints: ["Do not casually paste secrets or regulated data.", "Self-hosted does not automatically mean private."], provenance: "Draft notes" },
        { title: "Live demo sequence", summary: "You will follow three transferable demonstrations: improve a prompt with evidence, verify a current claim, and compare local and cloud tradeoffs.", whyItMatters: "The demos model a repeatable behavior: make the request more specific, test the answer, and choose a tool based on evidence instead of novelty.", tryThis: "After each demo, write down the one input or verification step you would add to make it useful for your project.", talkingPoints: ["You can still practice locally if Wi-Fi fails.", "Focus on the method, not brand-specific tricks."], provenance: "Draft notes" },
        { title: "Copyable prompt patterns", summary: "You can reuse these templates for troubleshooting, code debugging, and research when you need evidence, constraints, tests, and uncertainty.", whyItMatters: "A reusable structure gives you a reliable starting point while leaving room for the details that make your situation unique.", tryThis: "Copy the template closest to your work, replace every bracketed field with real evidence, and ask for one testable next step.", talkingPoints: ["Adapt each template to your task.", "Ask for one safe next test instead of a broad list of guesses."], provenance: "Draft notes" },
        { title: "A quick decision tree", summary: "You can choose an AI path by starting with sensitivity, air-gap needs, fresh information, and action-taking requirements.", whyItMatters: "Starting with constraints prevents a technically impressive tool from becoming the wrong choice for your data or workflow.", tryThis: "Walk your next AI task through the tree and write down why the selected path fits your privacy and information needs.", talkingPoints: ["Quality on your real task is the final tie-breaker.", "Privacy, latency, cost, hardware, and workflow still matter."], provenance: "Draft notes" },
        { title: "Five rules to retain", summary: "You can carry five durable principles forward: verify output, provide evidence, choose for the task, trace privacy paths, and restrict agents.", whyItMatters: "A small set of durable rules is easier to apply under pressure than a long list of model names or product features.", tryThis: "Choose the rule you are least likely to follow today and put it beside your next AI-assisted task as a check.", talkingPoints: ["Use this short list when the details feel overwhelming.", "Apply one rule to your next project immediately."], provenance: "Draft notes" },
        { title: "Source pack", summary: "You can use these primary documents and independent benchmarks to revisit and verify the material after the workshop.", whyItMatters: "The source pack is how you keep the workshop current and check claims as models, product names, and capabilities change.", tryThis: "Bookmark two sources you will revisit before making your next model, product, or local-hardware decision.", talkingPoints: ["Check live vendor pages because the AI landscape moves quickly.", "Use sources to validate workshop claims."], provenance: "Draft notes" },
        { title: "Questions and rabbit holes", summary: "You can turn questions into a working session with real projects, logs, screenshots, model names, and privacy or hardware decisions.", whyItMatters: "Specific evidence makes a question answerable and lets you leave with a next test instead of an abstract opinion.", tryThis: "Bring one screenshot, log, manual page, or model name to the conversation and state what decision you need to make.", talkingPoints: ["Bring evidence, not just a vague problem statement.", "Use the workflow you can verify."], provenance: "Draft notes" },
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
