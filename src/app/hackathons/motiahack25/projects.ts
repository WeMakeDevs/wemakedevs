const winningProjects = [
	{
		teamName: "Aymaan Pathan",
		projectTitle: "Orchestrix - Visual Backend Builder",
		description:
			"AI-powered visual workflow builder that lets anyone create production-ready APIs without writing code by describing requirements in plain English, instantly generating complete executable workflows powered by Motia's scalable runtime.",
		githubLink: "https://github.com/AymaanPathan/Orchestrix",
		youtubeEmbed: "https://www.youtube.com/embed/fJMYOzcAQhw",
		prize: "1st Prize",
	},
	{
		teamName: "Abhinav Mahajan",
		projectTitle: "SocialOps",
		description:
			"AI-powered operating system for content creators that unifies brand partnership management across fragmented communication channels, automating the entire lifecycle from inquiry and negotiation to invoicing and financial compliance using Motia's event-driven architecture.",
		githubLink: "https://github.com/abhinav-m22/social-ops-ai",
		youtubeEmbed: "https://www.youtube.com/embed/VWzVET51nLk",
		prize: "2nd Prize",
	},
	{
		teamName: "Shubham Kumar",
		projectTitle: "OpsGuard",
		description:
			"AI-powered SRE system that analyzes logs, understands production incidents, and suggests fixes while always waiting for human approval before taking action, built using Motia's event-driven architecture to manage the complete incident lifecycle from detection to resolution.",
		githubLink: "https://github.com/shubham-01-star/opsguard-ai-sre",
		youtubeEmbed: "https://www.youtube.com/embed/mHRi1qJl1jE",
		prize: "3rd Prize",
	},
];

const topProjects = [
	{
		teamName: "Kaushik Paykoli",
		projectTitle: "CodeAutopsy",
		description:
			"Intelligent self-healing agent that eliminates CI/CD context switching by automating the entire diagnosis-to-fix loop, using AI vision to read error logs and repository files to fix complex logic errors in Python, React, and Node.js.",
		githubLink: "https://github.com/kaushik0010/code-autopsy",
		youtubeEmbed: "https://www.youtube.com/embed/V_pziwbWW0U",
	},
	{
		teamName: "Sakshi Jadhav",
		projectTitle: "Data Pipeline",
		description:
			"End-to-end data pipeline built using Motia that automatically cleans, validates, and transforms raw JSON data into datasets ready for training or analysis.",
		githubLink: "https://github.com/Jadhavsakshi7887/data_pipeline",
		youtubeEmbed: "https://www.youtube.com/embed/f5Yv8dx29ig",
	},
	{
		teamName: "Vaibhav Mishra",
		projectTitle: "Adaptome",
		description:
			"Production-grade accessibility adaptation platform that makes websites inclusive for users with disabilities by dynamically adapting UI in real-time based on user needs, powered by Motia's event-driven backend.",
		githubLink: "https://github.com/V1629/Adaptome",
		youtubeEmbed: "https://drive.google.com/file/d/1xEnbhpHs6AvfmiO1S2VCj_57stUb4Io9/preview",
	},
	{
		teamName: "V Sreenivas",
		projectTitle: "Prolepsis",
		description:
			"Self-healing maritime logistics system powered by agentic AI, demonstrating resilient, autonomous, and self-healing software built with Motia.",
		githubLink: "https://github.com/cnu1812/Prolepsis/",
		youtubeEmbed: "https://www.youtube.com/embed/yJzlWwO5BRs",
	},
	{
		teamName: "Deadlock",
		projectTitle: "THE HEALER AI",
		description:
			"Self-healing backend system that automatically detects workflow failures, diagnoses root causes using AI, and recovers without manual intervention, making backend workflows resilient and fault-tolerant for production use.",
		githubLink: "https://github.com/Dhruv26052005/THE-HEALER-AI.git",
		youtubeEmbed: "https://www.youtube.com/embed/tOszSjxD2D4",
	},
	{
		teamName: "Mohamedkaseem",
		projectTitle: "LearnFlow",
		description:
			"Interactive coding education platform that brings code to life through animated replays, real-time visualizations, AI-powered explanations, DSA visualizers, quiz modes, and collaborative learning features.",
		githubLink: "https://github.com/Mohamedkaseem/code-replay",
		youtubeEmbed: "https://www.youtube.com/embed/19gUM1LC2lM",
	},
	{
		teamName: "Aditya Kumar Maurya",
		projectTitle: "Motia Onboarding Automation",
		description:
			"Event-driven, AI-powered employee onboarding system that eliminates HR bottlenecks by orchestrating the entire journey from offer acceptance to credential generation using Motia workflows and Google Gemini for intelligent identity verification.",
		githubLink: "https://github.com/addy1947/motia_project",
		youtubeEmbed: "https://www.youtube.com/embed/Kbbjh0ZZfeE",
	},
	{
		teamName: "CodeXCode",
		projectTitle: "GhostProtocol",
		description:
			"Durable orchestration engine that automates GDPR/CCPA Right-to-Be-Forgotten requests across modern SaaS stacks, coordinating identity-critical deletions sequentially while executing non-critical deletions in parallel with retry safety and immutable audit logs.",
		githubLink: "https://github.com/Debjyoti-19/GhostProtocol",
		youtubeEmbed: "https://www.youtube.com/embed/8LDRAXIxqVY",
	},
	{
		teamName: "Samarth Bhandavale",
		projectTitle: "CodeBattle",
		description:
			"Synchronous, high-stakes 1v1 competitive programming platform that turns LeetCode into a live esport with real-time matchmaking, live code execution, and spectator views, built on Motia for infinite scalability and zero-lag duels.",
		githubLink: "https://github.com/sambhandavale/code-battle",
		youtubeEmbed: "https://www.youtube.com/embed/k2AJzjcR2EQ",
	},
	{
		teamName: "BitWrappers",
		projectTitle: "GitHub Wrapped",
		description:
			"Generate personalized GitHub statistics and achievements for any user, analyzing GitHub activity and presenting stunning visual cards with your coding journey.",
		githubLink: "https://github.com/crypticsaiyan/githubwrapped",
		youtubeEmbed: "https://www.youtube.com/embed/qM0LNySSQOY",
	},
	{
		teamName: "RAG2riches",
		projectTitle: "Dive",
		description:
			"AI-powered knowledge graph that clusters search results into an interactive graph, linking each concept to source references with thematic relationships and clickable source links for verification of AI claims.",
		githubLink: "https://github.com/dhyaneesh/motia-hack/tree/bra",
		youtubeEmbed: "https://www.youtube.com/embed/bvR50GmWMm4",
	},
	{
		teamName: "Spandan Mukherjee",
		projectTitle: "MDWR",
		description:
			"MDWR combines workflow orchestration with operational decision memory to create workflows that: Remember every decision and why it was made, Explain decisions automatically (compile-time enforced), Learn from past decisions and outcomes, Replay with different policies or memory-informed insights.",
		githubLink: "https://github.com/RSN601KRI/Motia-Atlas",
		youtubeEmbed: "https://www.youtube.com/embed/atJtl5c3HJg",
	},
	{
		teamName: "Aryan Kumar",
		projectTitle: "OmniReel",
		description:
			"OmniReel is an AI-powered video generation platform that transforms any topic into professional short-form videos in minutes. It automates the entire pipeline: script writing, voice synthesis, visual generation, caption syncing, music selection, and FFmpeg composition with a python step, in one click. The problem: Creators spend 6+ hours making a 60-second reel using multiple expensive tools. OmniReel does it all automatically. Bonus: The Gemini Logo Remover removes watermarks from AI images. Complete standalone product on the same architecture. Built solo in 5 days. Production-ready with auth, payments, subscriptions, and automatic refunds.",
		githubLink: "https://github.com/aryan877/omnireel",
		youtubeEmbed: "https://airy-concrete-c02.notion.site/YOUTUBE-DEMO-FOR-OMNIREEL-2d0d0ba6020f8055889cfb99ab50b1c9?pvs=73",
	},
	{
		teamName: "Sridhar Sing",
		projectTitle: "VerbaLens",
		description:
			"VerbaLens is an AI-powered communication coaching platform that helps users master their speaking skills. Users can record voice responses on various topics and receive instant AI feedback on clarity, confidence, and filler word usage. Built with a Motia backend (Node.js/TypeScript) and Next.js frontend, it leverages Google Gemini AI for intelligent speech analysis and PostgreSQL for data persistence.",
		githubLink: "https://github.com/sydshelf75/VerbaLens_backend",
		youtubeEmbed: "https://www.youtube.com/embed/jElt8hacFz0",
	},
];

const otherProjects = [
	{
		teamName: "Shivansh Bagga",
		projectTitle: "StepFlow",
		description:
			"Simple backend project demonstrating how APIs and background tasks can be handled together using Motia's Step-based approach, showing how HTTP requests trigger asynchronous processing through events without queues or workers.",
		githubLink: "https://github.com/baggashivansh/step-flow",
	},
	{
		teamName: "Sachin",
		projectTitle: "Ops Auto-Pilot",
		description:
			"Autonomous AI agent that lives in CI/CD pipelines, watches GitHub pushes, analyzes logic using Gemini 2.5 Flash, and instantly sends fixed code on Discord when bugs are found, turning solo coding into coding with an AI partner.",
		githubLink: "https://github.com/SachinMyadam/ops-auto-pilot",
	},
	{
		teamName: "Abhinav Gupta",
		projectTitle: "To-do App",
		description:
			"Scalable backend API using Motia framework with clean architecture, modular design, structured routing, middleware-based logic, and robust error handling following backend best practices.",
		githubLink: "https://github.com/Abhinavgupta2404/To-do-app",
	},
	{
		teamName: "Esheshwari Kumari",
		projectTitle: "PWOA",
		description:
			"Intelligent multi-agent productivity system that transforms unstructured information into actionable daily plans with task extraction, AI-driven priority scoring, automatic schedule building, Gmail reminders, and Google Calendar sync.",
		githubLink: "https://github.com/Esheshwari/PWOA",
	},
	{
		teamName: "yaswanth",
		projectTitle: "AI Job Assist",
		description:
			"Comprehensive platform built with Motia that helps job seekers automate their job search and social media presence using AI.",
		githubLink: "https://github.com/potnuruyaswanth/ai-job-assist",
	},
	{
		teamName: "SOLO",
		projectTitle: "Motia User Lifecycle",
		description:
			"Production-ready user lifecycle backend demonstrating common workflows like signup, email verification, background processing, waiting for external events, and AI-based risk evaluation using Motia's unified runtime without queues or cron jobs.",
		githubLink: "https://github.com/utsxvrai/Motia",
	},
	{
		teamName: "Dharanidhara DJ",
		projectTitle: "Online Poll Voting",
		description:
			"Real-time polling system using Motia streams for live voting and results tracking.",
		githubLink: "https://github.com/GearZephyr/Online-poll-votting",
	},
	{
		teamName: "Ayush Gopal",
		projectTitle: "Telegram Alert Engine",
		description:
			"Workflow-driven backend system that automatically monitors Telegram channels and sends notifications for new messages using Motia's unified workflow model combining cron-based scheduling, background jobs, and event-driven notifications.",
		githubLink: "https://github.com/ayushgopal17/Backend-Reloaded--motia",
	},
	{
		teamName: "swapitsneil",
		projectTitle: "AI Job Tracker",
		description:
			"Full-stack job application tracking system with SQLite database, Express backend, Next.js frontend, and Motia workflow integration.",
		githubLink: "https://github.com/swapitsneil/ai-job-tracker-motia/",
	},
	{
		teamName: "Piyush",
		projectTitle: "CarPool",
		description:
			"Peer-to-peer carpooling platform for Delhi college students with real-time location tracking, route visualization using Google Maps API and Leaflet.js, and instant user communication via Socket.io.",
		githubLink: "https://github.com/Piyush0000/carPool",
	},
	{
		teamName: "Payal Kumari",
		projectTitle: "Motia Job Tracker",
		description:
			"Job application tracker built with Motia that allows users to create applications, schedule follow-ups, and receive notifications through event-driven workflows powered by Motia's API and event system.",
		githubLink: "https://github.com/PayalKumari10/motia-job-tracker.git",
	},
	{
		teamName: "Kaustubh Mukdam",
		projectTitle: "DocFlow AI",
		description:
			"Intelligent document processing system that combines AI-powered analysis with human decision-making, automatically classifying, summarizing, and assessing risk in financial documents while routing high-risk cases to human reviewers.",
		githubLink: "https://github.com/KaustubhMukdam/docflow-ai.git",
	},
	{
		teamName: "h30s",
		projectTitle: "Motia Studio Pro",
		description:
			"AI-powered backend IDE that generates production-ready Motia backend code from plain English descriptions in seconds and deploys with one click, featuring visual workflow builder, ready-made templates, and built-in monitoring.",
		githubLink: "https://github.com/h30s/MotiaStudioPro",
	},
	{
		teamName: "Hasham Tanveer",
		projectTitle: "Async Job Processing",
		description:
			"Asynchronous event-driven AI Task Engine built with Motia that solves blocking APIs by offloading heavy tasks to background workers with non-blocking API, real-time progress tracking, and self-healing resilience.",
		githubLink: "https://github.com/hashamtanveer-41/Async_Job_Processing-Backend-Reloaded-Hackathon-",
	},
	{
		teamName: "Geff115",
		projectTitle: "TeamSync",
		description:
			"AI-powered meeting action item tracker that extracts action items from meeting transcripts using Google Gemini, stores them in Motia's built-in state, sends email confirmations, and runs daily cron jobs for reminders.",
		githubLink: "https://github.com/Geff115/teamsync-backend",
	},
	{
		teamName: "Runtimeterror",
		projectTitle: "TrustGuard AI",
		description:
			"AI-powered scam detection and risk analysis tool that analyzes job postings, messages, and websites instantly to detect scams, hidden fees, and phishing attempts using powerful AI models.",
		githubLink: "https://github.com/bhongyash111-coder/Trust_Guard_ai",
	},
	{
		teamName: "Pravin Wavare",
		projectTitle: "AutoFlow AI",
		description:
			"AI-powered task prioritization system that analyzes incoming tasks with LLM-based decision steps, classifying them as URGENT or NORMAL with explainable reasoning and routing through dedicated Motia steps.",
		githubLink: "https://github.com/yash9154/autoflow-ai",
	},
	{
		teamName: "David Anderson",
		projectTitle: "Showdown AI",
		description:
			"Read any tabled poker hand at showdown using Motia and OpenVINO for automated validation and winner determination.",
		githubLink: "https://github.com/fapulito/showdown",
	},
	{
		teamName: "Tanmay Hajela",
		projectTitle: "PulseOps",
		description:
			"Event-driven incident management backend that ingests operational incidents through an API, classifies severity, assigns them to response teams, and persists lifecycle state with timelines using Motia.",
		githubLink: "https://github.com/ryomenskuna/pulseops",
	},
	{
		teamName: "Team Binary Force",
		projectTitle: "MediDraft",
		description:
			"AI-powered system that automatically analyzes medical scans and lab results to generate accurate, structured reports for faster and safer patient care.",
		githubLink: "https://github.com/santhoshkrishnan-M/MediDraft.git",
	},
	{
		teamName: "Yadav Akhilesh",
		projectTitle: "APIFleet",
		description:
			"Backend API monitoring system that proves backends don't need to be complex, built with just 5 Motia Steps and 300 lines total, unifying API registration, testing, metrics, and dashboard viewing without separate database or message queue.",
		githubLink: "https://github.com/YadavAkhileshh/APIFleet",
	},
	{
		teamName: "Joystonm",
		projectTitle: "StepsOS",
		description:
			"Visual workflow system that makes backend processes transparent through real-time execution visualization, solving the black box problem with live graph updates, step inspection, and production deployment capabilities.",
		githubLink: "https://github.com/Joystonm/StepsOS",
	},
	{
		teamName: "komal",
		projectTitle: "ContentFlow",
		description:
			"AI-powered content workflow system that validates content, analyzes it using AI, and generates actionable recommendations for content quality, readability, sentiment, and publishing readiness with real-time status updates.",
		githubLink: "https://github.com/komaleswarreddy/ContentFlow-motia",
	},
	{
		teamName: "Ronit Rahul Dhase",
		projectTitle: "Customer Support Ticket System",
		description:
			"Full-stack customer support ticket management system with automatic ticket classification, role-based interfaces, and real-time status tracking using Motia's unified backend architecture with composable Steps.",
		githubLink: "https://github.com/ronit-1404/Motia-Hack",
	},
	{
		teamName: "Ujjwal Singh",
		projectTitle: "What Did I Break Yesterday",
		description:
			"Motia-powered daily digest that helps developers quickly revisit what they shipped yesterday by fetching merged PRs, parsing diffs for TODO/FIXME comments, and joining tracked failures against specific commits.",
		githubLink: "https://github.com/Ujjwal-Singh-20/WhatDidIBreakYesterday",
	},
	{
		teamName: "Makiko Ohashi",
		projectTitle: "Forecast-to-Inventory",
		description:
			"Backend prototype for a forecasting system that accepts forecast requests, loads historical sales data, generates deterministic demand forecasts, and uses AI agents to generate human-readable forecast rationale with full auditability.",
		githubLink: "https://github.com/MakikoOhashi/Forecast-Ready",
	},
	{
		teamName: "rohit",
		projectTitle: "Smart Task Tracker",
		description:
			"Motia-based backend project demonstrating task management using APIs, workflows, and event-driven steps.",
		githubLink: "https://github.com/rohitpeace/smart-task-tracker",
	},
	{
		teamName: "Umer Jahangir",
		projectTitle: "Fake News Detector",
		description:
			"System that ingests news articles via URL or text, cleans and extracts content, classifies it as fake or real using ML, and generates human-readable explanations, orchestrated by Motia with Node.js/TypeScript and Python.",
		githubLink: "https://github.com/Umer-Jahangir/Motia_Fake_news_detector",
	},
	{
		teamName: "sayam garg",
		projectTitle: "DailyEcho",
		description:
			"Personal digital journal designed to capture the emotional rhythm of everyday life, allowing users to record daily entries, express feelings, and visually see how moods change over time.",
		githubLink: "https://github.com/Sayamgarg1/DailyEcho",
	},
	{
		teamName: "Aditya Srivastava",
		projectTitle: "Workflow Guard",
		description:
			"Lightweight progress reporting system for teams that captures daily progress updates, extracts what matters, and delivers concise progress summaries directly to Slack without dashboards or manual follow-ups.",
		githubLink: "https://github.com/AdityaSrivastava185/workflow-guard-v1-backend",
	},
	{
		teamName: "Shashank Upadhya",
		projectTitle: "Flow Forge",
		description:
			"AI-powered backend workflow intelligence platform for backend developers built with Motia.",
		githubLink: "https://github.com/shashank-upadhya/motia",
	},
	{
		teamName: "Krishna Ramesh Sonar",
		projectTitle: "TalentTrack",
		description:
			"Motia-powered event-driven backend that analyzes resumes against jobs, auto-submits applications, and sends personalized email notifications with real-time visualization.",
		githubLink: "https://github.com/Krishna-R-Sonar/talentTrack-backend-reloaded-motia",
	},
	{
		teamName: "Tejasri Masina",
		projectTitle: "HealthQuest AI",
		description:
			"Multi-agent health workflow system that moves step by step from symptom analysis to personalized nutrition guidance using event-driven approach where Research Agent analyzes symptoms and Nutrition Agent builds meal plans.",
		githubLink: "https://github.com/TejasriMasina/Healthquest_motia",
	},
	{
		teamName: "Agent05-code",
		projectTitle: "Enterprise Risk Management System",
		description:
			"Enterprise Risk Management System built with Motia demonstrating maximum impact enterprise backend capabilities with real-time monitoring, AI-powered analysis, and ultra-professional full-stack implementation.",
		githubLink: "https://github.com/Agent05-code/supply-chain-intelligence-platform",
	},
	{
		teamName: "Tasfia",
		projectTitle: "PLATFORM",
		description:
			"Unified AI-native workspace for solopreneurs and small businesses that brings data intelligence, CRM operations, brand automation, and payments into a single system powered by Motia backend using Steps as the core primitive.",
		githubLink: "https://github.com/Tasfia-17/platform.git",
	},
	{
		teamName: "Ujjwal Codes",
		projectTitle: "AutoOps",
		description:
			"Production-grade AI-powered incident response system that ingests incidents, performs intelligent analysis, routes through automated remediation workflows, and escalates to humans when necessary with 13 interconnected Motia steps.",
		githubLink: "https://github.com/UjjwalCodes01/autoOPS",
	},
	{
		teamName: "Shiva",
		projectTitle: "AutoOps Enterprise",
		description:
			"Enterprise grade event-driven backend showcasing real-world backend engineering concepts like fraud detection, trust scoring, payments, subscriptions, DLQ with retry, cron jobs, and system analytics, fully Dockerized.",
		githubLink: "https://github.com/shivakumar2006/autoops-hackathon-project-.git",
	},
	{
		teamName: "Atharva Naik",
		projectTitle: "AutoFlow",
		description:
			"AI-powered backend orchestration platform that autonomously detects system events, classifies issues, decides corrective actions, and executes workflows with built-in policy controls and human approvals using Motia runtime.",
		githubLink: "https://github.com/Atharva-026/autoflow",
	},
	{
		teamName: "ERROR_404_NOT_FOUND",
		projectTitle: "AgriSense",
		description:
			"AI-powered agriculture assistant using Motia-style multi-agent workflow to deliver real-time data-driven decision support for Indian farmers with specialized agents for crop diagnosis, market intelligence, weather-risk, and government schemes.",
		githubLink: "https://github.com/balaraj74/studio.git",
	},
	{
		teamName: "Jaydatta Kshirsagar",
		projectTitle: "HireFlow",
		description:
			"Workflow-first HR backend built using Motia that models resume screening as explicit workflows with event-driven parsing, scoring, persistence, and conditional automation, showcasing step reusability across API, bulk, and cron workflows.",
		githubLink: "https://github.com/jayyycodes/Motia-HIREFLOW.git",
	},
	{
		teamName: "Nova",
		projectTitle: "Oumi RL Studio",
		description:
			"Oumi RL Studio with Motia backend for reinforcement learning workflows.",
		githubLink: "https://github.com/Sahillather002/hackathon_oumi",
	},
	{
		teamName: "sudoKrishna",
		projectTitle: "Express - Motia Converter",
		description:
			"Developer-focused learning tool that helps engineers visually and programmatically understand Motia by converting familiar Express.js routes into Motia API steps.",
		githubLink: "https://github.com/sudoKrishna/motia-converter",
	},
	{
		teamName: "Suhel Ali",
		projectTitle: "Student Management Software",
		description:
			"Complete desktop solution for computer institutes managing student registration, admissions, fee collection, and user management with role-based access control, built with Python, Tkinter, SQLite, and Motia for data visualization.",
		githubLink: "https://github.com/suhel6388/Computer-Institute-Managment-App.git",
	},
	{
		teamName: "kondekarshubham",
		projectTitle: "Smart Expense Tracker",
		description:
			"Event-based expense management application with NLP-powered smart expense entry, real-time analytics, intelligent insights, and visual analytics dashboard for tracking expenses across multiple events using natural language input.",
		githubLink: "https://github.com/kondekarshubham123/Smart-Expense-Tracker",
	},
	{
		teamName: "Girma35",
		projectTitle: "Motia OrderFlow",
		description:
			"Unbreakable commerce engine that manages orders instead of just processing them, decoupling API from fulfillment logic with instant confirmation while handling payments, retries, and shipping behind the scenes using Motia's unified state.",
		githubLink: "https://github.com/Girma35/OrderFlow.git",
	},
	{
		teamName: "devrangoonwala",
		projectTitle: "FlowSync",
		description:
			"AI-powered multi-agent workflow orchestration platform built on Motia for coordinating complex workflows across multiple AI agents.",
		githubLink: "https://github.com/devrangoonwala/flowsync",
	},
	{
		teamName: "Chandan Labs",
		projectTitle: "OpsGuardian",
		description:
			"AI SRE system that automates detection-to-resolution pipeline by combining Generative AI with Motia's Durable Execution, using AI to parse logs, identify root causes, and recommend fixes with human-in-the-loop gating for critical changes.",
		githubLink: "https://github.com/ChandanLabs/OpsGuardian?tab=readme-ov-file",
	},
	{
		teamName: "Lalit Borase",
		projectTitle: "Motia Cursor RFP",
		description:
			"Showcases Motia-style unified backend where APIs, workflows, and AI agents are implemented as durable steps running in a single runtime, demonstrating RFP-to-proposal workflow with shared state and built-in observability.",
		githubLink: "https://github.com/lalitborase001/motia-cursor-rfp",
	},
	{
		teamName: "Vaishnav",
		projectTitle: "RateGuard",
		description:
			"Event-driven backend system that detects API abuse in real-time by tracking incoming API requests per client using Motia state, automatically emitting abuse events and triggering backend reactions when thresholds are exceeded.",
		githubLink: "https://github.com/thisisvaishnav/rateguard",
	},
	{
		teamName: "Learnerhood",
		projectTitle: "AI Code Review Bot",
		description:
			"System that automates code reviews and assists developers in writing better, cleaner, and more efficient code, reducing dependency on manual reviews and providing instant feedback for students and development teams.",
		githubLink: "https://github.com/tripathi1036/AI-Code-Review-Bot",
	},
	{
		teamName: "GOKUL SIVA",
		projectTitle: "InternTrack",
		description:
			"Modern full-stack web application designed to streamline the job hunt with centralized dashboard, status tracking, automated communication, and premium UX using React, Tailwind CSS, Motia, MongoDB, and Clerk authentication.",
		githubLink: "https://github.com/GOKULSIVA123/InternTrack001",
	},
	{
		teamName: "Think Twice",
		projectTitle: "MDWR",
		description:
			"Workflow orchestration system combining operational decision memory to create workflows that remember every decision, explain decisions automatically, learn from past outcomes, and replay with different policies or memory-informed insights.",
		githubLink: "https://github.com/RSN601KRI/Motia-Atlas",
	},
	{
		teamName: "NAVIN N",
		projectTitle: "LeadScore AI",
		description:
			"AI-powered lead management and scoring SaaS that automatically analyzes incoming leads, assigns intent scores, categorizes them as HOT/WARM/COLD, generates professional follow-up messages, and supports automated email notifications and daily reports.",
		githubLink: "https://github.com/NAVIN0507/lead-score",
	},
	{
		teamName: "Manpreets59",
		projectTitle: "DevPulse",
		description:
			"AI-powered development team health monitor built with Motia for tracking and analyzing team performance metrics.",
		githubLink: "https://github.com/Manpreets59/DevPulse-",
	},
	{
		teamName: "STSony Thomas",
		projectTitle: "Chronicles & Cores",
		description:
			"Multiplayer D&D-style text adventure powered by AI where users create dungeons, invite friends, and let The Weaver—a Gemini-powered AI Dungeon Master—narrate epic adventures in real-time with a dark fantasy twist.",
		githubLink: "https://github.com/STSonyThomas/DnD",
	},
	{
		teamName: "B3",
		projectTitle: "RentAny",
		description:
			"Premium peer-to-peer marketplace for hourly rentals where users can discover cameras, tools, gear, and more nearby, finding neighbors renting items instead of buying new ones.",
		githubLink: "https://github.com/Poonam1607/rentany",
	},
	{
		teamName: "Naveen Singh",
		projectTitle: "Motia Workflow Reminder",
		description:
			"Workflow-based reminder system that replaces traditional cron jobs and queues with durable workflows, modeling each reminder as a Motia workflow with steps for creation, delayed execution, notification, status tracking, and cancellation.",
		githubLink: "https://github.com/piyusdev2006/motia-workflow-reminder",
	},
	{
		teamName: "Astha Singh",
		projectTitle: "RouteWise",
		description:
			"Delivery system that batches orders instead of dispatching instantly, with orders staying pending until threshold or timeout, then optimizing routes and assigning drivers using reliable background workflows built with Motia.",
		githubLink: "https://github.com/AsthaS822/RouteWise",
	},
	{
		teamName: "Sahil Sinha",
		projectTitle: "Course Selling Backend",
		description:
			"Backend system for course selling platform similar to Coursera or Udemy, built with Motia for managing course sales and enrollments.",
		githubLink: "https://github.com/SinhaS12/Sell",
	},
	{
		teamName: "Prathmesh Desai",
		projectTitle: "EduRisk Monitor",
		description:
			"Full-stack web application that helps detect students at risk of dropping out by analyzing real-time engagement data, using event-driven system to monitor activity, calculate risk levels, and trigger timely alerts for early intervention.",
		githubLink: "https://github.com/PrathmeshDesai/EduRisk-Monitor",
	},
	{
		teamName: "Instant Ramen Club",
		projectTitle: "Durable Research Orchestrator",
		description:
			"Autonomous AI agent designed to solve fragility problem in LLM applications using durable execution engine to guarantee completion, accepting research topics and employing Google's Gemini 2.5 Flash for deep analysis with full lifecycle orchestration.",
		githubLink: "https://github.com/faheemakhmed/motia-durable-task-orchestrator",
	},
	{
		teamName: "Viu1703",
		projectTitle: "Protocol Zero",
		description:
			"Fully autonomous multi-agent AI system that detects, diagnoses, and resolves critical infrastructure incidents without human intervention, orchestrating specialized AI agents including DevOps Engineer, Security Officer, PR Manager, and decisive CTO.",
		githubLink: "https://github.com/Viu1703/Protocol-Zero-The-Autonomous-DevOps-War-Room-Built-with-Motia-OpenAI-",
	},
	{
		teamName: "varun pawar",
		projectTitle: "Backend Chaos Simulator",
		description:
			"Motia-powered backend designed to model real-world failure scenarios like partial database writes, flaky external services, and automatic retries, intentionally injecting chaos and demonstrating how durable event-driven execution can recover safely.",
		githubLink: "https://github.com/User-Varun/backend-chaos-simulator",
	},
	{
		teamName: "srujan-07",
		projectTitle: "Schedviz",
		description:
			"Project that helps visualize scheduling algorithms like FCFS, SJF, RR, etc. for educational purposes.",
		githubLink: "https://github.com/srujan-07/Schedviz",
	},
	{
		teamName: "Glasskiss",
		projectTitle: "GlassKiss",
		description:
			"Just-in-Time break-glass access controller that replaces permanent production credentials with time-bound, human-approved, and scope-enforced access, featuring Zero-Trust SQL Proxy and automatic revocation using durable timers.",
		githubLink: "https://github.com/soumyacodes007/GlassKiss",
	},
	{
		teamName: "RedBugs",
		projectTitle: "Heimdall",
		description:
			"Intelligent observability and incident-detection platform that monitors multi-service applications in real-time, collecting logs, metrics, and traces, analyzing them continuously, and automatically detecting anomalies and failures before they impact users.",
		githubLink: "https://github.com/vinay-ghate/Heimdall/",
	},
	{
		teamName: "maxwelldorliea",
		projectTitle: "Helpdesk",
		description:
			"Omnichannel AI-driven helpdesk system that empowers teams to deliver exceptional customer experiences with faster responses, great analytics on agents, and compliance features.",
		githubLink: "https://github.com/maxwelldorliea/Helpdesk",
	},
	{
		teamName: "dhaneshwaran M",
		projectTitle: "Live Stock Trace",
		description:
			"Real-time stock monitoring dashboard for major MNCs (Google, Microsoft, Amazon) using Motia framework to create scalable event-driven architecture with backend API that live-fetches data from Finnhub API and frontend that updates automatically every 5 seconds.",
		githubLink: "https://github.com/shanthidhaneswaran-rgb/live-stock-trace.git",
	},
	{
		teamName: "Syed Ismail",
		projectTitle: "MyNovel.ai",
		description:
			"AI-powered novel writing platform that writes novels end to end, chapter by chapter, from your idea in minutes using Motia for backend APIs, streaming, state management, cron jobs, background jobs, workflows, and AI agentic workflows.",
		githubLink: "https://github.com/IsmailBinMujeeb/mynovel.ai",
	},
	{
		teamName: "ServerSide Ninjas",
		projectTitle: "Motia Customer Support",
		description:
			"AI-powered customer support assistant that handles full lifecycle of support tickets from submission to resolution, validating and storing tickets, triggering AI agent to classify requests, and deciding between auto-resolution or human escalation.",
		githubLink: "https://github.com/ishwarthecodddr/motia_customer_support",
	},
	{
		teamName: "Shruti Arsode",
		projectTitle: "Echo-Trace",
		description:
			"Personal safety monitoring system for solo travelers and late-night commuters that creates time-bound safety windows, tracks check-ins, and automatically escalates with warnings and emergency contact notifications if users don't check in on time.",
		githubLink: "https://github.com/Shruti192903/Echo_Trace",
	},
	{
		teamName: "unknowdeepanshu",
		projectTitle: "CollabVerse",
		description:
			"Platform for collaboration and playing games in a shared virtual space built with Motia backend.",
		githubLink: "https://github.com/unknowdeepanshu/collabVerse",
	},
	{
		teamName: "PowerGit",
		projectTitle: "DisasterFlow",
		description:
			"Emergency response backend system built using Motia designed to handle real-world disaster scenarios reliably with SOS reporting API, automated multi-step disaster response workflow, AI-assisted risk assessment, and durable execution with automatic recovery.",
		githubLink: "https://github.com/sahilsawant1619/disasterflow-backend.git",
	},
	{
		teamName: "Sushant6095",
		projectTitle: "OpsGuardian Enterprise",
		description:
			"Scalable backend system to monitor, control, and visualize APIs in real-time with automated alerts, enterprise-ready architecture using Docker, Redis, Kafka, and ClickHouse for high performance and reliability.",
		githubLink: "https://github.com/Sushant6095/Motia--Backend-hackathon",
	},
	{
		teamName: "SEEDHE CODE",
		projectTitle: "Aura",
		description:
			"Period tracking app that helps women understand their bodies better, predicting cycles, tracking symptoms and mood, and giving personalized daily tips based on which phase they're in, serving as a smart health companion that learns from patterns.",
		githubLink: "https://github.com/turanya/MotiaART",
	},
	{
		teamName: "Dhruv Choudhary",
		projectTitle: "Trading Engine",
		description:
			"Core trading engine for exchange-based trading, majorly focused on trading engine functionality built with Motia.",
		githubLink: "https://github.com/dhruv-38/Trading_Engine",
	},
	{
		teamName: "NotTushar-dotcom",
		projectTitle: "Booky Hub",
		description:
			"Event-driven ebook marketplace that handles complete digital book lifecycle from creation to purchase fulfillment, with automated AI-generated summaries and tags, and asynchronous transaction processing with instant download link delivery via email.",
		githubLink: "https://github.com/NotTushar-dotcom/Booky-hub",
	},
	{
		teamName: "kkhushie",
		projectTitle: "Motiv",
		description:
			"AI-powered assistant for content creators that gathers intelligence from YouTube and provides actionable insights, automatically collecting data, analyzing trends and performance, and delivering personalized reports to help creators make better content strategy decisions.",
		githubLink: "https://github.com/kkhushie/motiv-creator-intelligence-app",
	},
	{
		teamName: "Nellai Abiram",
		projectTitle: "DevOpsGuardian",
		description:
			"AI-powered PR health monitoring system that automatically analyzes GitHub pull requests for code quality, security vulnerabilities, and webhook reliability using Groq AI (LLaMA 3.3 70B) for intelligent code analysis and instant feedback through GitHub comments.",
		githubLink: "https://github.com/Abiram08/DevopsGurdian.git",
	},
	{
		teamName: "Jayesh0726",
		projectTitle: "NutriSip",
		description:
			"Nutrition tracking app that helps users log meals, estimate nutrition, and reach daily goals using AI-assisted suggestions, supporting multi-item meal entries, tracking calories and macros, and offering food suggestions tailored to dietary preferences.",
		githubLink: "https://github.com/Jayesh0726/NutriSip",
	},
	{
		teamName: "codernoob1",
		projectTitle: "FlowForge",
		description:
			"Durable step-based workflow engine for long-running backend processes that persists workflow and step state to guarantee idempotency, safe retries, and crash-safe recovery, built for reliable observable business logic and saga-style compensations.",
		githubLink: "https://github.com/codernoob1/FlowForge",
	},
	{
		teamName: "codebyNJ",
		projectTitle: "Self-Healing JSON Converter",
		description:
			"AI-powered pipeline that converts unstructured PDF documents into structured JSON using OCR and intelligent code generation with automatic self-healing retries built with Motia.",
		githubLink: "https://github.com/codebyNJ/SelfHealing-JSON-Converter.git",
	},
	{
		teamName: "Antiqule",
		projectTitle: "Ambo",
		description:
			"Autonomous operations backend for solo founders that deploys AI agents to continuously monitor user behavior, detect churn signals, and draft personalized interventions like re-engagement emails with supervised autonomy where founders retain approval control.",
		githubLink: "https://github.com/Pulkit7070/Ambo",
	},
	{
		teamName: "Ankan Misra",
		projectTitle: "StateFlow",
		description:
			"AI-powered energy optimization system using event-driven workflows and Google Gemini to analyze IoT sensor data and generate smart recommendations with async processing, real-time streaming, and 75+ tests built with TypeScript and Motia.",
		githubLink: "https://github.com/AnkanMisra/StateFlow",
	},
	{
		teamName: "Sampad Biswas",
		projectTitle: "Agentic Research Digest",
		description:
			"Event-driven backend system that generates AI-powered research summaries based on given topics using Motia workflows to orchestrate APIs, background jobs, scheduled execution, and agentic decision-making in unified backend architecture.",
		githubLink: "https://github.com/Sampad64/agentic-research-digest",
	},
	{
		teamName: "shuraih775",
		projectTitle: "Atlas Sentinel",
		description:
			"Unified emergency dispatch system that leverages Motia to orchestrate real-time GIS simulation, multi-agent AI reasoning, and durable event-driven workflows with specialized AI agents debating and executing resource allocation for city-wide incidents.",
		githubLink: "https://github.com/shuraih775/Atlas",
	},
	{
		teamName: "Aryan Kumar",
		projectTitle: "OmniReel",
		description:
			"AI-powered video generation platform that transforms any topic into professional short-form videos in minutes, automating script writing, voice synthesis, visual generation, caption syncing, music selection, and FFmpeg composition with production-ready auth and payments.",
		githubLink: "https://github.com/aryan877/omnireel",
	},
	{
		teamName: "aniiketsinghh",
		projectTitle: "SarkarFlow",
		description:
			"Event-driven backend system built using Motia to modernize how citizen complaints and service requests are handled in India, automatically routing issues to correct government departments, applying SLA-based timers, and escalating unresolved complaints transparently.",
		githubLink: "https://github.com/aniiketsinghh/Backend-reloaded-hackathon",
	},
	{
		teamName: "22f3002244",
		projectTitle: "AI Summarizer",
		description:
			"AI summarizer tool that generates summaries for PDF files, text files, and text inputs, providing concise summaries based on the input provided using AI-powered analysis.",
		githubLink: "https://github.com/22f3002244/Summary",
	},
	{
		teamName: "Chinmay Singh",
		projectTitle: "FlowWrap",
		description:
			"Comprehensive workflow orchestration and observability platform built on Motia that provides structured execution logs, state tracking, and replayability for backend operations without requiring code rewrites, transforming scattered processes into unified observable workflows.",
		githubLink: "https://github.com/Chinmay67/FlowWrap",
	},
	{
		teamName: "Team Dark Mode",
		projectTitle: "AutoHeal",
		description:
			"Self-healing backend system built with Motia that automatically detects and recovers from failures.",
		githubLink: "https://github.com/anuj123upadhyay/AutoHeal---Self-Healing-Backend/tree/main",
	},
	{
		teamName: "rishi-jat",
		projectTitle: "FlowVision",
		description:
			"Developer tool that helps you see how your backend actually works while it's running, capturing real runtime executions from Motia workflows and turning them into interactive visual flows showing API calls, cron jobs, event handlers, background steps, and retries.",
		githubLink: "https://github.com/rishi-jat/flowvision",
	},
	{
		teamName: "abhishektiwari47",
		projectTitle: "YouTube Title SEO",
		description:
			"YouTube title optimization tool built with Motia for generating SEO-optimized titles.",
		githubLink: "https://github.com/abhishektiwari47/learnMotia",
	},
	{
		teamName: "VMPRANAV",
		projectTitle: "Agentic AI Content Generation Platform",
		description:
			"Autonomous content factory that allows users to submit content briefs via dashboard, spinning up chains of specialized AI agents that handle web research, article drafting, tone editing, SEO optimization, and social media post preparation without human intervention.",
		githubLink: "https://github.com/VMPRANAV/Agentic-AI-Content-Generation-Platform-Using-Motia",
	},
	{
		teamName: "abhasgawali",
		projectTitle: "SurgePricing.AI",
		description:
			"Real-time autonomous pricing engine that detects user traffic surges instantly and triggers LLM/AI agent to adjust prices dynamically based on demand velocity and competitor data, pushing live pricing telemetry to React dashboard via WebSockets with sub-second latency.",
		githubLink: "https://github.com/abhasgawali/SurgePricingEngine",
	},
	{
		teamName: "ORACLE-AURACLE",
		projectTitle: "Intuitive Learner",
		description:
			"Intuition learner built with Motia that handles learning logic and adaptive learning workflows.",
		githubLink: "https://github.com/ORACLE-AURACLE/Intuitive-learner",
	},
	{
		teamName: "Noob Coders",
		projectTitle: "Restaurant Management System",
		description:
			"Restaurant management system backend built using Motia with APIs for managing ingredients, creating dishes, and placing orders, using Firebase Authentication and Motia's event system to handle inventory deduction in the background.",
		githubLink: "https://github.com/siddheshsonawane07/restaurant_app_backend",
	},
	{
		teamName: "sonal",
		projectTitle: "CodeAssist",
		description:
			"LeetCode-style web app with mock interview feature where AI scores submissions, provides AI assistant to help when stuck, and tells time complexity of code after submission with comprehensive coding practice platform.",
		githubLink: "https://github.com/sy875/codeassistserver",
	},
	{
		teamName: "Team SoloDevs",
		projectTitle: "Leo AI",
		description:
			"Tool to keep track of all issues-related activity on GitHub straight to Discord, providing automated notifications and activity tracking for GitHub repositories.",
		githubLink: "https://github.com/adityarawat45/Leo-AI",
	},
	{
		teamName: "Asmi Rajbhar",
		projectTitle: "MedSync",
		description:
			"Backend system that helps emergency patients reach the right hospital faster by continuously tracking hospital capacity, automatically selecting best hospital based on patient severity, required medical specialty, and current hospital load using event-driven architecture.",
		githubLink: "https://github.com/Asmi-Rajbhar/MedSync",
	},
	{
		teamName: "NullPointer",
		projectTitle: "Motia Backend Forge",
		description:
			"System that converts natural language descriptions into complete ready-to-use backend architectures, generating working backends using Motia workflows and steps for common backend needs like SaaS applications, task management, e-commerce, waitlists, and social platforms.",
		githubLink: "https://github.com/ranvijayysinghrathore/Motia-Backend-Forge",
	},
	{
		teamName: "Sreya M Nambiar",
		projectTitle: "AutoSupport",
		description:
			"System that automatically classifies and routes customer support tickets using sentiment analysis, detecting urgent and frustrated customers, assigning priority levels, and routing to appropriate teams (Billing, Tech, Support), reducing manual triage time by 80%.",
		githubLink: "https://github.com/sreyamnambiar/autosupport-backend",
	},
	{
		teamName: "jovan-08",
		projectTitle: "Rekallio",
		description:
			"Smart Product Recall & Safety Workflow Platform that helps manufacturing organizations manage product safety incidents and recalls in structured, auditable, real-time manner with AI agent analysis, risk scoring, and automated recall lifecycle orchestration.",
		githubLink: "https://github.com/jovan-08/Rekallio",
	},
	{
		teamName: "Aditya987456",
		projectTitle: "ReachAI",
		description:
			"AI-powered event-driven backend system that helps YouTube creators generate trend-aware, SEO-optimized metadata for videos, automating workflow from resolving channels, fetching videos, analyzing niches, discovering trending content, to generating AI metadata and delivering via email.",
		githubLink: "https://github.com/Aditya987456/ReachAI",
	},
	{
		teamName: "ayushk-sinha",
		projectTitle: "Skillsnap",
		description:
			"Lightweight matchmaking service that connects people who want to teach a skill with those who want to learn it, automatically finding mutual high-quality pairings, recording matches, and notifying both parties by email for immediate collaboration.",
		githubLink: "https://github.com/ayushk-sinha/skillsnap",
	},
	{
		teamName: "sumanthn2006",
		projectTitle: "LaunchFlow",
		description:
			"Backend system that manages product launch from start to finish in one continuous process, moving through stages like draft, quality checks, approval, scheduling, going live, and completion with automatic checks and AI-generated release notes using Motia workflows.",
		githubLink: "https://github.com/sumanthn2006/lunch-flow/tree/main",
	},
	{
		teamName: "hebypaul",
		projectTitle: "Berakah",
		description:
			"AI-powered content repurposing engine built for Backend Reloaded Hackathon that takes any blog URL and automatically transforms it into high-engagement Twitter threads and LinkedIn posts using Groq (Llama 3.1) and Motia framework.",
		githubLink: "https://github.com/hebypaul/Berakah",
	},
	{
		teamName: "NabinDevX",
		projectTitle: "Fully Automated YouTube Video Publishing",
		description:
			"Fully automated YouTube video publishing SaaS platform that takes raw video files, performs server-side video and speech analysis using Google Cloud Video Intelligence, automatically generates content-aware titles, descriptions, and tags, and publishes to YouTube using OAuth 2.0.",
		githubLink: "https://github.com/NabinDevX/fully-automated-video-publishing-pipeline",
	},
	{
		teamName: "Sidharth1743",
		projectTitle: "Sentinel",
		description:
			"Autonomous SRE agent built on Motia framework that self-heals infrastructure by connecting directly to Docker Socket to detect crashes, analyze root causes using AI, and execute real remediation commands like restarting containers or clearing disk space without human intervention.",
		githubLink: "https://github.com/Sidharth1743/Sentinal",
	},
	{
		teamName: "Dhiraj111",
		projectTitle: "Motia Smart PDF RAG",
		description:
			"Full-stack AI application that allows users to upload PDF documents and chat with them in real-time, intelligent AI-powered document assistant built with React, Motia, Pinecone, and Groq (Llama 3).",
		githubLink: "https://github.com/Dhiraj111/-Motia-Smart-PDF-RAG-.git",
	},
	{
		teamName: "kartikey116",
		projectTitle: "Autonomous Customer Support Agent",
		description:
			"Event-driven backend system that automates customer support workflows with safe AI decision-making and human-in-the-loop escalation, accepting support queries, classifying them using AI, and assigning confidence scores to each decision with built-in retries and dead-letter queues.",
		githubLink: "https://github.com/kartikey116/Motia-Customer-Support.git",
	},
	{
		teamName: "Varun2773",
		projectTitle: "PulseGuard",
		description:
			"Backend health monitoring and alert system that periodically checks registered services and notifies users when failures occur, supporting structured /health endpoints to detect downtime and reason for failures like database or dependency issues.",
		githubLink: "https://github.com/Varun2773/project-pulse.git",
	},
	{
		teamName: "SauravKalita22",
		projectTitle: "Imortia",
		description:
			"Minimal TypeScript + Node.js + Express starter project using Motia for workflow orchestration and backend development.",
		githubLink: "https://github.com/SauravKalita22/Imortia",
	},
	{
		teamName: "ZiyamZain",
		projectTitle: "Ops-Copilot",
		description:
			"Operations copilot system for managing customer feedback with AI-powered analysis and response generation built with Motia.",
		githubLink: "https://github.com/ZiyamZain/ops-copilot",
	},
	{
		teamName: "PeroPeko",
		projectTitle: "OpenSlot",
		description:
			"Schedule meetings seamlessly, connecting professionals and booking time effortlessly on a simple trusted platform where consultants manage their sessions while users focus on meaningful conversations.",
		githubLink: "https://github.com/deoruchi/meeting-schedular.git",
	},
	{
		teamName: "04suriya07-spec",
		projectTitle: "Motia Intend Backend",
		description:
			"Backend system built with Motia for intent-based workflows and intelligent backend orchestration.",
		githubLink: "git@github.com:04suriya07-spec/motia-intent-backend.git",
	},
	{
		teamName: "tosif121",
		projectTitle: "ReelFlow AI",
		description:
			"System that uses Motia's event-driven architecture to orchestrate AI services, transforming YouTube videos into comprehensive content analysis with viral moments, captions, transcripts, and actionable insights.",
		githubLink: "https://github.com/tosif121/reel-flow.git",
	},
	{
		teamName: "Priyansh-Jain",
		projectTitle: "Payment Retry Engine",
		description:
			"Payment retry engine with smart retries, gateway failover, and real-time observability powered by Motia for handling payment failures and retries intelligently.",
		githubLink: "https://github.com/Priyansh-Jain/Payment-Retry-Engine",
	},
	{
		teamName: "sumaiya-13",
		projectTitle: "AI-With-You",
		description:
			"Backend automation system that validates real GitHub repositories through automated setup, test execution, AI-assisted review, and explicit human approval, treating repository as source of truth and blocking approval when tests fail.",
		githubLink: "https://github.com/sumaiya-13/ai-with-you",
	},
	{
		teamName: "lokendra005",
		projectTitle: "Backend-in-a-Box",
		description:
			"Single unified backend runtime that delivers all essential backend capabilities using Motia Steps as the sole abstraction, providing one runtime, one workflow model, and one command to production.",
		githubLink: "https://github.com/lokendra005/backend_in_a_box",
	},
	{
		teamName: "dev-debasis",
		projectTitle: "Fixr",
		description:
			"AI-powered error intelligence engine that helps backend systems understand, diagnose, and resolve failures automatically by ingesting raw error logs, modeling each failure as structured lifecycle, and progressively enriching through classification, root cause analysis, and fix generation.",
		githubLink: "https://github.com/dev-debasis/Fixr",
	},
	{
		teamName: "Saurabhing",
		projectTitle: "Motia Algo-Trader",
		description:
			"Fully autonomous event-driven trading bot that reads news like a human and executes trades in milliseconds, managing virtual hedge fund with market watch, AI analysis using NLP for sentiment scores, and live dashboard visualization.",
		githubLink: "https://github.com/Saurabhing/Paper-trader",
	},
	{
		teamName: "adityash2006",
		projectTitle: "Motia AutoFlow",
		description:
			"Backend automation engine built on Motia's unified runtime that demonstrates how long-running backend processes can be executed reliably using durable workflows, background jobs, AI-assisted decision making, and persistent state with clear state tracking and failure recovery.",
		githubLink: "https://github.com/adityash2006/Autoflow.git",
	},
	{
		teamName: "imstillblessed",
		projectTitle: "Shiplog",
		description:
			"AI-powered social media management tool for open-source projects that automates turning GitHub activities like pull requests, issues, releases, and milestones into engaging social media posts using webhooks, AI analysis, and platform-optimized drafts for X, LinkedIn, or Discord.",
		githubLink: "https://github.com/imstillblessed/shiplog",
	},
	{
		teamName: "dilipgour",
		projectTitle: "API Rate Limiter",
		description:
			"API rate limiter for developers built with Motia to control and manage API request rates effectively.",
		githubLink: "https://github.com/dilipgour/backend-reloaded-2",
	},
	{
		teamName: "Amanc77",
		projectTitle: "AQI-Guardian",
		description:
			"Smart Air Quality and Health Safety platform that tracks real-time AQI, shows trends, predicts future AQI, gives AI-based health advice, sends alerts, shares government advisories, and allows users to share suggestions to reduce pollution.",
		githubLink: "https://github.com/Amanc77/aqi-guardian",
	},
	{
		teamName: "abhishekkamble12",
		projectTitle: "TalkOps",
		description:
			"Voice-driven AI workflow automation system that helps users understand and fix failed workflows using simple language instead of technical logs, explaining what went wrong, why it happened, and can retry or fix workflows automatically using voice or text commands.",
		githubLink: "https://github.com/abhishekkamble12/Talkops",
	},
	{
		teamName: "codecult-org",
		projectTitle: "Green Servers",
		description:
			"Server monitoring tool that lets you track system health (CPU, memory, disk) across multiple machines with automated email alerts for system monitoring and health tracking.",
		githubLink: "https://github.com/codecult-org/green-servers",
	},
	{
		teamName: "Parthiv-Sarker",
		projectTitle: "ResQNet",
		description:
			"Real-time event-driven emergency response platform that connects citizens, volunteers, and administrators to coordinate help efficiently using AI-based matching and live system updates for emergency coordination.",
		githubLink: "https://github.com/Parthiv-Sarker/emergency-response-system.git",
	},
	{
		teamName: "Ashraf439",
		projectTitle: "Photo Sharing App",
		description:
			"Photo sharing app where users can share all photos related to a specific person with just a link, built with Motia backend.",
		githubLink: "https://github.com/Ashraf439",
	},
	{
		teamName: "Manikant92",
		projectTitle: "Narriq Ads",
		description:
			"AI-powered video advertisement generation platform that transforms any website URL into professional 5-second video ads using multi-step AI pipeline including website analysis, brand extraction, script generation, image generation, voice generation, and video composition.",
		githubLink: "https://github.com/Manikant92/Narriq_Ads",
	},
	{
		teamName: "MethodManav",
		projectTitle: "Trax",
		description:
			"Comprehensive price monitoring and alerting platform that helps users track prices for products across multiple e-commerce platforms, monitoring prices for mobiles and flights and sending notifications when prices drop to user-defined target prices.",
		githubLink: "https://github.com/MethodManav/trax",
	},
	{
		teamName: "Ruturaj-007",
		projectTitle: "Viral YouTube Title Processor",
		description:
			"AI-powered YouTube title optimization built with Motia workflows that generates Viral, SEO, Professional and brand safe titles and thumbnail suggestions with clear recommendations through email system.",
		githubLink: "https://github.com/Ruturaj-007/viral-youtube-title-processor",
	},
	{
		teamName: "Innovators",
		projectTitle: "VendorFlow AI",
		description:
			"AI-powered backend built with Motia workflows to automate vendor bill tracking, payment reminders, overdue escalations, and delay risk prediction, reducing manual follow-ups and improving payment efficiency.",
		githubLink: "https://github.com/venki7569/VendorFlow-AI",
	},
	{
		teamName: "Sridhar Sing",
		projectTitle: "VerbaLens",
		description:
			"AI-powered communication coaching platform that helps users master speaking skills, allowing users to record voice responses on various topics and receive instant AI feedback on clarity, confidence, and filler word usage using Google Gemini AI.",
		githubLink: "https://github.com/sydshelf75/VerbaLens_backend",
	},
	{
		teamName: "shubham",
		projectTitle: "Motia Meeting",
		description:
			"Real-time peer-to-peer video calling application built using Motia and WebRTC that allows two users to join a room and communicate through video and audio with minimal latency, demonstrating simple yet powerful setup for P2P video chat apps.",
		githubLink: "https://github.com/ShubhamOulkar/motia-meeting",
	},
	{
		teamName: "Anand-0038",
		projectTitle: "OpsMind",
		description:
			"AI-powered Site Reliability Engineer built entirely on Motia's unified backend runtime that receives incidents via API webhook, triggers event-driven AI agent for Root Cause Analysis, evaluates remediation risk, and automatically executes safe fixes or escalates risky ones.",
		githubLink: "https://github.com/Anand-0038/ops-mind",
	},
	{
		teamName: "ConflictCode",
		projectTitle: "Automation Agent - Computer Use Agent",
		description:
			"Intelligent Computer Use Agent that executes browser automation tasks autonomously using natural language instructions, built with Gemini multimodal AI as decision-making brain and Playwright for precise local browser control with Motia as unified backend runtime.",
		githubLink: "https://github.com/BURHANUDDIN51-PYTHON/Automation",
	},
	{
		teamName: "sahil2448",
		projectTitle: "ContentForge",
		description:
			"Full-stack web app that turns any YouTube video into ready-to-use social media content, fetching transcripts, calling AI model via OpenRouter to generate blog posts, tweets, and LinkedIn posts, all tailored to the video with event-driven Motia backend.",
		githubLink: "https://github.com/sahil2448/content-forge",
	},
	{
		teamName: "Codecatalysts",
		projectTitle: "Payment Workflow Backend",
		description:
			"Durable event-driven payment workflow backend that demonstrates how real-world payment systems handle failures, retries, order creation, and refunds safely with non-blocking API, automatic retries without double charging, and compensating refunds for system consistency.",
		githubLink: "https://github.com/priyanshu2282-cyber/payment_backend",
	},
	{
		teamName: "saishmungase",
		projectTitle: "ContentForge",
		description:
			"Event-driven AI engine that eliminates bottleneck of manual content repurposing by instantly transforming YouTube videos into production-ready blogs, LinkedIn posts, and tweets using resilient unified backend architecture with non-blocking event buses and Node.js streaming I/O.",
		githubLink: "https://github.com/saishmungase/ContentForge",
	},
	{
		teamName: "mani6409",
		projectTitle: "UniFlow",
		description:
			"Unified backend system that automates real-world application workflows such as admissions, hiring, scholarships, and onboarding, replacing fragmented approach with single durable workflow built entirely using Motia's core primitive Steps with shared distributed state.",
		githubLink: "https://github.com/mani6409/Uniflow_AI/tree/af527b012b2f3f7f638a204e7d39b8f1ec0d3030/uniFlow",
	},
	{
		teamName: "devPals",
		projectTitle: "Content Engine",
		description:
			"Autonomous backend system that transforms raw input into blog posts and social media threads, demonstrating enterprise-grade resilience through self-healing architecture with supervisor Agent that analyzes failures and reroutes to fallback providers seamlessly.",
		githubLink: "https://github.com/KrishCodesw/motia-project",
	},
	{
		teamName: "DuoMinds",
		projectTitle: "Uptime and Latency Monitoring",
		description:
			"Event-driven uptime and latency monitoring backend that lets users register URLs, continuously checks availability, tracks latency and failures, detects anomalies, and sends email alerts when services become critical using separate flows for health checks and alerting.",
		githubLink: "https://github.com/Ananya21-G/Motia-Hackathon",
	},
	{
		teamName: "GANESH D SHINDE",
		projectTitle: "AutoRetry",
		description:
			"Backend reliability system that improves how background job failures are handled, replacing blind retry loops with adaptive step-based workflows that decide when to retry, back off, abort, or escalate failures using polyglot workflows with TypeScript, Python, and JavaScript.",
		githubLink: "https://github.com/byteStealthX/autoretry",
	},
	{
		teamName: "Karthik7544",
		projectTitle: "PharmaFlow",
		description:
			"Web-based platform designed to simplify and automate pharmaceutical approval workflows, allowing users to submit requests like new drug approvals, clinical trials, or manufacturing changes through structured form with multi-step approvals ensuring compliance and traceability.",
		githubLink: "https://github.com/Karthik7544/PharmaFlow.git",
	},
	{
		teamName: "BEASTSHRIRAM",
		projectTitle: "AyuMitraAI",
		description:
			"Intelligent healthcare routing platform that connects patients with right doctors using AI-powered symptom analysis, using LangChain + Groq AI to analyze urgency, recommend specialties, and match them with available online doctors from registered clinics and hospitals.",
		githubLink: "https://github.com/BEASTSHRIRAM/AyuMitraAI",
	},
	{
		teamName: "algsoch",
		projectTitle: "IndianLabour AI",
		description:
			"Semantic search-powered labour rights platform that provides free legal assistance to Indian workers using ChromaDB vector database with advanced RAG techniques to search through indexed Indian labour laws and court cases, analyzing employment contracts and predicting case outcomes.",
		githubLink: "https://github.com/algsoch/indianlabour",
	},
	{
		teamName: "Atharva-Ramawat",
		projectTitle: "Agentic War Room",
		description:
			"Automated technical decision-making engine that replaces single-answer AI with balanced multi-perspective debate, triggering three specialized modules (Performance, Stability, Architecture) to analyze technical topics from different angles and provide reliable well-rounded final reports.",
		githubLink: "https://github.com/Atharva-Ramawat/Agentic-war-room",
	},
	{
		teamName: "Ambarcode",
		projectTitle: "PulseGuard AI",
		description:
			"Event-driven backend system that uses AI agents to make intelligent operational decisions such as execution strategy selection, retry escalation, and SLA enforcement, leveraging LLMs to reason about request priority, customer tier, and risk while keeping execution deterministic and auditable.",
		githubLink: "https://github.com/Ambarcode/pulseguard-ai",
	},
	{
		teamName: "Ariya-rithvik",
		projectTitle: "AegisFlow",
		description:
			"Autonomous Incident Response Engine built with Motia for automated incident detection, analysis, and response.",
		githubLink: "https://github.com/Ariya-rithvik/aegis-flow/tree/main",
	},
	{
		teamName: "SleepyBots",
		projectTitle: "Chaos Ops",
		description:
			"AI-powered incident detection and automated recovery system that continuously monitors service health through scheduled cron jobs, automatically captures Docker container logs, creates incident records, and uses OpenRouter LLM to analyze failures and generate recovery recommendations with confidence scores.",
		githubLink: "https://github.com/inclinedadarsh/chaos-ops/",
	},
	{
		teamName: "aniketpal07",
		projectTitle: "Durable Retry Circuit Manager",
		description:
			"Backend service that provides durable retry mechanisms and circuit breakers for interacting with unreliable third-party APIs, ensuring system resilience and reliability with intelligent retry strategies.",
		githubLink: "https://github.com/aniketpal07/durable-retry-circuit-manager",
	},
	{
		teamName: "ad1tyayadav",
		projectTitle: "Resume Reviewer",
		description:
			"AI-powered resume analyzer that gives feedback and generates interview questions based on resume content, helping job seekers improve their resumes and prepare for interviews.",
		githubLink: "https://github.com/ad1tyayadav/resume-reviewer",
	},
	{
		teamName: "Quantsanskar",
		projectTitle: "Crypto Market Monitor",
		description:
			"Backend-only system that monitors cryptocurrencies in near-real-time, fetches market data from CoinGecko API every 5 minutes, analyzes trends, generates actionable trading signals, and sends intelligent email alerts based on user investment status with context-aware recommendations.",
		githubLink: "https://github.com/Quantsanskar/MOTIA_HACK_4-in-denial",
	},
	{
		teamName: "o-DisDain-o",
		projectTitle: "Motia Crews",
		description:
			"Code-generation toolkit that lets you instantly create multi-agent Motia projects by defining master agent, adding sub-agents, and generating ready-to-run Motia steps folder with orchestration, events, and state already wired in.",
		githubLink: "https://github.com/o-DisDain-o/motia-crews",
	},
	{
		teamName: "dhruv-suthar",
		projectTitle: "Web2API",
		description:
			"Data gathering platform that turns any website into developer-friendly API with schema validation, AI-powered extraction, and scheduled monitoring, adapting to site changes because AI understands semantics not DOM structure.",
		githubLink: "https://github.com/dhruv-suthar/Web2API",
	},
	{
		teamName: "HARDIK-WEB-OSS",
		projectTitle: "SENTINEL AI",
		description:
			"AI-powered compliance and brand safety system that validates content at scale using hybrid local and cloud AI models for content moderation and safety checks.",
		githubLink: "https://github.com/HARDIK-WEB-OSS/SENTINEL-AI",
	},
	{
		teamName: "MANOVAKTHA",
		projectTitle: "Mano Vaktha",
		description:
			"AI-powered mental wellness and spiritual guidance platform that blends ancient Indian wisdom with modern AI, leveraging insights from 18 Puranas and 4 Vedas to provide personalized story-based guidance for stress, anxiety, and emotional well-being.",
		githubLink: "https://github.com/lschowdary999/MANOVAKTHA",
	},
	{
		teamName: "karthikajay04",
		projectTitle: "Deadline Shield",
		description:
			"Backend system that proactively detects academic overload before it causes failure or burnout, continuously simulating student's upcoming workload over next 14 days and identifying deadline shock situations with automatic recovery mode and alerts.",
		githubLink: "https://github.com/karthikajay04/Deadline-Shield",
	},
	{
		teamName: "Team lazy",
		projectTitle: "Incident Tracking API",
		description:
			"Incident tracking API built with Motia for managing and tracking incidents in backend systems.",
		githubLink: "https://github.com/aun009/Incident-Tracking-API",
	},
	{
		teamName: "code-killer0",
		projectTitle: "PharmaIntel",
		description:
			"Agentic AI platform for drug repurposing and pharma intelligence that orchestrates multiple AI agents to analyze clinical trials, patents, market data, trade intelligence, and internal documents, delivering decision-ready insights through modern web dashboard with explainable auditable AI outputs.",
		githubLink: "https://github.com/code-killer0/pharmintel",
	},
	{
		teamName: "hemanth5544",
		projectTitle: "Chitro",
		description:
			"Sleek modern screen recording application built with Motia that allows users to record screen, save locally, or upload to AWS S3 cloud storage for screen capture and sharing.",
		githubLink: "https://github.com/hemanth5544/Chitro",
	},
	{
		teamName: "addico786",
		projectTitle: "GhostFlow",
		description:
			"Human-in-the-loop workflow system designed to ensure critical tasks never silently fail, creating time-bound tasks, tracking human responses, and automatically escalating through predefined chains if no action is taken, combining event-driven workflows with API-based task creation.",
		githubLink: "https://github.com/addico786/ghost_flow.git",
	},
	{
		teamName: "BishalJena",
		projectTitle: "metricOS",
		description:
			"AI-powered analytics layer that lets anyone talk to their data, connecting Supabase or CSV, asking questions in plain English, and getting streaming answers and infographics with SQL included in seconds.",
		githubLink: "https://github.com/BishalJena/metricOS.git",
	},
	{
		teamName: "varshithm7x",
		projectTitle: "TxScope",
		description:
			"AI-powered blockchain transaction explainer that reconstructs full internal execution topology of transactions to visualize every sub-call, event, and state change, leveraging AI to generate human-readable explanations helping users understand intent and outcome of complex transactions.",
		githubLink: "https://github.com/varshithm7x/txscope",
	},
	{
		teamName: "ravijags",
		projectTitle: "Data Pipeline Agent",
		description:
			"Unified event-driven backend agent that automates cryptocurrency data lifecycle using Cron Trigger to fetch real-time BTC prices from Coinbase API, Python Step for data transformation, and Event Step to persist records into MySQL database using Motia's unified runtime.",
		githubLink: "https://github.com/ravijags/data-pipeline-agent",
	},
	{
		teamName: "beetz12",
		projectTitle: "Job Aggregator",
		description:
			"Eliminates job search fatigue by unifying scattered listings from HackerNews, Reddit, and other platforms into single streamlined feed, integrating Claude 3.5 Sonnet to provide AI-powered job summaries and instant personalized cover letters tailored to specific profiles.",
		githubLink: "https://github.com/beetz12/job-aggregator/",
	},
	{
		teamName: "TJothiprakash",
		projectTitle: "Idempotent Workflow Processor",
		description:
			"System that implements idempotent workflow processing to handle duplicate requests safely in distributed backend systems, ensuring requests with same idempotency key are processed only once with concurrent request blocking and state tracking using IN_PROGRESS and COMPLETED states.",
		githubLink: "https://github.com/TJothiprakash/idempotency-processing.git",
	},
	{
		teamName: "Tech titans",
		projectTitle: "k8sforge",
		description:
			"System based on creating minimal Helm Charts with Docker images and minimal inputs, resolving Helm Charts complexity by providing developers simple Helm Chart which could be deployed to Kubernetes instantly.",
		githubLink: "https://github.com/Sheikh-Abubaker/k8sforge.git",
	},
	{
		teamName: "samjn08",
		projectTitle: "GitFlow AI",
		description:
			"Autonomous pull request auditor built with Motia framework featuring comprehensive 5-step audit workflow with API Steps for HTTP requests, Event Steps for parallel processing, AI-powered code review using OpenRouter, and real-time Streams for live progress updates.",
		githubLink: "https://github.com/samjn08/gitflow",
	},
	{
		teamName: "Prasannajaga",
		projectTitle: "AmazonLite",
		description:
			"Production-ready high-performance e-commerce backend designed for scalability and reliability, built with Motia for managing e-commerce operations.",
		githubLink: "https://github.com/Prasannajaga/amazonLite-motia",
	},
	{
		teamName: "Jiten Purswani",
		projectTitle: "AlgoArcade",
		description:
			"Experimental AI game platform that explores human-AI interaction through structured stateful simulations, modeling real-world AI systems like persuasion, recommendation algorithms, or matchmaking and exposing hidden mechanics behind them.",
		githubLink: "https://github.com/JitenPurswani/AlgoArcade",
	},
	{
		teamName: "codealpha6393",
		projectTitle: "GSOC Watchdog",
		description:
			"Automated Good First Issue Hunter that proactively monitors target repositories, scans for opportunities, and alerts instantly when relevant issues are found, using Motia to orchestrate Python-based backend workflow with event-driven architecture.",
		githubLink: "https://github.com/codealpha6393/Backend_Hackathon",
	},
];

export { winningProjects, topProjects, otherProjects };
