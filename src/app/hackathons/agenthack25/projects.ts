const winningProjects = [
	{
		teamName: "Team Dark Mode",
		projectTitle: "DCRCA Agent",
		description:
			"AI system detecting, prioritizing, and coordinating disaster responses for authorities.",
		githubLink: "https://github.com/anuj123upadhyay/dcrca_agent",
		youtubeEmbed:
			"https://www.youtube.com/embed/mDhbQSHd5R0?si=iQZYecKj1q-6vUqX",
		prize: "Apple MacBook Pro",
	},
	{
		teamName: "Atibhi Agrawal",
		projectTitle: "Anti Money Laundering Agent",
		description:
			"Real-time AML system using Open Banking, multi-agent intelligence integration.",
		githubLink:
			"https://github.com/asquare14/portia-agent-examples/tree/aml-agent/anti-money-laundering-agent",
		youtubeEmbed:
			"https://www.youtube.com/embed/kgmcXldp_-M?si=DfDrfAaqOshYBt0a",
		prize: "Apple iPhone 16",
	},
	{
		teamName: "Lone scrapper",
		projectTitle: "YouTube Companion Agent",
		description:
			"AI-powered YouTube agent offering recommendations, fact-checking, summaries, and rankings.",
		githubLink: "https://github.com/JAIVIGNESH2002/YucoAgent",
		youtubeEmbed:
			"https://www.youtube.com/embed/W_Hevrb23CY?si=hj58fdmsAt4Fhb7E",
		prize: "Apple iPad Air",
	},
];

const topProjects = [
	{
		teamName: "Pravesh",
		projectTitle: "Auto Cover Letter Agent",
		description:
			"Built AI-powered cover letter generator for freelance gigs using Portia.",
		githubLink: "https://github.com/Pravesh-Sudha/agent-hack-2025",
		youtubeEmbed: "https://www.youtube.com/embed/mSh3d0BJOB4",
	},
	{
		teamName: "Tecky coders",
		projectTitle: "HealthFirst Connect",
		description:
			"Smart AI-driven healthcare system improving efficiency, accessibility, and patient trust.",
		githubLink: "https://github.com/wanidhruva/Portia-hospital",
		youtubeEmbed:
			"https://www.youtube.com/embed/O2OXiR3JCYc?si=MbM7bD0su0ITa1KH",
	},
	{
		teamName: "Honey Paptan",
		projectTitle: "Startup Autopilot",
		description:
			"AI automates startup launch tasks: planning, research, pitching, marketing, outreach.",
		githubLink: "https://github.com/HoneyPaptan/startup-autopilot",
		youtubeEmbed:
			"https://www.youtube.com/embed/ZBAkNFY9z3o?si=QXY_WG2uGysjiFjQ",
	},
	{
		teamName: "Global Elites",
		projectTitle: "Tortilla",
		description:
			"AI fact-checking agents fight misinformation with scalable verification endpoints.",
		githubLink: "https://github.com/Gauravpadam/Tortilla",
		youtubeEmbed: "https://www.youtube.com/embed/SIMqFiz12JU",
	},
	{
		teamName: "The OGs",
		projectTitle: "KyodoAI",
		description:
			"Autonomous AI assistant managing collaborations, negotiations, and content creator workflows.",
		githubLink: "https://github.com/Mayuresh-22/KyodoAI",
		youtubeEmbed:
			"https://www.youtube.com/embed/DScdA5LHNHM?si=HLRlDqFUF-q-jwPR",
	},
	{
		teamName: "Serendipity",
		projectTitle: "Obligence",
		description:
			"Automates legal document review, extraction, and risk analysis with Portia.",
		githubLink: "https://github.com/kyrexi/obligence",
		youtubeEmbed: "https://www.youtube.com/embed/j9vwxsSxA6Y",
	},
	{
		teamName: "ByteBrigade",
		projectTitle: "AI Marketing Agent: UGC Ads Creator",
		description:
			"Automates UGC ad creation with avatars, animations, and planning.",
		githubLink: "https://github.com/Nishitbaria/python-portia",
		youtubeEmbed: "https://www.youtube.com/embed/8yBMu9EXoro",
	},
	{
		teamName: "SuperCell",
		projectTitle: "OSS Community Agent",
		description:
			"AI auto-responder helps open-source maintainers manage repetitive community support.",
		githubLink: "https://github.com/BennyPerumalla/OSS-Community-Agent",
		youtubeEmbed:
			"https://www.youtube.com/embed/aSKqrYDJ8MQ?si=o6VomIYnnaxkIldM",
	},
];

const otherProjects = [
	{
		teamName: "Myadam Sachin",
		githubLink: "https://github.com/SachinMyadam/my-hackathon-agent",
		projectTitle: "AI Grocery Helper",
	},
	{
		teamName: "Abbie",
		githubLink:
			"https://github.com/soumya-1712/Whatsapp-Competitive-Programming-Assistant",
		projectTitle: "WhatsApp Competitive Programming Assistant",
	},
	{
		teamName: "Ashish Patnaik",
		githubLink: "https://github.com/Ashish-Patnaik/Portia-PR-Guardian",
		projectTitle: "The Portia PR Guardian",
	},
	{
		teamName: "shani yadav",
		githubLink: "https://github.com/itssunnyfunny/PMs-assistant-agent",
		projectTitle: "Portia PM Agent",
	},
	{
		teamName: "AgentDock",
		githubLink: "https://github.com/Arpan-gl/AgentDock",
		projectTitle: "AgentDock",
	},
	{
		teamName: "Mohit Madan",
		githubLink: "https://github.com/Mmadan128/GrowthAgentAI",
		projectTitle: "Career Pathfinder Agent",
	},
	{
		teamName: "Team Be (Solo participant)",
		githubLink: "https://github.com/andbhavyaa/opensource-license-checker",
		projectTitle: "OpenSource License & IP Checker",
	},
	{
		teamName: "Ritik Makhija",
		githubLink:
			"https://github.com/ritik-prog/AI-Powered-Bug-to-PR-Autopilot-with-Portia-Integration",
		projectTitle: "AI-Powered Bug-to-PR Autopilot with Portia Integration",
	},
	{
		teamName: "Sanket",
		githubLink: "https://github.com/SanketLV/ai-incident-reponse-bot",
		projectTitle: "AI Incident Response Bot",
	},
	{
		teamName: "AI Innovators",
		githubLink: "https://github.com/swagatika60/AI_Content_Detector..git",
		projectTitle: "AI Content Detector",
	},
	{
		teamName: "Dex",
		githubLink:
			"https://github.com/VikrantKadam028/Agentic-Knowledge-Conservation-Adaptive-Learning-Agent",
		projectTitle:
			"Agentic Knowledge Conservation Adaptive Learning AI Agent",
	},
	{
		teamName: "Suyash Patil",
		githubLink: "https://github.com/iamsnp-1/Daily_Briefing-Agent",
		projectTitle: "Daily Briefing Agent",
	},
	{
		teamName: "AnuragMishra",
		githubLink:
			"https://github.com/Anuragmishraa08/portia-agent-fastapi/blob/main/README.md",
		projectTitle: "Portia Agent Fastapi",
	},
	{
		teamName: "Dark Knights",
		githubLink:
			"https://github.com/sujalbokariya/stock-market-predication-newsletter-using-portia-ai",
		projectTitle: "Stock Market Predication and Valuation Newsletter",
	},
	{
		teamName: "cneuralnetworks",
		githubLink: "https://github.com/khushal1512/agenthacks-khush",
		projectTitle: "Nir - Product Manager Agent",
	},
	{
		teamName: "Karthik D",
		githubLink: "https://github.com/17297781Karthik/AgentHack-2025",
		projectTitle: "DevOps Crisis Commander",
	},
	{
		teamName: "Abhishek kamble",
		githubLink:
			"https://github.com/abhishekkamble12/POrtia_sdk_ai_research.git",
		projectTitle: "AI Research Assistant ",
	},
	{
		teamName: "Aditya kumar Maurya",
		githubLink: "https://github.com/addy1947/potia_ai_hackathon",
		projectTitle: "Dependency Security Agent",
	},
	{
		teamName: "Hritik Raj",
		githubLink:
			"https://github.com/Hritikraj8804/Hritikraj8804-Portia_hack.git",
		projectTitle: "DevOps AI Assistant",
	},
	{
		teamName: "Vaibhav Mahajan",
		githubLink: "https://github.com/vaibhav1mahajan/portia-digest-bot",
		projectTitle: "Portia Digest Bot",
	},
	{
		teamName: "Appana",
		githubLink: "https://github.com/APPANAHARINI1234/BizBoost",
		projectTitle: "Grogent - The Small Business Growth Agent",
	},
	{
		teamName: "Exelciors",
		githubLink: "https://github.com/srthkdev/newsletter-ai",
		projectTitle: "Newsletter AI",
	},
	{
		teamName: "DevElite",
		githubLink:
			"https://github.com/mdkamranalam/human-verified-content-curation-agent.git",
		projectTitle: "Human Verified Content Curation Agent",
	},
	{
		teamName: "veera manikanta reddy",
		githubLink: "https://github.com/VeeraManikanta-Gudala/cloudchat",
		projectTitle: "Cloud Chat",
	},
	{
		teamName: "Rishi Jha",
		githubLink: "https://github.com/RISHI-4CODE/AuditorAI-",
		projectTitle: "AI Auditor",
	},
	{
		teamName: "BinaryBandits",
		githubLink: "https://github.com/partheev/agentic-feedback-workflow",
		projectTitle: "Feedback & Bug Triage AI Workflow",
	},
	{
		teamName: "CosmicOne ",
		githubLink: "https://github.com/VibhuGupta-dev/Dr-Portia-AI",
		projectTitle: "Dr. Portia - AI-Powered Doctor Assistant",
	},
	{
		teamName: "DIMPLE",
		githubLink: "https://github.com/Dimple-Choudhary/PHISHDETECTAI",
		projectTitle: "PHISHDETECTAI",
	},
	{
		teamName: "Spot",
		githubLink: "https://github.com/harshitrwt/agenthack25",
		projectTitle: "Sentinel",
	},
	{
		teamName: "Sumeet (CodeCosmos)",
		githubLink: "https://github.com/sumeet156/CareerCopilotAgent",
		projectTitle: "Career Copilot Agent",
	},
	{
		teamName: "Crowd-Sourced AI Detective",
		githubLink: "https://github.com/Manikant92/crowd_source_ai_detective",
		projectTitle: "Crowd-Sourced AI Detective",
	},
	{
		teamName: "Sumit Singh",
		githubLink: "https://github.com/sumitsingh1011/Portia-AI",
		projectTitle: "Portia-AI",
	},
	{
		teamName: "Gemini Coders",
		githubLink:
			"https://github.com/RohitRajvaidya5/Resume-Analyzer-With-AI-Functionalities",
		projectTitle: "Resume Analyzer with AI",
	},
	{
		teamName: "Harsh Suthar",
		githubLink: "https://github.com/10234567Z/portia-social-media",
		projectTitle: "Content Utopia",
	},
	{
		teamName: "ThePoniacBandit",
		githubLink: "https://github.com/SwSsinha/SeTu",
		projectTitle: "SeTu (सेतु)",
	},
	{
		teamName: "tech guys",
		githubLink: "https://github.com/SAIVARDHAN15/PortiaTradingCopilot.git",
		projectTitle: "Portia Trading Copilot",
	},
	{
		teamName: "symond",
		githubLink: "https://github.com/Symond1/Clarity_AI.git",
		projectTitle: "Clarity AI",
	},
	{
		teamName: "404codes",
		githubLink: "https://github.com/kashish00208/AngleHack",
		projectTitle: "Portia TypeScript SDK",
	},
	{
		teamName: "Smooth Operator",
		githubLink: "https://github.com/pauldebanshu19/Portia-AI",
		projectTitle: "Portia AI",
	},
	{
		teamName: "hack wave",
		githubLink: "https://github.com/dhruvdankhara/github-issue-automation",
		projectTitle: "GitHub Issue Automation System",
	},
	{
		teamName: "Team Alpha",
		githubLink: "https://github.com/shaikhFaris/Alpha-AI-Agent",
		projectTitle: "Alpha AI Agent",
	},
	{
		teamName: "Sagar",
		githubLink:
			"https://github.com/sagarhm12/Student-Doubt-Solver/tree/main",
		projectTitle: "Student Doubt Solver",
	},
	{
		teamName: "Spambots",
		githubLink: "https://github.com/janeshKapoor/datafoundry",
		projectTitle: "DataFoundry",
	},
	{
		teamName: "Shreenath_006",
		githubLink: "https://github.com/ShreenathUb/Plant-Doctor_Project",
		projectTitle: "Plant Doctor",
	},
	{
		teamName: "pen_paper not a team really",
		githubLink: "https://github.com/kiShubham/cheque-agent",
		projectTitle: "Cheque Validation System",
	},
	{
		teamName: "Kaizen",
		githubLink: "https://github.com/somewherelostt/portia-uptime-agent",
		projectTitle: "Portia Uptime Agent",
	},
	{
		teamName: "Divyanshu Soni",
		githubLink: "https://github.com/dcs-soni/content-flux",
		projectTitle: "Content Flux 🤖",
	},
	{
		teamName: "Vidhaydhar Adasul",
		githubLink: "https://github.com/Vd-adasul/portia-orchestrator",
		projectTitle: "Portia Orchestrator",
	},
	{
		teamName: "RootAccess",
		githubLink: "https://github.com/ommo007/Synapse",
		projectTitle: "Synapse",
	},
	{
		teamName: "The API-Tizers",
		githubLink: "https://github.com/Weasley18/wemakedev-hackathon",
		projectTitle: "Threat Seeker AI",
	},
	{
		teamName: "Sony Thomas",
		githubLink:
			"https://github.com/STSonyThomas/project-management-assistant",
		projectTitle: "SDLCApp",
	},
	{
		teamName: "Tech Titans",
		githubLink: "https://github.com/Nitisha-N/ProjectMile-AI-Magic",
		projectTitle: "ProjectMile AI Magic",
	},
	{
		teamName: "Team Protohub",
		githubLink: "https://github.com/SundaresanC/Dream-to-Task-Agent",
		projectTitle: "Dream to Task Agent",
	},
	{
		teamName: "Anubhav Bagri",
		githubLink: "https://github.com/anubhavbagri/LeadMailer",
		projectTitle: "Lead Mailer",
	},
	{
		teamName: "CodeHustlers",
		githubLink: "https://github.com/Meghana-06/TruthLens",
		projectTitle: "TruthTrack",
	},
	{
		teamName: "Qubit Questers",
		githubLink:
			"https://github.com/Polokghosh53/AI-Workbench-for-Transparent-Task-Automation/tree/main",
		projectTitle: "AI Workbench for Transparent Task Automation",
	},
	{
		teamName: "Ashwini Mandal",
		githubLink:
			"https://github.com/Ashwini4869/code-security-agent-using-portia",
		projectTitle: "Code Security Agent",
	},
	{
		teamName: "asr",
		githubLink: "https://github.com/AdarshSingh-ASR/WebSentinel",
		projectTitle: "WebSentinel",
	},
	{
		teamName: "Byte-Me",
		githubLink: "https://github.com/Byte-Sandwiches/meetingbot_portia.git",
		projectTitle: "MeetingBot",
	},
	{
		teamName: "Sanket Devmunde",
		githubLink:
			"https://github.com/Virtuoso633/portia-sdk-python/tree/feature/AgentHackHackathon",
		projectTitle: "SteelThread",
	},
	{
		teamName: "Aditya Jha",
		githubLink:
			"https://github.com/adityajha2007/portia-project-adityaJha.git",
		projectTitle: "nan",
	},
	{
		teamName: "Decoder",
		githubLink: "https://github.com/Kartikvyas1604/opsflow-guardian",
		projectTitle: "OpsFlow Guardian 2.0",
	},
	{
		teamName: "Barista",
		githubLink: "https://github.com/AnashviChauhan/ResearchAgent",
		projectTitle: "AI Research Agent",
	},
	{
		teamName: "Aaryan Guglani",
		githubLink: "https://github.com/guglxni/anumate",
		projectTitle: "Anumate Platform MVP",
	},
	{
		teamName: "Alone Member ",
		githubLink: "https://github.com/Aishwary2004Gupta/AgentHack2025",
		projectTitle: "Learning Companion",
	},
	{
		teamName: "HackForge",
		githubLink: "https://github.com/Prasanna-Kudale/ai-negotiation-agent",
		projectTitle: "AI Negotiation Agent",
	},
	{
		teamName: "Samnvaya",
		githubLink: "https://github.com/pratheekm5/AI-VIDEO-SCRIPT-GENERATOR",
		projectTitle: "AI Video Script Generator",
	},
	{
		teamName: "Palt ( I dont remember the team name I used)",
		githubLink: "https://github.com/PulastTiwari/pactguard",
		projectTitle: "PactGuard",
	},
	{
		teamName: "Devesh Meena",
		githubLink: "https://github.com/deveshXm/AgentHack2025",
		projectTitle: "Construction Site Safety Compliance Agent",
	},
	{
		teamName: "CodeBashers",
		githubLink: "https://github.com/Dishant-garg/portia-ads",
		projectTitle: "ContentFlow AI",
	},
	{
		teamName: "Fahim Ahmed(solo)",
		githubLink: "https://github.com/faheemakhmed/github-agent",
		projectTitle: "AI-powered GitHub PR Review Agent",
	},
	{
		teamName: "Gladiators",
		githubLink: "https://github.com/H-G-Harsh/Guardian-AI",
		projectTitle: "Guardian",
	},
	{
		teamName: "Saswat Susmoy Sahoo",
		githubLink: "https://github.com/Saswatsusmoy/TalkDocs2",
		projectTitle: "TalkDocs",
	},
	{
		teamName: "LedgerPe",
		githubLink: "https://github.com/Dljdd/AgentHack25",
		projectTitle: "RunLedger",
	},
	{
		teamName: "Rishabh Singh",
		githubLink: "https://github.com/RISHABH9450/Networking-Agent",
		projectTitle: "Networking Troubleshooter Agent",
	},
	{
		teamName: "solo hackers",
		githubLink: "https://github.com/bishalbera/auditpilot",
		projectTitle: "Compliance Copilot",
	},
	{
		teamName: "Solo-Visionary",
		githubLink: "https://github.com/PrachiDashrath/policy-sherlock.git",
		projectTitle: "Policy Sherlock",
	},
	{
		teamName: "Solo Team",
		githubLink:
			"https://github.com/thevaibhavmaurya/beyond-meanings-turborepo",
		projectTitle: "BeyondMeanings",
	},
	{
		teamName: "Alap Mistry",
		githubLink: "https://github.com/AlapMistry/pr-semgrep-scanner",
		projectTitle: "PR Semgrep Scanner",
	},
	{
		teamName: "Vengood",
		githubLink: "https://github.com/orgs/CI-CD-Fixer-Agent/repositories",
		projectTitle: "CI/CD Fixer Agent",
	},
	{
		teamName: "NOVA",
		githubLink: "https://github.com/igennova/Winning",
		projectTitle: "Portia AI Backend",
	},
	{
		teamName: "Abhishek soni",
		githubLink: "https://github.com/nomadichustler/agenthack_glucoAudio",
		projectTitle: "GlucoAudio",
	},
	{
		teamName: "the chosen ones",
		githubLink: "https://github.com/muskanny/agent_dev_hack",
		projectTitle: "Agent Dev Hack",
	},
	{
		teamName: "Team Miller",
		githubLink: "https://github.com/gururajm1/GR_Insurance_Agent",
		projectTitle: "GR Insurance Agent",
	},
	{
		teamName: "Falcon",
		githubLink:
			"https://github.com/Lkshayyadav/GitHubWatcher?tab=readme-ov-file",
		projectTitle: "GitHubWatcher",
	},
	{
		teamName: "Umang bansal",
		githubLink: "https://github.com/Umang-Bansal/gdpr-guardian",
		projectTitle: "GDPR Guardian",
	},
	{
		teamName: "DoubleAgent",
		githubLink: "https://github.com/gunith2022/cloud_cli_agent",
		projectTitle: "Cloud CLI Agent",
	},
	{
		teamName: "Arun Kukrety",
		githubLink: "https://github.com/arunkukrety/hiring-buddy",
		projectTitle: "HireBuddy",
	},
	{
		teamName: "Karan Singh",
		githubLink: "https://github.com/ksingh-08/WriteFlow-AgentHack2025",
		projectTitle: "WriteFlow",
	},
	{
		teamName: "Yash Pal",
		githubLink:
			"https://github.com/yashpal2104/agent-hacks-serverless-ai-agent/",
		projectTitle: "AI Agent Hacks",
	},
	{
		teamName: "Vaishali singh",
		githubLink: "https://github.com/vaemaski/meeting-notes-agent",
		projectTitle: "Meeting Notes AI Agent",
	},
	{
		teamName: "NyaySetu",
		githubLink: "https://github.com/Anas18102004/NyaySetu",
		projectTitle: "NyayaSetu",
	},
	{
		teamName: "ByteBrains",
		githubLink: "https://github.com/royallearner/Travel_Agenta",
		projectTitle: "Travel Agenta",
	},
	{
		teamName: "Phonix",
		githubLink: "https://github.com/Kishan-Patel-dev/DevOps-Copilot",
		projectTitle: "DevOps Copilot",
	},
	{
		teamName: "Kunal Pitale",
		githubLink: "https://github.com/kunal-004/triage-ninja",
		projectTitle: "Triage Ninja",
	},
	{
		teamName: "Aman Chaudhary (Solo)",
		githubLink: "https://github.com/amanc1248/hr-automation-backend",
		projectTitle: "HR Automation Backend",
	},
	{
		teamName: "Fendahl Interns",
		githubLink: "https://github.com/vedantzope9/Travel-Agent",
		projectTitle: "Travel Agent",
	},
	{
		teamName: "ADITYA ALON",
		githubLink: "https://github.com/ADITYACHHABRA1707/finance-copilot-ai",
		projectTitle: "Finance Copilot",
	},
	{
		teamName: "Sundharesan",
		githubLink: "https://github.com/sundhar-04/Vulnerability-patch-agent",
		projectTitle: "Vulnerability Patch Agent",
	},
	{
		teamName: "Suraj001-Portia-Solo",
		githubLink:
			"https://github.com/Suraj-kumar00/portia-ai-hackthon-project#",
		projectTitle: "Customer Support AI",
	},
	{
		teamName: "CodeAlpha",
		githubLink: "https://github.com/codealpha6393/Snap_act",
		projectTitle: "Snap Act",
	},
	{
		teamName: "Vaidik",
		githubLink: "https://github.com/Vaidik-Raval/AI_Agent",
		projectTitle: "Super-Assistant",
	},
	{
		teamName: "Agent Avengers",
		githubLink:
			"https://github.com/ABHISHEK-PRASAD-BAHELIYA/student-productivity-agent",
		projectTitle: "Student Productivity Agent",
	},
	{
		teamName: "Atharva Kanherkar",
		githubLink: "https://github.com/Atharva-Kanherkar/smart-meeting-agent",
		projectTitle: "Smart Meeting Agent",
	},
	{
		teamName: "global-trade-compliance-ai-assistance",
		githubLink:
			"https://github.com/devandop/global-trade-compliance-ai-assistance",
		projectTitle: "Global Trade & Compliance AI Assistant",
	},
	{
		teamName: "Harshal Rembhotkar",
		githubLink: "https://github.com/harshal-rembhotkar/AgentHack-Hackathon",
		projectTitle: "Automated Inbox Assistant",
	},
	{
		teamName: "Dil Ke Darzi",
		githubLink: "https://github.com/PriyanshuTrivedi-24/nyaya_netra",
		projectTitle: "NyayaNetra",
	},
	{
		teamName: "solo_leveller",
		githubLink: "https://github.com/vipclash007/InboXpert",
		projectTitle: "InboXpert",
	},
	{
		teamName: "Aniket Mishra",
		githubLink: "https://github.com/aniketmishr/pocket-agent/",
		projectTitle: "Pocket Agent",
	},
	{
		teamName: "K8-CLUSTERS",
		githubLink: "https://github.com/BHAVISHYA2005/portia-oncall-agent",
		projectTitle: "Portia Oncall Agent",
	},
	{
		teamName: "Rishabh",
		githubLink: "https://github.com/Rishabh-Raj-Pathak/GrantScout-AI",
		projectTitle: "GrantScout AI",
	},
	{
		teamName: "Chain Breakers",
		githubLink: "https://github.com/ADITYAKUMARRAI2007/TRUTHLENS",
		projectTitle: "TruthLens",
	},
	{
		teamName: "xkaper001",
		githubLink: "https://github.com/xkaper001/unto",
		projectTitle: "Unto",
	},
	{
		teamName: "Tatakae",
		githubLink: "https://github.com/furyfist/Journy-AI",
		projectTitle: "Journey AI",
	},
	{
		teamName: "DocFollow",
		githubLink: "https://github.com/57hemanth/DocFollow",
		projectTitle: "Doc Follow",
	},
	{
		teamName: "Prianshu Mukherjee",
		githubLink:
			"https://github.com/Prianshu-git/Project-Manager-agent-with-Portia-SDK",
		projectTitle: "Project Manager Agentic AI System",
	},
	{
		teamName: "Kedo",
		githubLink: "https://github.com/AradhyaSpace11/kedo",
		projectTitle: "Kedo",
	},
	{
		teamName: "Saurabh Ram",
		githubLink: "https://github.com/saurabh-ram/trip-planning-ai-agent",
		projectTitle: "Trip Planner Agent",
	},
	{
		teamName: "HackIn",
		githubLink: "https://github.com/balayokesh/HackBuddyTool",
		projectTitle: "Hack Buddy",
	},
	{
		teamName: "Alcadeus",
		githubLink: "https://github.com/aazam-gh/portia-hackathon",
		projectTitle: "DS-160 Visa Application Validator",
	},
	{
		teamName: "Abdullah ",
		githubLink:
			"https://github.com/Abdullah-Aakukara/ClinicConnect_AI-Receptionist",
		projectTitle: "SmileCare Dental Clinic Website",
	},
	{
		teamName: "Lone Agent",
		githubLink: "https://github.com/OscarK-coder/portia-finance-agent",
		projectTitle: "Portia Finance Agent",
	},
	{
		teamName: "Tay (Solo)",
		githubLink: "https://github.com/Marvellous111/tayend",
		projectTitle: "Tay",
	},
	{
		teamName: "Hashiras",
		githubLink: "https://github.com/VikasAdhikari07/HackAgent.git",
		projectTitle: "AI Strategy Builder",
	},
	{
		teamName: "StackUnderFlow ",
		githubLink: "https://github.com/Yashhuc/Jobmatch-agent",
		projectTitle: "Smart Job Search & Tailor Agent",
	},
	{
		teamName: "Vikas solo",
		githubLink: "https://github.com/Vikaskumarrr/DeepSearch",
		projectTitle: "DeepSearch",
	},
	{
		teamName: "vikas kumar",
		githubLink: "https://github.com/yokeshdj/portia",
		projectTitle: "Portia-Powered Customer Support Triager & Executor",
	},
	{
		teamName: "D-Buggers",
		githubLink: "https://github.com/THEFZNKHAN/MCP-project",
		projectTitle: "MCP Project",
	},
];

export { winningProjects, topProjects, otherProjects };
