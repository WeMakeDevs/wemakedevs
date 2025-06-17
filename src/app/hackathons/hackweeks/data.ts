import { images } from "./images";

const DATA = {
	title: "Hack Weeks",
	prize: "10,000",
	type: "offline",
	startDate: "2024-11-29T04:30:00Z",
	endDate: "2024-12-01T18:30:00Z",
	description:
		"Network, build projects and showcase your best ideas this winter",
	slug: "hackweeks",
	navLinks: [
		{ href: "/hackathons/hackweeks", label: "Overview", page: "overview" },
		{
			href: "/hackathons/hackweeks/resources",
			label: "Resources",
			page: "resources",
		},
		{ href: "/hackathons/hackweeks/rules", label: "Rules", page: "rules" },
	],
	submitButton: {
		href: "/hackathons/hackweeks/submit",
		label: "Submit Project",
	},
	hackathonCta: {
		href: "/hackathons/hackweeks/submit",
		label: "Register for Hackathon",
	},
	images,
	prizes: {
		winning: [
			{
				name: "Best Use of Kestra",
				prize: " Apple MacBook",
			},
			{
				name: "Best UI/UX Project",
				prize: "Dell Monitor",
			},
			{
				name: "Best AI/ML Project",
				prize: "Apple iPad",
			},
			{
				name: "Best Solo Project",
				prize: "Apple M4 Mac mini",
			},
		],
		other: [
			{
				name: "Sustainability Award",
			},
			{
				name: "Best Open Source Practices",
			},
			{
				name: "Best Documentation",
			},
		],
		giveaway: [
			{
				name: "Star Kestra on GitHub",
				prize: "Exclusive Swag Bag",
				description:
					"Top 20 people who star Kestra on Github and share their hackathon experience on socials using #HackFrost2024 will get an exclusive swag bag.",
			},
		],
	},
	submissionLink: "https://github.com/codefest-2024/submissions",
	registrationLink: "https://forms.gle/b3uwjeo5ZMrmiDVy7",
	schedule: [
		{
			date: "2024-11-29T00:00:00+05:30",
			items: [
				{
					title: "HackFrost winter hackathon 2024 welcome stream",
					link: {
						name: "Get notified",
						url: "https://www.youtube.com/live/b0_RUJlUXqo?feature=shared",
					},
					time: "2024-11-29T09:00:00+05:30",
				},
				{
					title: "Hacking begins",
					time: "2024-11-29T10:00:00+05:30",
				},
				{
					title: "Getting started with Kestra for building workflows",
					description:
						"Learn how to install Kestra and build your first workflow that automatically triggers",
					link: {
						name: "Get notified",
						url: "https://www.youtube.com/live/02eZLT1mZh0?feature=shared",
					},
					time: "2024-11-29T17:00:00+05:30",
				},
				{
					title: "Kestra live office hour on Discord",
					description: "We'll be answering questions",
					link: {
						name: "Get notified",
						url: "https://discord.com/events/862638364016771082/1306247180901683251",
					},
					time: "2024-11-29T19:00:00+05:30",
				},
				{
					title: "How to integrate your code with Kestra",
					description:
						"Learn how to take your code and integrate it into Kestra by passing dynamic values to it, and syncing it automatically with Git.",
					link: {
						name: "Get notified",
						url: "https://www.youtube.com/live/6K3RCQQtkfc?feature=shared",
					},
					time: "2024-11-29T21:30:00+05:30",
				},
			],
		},
		{
			date: "2024-11-30T00:00:00+05:30",
			items: [
				{
					title: "Discord community call",
					description: "We'll be answering questions",
					link: {
						name: "Get notified",
						url: "https://discord.com/events/862638364016771082/1306606191153119312",
					},
					time: "2024-11-30T18:30:00+05:30",
				},
				{
					title: "Fun activity",
					description: "Online games and quizzes",
					link: {
						name: "Get notified",
						url: "https://discord.com/events/862638364016771082/1306606868466110606",
					},
					time: "2024-11-30T20:00:00+05:30",
				},
			],
		},
		{
			date: "2024-12-01T00:00:00+05:30",
			items: [
				{
					title: "Project submission starts",
					time: "2024-12-01T10:00:00+05:30",
				},
				{
					title: "Resume review by Kunal Kushwaha",
					link: {
						name: "Get notified",
						url: "https://discord.com/events/862638364016771082/1306605633277136956",
					},
					time: "2024-11-30T12:00:00+05:30",
				},
				{
					title: "Hackathon ends (project submission closes)",
					time: "2024-12-01T22:00:00+05:30",
				},
			],
		},
		{
			date: "2024-12-02T00:00:00+05:30",
			items: [
				{
					title: "Hackathon end stream & result announcement",
					link: {
						name: "Get notified",
						url: "https://www.youtube.com/live/pUejHO0K5uU?feature=shared",
					},
					time: "2024-12-02T10:00:00+05:30",
				},
			],
		},
	],
	projects: {
		showcase: [
			{
				projectTitle: "Smart Data Injector",
				description:
					"ML-powered data transformation pipeline simplifying interoperability challenges",
				githubLink:
					"https://github.com/meltedhyperion/smart-data-injector",
				teamName: "MeltedHyperion",
				isSolo: false,
				category: {
					title: "Best use of Kestra",
					bgColor: "#E6F3FF",
					textColor: "#0969DA",
					borderColor: "#0969DA",
				},
			},
			{
				projectTitle: "VaChart",
				description:
					"VaChart is a modern Android application that helps travelers find vacant seats in Indian Railway trains after the chart preparation.",
				githubLink: "https://github.com/CHAHATMB/VaChart/",
				teamName: "Chahat Baghele",
				isSolo: true,
				category: {
					title: "Best UI/UX",
					bgColor: "#FFF9C4",
					textColor: "#F57F17",
					borderColor: "#F9A825",
				},
			},
			{
				projectTitle: "ML Model Drift Detection",
				description:
					"Automated ML model retraining using real-time data drift",
				githubLink: "https://github.com/anuj846k/HACKFROST-POLARDEV",
				teamName: "PolarDev",
				isSolo: false,
				category: {
					title: "Best AI/ML",
					bgColor: "#E6F7FF",
					textColor: "#1890FF",
					borderColor: "#1890FF",
				},
			},
			{
				projectTitle: "Wellness Navigator",
				description:
					"Automated support tickets and personalized fitness routines",
				githubLink: "https://github.com/ai-naymul/wellness-navigator",
				teamName: "Fork Me",
				isSolo: false,
				category: {
					title: "Best solo",
					bgColor: "#F0FFF4",
					textColor: "#38A169",
					borderColor: "#38A169",
				},
			},
			{
				projectTitle: "AidConnect",
				description:
					"AI-powered disaster relief social media data platform",
				githubLink: "https://github.com/Yash636261/AidConnect",
				teamName: "AINODES",
				isSolo: false,
				category: {
					title: "Best sustainability",
					bgColor: "#E8F5E9",
					textColor: "#2E7D32",
					borderColor: "#2E7D32",
				},
			},
			{
				projectTitle: "Content Creation on Steroids",
				description:
					"AI platform automating content creation and distribution",
				githubLink: "https://github.com/inclinedadarsh/ccos",
				teamName: "the three musketeers",
				isSolo: false,
				category: {
					title: "Best OSS practices",
					bgColor: "#FFF3E0",
					textColor: "#FB8C00",
					borderColor: "#FB8C00",
				},
			},
			{
				projectTitle: "Health Synth",
				description:
					"Unified healthcare platform with patient-doctor communication tools",
				githubLink: "https://github.com/rishavmehra/health-synth",
				teamName: "Rishav Mehra",
				isSolo: true,
				category: {
					title: "Best documentation",
					bgColor: "#F3E5F5",
					textColor: "#8E24AA",
					borderColor: "#8E24AA",
				},
			},
		],
		top: [
			{
				isSolo: false,
				teamName: "CloseAI",
				description:
					"Automates t-shirt designs, virtual try-ons, and postings using Kestra and AI.",
				githubLink: "https://github.com/Sadhana-Panthi/StyleSync",
				projectTitle: "StyleSync",
			},
			{
				isSolo: false,
				teamName: "Defi Builders",
				description:
					"Uses AI and Kestra for intelligent DeFi portfolio management workflows.",
				githubLink:
					"https://github.com/kamalbuilds/ava-portfolio-manager-ai-agent",
				projectTitle: "Ava Portfolio Manager",
			},
			{
				isSolo: false,
				teamName: "DevTitans",
				description:
					"AI-powered product detection and inventory management using YOLOv11nano and Kestra.",
				githubLink: "https://github.com/mysticalseeker24/ProductScan",
				projectTitle: "ProductScan",
			},
			{
				isSolo: false,
				teamName: "Doom",
				description:
					"Event-driven platform for polls, issues, engagement reports, and community discussions.",
				githubLink: "https://github.com/swymbnsl/kestra-hackfrost-24",
				projectTitle: "Data-Driven Community Engagement Platform",
			},
			{
				isSolo: false,
				teamName: "Frosty Raiders",
				description:
					"Realtime RAG app for reviews with profanity check using Kestra.",
				githubLink: "https://github.com/shrutimantri/kestra-hackfrost",
				projectTitle: "Realtime RAG with Kestra",
			},
			{
				isSolo: false,
				teamName: "Glitchez",
				description:
					"Secure cloud file management, AI-powered document interaction via WhatsApp.",
				githubLink:
					"https://github.com/prattiikk/kestraHackathonSubmission.git",
				projectTitle: "Personal WhatsApp File Vault",
			},
			{
				isSolo: false,
				teamName: "Lazy Hackers",
				description:
					"From amazing pics to narrated videos in minutes. Share stories with AI magic.",
				githubLink: "https://github.com/cyrixninja/FramePlay",
				projectTitle: "FramePlay",
			},
			{
				isSolo: false,
				teamName: "ONI",
				description:
					"Social media trend analysis using MERN and Kestra for rapid data processing.",
				githubLink: "https://github.com/momo-shogun/Trends-Tracker",
				projectTitle: "Trends Tracker",
			},
			{
				isSolo: false,
				teamName: "Onyx",
				description:
					"Encourages plastic recycling by rewarding users with gift coupons or offers.",
				githubLink: "https://github.com/xonoxc/cyGree",
				projectTitle: "CyGree",
			},
			{
				isSolo: false,
				teamName: "SkillScope",
				description:
					"Analyzes job requirements, matches them to resumes, highlighting improvement areas.",
				githubLink: "https://github.com/bradenkirkpatrick/skillscope",
				projectTitle: "SkillScope",
			},
			{
				isSolo: true,
				teamName: "Harshit Rawat",
				description:
					"Tracks carbon footprint, answers environmental queries, connects sustainability-focused communities.",
				githubLink:
					"https://github.com/itsharshitrwt/GreenPulse-HackFrost",
				projectTitle: "GreenPulse",
			},
			{
				isSolo: true,
				teamName: "Ronak Paul",
				description:
					"APIFlux monitors, schedules, tracks API stats, offering dashboards for insights.",
				githubLink: "https://github.com/ronak-pal1/APIFlux",
				projectTitle: "APIFlux",
			},
			{
				isSolo: false,
				teamName: "Born-Devs",
				description:
					"AURA automates vulnerability assessments using OWASP ZAP and Nikto with dashboards.",
				githubLink: "https://github.com/SahilDahekar/aura",
				projectTitle: "AURA",
			},
			{
				isSolo: false,
				teamName: "Elevare",
				description:
					"Automates email summarization, responses, and management using AI for productivity.",
				githubLink: "https://github.com/Rohit-Khairmode/Elevare",
				projectTitle: "Elevare",
			},
			{
				isSolo: false,
				teamName: "Whole lotta fire",
				description:
					"MailZapp simplifies email marketing campaigns with AI and workflow automation.",
				githubLink: "https://github.com/PranavRao18/MailZapp",
				projectTitle: "MailZapp",
			},
		],
		all: [
			{
				projectTitle: "Minime",
				githubLink:
					"https://github.com/VinaySatrasala/MiniMe_Hackfrost2024",
				teamName: "Vinay Kumar ",
				isSolo: true,
			},
			{
				projectTitle: "Tech-killer",
				githubLink: "https://github.com/Tech-killer/kestra-",
				teamName: "4bits",
				isSolo: false,
			},
			{
				projectTitle: "Acciojobs",
				githubLink: "https://github.com/tejas-raskar/AccioJobs-Backend",
				teamName: "AccioSolutions",
				isSolo: false,
			},
			{
				projectTitle: "Aidconnect",
				githubLink: "https://github.com/Yash636261/AidConnect",
				teamName: "AINODES",
				isSolo: false,
			},
			{
				projectTitle: "Financial Insights Tracker",
				githubLink:
					"https://github.com/VINKAS7/Financial_Insights_Tracker",
				teamName: "AlgoNerds",
				isSolo: false,
			},
			{
				projectTitle: "Federated Learning",
				githubLink:
					"https://github.com/Code-Parth/federated-learning-kestra",
				teamName: "Apexia",
				isSolo: false,
			},
			{
				projectTitle: "Alumni Management System",
				githubLink:
					"https://github.com/AmishaSThummar/Alumni-Management-System",
				teamName: "Arambh",
				isSolo: false,
			},
			{
				projectTitle: "Articesnip",
				githubLink: "https://github.com/Arjun11012/articesnip",
				teamName: "Arjun",
				isSolo: true,
			},
			{
				projectTitle: "Stone Paper Scissor",
				githubLink: "https://github.com/Amanc77/stone_Paper_Scissor",
				teamName: "Arjuna",
				isSolo: false,
			},
			{
				projectTitle: "Vulnerax",
				githubLink: "https://github.com/AbhishekTondarkar/VulneraX.git",
				teamName: "Asguardians",
				isSolo: false,
			},
			{
				projectTitle: "Vulnera",
				githubLink: "https://github.com/Donnoguy/vulnera.git",
				teamName: "Asguardians",
				isSolo: false,
			},
			{
				projectTitle: "Water Mate",
				githubLink: "https://github.com/Rohit2698/water-mate",
				teamName: "B3",
				isSolo: false,
			},
			{
				projectTitle: "Quickcode",
				githubLink: "https://github.com/Rahulshinde01/QuickCode",
				teamName: "Cacoon Coders",
				isSolo: false,
			},
			{
				projectTitle: "Stylesync",
				githubLink: "https://github.com/Sadhana-Panthi/StyleSync",
				teamName: "CloseAI",
				isSolo: false,
			},
			{
				projectTitle: "Codename Pixa",
				githubLink: "https://github.com/kedaroo/codename-pixa",
				teamName: "Code Crafters",
				isSolo: false,
			},
			{
				projectTitle: "Hackthefrost",
				githubLink: "https://github.com/uchiha-vivek/HackTheFrost",
				teamName: "Code Crusaders",
				isSolo: false,
			},
			{
				projectTitle: "Careerpulse",
				githubLink: "https://github.com/JJ1006/CareerPulse",
				teamName: "CodeChase Kohli",
				isSolo: false,
			},
			{
				projectTitle: "Quickread",
				githubLink: "https://github.com/KUMARNiru007/QuickRead",
				teamName: "CodeInfinity",
				isSolo: false,
			},
			{
				projectTitle: "Solar Prediction Model",
				githubLink:
					"https://github.com/mudit108-code/SOLAR-PREDICTION-MODEL",
				teamName: "CODERS",
				isSolo: false,
			},
			{
				projectTitle: "Kestrix",
				githubLink: "https://github.com/SyedFahad7/Kestrix",
				teamName: "CodeWave",
				isSolo: false,
			},
			{
				projectTitle: "Ava Portfolio Manager Ai Agent",
				githubLink:
					"https://github.com/kamalbuilds/ava-portfolio-manager-ai-agent",
				teamName: "Defi Builders",
				isSolo: false,
			},
			{
				projectTitle: "Kestrawikiai",
				githubLink: "https://github.com/sbin64/kestraWikiAI",
				teamName: "DEVEX",
				isSolo: false,
			},
			{
				projectTitle: "Productscan",
				githubLink: "https://github.com/mysticalseeker24/ProductScan",
				teamName: "DevTitans",
				isSolo: false,
			},
			{
				projectTitle: "Plan Approval",
				githubLink:
					"https://sm3tech.onrender.com/services/factory-act/plan-approval",
				teamName: "dexnova",
				isSolo: false,
			},
			{
				projectTitle: "Doc0",
				githubLink: "https://github.com/sreehariX/doc0/tree/main",
				teamName: "doc0",
				isSolo: false,
			},
			{
				projectTitle: "Kestra Hackfrost 24",
				githubLink: "https://github.com/swymbnsl/kestra-hackfrost-24",
				teamName: "Doom",
				isSolo: false,
			},
			{
				projectTitle: "Ai Fraud Detection",
				githubLink:
					"https://github.com/leoomkar10/AI-Fraud-Detection-HackFrost",
				teamName: "DoubleVision",
				isSolo: false,
			},
			{
				projectTitle: "Hackfrost Mental Heath",
				githubLink:
					"https://github.com/ShradhaGadia/HackFrost_mental_heath",
				teamName: "Duo_bytes",
				isSolo: false,
			},
			{
				projectTitle: "Health Monitoring And Alert System With Kestra",
				githubLink:
					"https://github.com/harshitt13/Health-Monitoring-and-Alert-System-with-Kestra",
				teamName: "Echolgic",
				isSolo: false,
			},
			{
				projectTitle: "Edukestra",
				githubLink: "https://github.com/Hritikraj8804/EduKestra",
				teamName: "EduKestra",
				isSolo: false,
			},
			{
				projectTitle: "Book Finder Webapp",
				githubLink: "https://github.com/iamsid0908/book-finder-webapp",
				teamName: "F22Raptor",
				isSolo: false,
			},
			{
				projectTitle: "Wellness Navigator",
				githubLink: "https://github.com/ai-naymul/wellness-navigator",
				teamName: "Fork Me",
				isSolo: false,
			},
			{
				projectTitle: "Kestra-Hackfrost",
				githubLink: "https://github.com/shrutimantri/kestra-hackfrost",
				teamName: "Frosty Raiders",
				isSolo: false,
			},
			{
				projectTitle: "Kestrahackathonsubmission",
				githubLink:
					"https://github.com/prattiikk/kestraHackathonSubmission.git",
				teamName: "Glitchez",
				isSolo: false,
			},
			{
				projectTitle: "Customer Feedback Analysis Pipeline",
				githubLink: "https://github.com/Gullak-Gang",
				teamName: "Gullak",
				isSolo: false,
			},
			{
				projectTitle: "Kestra Workflow Trigger",
				githubLink:
					"https://github.com/harshitsingh633/Kestra_WorkFlow_Trigger",
				teamName: "Guts",
				isSolo: false,
			},
			{
				projectTitle: "Flow Forge",
				githubLink: "https://github.com/ChiragAgg5k/flow-forge",
				teamName: "Hacktastic",
				isSolo: false,
			},
			{
				projectTitle: "Carica Deploy",
				githubLink:
					"https://github.com/centaurin/carica-kestra, https://github.com/centaurin/carica, https://github.com/centaurin/carica-ml, https://github.com/centaurin/carica-deploy",
				teamName: "Hoyocykas Blyat",
				isSolo: false,
			},
			{
				projectTitle: "Full Stack Chatapp",
				githubLink:
					"https://github.com/iemafzalhassan/full-stack_chatApp",
				teamName: "Md. Afzal Hassan Ehsani",
				isSolo: true,
			},
			{
				projectTitle: "End-To-End Azure Data Engineering Project",
				githubLink:
					"https://github.com/sanika391/End-to-End-Azure-Data-Engineering-Project--Real-Time-Sales-Analytics-and-Insights-with-Power-BI",
				teamName: "Innovision Squad",
				isSolo: false,
			},
			{
				projectTitle: "Quickdiagnosis",
				githubLink:
					"https://github.com/jamestitus299/quickDiagnosis.git",
				teamName: "JamTeam",
				isSolo: false,
			},
			{
				projectTitle: "Wiseme",
				githubLink: "https://github.com/JiyaGupta-cs/WiseMe",
				teamName: "Jiya Gupta",
				isSolo: true,
			},
			{
				projectTitle: "Workflow Builder",
				githubLink: "https://github.com/Rhythm280/workflow-builder",
				teamName: "JOY",
				isSolo: true,
			},
			{
				projectTitle: "Health Monitoring And Risk Prediction System",
				githubLink:
					"https://github.com/Drishti-1912/Health-Monitoring-and-Risk-Prediction-System",
				teamName: "KD",
				isSolo: false,
			},
			{
				projectTitle: "Frameplay",
				githubLink: "https://github.com/cyrixninja/FramePlay",
				teamName: "LazyHacker",
				isSolo: false,
			},
			{
				projectTitle: "Trashtalkin Server",
				githubLink:
					"https://github.com/TrashTalkin-T-Rex/TrashTalkin-T-Rex, https://github.com/TrashTalkin-T-Rex/TrashTalkin_server",
				teamName: "Legacy",
				isSolo: false,
			},
			{
				projectTitle: "Hospitalbloodhackathon",
				githubLink:
					"https://github.com/Tarun9005/HospitalBloodHackathon",
				teamName: "Lone Wolf Codes",
				isSolo: false,
			},
			{
				projectTitle: "Learningit",
				githubLink: "https://github.com/manavnailwal/LearninGit",
				teamName: "Manav Nailwal",
				isSolo: true,
			},
			{
				projectTitle: "Bug Sync",
				githubLink: "https://github.com/Maheshmali1/bug-sync",
				teamName: "marcellus",
				isSolo: false,
			},
			{
				projectTitle: "Mokshith Nayak",
				githubLink: "https://github.com/Mokshith-Nayak",
				teamName: "MK",
				isSolo: false,
			},
			{
				projectTitle: "MuseSnap",
				githubLink: "https://github.com/yoyounik/MuseSnap/",
				teamName: "Nik07",
				isSolo: false,
			},
			{
				projectTitle: "Cryptopulse",
				githubLink: "https://github.com/DHANUNJAY965/CryptoPulse",
				teamName: "NoNameHackers",
				isSolo: false,
			},
			{
				projectTitle: "Dashstox",
				githubLink: "https://github.com/OmGhadge/Dashstox",
				teamName: "Om ghadge",
				isSolo: true,
			},
			{
				projectTitle: "Trends Tracker",
				githubLink: "https://github.com/momo-shogun/Trends-Tracker",
				teamName: "ONI",
				isSolo: false,
			},
			{
				projectTitle: "Cygree",
				githubLink: "https://github.com/xonoxc/cyGree",
				teamName: "Onyx",
				isSolo: false,
			},
			{
				projectTitle: "Electric Route Planning",
				githubLink:
					"https://github.com/Varadargit/Electric-Route-Planning-",
				teamName: "Penpencil",
				isSolo: false,
			},
			{
				projectTitle: "Sap Stocks Hf",
				githubLink: "https://github.com/AaryanPalve5/SAP-Stocks-HF",
				teamName: "PITH",
				isSolo: false,
			},
			{
				projectTitle: "Cryptopulse",
				githubLink: "https://github.com/DHANUNJAY965/CryptoPulse",
				teamName: "Pro noobs",
				isSolo: false,
			},
			{
				projectTitle: "Kestra Hackfrost",
				githubLink: "https://github.com/PekaVengers/kestra-hackfrost",
				teamName: "Republican Party",
				isSolo: false,
			},
			{
				projectTitle: "Hackfrost",
				githubLink: "https://github.com/TheBeast017/Hackfrost",
				teamName: "ROUTE NO 1",
				isSolo: false,
			},
			{
				projectTitle: "Dms",
				githubLink: "https://github.com/msVivekRanjan/DMS",
				teamName: "SafeCode",
				isSolo: false,
			},
			{
				projectTitle: "Sekiato",
				githubLink: "https://github.com/sumeet-darekar/sekiato",
				teamName: "Sekiato ",
				isSolo: false,
			},
			{
				projectTitle: "Apilux",
				githubLink: "https://github.com/prnvtripathi/apilux",
				teamName: "Serendipity",
				isSolo: false,
			},
			{
				projectTitle: "Image Version Control",
				githubLink:
					"https://github.com/Rohit10701/image-version-control",
				teamName: "Shadow",
				isSolo: false,
			},
			{
				projectTitle: "Image Version Control",
				githubLink:
					"https://drive.google.com/drive/folders/1l1xSgqO_BT5GvUmKLEL9e0bwFkZK3BXm?usp=sharing",
				teamName: "shubhangi",
				isSolo: true,
			},
			{
				projectTitle: "Skillscope",
				githubLink: "https://github.com/bradenkirkpatrick/skillscope",
				teamName: "SkillScope",
				isSolo: false,
			},
			{
				projectTitle: "Greenpulse Hackfrost",
				githubLink:
					"https://github.com/itsharshitrwt/GreenPulse-HackFrost",
				teamName: "Harshit Rawat",
				isSolo: true,
			},
			{
				projectTitle: "Apiflux",
				githubLink: "https://github.com/ronak-pal1/APIFlux",
				teamName: "Ronak Paul",
				isSolo: true,
			},
			{
				projectTitle: "Hackfrost",
				githubLink: "https://github.com/Aman1919/hackfrost",
				teamName: "Aman singh",
				isSolo: true,
			},
			{
				projectTitle: "Kestra Project",
				githubLink: "https://github.com/v0ice-04/kestraproject/",
				teamName: "Aryan Thakur",
				isSolo: true,
			},
			{
				projectTitle: "Hack",
				githubLink: "https://github.com/karthiknadar1204/hack_git",
				teamName: "karthik nadar",
				isSolo: true,
			},
			{
				projectTitle: "Sketchmate",
				githubLink: "https://github.com/Iamalok007/SketchMate.git",
				teamName: "ALOK KUMAR YADAV",
				isSolo: true,
			},
			{
				projectTitle: "Kestra Scraper",
				githubLink: "https://github.com/YadavAkhileshh/Kestra_Scraper",
				teamName: "Akhilesh Yadav",
				isSolo: true,
			},
			{
				projectTitle: "Ecostep",
				githubLink:
					"https://github.com/DPRASAD-dp/EcoStep_Carbon-Awareness-Made-Easy/tree/main/EcoStep",
				teamName: "KAVALI DURGA PRASAD",
				isSolo: true,
			},
			{
				projectTitle: "Hackfrost Dashboard",
				githubLink:
					"https://github.com/Patelmedhansh/hackfrost-dashboard",
				teamName: "Medhansh Patel",
				isSolo: true,
			},
			{
				projectTitle: "Yourwatcher",
				githubLink: "https://github.com/jashandeep31/yourwatcher",
				teamName: "Jashandeep Singh",
				isSolo: true,
			},
			{
				projectTitle: "Health Synth",
				githubLink: "https://github.com/rishavmehra/health-synth",
				teamName: "Rishav Mehra",
				isSolo: true,
			},
			{
				projectTitle: "User Authentication System Using Kestra",
				githubLink:
					"https://github.com/ehte-s/User-Authentication-System-Using-Kestra-And-AWS-S3",
				teamName: "Md Ehtesham Hussain",
				isSolo: true,
			},
			{
				projectTitle: "Calcify N",
				githubLink: "https://github.com/Mohit2005123/calcify-n",
				teamName: "Mohit Mongia",
				isSolo: true,
			},
			{
				projectTitle: "Hack4Change",
				githubLink: "https://github.com/vimalsaraswat/hack4change",
				teamName: "Vimal Saraswat",
				isSolo: true,
			},
			{
				projectTitle: "Chat With Website Ytvideo",
				githubLink:
					"https://github.com/dipanshu18/chat_with_website_ytVideo",
				teamName: "Dipanshu Torawane",
				isSolo: true,
			},
			{
				projectTitle: "Kestra Cis Ami",
				githubLink: "https://github.com/rahulsurwade08/kestra-cis-ami",
				teamName: "Rahul Surwade",
				isSolo: true,
			},
			{
				projectTitle: "Transfo Erm",
				githubLink: "https://github.com/codewithmirza/Transfo-erm",
				teamName: "Mirza Anwaarullah Baig",
				isSolo: true,
			},
			{
				projectTitle: "Xresume Ai",
				githubLink: "https://github.com/Suraj-kumar00/xresume-ai",
				teamName: "Suraj",
				isSolo: true,
			},
			{
				projectTitle: "Linear Regression Sales Prediction App",
				githubLink:
					"https://github.com/sigmaharsh/Linear-regression-sales-prediction-app.git",
				teamName: "Harsh Gupta",
				isSolo: true,
			},
			{
				projectTitle: "Hackfrost Proj",
				githubLink: "https://github.com/Deep5Varshney/HackFrost_proj",
				teamName: "Lakshay Varshney",
				isSolo: true,
			},
			{
				projectTitle: "Expensegraphica Kestra Integration",
				githubLink:
					"https://github.com/MilanPatel28/ExpenseGraphica_Kestra_Integration",
				teamName: "Milan Patel",
				isSolo: true,
			},
			{
				projectTitle: "Auto Backup Service",
				githubLink: "https://github.com/anxbt/auto-backup-service",
				teamName: "Anubrat Sahoo",
				isSolo: true,
			},
			{
				projectTitle: "Appointment Scheduler",
				githubLink: "https://github.com/rash-27/appointment-scheduler",
				teamName: "Rashmik",
				isSolo: true,
			},
			{
				projectTitle: "Kestra Auto Heal",
				githubLink:
					"https://github.com/satti-hari-krishna-reddy/kestra-auto-heal",
				teamName: "Hari Krishna",
				isSolo: true,
			},
			{
				projectTitle: "Smart Expiry",
				githubLink: "https://github.com/Mohiit70/smart-expiry",
				teamName: "Mohit Bisht",
				isSolo: true,
			},
			{
				projectTitle: "Kestra Discordbot",
				githubLink: "https://github.com/deveshpandee/kestra_discordBot",
				teamName: "Devesh Kumar",
				isSolo: true,
			},
			{
				projectTitle: "Winterhack Kestra",
				githubLink:
					"https://github.com/yashsinghhh/WinterHack-Kestra.git",
				teamName: "Yash Singh",
				isSolo: true,
			},
			{
				projectTitle: "Zyon Kestra",
				githubLink: "https://github.com/Karthik73965/Zyon-kestra",
				teamName: "Karthikeya jidagam",
				isSolo: true,
			},
			{
				projectTitle: "Virtual Wear",
				githubLink: "https://github.com/anshshori2002/Virtual-Wear",
				teamName: "Ansh Shori",
				isSolo: true,
			},
			{
				projectTitle: "Medicalalert",
				githubLink: "https://github.com/Saahiti402/MedicalAlert.git",
				teamName: "K S Saahiti",
				isSolo: true,
			},
			{
				projectTitle: "Other Side",
				githubLink: "https://github.com/manojna191/Other-Side",
				teamName: "Manojna Vinjamuri",
				isSolo: true,
			},
			{
				projectTitle: "Backyard Scientist App",
				githubLink:
					"https://github.com/krishdharwal/BackYard-Scientist-app.git",
				teamName: "Solo Dusty Dragon ",
				isSolo: false,
			},
			{
				projectTitle: "Hackathon Marvelkestra",
				githubLink:
					"https://github.com/Aditya-NV-06/Hackathon_MarvelKestra",
				teamName: "Aditya N V",
				isSolo: true,
			},
			{
				projectTitle: "Hackfrost Project",
				githubLink:
					"https://github.com/Sheikh-Abdul-Wahid/HackFrost-Hackathon-Project/tree/main/HackFrost_Project",
				teamName: "Sheikh Abdul Wahid",
				isSolo: true,
			},
			{
				projectTitle: "Hackfrost Winter Hackathon 2024",
				githubLink:
					"https://github.com/gitancor/HackFrost-winter-hackathon-2024",
				teamName: "Soumodip Mondal",
				isSolo: true,
			},
			{
				projectTitle: "Portfolio Generator",
				githubLink:
					"https://github.com/srisubaramb/portfolio_generator",
				teamName: "srisubaramb",
				isSolo: true,
			},
			{
				projectTitle: "Hackfrost",
				githubLink: "https://github.com/ZealExorcist/HackFrost",
				teamName: "Strawhats",
				isSolo: false,
			},
			{
				projectTitle: "Special Letter",
				githubLink: "https://github.com/horodylova/special-letter",
				teamName: "Svitlana Horodylova",
				isSolo: true,
			},
			{
				projectTitle: "Collaborative Iq",
				githubLink:
					"https://github.com/anandcharukesan/Collaborative-IQ.git",
				teamName: "SyntaxError404",
				isSolo: false,
			},
			{
				projectTitle: "Aura",
				githubLink: "https://github.com/SahilDahekar/aura",
				teamName: "Born Devs",
				isSolo: false,
			},
			{
				projectTitle: "Elevare",
				githubLink: "https://github.com/Rohit-Khairmode/Elevare",
				teamName: "Elevare",
				isSolo: false,
			},
			{
				projectTitle: "Web3 Problem Statement 1",
				githubLink:
					"https://github.com/Akash1912-hub/web3-problem-statement-1",
				teamName: "GHASA",
				isSolo: false,
			},
			{
				projectTitle: "Team Gryphs",
				githubLink: "https://github.com/HarishSiva05/Team-Gryphs.git",
				teamName: "Gryphs ",
				isSolo: false,
			},
			{
				projectTitle: "Chinhavaarta",
				githubLink: "https://github.com/hahaanisha/chinhavaarta",
				teamName: "INSPIRE",
				isSolo: false,
			},
			{
				projectTitle: "Grocery-Genius",
				githubLink: "https://github.com/Ch-khushi/Grocery-Genius",
				teamName: "coder",
				isSolo: false,
			},
			{
				projectTitle: "Mailzapp",
				githubLink: "https://github.com/PranavRao18/MailZapp",
				teamName: "Whole lotta fire",
				isSolo: false,
			},
			{
				projectTitle: "Rejectedly Yours",
				githubLink:
					"https://github.com/ManobhavSachan/rejectedly-yours",
				teamName: "Winner",
				isSolo: false,
			},
			{
				projectTitle: "Recyclify",
				githubLink: "https://github.com/PritBlitz/Recyclify",
				teamName: "XCell",
				isSolo: false,
			},
			{
				projectTitle: "Learnify",
				githubLink: "https://github.com/axxyushh/learnify",
				teamName: "xmastery",
				isSolo: false,
			},
			{
				projectTitle: "Hackfrost_2024",
				githubLink: "https://github.com/dta1tin22/hackfrost_2024",
				teamName: "Yaplesswinmore",
				isSolo: false,
			},
		],
	},
	googleCalendarLink:
		"https://calendar.google.com/calendar/u/0?cid=Y18zMDkwNGI0NzdhOTVmNzU5MjRjYjI1ZDdhMjk1NDY5NzlmNDk3OWRkMzliNDEwMTlhYzViMjJlNzZmYTE2MDNkQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20",
};

export default DATA;
