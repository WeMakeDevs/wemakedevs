const winningProjects = [
	{
		teamName: "Honey Paptan",
		projectTitle: "VoiceGraph",
		description:
			"VoiceGraph: Speak your automation, watch it execute. Built with Cerebras (Llama 4) for lightning-fast inference, Groq Whisper for voice input, and Docker MCP Gateway orchestrating secure containerized tools. Features visual debugging with AI error analysis, voice/text editing, and background scheduling.",
		githubLink: "https://github.com/HoneyPaptan/voicegraph",
		youtubeEmbed:
			"https://www.youtube.com/embed/kzdXmUTYq1A?si=1d_b8ASXx2wPGLRp",
		prize: "Best Use of Cerebras",
	},
	{
		teamName: "Adithya Vardhan Reddy",
		projectTitle: "Sure AI",
		description:
			"Sure AI is an intelligent multi-agent platform that lets businesses deploy AI-powered customer support, email marketing, and recruiting \u2014 all in one place. At its heart is an embeddable chat widget that you can plug directly into your website, giving users instant access to your AI support agent (with integrations like stripe, slack and cal.com, let the agent manage it all for you).\n\nEach agent is powered by Cerebras and Meta models working in harmony \u2014 fast, context-aware, and deeply personalized. From resolving support tickets to writing persuasive emails to conducting interviews, Sure AI transforms how businesses communicate with people.\n\nIt\u2019s like giving your business a team of expert assistants that never sleep \u2014 one handling customers, one designing perfect marketing emails(multi-agent with research), and one interviewing candidates \u2014 all powered by blazing-fast Cerebras inference and the brilliance of Meta\u2019s Llama models.",
		githubLink: "https://github.com/AdithyaVardhanReddyM/Sure-AI",
		youtubeEmbed:
			"https://www.youtube.com/embed/OwQi4XXJnPI?si=tnq_D4Tn8dFoutsL",
		prize: "Best Use of Llama",
	},
	{
		teamName: "Aryan Kumar",
		projectTitle: "SRE Sentinel",
		description:
			"SRE Sentinel is an AI-powered monitoring and self-healing system for containerized applications. It continuously observes Docker containers, detects anomalies using advanced AI analysis, performs root cause analysis, and automatically applies fixes through the Model Context Protocol (MCP). The system provides real-time visibility into container health, resolves common issues automatically, and generates clear, human-friendly incident explanations for stakeholders.",
		githubLink: "https://github.com/aryan877/sre-sentinel",
		youtubeEmbed:
			"https://www.youtube.com/embed/nw8W9Ik_8Og?si=V1UYLBXQaycgmvJy",
		prize: "Best Use of Docker",
	},
];

const topProjects = [
	{
		teamName: "Neural Newbies",
		projectTitle: "SyncUp",
		description:
			"SyncUp - AI Meeting Assistant for Google Meet\n\nA Chrome extension that captures conversations in Google Meet and automatically generates contextual information cards using AI. Built with Gemini API for transcription and Cerebras with Meta Llama for Fast and intelligent content generation.\n\nWhat It Does:\nSyncUp listens to your Google Meet conversations and automatically creates information cards about topics mentioned. When someone talks about Docker, Kubernetes, or any technical concept, the extension generates a detailed explanation card with key points, use cases, and resources - like having ChatGPT instantly explain things during your meeting.\n\nThe extension also includes an AI chatbox where you can ask questions about the meeting or any topic, and get context-aware responses.\n\nFeatures:\n1. Real-Time Topic Detection\n2. AI-Powered Information Cards\n3. AI Chatbox\n4. Clean Interface\n\nUpcoming Features (1 month):\n1. Meeting Memory for post-meeting analysis, questions, and cross-meeting reference\n2. Multi-format attachments like PDFs, JPGs, MP4s, PPTs, etc.\n3. Enhanced UI with new themes and trending skins for Google meetings.\n4. Multi platform support for Zoom, Microsoft teams, etc.",
		githubLink: "https://github.com/awneet23/Syncup",
		youtubeEmbed:
			"https://www.youtube.com/embed/NgmFNfwHOZI?si=D0aWvV-r8F-jxXeK",
	},
	{
		teamName: "Yushank Kashyap",
		projectTitle: "Dungeon Escape",
		description:
			"Dungeon Escape is an immersive, retro-styled text adventure game that showcases the power of generative AI in creating dynamic, personalized gaming experiences. Built for the GenAI hackathon, this project demonstrates how large language models can transform traditional gaming through adaptive storytelling and infinite content generation.\n\nGenAI Innovation\nAt the core of Dungeon Escape is our advanced integration with Cerebras LLM technology, which serves as a dynamic game master capable of generating unique narratives in real-time. Unlike scripted adventures, our AI creates personalized dungeon layouts, puzzles, and storylines that adapt to each player's choices, ensuring no two playthroughs are ever the same.\n\nTechnical Implementation\nAI Architecture:\n\nCerebras Llama 3.1 8B model for story generation\n\nCustom prompt engineering for consistent game mechanics\n\nReal-time response processing and validation\n\nDynamic difficulty adjustment based on player performance\n\nGenAI Features:\n\nContext-aware narrative generation\n\nAdaptive puzzle creation\n\nPersonalized story progression\n\nMultiple branching pathways and endings\n\nHow GenAI Powers the Experience\nDynamic Content Generation: The AI creates unique dungeon scenarios, characters, and challenges for each session\n\nAdaptive Storytelling: Narrative evolves based on player decisions and previous actions\n\nIntelligent Game Mastering: AI serves as dungeon master, responding to both predefined options and custom player inputs\n\nProgressive Complexity: Game difficulty scales with player demonstrated skill level\n\nTechnical Stack\nAI Layer: Cerebras Cloud API, Custom prompt engineering, Real-time response parsing\nBackend: Node.js, Express, WebSocket communication\nFrontend: React, TypeScript, Retro-styled interface\n\nGenAI Challenges Solved\nMaintaining narrative consistency across AI-generated content\n\nEnsuring game balance while allowing for emergent storytelling\n\nProcessing and validating AI responses in real-time\n\nCreating engaging puzzles that feel hand-crafted rather than generated\n\nInnovation in AI Gaming\nDungeon Escape represents a new frontier in AI-assisted game development, demonstrating how generative models can create compelling, replayable experiences without extensive manual content creation. Our approach shows that AI can serve as both content generator and game master, opening possibilities for more dynamic and personalized gaming experiences across genres.\n\nThis project highlights the potential of GenAI to transform not just what games contain, but how they're designed and experienced by players.",
		githubLink: "https://github.com/Yushank/AI-dungeon-escape",
		youtubeEmbed:
			"https://www.youtube.com/embed/2_DAi5Yho2E?si=gP6oN-FUj2oRk1XD",
	},
	{
		teamName: "Team-K",
		projectTitle: "Mockly",
		description:
			"Mockly is an AI-powered mock interview platform that conducts realistic interviews and delivers intelligent, structured feedback. It uses Cerebras-hosted Llama models to generate adaptive, role-specific questions and a comprehensive post-interview assessment with category scores, strengths, and areas for improvement. Real-time voice is supported via Cartesia TTS and browser STT, and user sessions/results are persisted with Firebase. Built on Next.js (App Router) with a clean UI for fast practice and measurable improvement.",
		githubLink: "https://github.com/akshaysakinam/Mockly",
		youtubeEmbed:
			"https://www.youtube.com/embed/cVuzv0ndJCE?si=GtB1hiopXzIYMOit",
	},
	{
		teamName: "SIdharth",
		projectTitle: "Objective Email",
		description:
			"Project Title: Objective Email\n\nProblem Statement:\nProfessionals and students receive dozens (sometimes hundreds) of emails every day. Important ones often get buried under newsletters, promotions, or automated notifications. Manually going through each email wastes time, causes missed deadlines, and reduces productivity. Existing email clients provide search and filtering, but they don’t actually help users cut through the noise to quickly identify what matters most.\n\nSolution – Objective Email:\nObjective Email is a productivity-focused email assistant that automatically fetches a user’s Gmail messages, stores them securely, and processes them intelligently. It directly addresses the problem of “information overload” in email by:\n\nBatch Fetch & Store: Our backend integrates with Gmail API to fetch and continuously update only new emails (avoiding duplicates), ensuring users always see the latest inbox snapshot.\n\nCentralized Storage: Emails are stored in a structured database with metadata like sender, subject, received time, tags, and status, making them queryable and filterable.\n\nSmart Summaries: Instead of forcing users to open long emails, Objective Email uses local ML models (no external API, protecting privacy) to generate quick summaries. Users can choose between modes like “Chill mode” (casual), “Professional tone,” or “Important-only.”\n\nPrioritization: Users can mark emails as important, and the system learns over time to highlight similar ones — reducing the chance of missing deadlines.\n\nHackathon-Ready Reliability: To avoid Gmail’s timestamp issues, we designed a robust backend that deduplicates by messageId, ensuring refresh always captures new emails without errors.\n\nReal-Life Impact:\nObjective Email saves time and mental energy for students, professionals, and anyone drowning in emails. Instead of spending hours scanning irrelevant emails, users can open the app, hit refresh, and immediately focus on what matters: project updates, client mails, or academic instructions. By solving the daily frustration of missed important emails, Objective Email directly boosts productivity and reliability in personal and professional communication.",
		githubLink: "https://github.com/SidoIndeedo/objective_email",
		youtubeEmbed:
			"https://www.youtube.com/embed/bW1wdCWNb0k?si=zJt2l0BxP4sT8lE2",
	},
	{
		teamName: "Desi Coders",
		projectTitle: "Aurora",
		description:
			"Aurora is a real-time AI field assistant that provides instant safety guidance and operational support to industrial workers through simple phone calls. When a worker calls Aurora, they speak naturally about their situation - whether it's a gas leak emergency, equipment malfunction, or routine procedure question - and receive immediate, contextual guidance in under 500 milliseconds.\n\nThe system works through familiar phone infrastructure (no apps needed), making it accessible to every worker regardless of their technical expertise. Supervisors monitor all interactions through a live dashboard where they can see conversations in real-time, receive critical alerts, and take over calls when needed. Every interaction is automatically logged to Firebase for compliance and continuous improvement.\n\nWe built Aurora because industrial workers face situations where immediate expert guidance can mean the difference between a near-miss and a tragedy. Traditional solutions are too slow (human operators take 30-60 seconds to respond) or too limited (static IVR systems can't handle dynamic situations). Aurora combines the speed of AI with the oversight of human supervisors to deliver the best of both worlds.",
		githubLink: "https://github.com/mehulcode12/Aurora",
		youtubeEmbed:
			"https://www.youtube.com/embed/npL7dxG4XJU?si=6g8yH9_vXrRrQ6R5",
	},
	{
		teamName: "RunCode",
		projectTitle: "Patiently",
		description:
			"Patiently is an AI-powered platform that simplifies complex medical documents into clear, actionable insights for patients. Using Meta’s Llama models, it reads and translates lab results, imaging reports, and doctor’s notes into plain English—highlighting abnormal or critical values, explaining their significance, and suggesting questions to ask your healthcare provider.\n\nKey Features:\n\nUpload PDFs or images of medical reports (with OCR support)\n\nAutomatic document classification (lab, imaging, notes, etc.)\n\nPlain-language translation of medical jargon\n\nColor-coded visual dashboard with normal, abnormal, and critical indicators\n\nPersonalized “Questions for Your Doctor” suggestions\n\nSecure data handling (encrypted, privacy-first)\n\nTrend tracking for chronic patients\n\nBuilt With:\nReact + Tailwind (frontend), FastAPI (backend), PostgreSQL (encrypted), Meta Llama 3.3 (AI engine), Tesseract OCR (document parsing), python (backend).\n\nVision:\nTo empower every patient to understand their health information without needing a medical degree—turning anxiety into clarity, and data into decisions.",
		githubLink: "https://github.com/Dev-KrishnaPathak/Patiently.git",
		youtubeEmbed:
			"https://www.youtube.com/embed/2nK65AnRtR0?si=2Zgk6OQA28oIe2ol",
	},
	{
		teamName: "Diksha Srivastava",
		projectTitle: "Textsnap",
		description:
			"Textsnap is a lightweight Chrome extension designed for academics and researchers. It reads the content of a webpage and allows you to quickly generate summaries or translations of selected text. Additionally, it integrates with your Obsidian vault via the Obsidian MCP server, enabling you to directly save notes to markdown files without switching windows.",
		githubLink: "https://github.com/diksha-2911/teacher-extension",
		youtubeEmbed:
			"https://www.youtube.com/embed/2bnRU6VDlPs?si=tQ20vB1Mh-vVU6G6",
	},
	{
		teamName: "Goose",
		projectTitle: "CropGPT",
		description:
			"CropGPT is a full‑stack AI advisor for farmers, delivering near sub‑second answers via Cerebras Llama 3.1‑8B. It orchestrates 6 MCP tools (prices, weather, soil, pests, research, mandi trends) and supports 10 languages with voice and cultural context. The React frontend and FastAPI backend use agentic reasoning, RAG, and persistent workflows for crop selection, irrigation, pest management, and harvest timing.",
		githubLink: "https://github.com/BishalJena/CropGPT",
		youtubeEmbed:
			"https://www.youtube.com/embed/dOrKVRwQMjw?si=BX3QYdDqo9KZF7rI",
	},
	{
		teamName: "Team_Builder's",
		projectTitle: "MediFitMate",
		description:
			"MediFitMate is a WhatsApp health & fitness companion bot designed to support users in managing their workouts, meals, hydration, yoga sessions, and medication. With AI-powered insights. MediFitMate helps users maintain a healthier lifestyle through personalized guidance and real-time assistance.",
		githubLink: "https://github.com/ganaaduvva/MediFitMate",
		youtubeEmbed:
			"https://www.youtube.com/embed/LFkyphRRj3w?si=gKs9rK27C3j39D_A",
	},
];

const otherProjects = [
	{
		teamName: "Harsh",
		githubLink: "https://github.com/0xkarfue/photo-ai",
		projectTitle: "FaceFusion AI: Personalize Any Scene with Your Portrait",
	},
	{
		teamName: "Team Revaldo",
		githubLink:
			"https://github.com/RevaldoNyasha/doc_Ada_meta-X-celebras-hackthon.git",
		projectTitle: "Dr. Ada: Your On‑Demand AI Medical Advisor",
	},
	{
		teamName: "Naveenchand R B",
		githubLink: "https://github.com/Naveenchand06/secai-assistant/",
		projectTitle:
			"SecAI Assistant: AI‑Guided DevSecOps Vulnerability Fixer",
	},
	{
		teamName: "Manikandan Muthiah",
		githubLink: "https://github.com/pcbzmani/alert_mechanism_gold",
		projectTitle: "Gold & Silver Pulse: Live Price Alerts & Trend Charts",
	},
	{
		teamName: "Ethereum Bots",
		githubLink:
			"https://github.com/Prayag2003/githubify-ethereum-bots-futurestack-hack",
		projectTitle: "CodeBase Navigator: AI‑Powered Project Onboarding",
	},
	{
		teamName: "Heathens",
		githubLink: "https://github.com/Rishi-050504/WeMakeDevs-ClearCut",
		projectTitle:
			"ClearCut Insights: AI‑Transformed Docs into Actionable Dashboards",
	},
	{
		teamName: "AshaAI",
		githubLink:
			"https://github.com/harsh-bhati/Sahayak---ASHA-worker-Companion",
		projectTitle: "Sahayak: AI Companion for India's ASHA Health Workers",
	},
	{
		teamName: "Prerna Patil",
		githubLink: "https://github.com/Prernap29/hackathon-ai-app",
		projectTitle: "IdeaSpark AI: Instant Creative Brainstorming Engine",
	},
	{
		teamName: "Vishal Sharma",
		githubLink: "https://github.com/Vishal2002/Veritas",
		projectTitle: "Veritas: Real‑Time AI Fake‑News Detector",
	},
	{
		teamName: "Archana Gangadhar",
		githubLink: "https://github.com/archu270292/speech-assist-device",
		projectTitle:
			"SpeechAssist: Polite Sentence Expander with Multilingual Voice",
	},
	{
		teamName: "Infinity Stackers",
		githubLink: "https://github.com/Mohammed-Thaha/CodeLynx",
		projectTitle: "CodeLynx: AI‑Powered VS Code Companion",
	},
	{
		teamName: "Warp",
		githubLink: "https://github.com/owenkaplinsky/FutureStack-Hackathon",
		projectTitle: "Proactive AI: Self‑Updating News & Job Reporter",
	},
	{
		teamName: "TimePass",
		githubLink: "https://github.com/Swapnil26-art/Medical_ChatBot",
		projectTitle: "MedChat: Flask‑Based Health Query Bot",
	},
	{
		teamName: "Kunal Kushwaha",
		githubLink: "https://github.com/kunal-kushwaha",
		projectTitle: "Kunal’s Test Project",
	},
	{
		teamName: "RITIK GORAI",
		githubLink: "https://github.com/ritikrages/SARTHI.git",
		projectTitle: "SARTHI: Intelligent Indian Road‑Safety Companion",
	},
	{
		teamName: "Nothing",
		githubLink: "GitHub profile- adityak222",
		projectTitle: "QuickQuery AI: Private Local LLaMA Assistant",
	},
	{
		teamName: "Josh Kasuboski",
		githubLink: "https://github.com/kasuboski/discord_hack",
		projectTitle: "AI Team Bot: Multi‑Persona Dev Assistant for Discord",
	},
	{
		teamName: "Sakshi Soni",
		githubLink: "https://github.com/sakshi-sonii/SwasthyaAI",
		projectTitle: "SwasthyaAI: AI‑Driven Maternal & Child Care Hub",
	},
	{
		teamName: "Ashraful Nuhash",
		githubLink: "https://github.com/YashNuhash/FlowSprint.AI",
		projectTitle: "FlowSprint.AI: From Idea to PRD & Code Instantly",
	},
	{
		teamName: "AI Techno Man",
		githubLink:
			"https://github.com/gowthamramesh777/Ai_Job_Salary_Analysis.git",
		projectTitle: "AI Salary Analyzer 2025: Insights & Predictions",
	},
	{
		teamName: "Jonathan Toh",
		githubLink: "https://github.com/JohnDotOwl/promptmention.com",
		projectTitle: "PromptMention: Your Brand’s AI Search Spotlight",
	},
	{
		teamName: "Shivansh Bagga",
		githubLink: "https://github.com/baggashivansh/ShowcaseAi",
		projectTitle: "ShowcaseAI: Auto‑Crafted Portfolios Powered by Llama",
	},
	{
		teamName: "Mohd Faisal",
		githubLink: "https://github.com/mohdfaisal-1/README.ai",
		projectTitle: "README.ai: Instant Docs from Your Code",
	},
	{
		teamName: "Arpit Verma",
		githubLink: "https://github.com/arpitboss/Omnicontent-AI",
		projectTitle: "OmniContent AI: One Upload, Multi‑Channel Magic",
	},
	{
		teamName: "Saswat Rath",
		githubLink: "https://github.com/TheBoolean-Boy/Congming",
		projectTitle: "Congming: AI‑Powered Dev Onboarding & Code Assistant",
	},
	{
		teamName: "Piyush sahu ",
		githubLink: "https://github.com/Piyushsahu99/Raktchain",
		projectTitle: "RaktChain: AI‑Driven Blockchain Blood Donation Network",
	},
	{
		teamName: "Boobathy R",
		githubLink: "https://github.com/Boobathy13/AI-SalesAgent.git",
		projectTitle: "AI Sales Agent: Real‑Time Conversational Selling Engine",
	},
	{
		teamName: "Ananta",
		githubLink: "https://github.com/SuvitKumar003/Team--Ananta-",
		projectTitle:
			"LogScope AI: Rapid Root‑Cause Detection for Crashing Systems",
	},
	{
		teamName: "Gautam Gaurisaria ",
		githubLink: "https://github.com/Gautam-2604/disaster-mgmt",
		projectTitle:
			"Crisis Command: AI‑Powered Real‑Time Disaster Coordination",
	},
	{
		teamName: "Vaibhav Rathore",
		githubLink: "https://github.com/vaibhav112211/ai-anime-generator.git",
		projectTitle:
			"Anime AI Studio: Auto‑Generate Stories, Art, and Voice in Seconds",
	},
	{
		teamName: "car",
		githubLink:
			"https://github.com/girish-gaikwad/FutureStack_genAI_Hackathon",
		projectTitle: "StudySnap: AI‑Powered Textbook Chat & Quiz Hub",
	},
	{
		teamName: "C. Amal Anojan",
		githubLink: "https://github.com/Amal-Anojan/disaster-response-agent",
		projectTitle: "RescueAI: Real‑Time Multi‑Modal Disaster Response",
	},
	{
		teamName: "Deepthi Kantam",
		githubLink: "https://github.com/Naveen4421/resume_analyser.git",
		projectTitle: "SmartMatch: AI‑Driven Resume Scoring & Job Fit",
	},
	{
		teamName: "Nikhil Prabhu",
		githubLink: "https://github.com/Trolleroof/Clue2-hackathon",
		projectTitle: "Clue2: Silent AI Assistant for Live Meetings",
	},
	{
		teamName: "Papa Jams",
		githubLink: "https://github.com/thisyearnofear/x-ray",
		projectTitle: "X‑RAI: AI‑Powered 3D Medical Diagnosis Game",
	},
	{
		teamName: "JP",
		githubLink: "https://github.com/ik-labs/mini-hog-WeMakeDevs",
		projectTitle: "Minihog: Private AI‑Powered Analytics with NL Queries",
	},
	{
		teamName: "The Big Code Theory",
		githubLink: "https://github.com/vignesh-naik-720/BluePulse",
		projectTitle: "BluePulse: Daily AI Digest on Ocean Pollution",
	},
	{
		teamName: "Harsh Yadav",
		githubLink: "https://github.com/Harvy09/ChatClassAi",
		projectTitle: "ChatClass AI: Multilingual Voice Quiz & Study Companion",
	},
	{
		teamName: "Megha S K",
		githubLink: "https://github.com/Megha-S-K/ResumeForge.git",
		projectTitle: "ResumeForge: AI‑Tailored Resumes for ATS Success",
	},
	{
		teamName: "Promptonauts",
		githubLink:
			"https://github.com/as4396-art/realtime_sports_commentary_analytics/tree/main",
		projectTitle: "LivePlay AI: Real‑Time Sports Commentary & Analytics",
	},
	{
		teamName: "Digital Agents",
		githubLink: "https://github.com/evans-lucas/mock_trial",
		projectTitle: "Courtroom Coach: AI-Powered Mock Trial Simulator",
	},
	{
		teamName: "Jan Feddersen",
		githubLink: "https://github.com/janfeddersen-wq/DiagramMagic",
		projectTitle: "DiagramMagic: Speak, Sketch, and Build Charts Instantly",
	},
	{
		teamName: "Sudhesh Holla",
		githubLink:
			"Frontend - https://github.com/sudhesh15/granthx-fe Backend - https://github.com/sudhesh15/granthx-be",
		projectTitle:
			"GranthX.ai: Turn Docs & Media into Conversational AI Assistants",
	},
	{
		teamName: "Aditya Malhotra",
		githubLink: "https://github.com/ADML003/ai-researcher",
		projectTitle: "AI Researcher: Rapid Persona & Insight Generation",
	},
	{
		teamName: "Gaurav Bambhaniya",
		githubLink: "https://github.com/b9aurav/agentic-protocol-engine",
		projectTitle: "APE: AI-Driven Goal‑Based Load Testing",
	},
	{
		teamName: "Angel Espiritu",
		githubLink: "https://github.com/aceangel3k/rogue-isek-ai",
		projectTitle:
			"Rogue Isek AI: Procedurally Crafted 3D Adventure by LLMs",
	},
	{
		teamName: "Shivang Yadav",
		githubLink: "https://github.com/shivang-16/beetle.ai",
		projectTitle: "Beetle AI: Full‑Repo Smart Code Review & Auto‑Fixes",
	},
	{
		teamName: "Noor Khan",
		githubLink: "https://github.com/khanoorr/StudyAssistance",
		projectTitle: "WeMake: One‑Click AI Study Materials for Any Subject",
	},
	{
		teamName: "Shraddha Sharma",
		githubLink: "https://github.com/shradiphylleia/pulse",
		projectTitle: "Pulse: AI Desktop Guard for Safer Online Sessions",
	},
	{
		teamName: "Keerthana",
		githubLink: "https://github.com/nsaikeerthana/PolyVoice-Tutor/",
		projectTitle:
			"PolyVoice: Voice‑First AI Tutor for Neurodiverse Learners",
	},
	{
		teamName: "Sameera Khatoon",
		githubLink: "https://github.com/Sameerakhatoon/hackathon",
		projectTitle: "PhishGuard AI: Dockerized Defense Against NPM Breaches",
	},
	{
		teamName: "Aman ",
		githubLink:
			"https://github.com/hoBabu1/AI-on-chain-Invoice/tree/master",
		projectTitle: "InvoiceMint AI: NFT‑Powered Billing for Freelancers",
	},
	{
		teamName: "Nakirekanti Prashanth",
		githubLink: "https://github.com/prashanth30-n/Skill_Socket",
		projectTitle:
			"SkillSocket: AI Matchmaking for Learning & Collaboration",
	},
	{
		teamName: "Munshi Sahil Ahmed",
		githubLink: "https://github.com/Unica2804/NoteWeaver.git",
		projectTitle:
			"VaultMind: AI Research Assistant that Auto‑Builds Your Obsidian Vault",
	},
	{
		teamName: "Solo Ghost",
		githubLink: "https://github.com/GouravMital/Cereb-Meta",
		projectTitle: "FinTech Analyzer: AI‑Powered Market Insights Dashboard",
	},
	{
		teamName: "Shivam Kumar",
		githubLink: "https://github.com/z1shivam/ai-chat",
		projectTitle: "PrivateChat AI: Secure, Client‑Side LLM Conversations",
	},
	{
		teamName: "Raja Varsheni A",
		githubLink: "https://github.com/varsheni-2006/parrot-extension.git",
		projectTitle:
			"Parrot Extension: Pop‑Up Quiz Generator for On‑Page Vocabulary",
	},
	{
		teamName: "Poola Tejaswi",
		githubLink: "https://github.com/tejaswipoola2005/Future_stack_EDU_PRO",
		projectTitle:
			"GenAI Knowledge Companion: Real‑Time Quizzes, News & AI Search",
	},
	{
		teamName: "Mohit Nippanikar",
		githubLink: "https://github.com/mohitnippanikar-cpu/DexoraAI",
		projectTitle:
			"Dexora: Unified AI Knowledge Graph for Enterprise Intelligence",
	},
	{
		teamName: "Kartikey Dubey",
		githubLink: "https://github.com/KartikeyDubeyKD/AIOps-copilot",
		projectTitle:
			"AI Ops Copilot: Conversational Debugging & Deployments for DevOps",
	},
	{
		teamName: "Amaan Bilwar",
		githubLink: "https://github.com/AmaanBilwar/CodeMarshall/",
		projectTitle:
			"CodeMarshall: AI‑Driven Code Review, Tests & Refactoring",
	},
	{
		teamName: "Agni Astra",
		githubLink: "https://github.com/Yashvishe13/AI-safety-protocol",
		projectTitle: "Agni Astra: Multi‑Layer Guardrails for Safe LLM Agents",
	},
	{
		teamName: "Naganaboyina Leela Ranga Prasad",
		githubLink:
			"https://github.com/Projects6677/mental-wellness-ai-chatbot.git",
		projectTitle:
			"Mind Mate: Your AI‑Powered Personal Mental‑Wellness Coach",
	},
	{
		teamName: "HackIn",
		githubLink: "https://github.com/balayokesh/blog-summarizer",
		projectTitle:
			"Blog Summarizer: AI‑Generated Highlights & Bullet Points",
	},
	{
		teamName: "Aftab memon",
		githubLink: "https://github.com/Aftabmemon20/AI-Submission-Central",
		projectTitle: "AI Submission Central: Autonomous Judge for Hackathons",
	},
	{
		teamName: "Prabin Kumar Nayak",
		githubLink: "https://github.com/MekongDelta-mind/ai_market_indicator",
		projectTitle:
			"Market Insight AI: Predict if NIFTY‑50 Is Over‑ or Under‑Valued",
	},
	{
		teamName: "Emergency-Medial",
		githubLink: "https://github.com/KY233466/Emergency-Medial-Companion",
		projectTitle:
			"Emergency Medical Companion: Real‑Time AI First‑Responder",
	},
	{
		teamName: "Team WPI",
		githubLink: "https://github.com/alexaustin007/jerai",
		projectTitle: "Jerai: AI Issue Tracker That Auto‑Fixes Bugs Instantly",
	},
	{
		teamName: "kiran alex ch",
		githubLink: "https://github.com/Kiran-Alex/robin",
		projectTitle: "Robin: Zero‑Code AI Discord Bot Builder in 30 Seconds",
	},
	{
		teamName: "Mohammadfarhan Liyaqatali Tigadi",
		githubLink: "https://github.com/FarhanAlstonair/CardByAI.git",
		projectTitle: "CardCraft AI: Instant Business Cards from Plain English",
	},
	{
		teamName: "SHSOLO",
		githubLink: "https://github.com/Shreetam12345/Pure_DS",
		projectTitle: "TruthGuard: AI-Powered Fake News Detector",
	},
	{
		teamName: "Pranjal",
		githubLink: "https://github.com/PRANJALRANA11/Cally",
		projectTitle: "SmileScheduler: AI Dental Call Agent",
	},
	{
		teamName: "Aditya Tandon",
		githubLink:
			"https://github.com/angelycwingz/Guardian-Policy-Insights-Assistant",
		projectTitle: "Guardian: AI Policy Analyzer & Insight Engine",
	},
	{
		teamName: "Aniket Das",
		githubLink:
			"https://github.com/Aniket102005/global-ai-knowledge-bridge",
		projectTitle:
			"KnowledgeBridge: AI-Powered Technical Document Translator",
	},
	{
		teamName: "Akhil Nair",
		githubLink: "https://github.com/Akhilnair1306/Milo-Ai",
		projectTitle: "Milo: AI Companion for Alzheimer’s Care",
	},
	{
		teamName: "Pakeeza Khalid",
		githubLink: "https://github.com/Pakeeza1508/instant-analyst",
		projectTitle: "Instant Analyst: Real‑Time Cerebras Speedometer",
	},
	{
		teamName: "Saswat Susmoy Sahoo",
		githubLink: "https://github.com/Saswatsusmoy/AarogyaAI",
		projectTitle: "AarogyaAI: AI‑Driven Remote Healthcare Hub",
	},
	{
		teamName: "Team Coding Cats",
		githubLink: "https://github.com/Diksha02/FutureStack25-GenAIHackathon",
		projectTitle: "TaskPilot: AI‑Powered Productivity Copilot",
	},
	{
		teamName: "Gladiators ",
		githubLink: "https://github.com/Anuragsharma15-dell/The-db-design-",
		projectTitle: "DevDB Suite: All‑In‑One DB & DevOps Toolkit",
	},
	{
		teamName: "Titans",
		githubLink: "https://github.com/Zahemass/AI-SupplyChain.git",
		projectTitle: "SupplyChain Radar: AI Predictive Risk Engine",
	},
	{
		teamName: "ADITYA KUMAR JHA",
		githubLink: "https://github.com/HeyAditya95/politywatch-ai.git",
		projectTitle:
			"AI‑Powered Dashboard for Transparent Indian Politician Finances",
	},
	{
		teamName: "Creators squad",
		githubLink: "https://github.com/vaibhavarora102/HRRecruitingAgent",
		projectTitle:
			"Agentic AI that Automates the Entire HR Recruitment Pipeline",
	},
	{
		teamName: "Akhilesh Yadav",
		githubLink: "https://github.com/YadavAkhileshh/CrackBano",
		projectTitle: "CrackBano – Personalized AI Interview Prep Platform",
	},
	{
		teamName: "Rohit Rikame",
		githubLink: "https://github.com/elo369/ResumeBuilder",
		projectTitle: "Simple One‑Click Resume Builder",
	},
	{
		teamName: "404: Depression Not Found",
		githubLink: "https://github.com/ak-s-hat/recipe_generator.git",
		projectTitle: "Multi‑Agent AI Recipe & Meal‑Plan Generator",
	},
	{
		teamName: "Mohamed Nizharudeen",
		githubLink: "https://github.com/nizardeen/Gen-AI-Hackathon",
		projectTitle: "MediMate – AI Companion for Safe Medication Guidance",
	},
	{
		teamName: "Pratyush Prakhar",
		githubLink:
			"https://github.com/21pratyush/Hackathon-FutureStack-GenAI-WeMakeDevs.git",
		projectTitle: "DataGenie – Instant AI‑Generated Realistic Mock Data",
	},
	{
		teamName: "Vicky Chhetri",
		githubLink:
			"https://github.com/vickychhetri/ha_ai_doc,  https://github.com/vickychhetri/ha_ai_app",
		projectTitle: "RAG‑Based Personal AI Assistant for Your Own Documents",
	},
	{
		teamName: "NILANJAN SAHA",
		githubLink: "https://github.com/Devnil434/LawMind.git",
		projectTitle:
			"LawMind – AI‑Driven Legal Contract Analyzer & Risk Scorer",
	},
	{
		teamName: "Tecky Coders",
		githubLink: "https://github.com/dhruvawani17/ai-literacy-bridge",
		projectTitle:
			"AI Literacy Bridge – Accessible AI‑Enhanced Learning for the Visually Impaired",
	},
	{
		teamName: "Vrushabh Gawas",
		githubLink:
			"https://github.com/vrushabhgawas14/FutureStackHackathon-Bookify",
		projectTitle: "Bookify: AI‑Powered Summaries & Audio for All Readers",
	},
	{
		teamName: "Avishkar Gunjal",
		githubLink: "https://github.com/Avi-88/miso-client",
		projectTitle:
			"Miso: Your Real‑Time Voice Companion for Emotional Wellness",
	},
	{
		teamName: "Rudra Pratap Singh",
		githubLink: "https://github.com/Rudra1106/CarbonCreditsAnalyzer.git",
		projectTitle:
			"Carbon Credit Analyzer: AI‑Driven Farm Sequestration Insights",
	},
	{
		teamName: "Manan Malik",
		githubLink: "https://github.com/Mananm2004/Heavenly_ai",
		projectTitle: "Havenly.ai: Smart Home Design & Declutter Assistant",
	},
	{
		teamName: "Pranav ",
		githubLink: "https://github.com/allthingslinux/tux",
		projectTitle: "Smart HR: Streamlined Human‑Resources Automation",
	},
	{
		teamName:
			"AlgoNinjas :- Rishabh Kasaudhan , Rishabh Singh ,  Priyanshu Yadav",
		githubLink:
			"https://github.com/raghvendraCSE/expense-management-system",
		projectTitle: "Expense Ninja: Automated Corporate Expense Management",
	},
	{
		teamName: "Shashwat Mallick ",
		githubLink: "https://github.com/shashwatCOYS/DocuBot",
		projectTitle: "DocuBot: Instant Answers to Your Code Docs",
	},
	{
		teamName: "DevAlpha",
		githubLink: "https://github.com/mdkamranalam/EcoAI",
		projectTitle: "EcoAI: Personal AI Coach for Cutting Carbon Footprints",
	},
	{
		teamName: "Team  Vidhwan",
		githubLink: "https://github.com/Hritik-Yadav-4141/NutriSnap",
		projectTitle: "NutriSnap: Snap‑and‑Track AI Nutrition Coach",
	},
	{
		teamName: "Vantix",
		githubLink: "https://github.com/hopepranav08/Clintra",
		projectTitle:
			"Clintra: AI‑Powered Research Lab for Faster Drug Discovery",
	},
	{
		teamName: "Howard Coldham",
		githubLink: "https://git.pika-os.com/repo-tools/raven",
		projectTitle: "Raven: Automated Linux Package Steward",
	},
	{
		teamName: "Code Storm",
		githubLink: "https://github.com/surajpatil7498566414/Voice-Agent.git",
		projectTitle: "TezAgent: Offline Voice Buddy for Any OS",
	},
	{
		teamName: "Code Storm",
		githubLink: "https://github.com/surajpatil7498566414/Voice-Agent.git",
		projectTitle: "TezAgent: Your Internet-Free Voice Companion",
	},
	{
		teamName: "Snehasis Ghosh",
		githubLink:
			"https://github.com/Snehasis4321/language_learning_backend , https://github.com/Snehasis4321/language_learning_frontend",
		projectTitle: "AI Language Tutor: Live Conversational Practice",
	},
	{
		teamName: "Code Storm ",
		githubLink: "https://github.com/surajpatil7498566414/Voice-Agent.git",
		projectTitle: "TezAgent: Portable Voice Assistant, No Wi‑Fi Needed",
	},
	{
		teamName: "Abhisek Sahoo",
		githubLink: "https://github.com/abhisek-1221/korai",
		projectTitle: "Korai: AI Engine Turning Videos into Actionable Nuggets",
	},
	{
		teamName: "Siddhant Gureja",
		githubLink: "https://github.com/sidgureja7803/FutureStack_GenAI",
		projectTitle: "IdeaHub: AI‑Powered Startup Idea Vetting",
	},
	{
		teamName: "Aishwary Gupta",
		githubLink:
			"https://github.com/Aishwary2004Gupta/FutureStack-GenAI-hackathon",
		projectTitle:
			"Cerebras Research Intelligence: Instant Multi‑Agent Insights",
	},
	{
		teamName: "Aishwary Gupta",
		githubLink:
			"https://github.com/Aishwary2004Gupta/FutureStack-GenAI-hackathon",
		projectTitle:
			"Cerebras Research Intel: AI Agents Deliver Rapid Reports",
	},
	{
		teamName: "Code Strom ",
		githubLink: "https://github.com/surajpatil7498566414/Voice-Agent.git",
		projectTitle: "TezAgent: Lightweight Offline Voice Assistant",
	},
	{
		teamName: "Self",
		githubLink: "https://github.com/FullStack-webDevloper/dataDefender",
		projectTitle: "Data Guard Radar: Real‑Time Privacy Defender",
	},
	{
		teamName:
			"HackStreet Boys (Raghavendra Nath Chaturvedi  , Satyam Gupta , Saurabh Giri )",
		githubLink:
			"https://github.com/raghvendraCSE/expense-management-system",
		projectTitle:
			"SmartExpense: AI‑Powered OCR Automation for Employee Claims",
	},
	{
		teamName: "Cyber_Samurais",
		githubLink: "https://github.com/Ravisankar-S/BridgeAI",
		projectTitle:
			"BridgeAI: Hybrid Knowledge Assistant for Offline & Online Use",
	},
	{
		teamName: "Team machine",
		githubLink: "https://github.com/Demiladepy/mindai",
		projectTitle:
			"MindAI: Multi‑Agent Workspace Assistant for Remote Teams",
	},
	{
		teamName: "Cheetah AI",
		githubLink: "https://github.com/yashbudhia/cheetah2",
		projectTitle: "Cheetah AI: Ultra‑Fast IDE Coding Companion",
	},
	{
		teamName: "Vector Rush",
		githubLink: "https://github.com/harshil3134/Sense-AI",
		projectTitle:
			"SenseAI: Vision‑Based Assistant Empowering the Visually Impaired",
	},
	{
		teamName: "Laxmi Narayana Pattanayak",
		githubLink: "https://github.com/LaxmiNarayana31/ChatWithDB",
		projectTitle: "ChatWithDB: Natural‑Language SQL Query Builder",
	},
	{
		teamName: "Pratham Aditya Salhotra",
		githubLink: "https://github.com/PrathamAditya/futurestack25-project",
		projectTitle:
			"FutureStack Recruit: AI‑Driven Resume & Interview Engine",
	},
	{
		teamName: "Prathiksha",
		githubLink: "https://github.com/prathikshah07/cognitafinal",
		projectTitle:
			"Cognita: All‑In‑One Student Productivity & AI Insight Hub",
	},
	{
		teamName: "Kishan Patel",
		githubLink: "https://github.com/thekishandev/ResearchPilot",
		projectTitle:
			"ResearchPilot: AI Copilot for Rapid Multi‑Source Research Reports",
	},
	{
		teamName: "Aditya Kumar Puri",
		githubLink: "https://github.com/puri-adityakumar/Clariq",
		projectTitle: "AI-Powered Sales Intelligence Engine",
	},
	{
		teamName: "Bandreddy Sri Sai Lohith",
		githubLink: "https://github.com/lohith261/aether-hackathon",
		projectTitle: "Real-Time Market Anomaly Alerts with AI Briefs",
	},
	{
		teamName: "Chandravijay Rai",
		githubLink: "https://github.com/Cvr421/OpenAccess",
		projectTitle: "AI-Driven Rural Healthcare Diagnosis Platform",
	},
	{
		teamName: "Jaya Dubey ",
		githubLink: "https://github.com/jaya6400/speedgpt-gen-ai-hackathon",
		projectTitle: "Quick Cerebras API Prompt Tester",
	},
	{
		teamName: "Aazam Thakur",
		githubLink: "https://github.com/aazam-gh/global-hackathon-v1",
		projectTitle: "Interactive Knowledge‑Graph Tutor for MIT OCW",
	},
	{
		teamName: "Avengers",
		githubLink: "https://github.com/Tejwardeep-Singh/Ecosphere",
		projectTitle: "Smart Geo‑Reporting & Cleaning Platform",
	},
	{
		teamName: "Vaidik Raval",
		githubLink: "https://github.com/Vaidik-Raval/Interview_Agent",
		projectTitle: "Virtual AI Interview Coach with Live Feedback",
	},
	{
		teamName: "Ankit Patel",
		githubLink: "https://github.com/patelankit706/redteamagent",
		projectTitle: "Autonomous AI Red‑Team Automation Suite",
	},
	{
		teamName: "Kartik Sharma",
		githubLink: "https://github.com/ikartiksh/gsoc-proposal-reviewer",
		projectTitle: "AI Reviewer for GSoC Project Proposals",
	},
	{
		teamName: "Bishal Ghosh",
		githubLink: "https://github.com/bishalghosh24-lgtm/we_make_devs",
		projectTitle: "AI Companion Mentor Tailored by MBTI",
	},
	{
		teamName: "Udi Ngethe",
		githubLink: "https://github.com/udirobert/imperfectbreath",
		projectTitle: "Imperfect Breath: AI‑Guided Ancient Breathing Wellness",
	},
	{
		teamName: "Ikhlas sayyed",
		githubLink:
			"https://github.com/ikhlas-sayyed/InboxCanvas---AI-Powered-Visual-Email-Management-System",
		projectTitle: "InboxCanvas: Visual AI Canvas for Email Mastery",
	},
	{
		teamName: "Soli",
		githubLink: "Github.com",
		projectTitle: "Soli AI: Minimalist Intelligent Engine",
	},
	{
		teamName: "Shobhit Srivastava ",
		githubLink:
			"https://github.com/shobhit-APP/IdeaSpark_Backend/ And https://github.com/shobhit-APP/IdeaSpark",
		projectTitle: "IdeaSpark: AI‑Powered Creative Ideation Suite",
	},
	{
		teamName: "HackOps",
		githubLink:
			"https://github.com/Mayuresh-Dasure/CyberSecurity_AI_Copilot-.git",
		projectTitle:
			"Cybersecurity AI Co‑Pilot: Real‑Time Threat Insight Dashboard",
	},
	{
		teamName: "Ankit Anand",
		githubLink:
			"https://github.com/AnkitAnandMastery17/Smart-Email-Generator",
		projectTitle: "Smart Email Generator: AI‑Crafted Professional Emails",
	},
	{
		teamName: "Akshaya Parida",
		githubLink: "https://github.com/akshayaparida/bengaluru-infra-aiagent",
		projectTitle: "Civic AI Agent: One‑Click Infra Issue Reporter",
	},
	{
		teamName: "Undefined",
		githubLink:
			"Frontend - https://github.com/kaushal1717/Sales-Agent-Client      Backend - https://github.com/ratishjain12/Agentic-Sales-System",
		projectTitle: "AI Sales Agent: End‑to‑End Lead Discovery & Outreach",
	},
	{
		teamName: "Voldemort",
		githubLink:
			"https://github.com/ravindraogg/AI-Model-Marketplace-and-Advisor",
		projectTitle: "ModelNest: AI Model Marketplace & One‑Click Deploy Hub",
	},
	{
		teamName: "Himanshu gupta",
		githubLink: "https://github.com/hiiiHimanshu/OpsGenieX",
		projectTitle: "OpsGenieX: AI Co‑Pilot for Cloud Incident Resolution",
	},
	{
		teamName: "Debug Thugs",
		githubLink:
			"https://github.com/DevashishDeshmukh/Kubernetes-Query-System",
		projectTitle: "AI‑Powered Kubernetes Q&A Engine",
	},
	{
		teamName: "Ayan Gupta",
		githubLink: "https://github.com/xkaper001/relio",
		projectTitle: "Instant AI Resume‑to‑Portfolio Builder",
	},
	{
		teamName: "TestRun",
		githubLink: "https://github.com/Jaivignesh-afk/Finvest-ai",
		projectTitle: "AI‑Driven Investment Insight Platform",
	},
	{
		teamName: "Botgin",
		githubLink: "https://github.com/lyndonb1/rapidolingo.git",
		projectTitle: "Chat‑Based Real‑World Spanish Practice Buddy",
	},
	{
		teamName: "ANIK KUMAR ADHIKARY",
		githubLink: "https://github.com/WizOctavius/LinkedIn-AI-Coach",
		projectTitle: "AI LinkedIn Coach for 20‑Second Profile Boost",
	},
	{
		teamName: "Technologiya",
		githubLink: "https://github.com/SKfaizan-786/Futurestack_technologiya",
		projectTitle: "AI‑Powered Clinical Trial Matcher for Cancer Patients",
	},
	{
		teamName: "Tejas Sonawane",
		githubLink: "https://github.com/ts-31/ClipCraft",
		projectTitle: "AI Highlight Generator for YouTube Videos",
	},
	{
		teamName: "Satvik Mishra",
		githubLink: "https://github.com/Satvik01000/Saathi",
		projectTitle: "AI Digital Companion for Senior Tech Confidence",
	},
	{
		teamName: "Krish Patel",
		githubLink: "https://github.com/kp-08/Clarity-assistant-extention.git",
		projectTitle:
			"Context‑Aware AI Productivity Assistant for Docs & Notion",
	},
	{
		teamName: "Team Rocket",
		githubLink: "https://github.com/harsh16coder/Your_Personal_Accountant",
		projectTitle: "AI Personal Finance Manager with Smart Chat Advisor",
	},
	{
		teamName: "The Anonymous Conquerors",
		githubLink: "https://github.com/temburuakhil/WeMakeDevs-Hackathon",
		projectTitle: "Lightning‑Fast Multimodal AI Knowledge Assistant",
	},
	{
		teamName: "VirtuallyReal",
		githubLink: "https://github.com/Vrushank248/snapthought",
		projectTitle: "Speak‑It‑Build‑It: 30‑Sec Voice‑Driven App Prototyper",
	},
	{
		teamName: "advaith S",
		githubLink: "https://github.com/cap-code/commethub/tree/main",
		projectTitle: "CommentHub: Plug‑and‑Play AI‑Powered Discussion Widget",
	},
	{
		teamName: "Kaushik Paykoli",
		githubLink: "https://github.com/kaushik0010/Guardrail-AI",
		projectTitle: "Guardrail AI: Instant AI Firewall for LLM Security",
	},
	{
		teamName: "StackGuardians",
		githubLink: "https://github.com/tejas-2232/agent101",
		projectTitle:
			"AgentsForYou: Real‑Time RAG Platform with Supabase & Cerebras",
	},
	{
		teamName: "cmock",
		githubLink: "https://github.com/JatinNekela/Mail_Summerizer",
		projectTitle:
			"MailSummarizer: AI‑Powered Gmail Summary & Q&A Assistant",
	},
	{
		teamName: "Sujal Kumar Sinha",
		githubLink: "https://github.com/sujal-2301/PitStop-AI",
		projectTitle:
			"PitStop AI: Agentic Race‑Strategy Copilot with Monte Carlo Simulations",
	},
	{
		teamName: "Ashish Patnaik",
		githubLink: "https://github.com/Ashish-Patnaik/Medibot-AI",
		projectTitle: "MediBot AI: Instant Personalized Medical Chatbot",
	},
	{
		teamName: "Harsh Thakur",
		githubLink:
			"https://github.com/GITHaRsH53/MusicBuzz-fullstack, https://github.com/GITHaRsH53/MusicBuzz-Frontend",
		projectTitle: "MusicBuzz: Automated Spotify Playlist Builder from CSV",
	},
	{
		teamName: "Gautam",
		githubLink: "https://github.com/GautamJetley/ecosentinel",
		projectTitle:
			"EcoSentinel: Satellite Image Change Detector & AI Report",
	},
	{
		teamName: "Anurag Sharma",
		githubLink: "https://github.com/anurag01a/clarion/tree/master",
		projectTitle: "Clarion: Real‑Time Climate Disaster Response Network",
	},
	{
		teamName: "PRATYUSH PATTNAIK",
		githubLink:
			"https://github.com/pratyushuniv2022-code/FrontLine-AI/tree/main",
		projectTitle: "FrontLine AI: 24/7 India Threat Intelligence Dashboard",
	},
	{
		teamName: "Error",
		githubLink: "https://github.com/Pratapchandradeo/SafeLine",
		projectTitle:
			"SafeLine: AI Voice Assistant for Instant Cybercrime Reporting",
	},
	{
		teamName: "FRANCISCO CORDOBA",
		githubLink: "https://github.com/Franciscomoney/cerebras",
		projectTitle: "IntelPulse: AI‑Curated News Briefs for Professionals",
	},
	{
		teamName: "None- Solo",
		githubLink:
			"https://github.com/pkinaganti/docker-cerebras-demo/tree/feature/disasterroutes",
		projectTitle: "DisasterRoutes: AI‑Driven Real‑Time Relief Routing",
	},
	{
		teamName: "Final Trio",
		githubLink:
			"https://github.com/naveengowda7/commenta_WeMakeDevs/blob/main/README.md",
		projectTitle: "Commenta: AI‑Powered YouTube Audience Insight Engine",
	},
	{
		teamName: "Nitin kumar",
		githubLink: "https://github.com/Nitin-kun/hackathon-wemakedev",
		projectTitle: "InterviewMate: AI‑Guided Mock Interviews on Flutter",
	},
	{
		teamName: "Dhivya A D",
		githubLink: "https://github.com/AD-Dhivya/CodeSage",
		projectTitle: "CodeSage: Real‑Time AI Code Reviewer & Tutor",
	},
	{
		teamName: "Team Iterators",
		githubLink:
			"https://github.com/somyatambi/cognitive-canvas-hackathon.git",
		projectTitle:
			"Cognitive Canvas: AI‑Fuelled Startup Ideation to Pitch Deck",
	},
	{
		teamName: "Rambabu Kushwaha",
		githubLink: "https://github.com/Rambabu-kushwaha/SCHOLARAI",
		projectTitle:
			"ScholarAI: Smart PDF Summaries & Q&A for Academic Papers",
	},
	{
		teamName: "Sayantan Paul",
		githubLink: "https://github.com/SayantanmPaul/Q-Chat-Client",
		projectTitle: "AI Money Mentor: QChat for Youth Finance",
	},
	{
		teamName: "Code Catalysts",
		githubLink: "https://github.com/krish031006-Me/Dear-Diary.git",
		projectTitle: "AI‑Powered Mood Journal – Dear Diary",
	},
	{
		teamName: "Ai Mavericks",
		githubLink: "https://github.com/03musab/musab-DEV-Hackathon",
		projectTitle: "AI Agent Squad: One Prompt, Many Tasks",
	},
	{
		teamName: "Jansi Goswami",
		githubLink: "https://github.com/jansigoswami/synapse-ai-tutor.git",
		projectTitle: "Synapse – Your AI Coding Coach",
	},
	{
		teamName: "Clutch Coders",
		githubLink: "https://github.com/Atharv3221/Codelyzer",
		projectTitle: "Codelyzer – Code Quality Analyzer",
	},
	{
		teamName: "Gallants",
		githubLink: "https://github.com/vidhisingh14/TradeSmart.ai",
		projectTitle: "TradeSmart.AI – Instant AI‑Driven Trading Strategies",
	},
	{
		teamName: "James Njoroge",
		githubLink: "https://github.com/Blu-Chips/cerebras",
		projectTitle: "BankStmt AI – PDF to Insights in One Click",
	},
	{
		teamName: "Awinash Narute",
		githubLink: "https://github.com/awinashnarute10/TaskTamer/",
		projectTitle:
			"TaskTamer – ADHD‑Friendly Checklist with Dopamine Boosts",
	},
	{
		teamName: "CoreDumped",
		githubLink: "https://github.com/0xSangeet/MedMate-AI",
		projectTitle:
			"MedMate AI – Offline Clinical Decision Support for Rural Clinics",
	},
	{
		teamName: "Team",
		githubLink:
			"https://github.com/Ashritha112311/GENAI-Material-Selection",
		projectTitle: "GenAI Material Picker – Smart Sustainable Choices",
	},
	{
		teamName: "Swayam Prakash Sahu",
		githubLink: "https://github.com/SwayamSahu/LlamaLens",
		projectTitle: "Instant AI API Debugger Powered by Llama 4",
	},
	{
		teamName: "Gencoders",
		githubLink: "https://github.com/abhishekkamble12/cerebras_Agent.git",
		projectTitle:
			"AI Academic Assistant that Crafts Notion Notes & Schedules",
	},
	{
		teamName: "Clairvox",
		githubLink: "https://github.com/RGscripts/Clairvox",
		projectTitle:
			"AI Research Verifier: Fact‑Check Claims with Peer‑Reviewed Evidence",
	},
	{
		teamName: "Syed owais",
		githubLink: "https://github.com/Syedowais312/floatchat",
		projectTitle: "Conversational Oceanographer: Chat with ARGO Data",
	},
	{
		teamName: "Aditya Bhardwaj",
		githubLink:
			"https://github.com/aditya-b-bit/FutureStack-GenAI-Hackathon.git",
		projectTitle: "AI‑Driven Cyber Threat Intelligence Engine",
	},
	{
		teamName: "Satya Nikku",
		githubLink: "https://github.com/Prudhvinik1/deep-research-agent",
		projectTitle: "Deep Dive AI Assistant for Structured Research",
	},
	{
		teamName: "Playtest ES",
		githubLink: "https://github.com/jkoleman/playtest-es-futurestack-genai",
		projectTitle: "Automated AI Playtester for Endstar Game Debugging",
	},
	{
		teamName: "Shekhar Thathera",
		githubLink: "https://github.com/Shekhar854/WE-make-dev-hackathon.git",
		projectTitle: "Multilingual Real‑Time AI Customer Support Hub",
	},
	{
		teamName: "Bryant",
		githubLink: "https://github.com/ShawnPana/vc-use",
		projectTitle: "AI Startup Analyzer: Get Full Pitch Insights in Minutes",
	},
	{
		teamName: "tony plays",
		githubLink: "https://github.com/PrathameshTawar/lama",
		projectTitle: "Llama‑4 Student Helper App for Academic Tasks",
	},
	{
		teamName: "Team Dark Mode",
		githubLink: "https://github.com/anuj123upadhyay/llgca_agent",
		projectTitle: "Rapid Green Corridor: AI‑Powered Ambulance Dispatch",
	},
	{
		teamName: "Saharsh",
		githubLink: "https://github.com/sah0725/open_sorce_finder",
		projectTitle: "First Issue Finder: AI‑Guided Open‑Source Compass",
	},
	{
		teamName: "Gencoders",
		githubLink: "https://github.com/abhishekkamble12/Agenti.git",
		projectTitle: "Doler: Smart AI Agent Toolkit",
	},
	{
		teamName: "CodeAllies",
		githubLink: "https://github.com/akshatg887/We-make-devs",
		projectTitle:
			"Insight Engine: AI‑Driven Business Intelligence Dashboard",
	},
	{
		teamName: "Tripods",
		githubLink: "https://github.com/krithikaSai/ReCreate-Art-Mentor",
		projectTitle: "ReCreate: AI‑Powered Waste‑to‑Value Creativity App",
	},
	{
		teamName: "THE ITERATORS",
		githubLink: "https://github.com/sojasnayak/mindscribepro-v2.git",
		projectTitle: "MindScribe Pro: AI‑Enhanced Reflective Journaling",
	},
	{
		teamName: "HackVengers",
		githubLink:
			"https://github.com/Ariba-Khan4/Smart-Train-Traffic-Controller",
		projectTitle:
			"Smart Train Traffic Controller: AI‑Driven Delay Prediction & Rerouting",
	},
	{
		teamName: "Rekha Chittaloori ",
		githubLink: "https://github.com/RekhaChittaluri/CereChat",
		projectTitle: "CereChat: Real‑Time AI Conversational Assistant",
	},
	{
		teamName: "Flakehound",
		githubLink: "https://github.com/CosmasMandikonza/Flakehound",
		projectTitle: "FlakeHound: Autonomous AI Fixer for Flaky Tests",
	},
	{
		teamName: "Prompt Engineers",
		githubLink: "https://github.com/jayasrikirubanandam/futurestack2025",
		projectTitle: "Wellness Coach: AI‑Powered Personal Health Analyst",
	},
	{
		teamName: "Team Hack",
		githubLink: "https://github.com/SimranShaikh20/MindMesh-AI",
		projectTitle: "MindMesh AI – Real-Time Multi‑Agent Research Assistant",
	},
	{
		teamName: "tdgher0",
		githubLink: "https://github.com/tdgher0/shrepAI-project",
		projectTitle:
			"sherpAI – AI‑Powered Inventory & Finance Decision Engine",
	},
	{
		teamName: "HackHustler ",
		githubLink:
			"https://github.com/Rajyagur-Nayan/ai-health-assistant-.git",
		projectTitle:
			"AI Health & Therapy Assistant – 24/7 Empathetic Voice Therapy",
	},
	{
		teamName: "CodeHustlers ",
		githubLink:
			"https://github.com/jahnavi-varma/Misinformation_detection-GenAi",
		projectTitle:
			"Misinformation Detector – AI‑Driven Fact‑Check & Fraud Hub",
	},
	{
		teamName: "Arvind Kumar",
		githubLink:
			"https://github.com/Arvindkr123/SalesAgent_CerebrasandLiveKit",
		projectTitle:
			"SalesAgent AI – Live Voice Assistant with Dynamic Role Switching",
	},
	{
		teamName: "Prasad Tonge",
		githubLink: "https://github.com/Prasad2854/react-ecommerce-shopit.git",
		projectTitle:
			"React‑ShopIt – Fully Deployed Secure E‑Commerce Platform",
	},
	{
		teamName: "Suraj Kumar Das",
		githubLink: "https://github.com/DARKSKD/AI-Interviewer",
		projectTitle:
			"AI Interviewer – Voice‑Driven Mock Interviews Powered by Cerebras",
	},
	{
		teamName: "Ankita",
		githubLink: "https://github.com/Ankita-04-green/Neurolink-speak",
		projectTitle:
			"NeuroLink Speak – Thought‑to‑Speech Wearable for Non‑Verbal Users",
	},
	{
		teamName: "Kavya Samudrala",
		githubLink: "https://github.com/anglerfishlyy/llm-watch-grafana",
		projectTitle: "LLM Watch – Grafana Plugin for AI Model Observability",
	},
	{
		teamName: "Hammad Tanveer",
		githubLink: "https://github.com/Hammadtanveer/CodeSage.ai",
		projectTitle:
			"CodeSage.ai – Real‑Time AI Code Mentor with Streaming Feedback",
	},
	{
		teamName: "Edgar San Martin, Jr.",
		githubLink: "https://github.com/ej-sanmartin/24",
		projectTitle: "ConfessAI: The Suspect Interrogation Bot",
	},
	{
		teamName: "Rohit Ranjan",
		githubLink:
			"https://github.com/Rohit-RA-2020/open-coder-future-stack.git",
		projectTitle: "Open‑Coder: Conversational AI for Full‑Stack Code",
	},
	{
		teamName: "Shreyas ",
		githubLink: "https://github.com/Shreyas-Walde/multi-agent-research",
		projectTitle: "RapidResearch Agent: Multi‑Agent AI in 10 seconds",
	},
	{
		teamName: "Tosin Amuda",
		githubLink: "https://github.com/tosinamuda/graspy",
		projectTitle: "Graspy: Offline AI Tutor for Every Child",
	},
	{
		teamName: "Gangaparameshwari. D",
		githubLink: "https://github.com/Gangaparameshwari07/CAEPA",
		projectTitle: "CAEPA: AI Grader for Real‑Time Code Compliance",
	},
	{
		teamName: "Karan Thakur",
		githubLink: "https://github.com/thisiskaransgit/Words2Binary",
		projectTitle: "Words2Binary: Type a Command, Get Running Code",
	},
	{
		teamName: "CoreV2",
		githubLink:
			"https://github.com/Vicky16032205/Neuro-Symbolic-Research-Scientist",
		projectTitle:
			"Neuro‑Symbolic Scientist: AI‑Driven Alzheimer’s Discovery",
	},
	{
		teamName: "Ankit Ghosh",
		githubLink: "https://github.com/Ankitencoder/base-coop-guild",
		projectTitle: "DeCo‑op: DAO‑Powered Community Marketplace",
	},
	{
		teamName: "Astra",
		githubLink: "https://github.com/agricopilot/agricopilot/tree/main",
		projectTitle: "AgriCopilot: AI Farm Doctor & Secure Marketplace",
	},
	{
		teamName: "Oscar Kandir",
		githubLink: "https://github.com/OscarK-coder/mcp-sentinel",
		projectTitle: "MCP Sentinel: AI‑Explained Docker Firewall",
	},
	{
		teamName: "AInstein Sparks",
		githubLink:
			"https://github.com/AbhiAKP/FutureStackAIHackathon-Repo_Gaurdian",
		projectTitle: "Repo Guardian: AI‑Powered Code Risk Radar",
	},
	{
		teamName: "Deivyansh Singh",
		githubLink:
			"Main App: https://github.com/striver-24/Momentum, Ollama-App: https://github.com/striver-24/Momentum-ollama, Sandbox: https://github.com/striver-24/momentum-agent-sandbox",
		projectTitle: "Momentum: Auto‑Engine for Code from Idea to Production",
	},
	{
		teamName: "Devanshu Saxena",
		githubLink: "https://github.com/devanshucodes/futurestack",
		projectTitle: "NoMan: Fully Autonomous AI‑Run Enterprise",
	},
	{
		teamName: "SOLO -> Alia Bhatt",
		githubLink: "https://github.com/adityav477/P-roxy",
		projectTitle: "Proxy: Your AI Meeting Stand‑In",
	},
	{
		teamName: "Girish Digge",
		githubLink: "https://github.com/girishdigge/dreamscapes",
		projectTitle: "Dreamscapes: Build 3D Worlds Directly From Your Dreams",
	},
	{
		teamName: "1",
		githubLink: "https://github.com/Arjunhg/wemakedevs",
		projectTitle: "HireWize: Real‑World Interview Simulator",
	},
	{
		teamName: "Vishal Jha",
		githubLink: "https://github.com/reaim85/multi-agent-doc-analyser/",
		projectTitle: "Doc Analyzer: Multi‑Agent AI Document Insight",
	},
	{
		teamName: "Devs ",
		githubLink: "https://github.com/Shrysxs/wemakedevs",
		projectTitle: "Reclaim: AI Coach to Tame Phone Addiction",
	},
	{
		teamName: "Synara",
		githubLink: "https://github.com/Suryansh777777/Mathmatika",
		projectTitle: "Mathmatika: Personalized AI Math Tutor",
	},
	{
		teamName: "The Beatles",
		githubLink: "https://github.com/inclinedadarsh/helix",
		projectTitle: "Helix: AI Memory Hub for PDFs, Videos & Audio",
	},
	{
		teamName: "SHATAKSHI GUPTA",
		githubLink: "https://github.com/Shatakshi-gupta-ggits/sales-sam-boost",
		projectTitle: "SalesSam AI: Autonomous Multi‑Agent Deal‑Closer",
	},
	{
		teamName: "Guru Charan ",
		githubLink: "https://github.com/iamgurucharan/deep_fake_detection",
		projectTitle: "DeepFake Detect: EfficientNet‑LSTM Shield",
	},
	{
		teamName: "Jaivignesh",
		githubLink: "https://github.com/JAIVIGNESH2002/Chatto",
		projectTitle: "Chatto: Memory‑Smart Personalized Translator",
	},
	{
		teamName: "Jiten Purswani",
		githubLink: "https://github.com/JitenPurswani/SaathiV2",
		projectTitle: "Saathi: Voice‑First Multilingual Home Companion",
	},
	{
		teamName: "Patrick Damaso",
		githubLink: "https://github.com/dataphysician/axon",
		projectTitle: "AXON: LLM‑Powered Graph Explorer for ICD‑10",
	},
	{
		teamName: "Kishan Patel",
		githubLink: "https://GitHub.com/thekishandev/Syntheseek",
		projectTitle: "Syntheseek: Open‑Source LlamaIndex‑Powered AI Search",
	},
	{
		teamName: "TheOne",
		githubLink: "https://github.com/Aki-07/Tesseract",
		projectTitle: "Tesseract: AI Battle Arena for LLM Showdowns",
	},
	{
		teamName: "The Neural Networks",
		githubLink: "https://github.com/devbh04/finai-wemakedevs",
		projectTitle: "FinAI: Secure Multi‑Agent Financial Analyzer",
	},
	{
		teamName: "UrbanPlanners",
		githubLink:
			"https://github.com/itsbharatj/Geo-Spatial-AI-Agent-for-City-Planning",
		projectTitle: "UrbanPlanner AI: Multi‑Model City Planning Hub",
	},
	{
		teamName: "Yashh",
		githubLink: "https://github.com/Ya-shh/octant-hackathon-wemakdevs",
		projectTitle: "Octant: AI‑Precision Knowledge Navigator",
	},
	{
		teamName: "Drishyam",
		githubLink: "https://github.com/stokome/Hinglish-Translation-AI-llama2",
		projectTitle: "LinguaLift: AI‑Powered Multilingual Ebook Converter",
	},
	{
		teamName: "DeeptanshuDas",
		githubLink:
			"https://github.com/DeeptanshuDas/Cloud_Orchestrator_Assistant",
		projectTitle: "ChatDeploy: Speak‑to‑Deploy Cloud Orchestrator",
	},
	{
		teamName: "OmniHack",
		githubLink: "https://github.com/KhushneetSingh/DataSanity/tree/main",
		projectTitle: "DataSanity: Prompt‑Driven AI Data Clean‑&‑Enrich Suite",
	},
	{
		teamName: "Robson Camanducci",
		githubLink: "https://github.com/baleiadev/sentrydock",
		projectTitle: "SentryDock: AI Guard for Docker Security & Reliability",
	},
	{
		teamName: "aiVentors",
		githubLink: "https://www.github.com/akshatbatra/speaksurf",
		projectTitle: "SpeakSurf: Voice‑Control Your Chrome",
	},
	{
		teamName: "Raja Ramesh",
		githubLink: "https://github.com/rajach-1854-11/North-Star",
		projectTitle: "North Star: Agentic AI for Smart Engineering Staffing",
	},
	{
		teamName: "Namo again",
		githubLink: "https://github.com/Amanc77/Ai-Chatbot-PDF-reder",
		projectTitle: "PDF‑Whiz: AI Chatbot that Reads Your Docs",
	},
];

export { winningProjects, topProjects, otherProjects };
