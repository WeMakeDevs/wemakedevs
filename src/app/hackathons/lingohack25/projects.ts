const topProjects = [
	{
		teamName: "Crazzy",
		projectTitle: "ReadyIndia AI",
		description:
			"ReadyIndia AI is an AI-powered disaster alert platform that aggregates real-time data from USGS, GDACS, INCOIS, and IMD, working on a ML model for the alerts due to time constraint used these existing data sources, translating complex alerts into simple safety instructions in 11 languages using Lingo.dev. It features real-time crowd density monitoring to prevent stampedes, an emergency panic button for community reporting, and safe route optimization during disasters.Also we have an AI alert explainer using gemeni api key to help users if in any problem not know what to do. Built with React frontend and Node.js/Express backend with MongoDB, the platform is fully mobile-responsive and deployed on Vercel and Railway. The system democratizes disaster preparedness by breaking language barriers and ensuring every Indian has instant access to life-saving information. ReadyIndia AI transforms how India responds to disasters through technology, community engagement, and multilingual accessibility powered by lingo.",
		githubLink: "https://github.com/Shogun05/ReadyIndiaAI",
		youtubeEmbed: "https://www.youtube.com/embed/7NroIEwlvuE",
	},
	{
		teamName: "Akhilesh Yadav",
		projectTitle: "BolAI",
		description:
			"BolAI is a Cultural AI Intelligence Platform that solves the problem of culturally blind AI responses. Instead of giving generic Silicon Valley advice to Mumbai startups, BolAI understands local business contexts across 7+ Indian languages. When you ask about startup funding, it mentions Crawford Market partnerships and local angel investors not just generic VC advice. Built with Google Gemini 2.0 Flash and Lingo Cultural API, it provides region-specific business intelligence that understands Mumbai markets differently from Chennai IT corridors or Pune startup ecosystems.",
		githubLink: "https://github.com/YadavAkhileshh/BolAI",
		youtubeEmbed: "https://www.youtube.com/embed/LpwbK7YZ9gA",
	},
	{
		teamName: "Dedsec",
		projectTitle: "News Sphere",
		description:
			"News Sphere is a newsletter platform that helps users send personalized newsletters in multiple languages to contacts around the world.\\n\\nUsers create campaigns by choosing topics and RSS feeds. The system automatically scrapes articles from these feeds, uses AI to process and format the content, then translates it into each contact's preferred language.\\n\\nThe frontend lets users manage their contact list, create campaigns, schedule automatic sends, and view analytics like open rates and click rates.\\n\\nThe backend handles content scraping, AI processing, translation, and email sending in the background using a job queue system.\\n\\nNewsletters are automatically translated to match each contact's language based on their country, supporting English, Hindi, Spanish, French, German, and more.",
		githubLink: "https://github.com/Ayan-M-Dev/news-sphere",
		youtubeEmbed: "https://www.youtube.com/embed/RHyBFnmtJhs",
	},
	{
		teamName: "Punay Kukreja",
		projectTitle: "MetaLingo",
		description:
			"MetaLingo is a lightweight yet powerful Visual Studio Code extension designed to make codebases multilingual and globally accessible. With seamless integration of the Lingo.dev SDK, MetaLingo enables developers to instantly translate selected text or entire file comments into any language directly inside their editor.",
		githubLink: "https://github.com/Punay04/metalingo",
		youtubeEmbed: "https://www.youtube.com/embed/495mWG9V1MY",
	},
	{
		teamName: "Lunarae",
		projectTitle: "DevDocs Global",
		description:
			"AI-powered multilingual documentation translation system with web dashboard, CLI tool, and GitHub Actions automation.\\n\\nTranslate your documentation into 6+ languages automatically using Lingo.dev SDK powered by GPT-4.",
		githubLink: "https://github.com/Patelmedhansh/DevDocs-Global",
		youtubeEmbed: "https://www.youtube.com/embed/lPL2nq472YQ",
	},
	{
		teamName: "Aymaan Pathan",
		projectTitle: "DevBuddy",
		description:
			"- Real-time collaborative code editor where multiple developers work simultaneously\\n- Automatic detection and translation of code comments\\n- Each developer sees comments in their preferred language\\n- Code syntax remains in English (industry standard)",
		githubLink: "https://github.com/AymaanPathan/dev-buddy",
		youtubeEmbed: "https://www.youtube.com/embed/NjHRCgExP8k",
	},
	{
		teamName: "Team Semicolon",
		projectTitle: "Multi Lingual Medicine Prescription App",
		description: "Multi Lingual Medicine Prescription App",
		githubLink:
			"https://github.com/Mohammedvaraliya/Multi-Lingual-Prescription-App",
		youtubeEmbed: "https://www.youtube.com/embed/LhJYtkcuNIw",
	},
	{
		teamName: "Kartik Labhshetwar",
		projectTitle: "ReadMeLingo",
		description:
			"Translate GitHub repository documentation into 40+ languages using Lingo.dev. Fast batch translation CLI tool for README, CONTRIBUTING, and docs.",
		githubLink: "https://github.com/KartikLabhshetwar/ReadMeLingo",
		youtubeEmbed: "https://www.youtube.com/embed/wp3Epvg1MFM",
	},
	{
		teamName: "Aryan Raj",
		projectTitle: "LingoFlow",
		description:
			"LingoFlow is an AI-powered multilingual platform designed to break language barriers across video, documents, and chat. It enables users to transcribe YouTube videos, translate content into 30+ languages, and even generate AI-dubbed audio with natural voices. The platform also offers a real-time multilingual chat assistant, ideal for interview preparation and cross-language communication. With secure PDF/DOCX translation, seamless language switching, and an intuitive UI, LingoFlow delivers a complete global communication toolkit. Built using TypeScript, React, Express, and PostgreSQL, it combines powerful AI capabilities with a smooth, user-friendly web experience.",
		githubLink: "https://github.com/aryanhash/LINGOFLOW",
		youtubeEmbed: "https://www.youtube.com/embed/KcqahOVwGfU",
	},
];

const winningProjects = [
	{
		teamName: "Honey Paptan",
		projectTitle: "Podcastify",
		description:
			"Podcastify is a modern web application that transforms blog posts into multilingual podcast audio files. Simply paste a blog URL, and the application will scrape the content, generate chapters, translate them into multiple languages, and create high-quality audio files for each language. Not only that you can experience the entire website in a language that's more comfortable to you.",
		githubLink: "https://github.com/HoneyPaptan/podcastify",
		youtubeEmbed: "https://www.youtube.com/embed/vhfweyoZyM0",
		prize: "1st Prize",
	},
	{
		teamName: "Ariya P",
		projectTitle: "SignLingua",
		description:
			"SignLingua is an AI-powered accessibility tool that converts hand gestures into spoken and translated sentences in real time. Using MediaPipe hand tracking, custom gesture classification, sentence intelligence, and multilingual translation, SignLingua enables individuals with speech or hearing disabilities to communicate instantly and naturally. The system detects gestures like Hello, Yes, No, Help, Good, You, OK, converts them into meaningful English sentences, speaks them aloud, and then translates them into 6+ global languages (Hindi, Tamil, Telugu, Spanish, French, English). By combining computer vision + AI translation, SignLingua demonstrates how multilingual technology can make digital communication inclusive, accessible, and global from day one. i have referred chatgpt for the things i didnt know, how to do.",
		githubLink: "https://github.com/Ariya-rithvik/lingua/",
		youtubeEmbed: "https://www.youtube.com/embed/CcjkbTz6EIc",
		prize: "2nd Prize",
	},
	{
		teamName: "Rahul Joshi",
		projectTitle: "GlobSEO",
		description:
			"GlobSEO is a comprehensive global SEO optimization tool that automates multilingual website optimization. It scrapes website metadata, translates it to 60+ languages using Lingo.dev CLI, and provides AI-powered SEO scoring with Google Gemini. The modern React frontend features a dark theme and intuitive interface, while the Node.js backend includes Redis caching, rate limiting, and production-ready optimizations. This innovative solution addresses the complex challenge of global SEO by delivering professional-grade multilingual optimization in minutes, making international market expansion accessible to businesses and content creators worldwide. I have taken the help of AI in making this project.",
		githubLink: "https://github.com/crypticsaiyan/GlobSEO",
		youtubeEmbed: "https://www.youtube.com/embed/aqUFDf8q-xw",
		prize: "3rd Prize",
	},
];

const otherProjects = [
	{
		teamName: "Sachin Myadam ",
		githubLink: "https://github.com/SachinMyadam/Globalfolio",
		projectTitle: "Globalfolio",
	},
	{
		teamName: "Gokul Kalla",
		githubLink: "https://github.com/GokulK1999/studylingo-hackathon",
		projectTitle: "StudyLingo",
	},
	{
		teamName: "David Joemon",
		githubLink: "https://github.com/d-j7code/Buildit",
		projectTitle: "Buildit",
	},
	{
		teamName: "Sai ram",
		githubLink: "https://github.com/PrathameshTawar/lingo-dev.git",
		projectTitle: "Ai medical chatbot with multilingual support",
	},
	{
		teamName: "Code_Unions",
		githubLink:
			"https://github.com/Harsh8818198/Misunderstanding_Engine.git",
		projectTitle: "Misunderstanding Engine",
	},
	{
		teamName: "ADK researchers",
		githubLink: "https://github.com/DevanshShukla1/beatflow-ai",
		projectTitle:
			"An AI-driven NLP music generator with multilingual capabilities",
	},
	{
		teamName: "Umer Jahangir",
		githubLink: "https://github.com/Umer-Jahangir/DevConnect",
		projectTitle: "DevConnect Global",
	},
	{
		teamName: "SOLO",
		githubLink: "https://github.com/Mohammed-Thaha/multilingual-dev-kit",
		projectTitle: "LingoCard",
	},
	{
		teamName: "shubham oulkar",
		githubLink: "https://github.com/ShubhamOulkar/lingo.video",
		projectTitle: "lingo.video",
	},
	{
		teamName: "Archana Gangadhar",
		githubLink: "https://github.com/archu270292/travel-buddy",
		projectTitle: "Travel Buddy",
	},
	{
		teamName: "Kavya Trivedi",
		githubLink: "https://github.com/trivedikavya/LingoDocs-OS",
		projectTitle: "LingoDoc OS",
	},
	{
		teamName: "Soumabrata Ghosh",
		githubLink: "https://github.com/Souma061/LinguaChat",
		projectTitle: "LinguaChat",
	},
	{
		teamName: "Maulik Ranadive (Lone Wolfer)",
		githubLink: "https://github.com/Maulik176/LingoHack25-GlobalOnboard",
		projectTitle: "GlobalOnboard",
	},
	{
		teamName: "kartik",
		githubLink:
			"https://github.com/kartik0827/Healthcare-appointment-system",
		projectTitle: "Healthcare Appointment System",
	},
	{
		teamName: "Pitambar Yadav",
		githubLink: "https://github.com/darkweb-alt/studnet-platform",
		projectTitle: "Student Platform",
	},
	{
		teamName: "alphaCoders ",
		githubLink: "https://github.com/ThakurNishant2004/LinguaConnect.git",
		projectTitle: "LinguaConnect",
	},
	{
		teamName: "Omkar Kardel",
		githubLink: "https://github.com/omkarkardel/ITWale-Notes.git",
		projectTitle: "The ITWaleNotes",
	},
	{
		teamName: "Sahil Prasad",
		githubLink: "https://github.com/sailorworks/mnemonicsAi",
		projectTitle: "mnemonicsai",
	},
	{
		teamName: "Anurag sharma ",
		githubLink: "https://github.com/Anuragsharma15-dell/transify-global",
		projectTitle:
			"A website that can convert any website text to different languages ",
	},
	{
		teamName: "2BitCrew",
		githubLink: "https://github.com/Haripritamreddy/transly",
		projectTitle: "Transly",
	},
	{
		teamName: "Agung Sidharta",
		githubLink: "https://github.com/Gungz/lingo-chrome-extension",
		projectTitle: "Lingo Chrome Extension",
	},
	{
		teamName: "SOLO",
		githubLink: "https://github.com/itza2k/lingodev",
		projectTitle: "ExplainDeck",
	},
	{
		teamName: "VIVEK DUBEY ",
		githubLink: "https://github.com/dubevivekk/Pro--AI--Learning-Platformm",
		projectTitle: "AI LEARNING POWERED PLATFORM ",
	},
	{
		teamName: "TechAssassins ",
		githubLink: "https://github.com/SyncWithRaj/Live-Translator",
		projectTitle: "Live Translator AI",
	},
	{
		teamName: "Akshay Yadav",
		githubLink: "https://github.com/akshaywritescode/RangoliUI-Docs",
		projectTitle: "Rangoli UI",
	},
	{
		teamName: "Tatva",
		githubLink: "https://github.com/asrithtanniru/lingosite",
		projectTitle: "LingoSite",
	},
	{
		teamName: "Bikash Sahu",
		githubLink: "https://github.com/bikash1376/lingotools",
		projectTitle: "LingoTools",
	},
	{
		teamName: "marcus_coder",
		githubLink: "https://github.com/Kaushalendra-Marcus/businessgrsp",
		projectTitle: "GRS Worker Business",
	},
	{
		teamName: "SOLO",
		githubLink: "https://github.com/FarhanAlstonair/NALStatic",
		projectTitle: "NAL India",
	},
	{
		teamName: "Jaya Dubey",
		githubLink: "https://github.com/jaya6400/hdye-shop",
		projectTitle: "HDYE Shop",
	},
	{
		teamName: "Innovastic Wizards",
		githubLink: "https://github.com/AP952005/Legalease/",
		projectTitle: "LegalEase AI",
	},
	{
		teamName: "Gaurav Kumar",
		githubLink: "https://github.com/krgaurav7/lingo.dev-hackathon",
		projectTitle: "Lingo News",
	},
	{
		teamName: "Wemade",
		githubLink: "https://github.com/NandaGunasri/polytranslate",
		projectTitle: "PolyTranslate",
	},
	{
		teamName: "Kramer_kodes",
		githubLink: "https://github.com/UmaDevi016/health-assistant ",
		projectTitle: "Health Assistant",
	},
	{
		teamName: "CodeStrix ",
		githubLink: "https://github.com/Satyarth-Sahu17/AstraaPath",
		projectTitle: "AstraPath",
	},
	{
		teamName: "Solve X",
		githubLink: "https://github.com/Zahemass/lingo-local-lens.git",
		projectTitle: "Local Lens",
	},
	{
		teamName: "Asha Niwale",
		githubLink: "https://github.com/ashaniwale-codestack/Hackthon",
		projectTitle: "Product Scanly",
	},
	{
		teamName: "SK Faizanuddin",
		githubLink: "https://github.com/SKfaizan-786/BabelBridge",
		projectTitle: "BabelBridge",
	},
	{
		teamName: "Akash Birajdar",
		githubLink: "https://github.com/Akashdb5/DocSimplify",
		projectTitle: "DocSimplify",
	},
	{
		teamName: "DURGA PRASAD KAVALI",
		githubLink: "https://github.com/DPRASAD-dp/-WhistleSafe",
		projectTitle: "WhistleSafe",
	},
	{
		teamName: "Akshat Gupta",
		githubLink: "https://github.com/aksht27/lingodev-assistant",
		projectTitle: "LingoDev Assistant",
	},
	{
		teamName: "Team undefined",
		githubLink: "https://github.com/kaushal1717/vibe-helper",
		projectTitle: "Cursorize",
	},
	{
		teamName: "Rajdeep Singh ",
		githubLink: "https://github.com/RajdeepKushwaha5/globesos",
		projectTitle: "GlobeSoS",
	},
	{
		teamName: "Kunal Darekar",
		githubLink: "https://github.com/Kunal-Darekar/LingoBridge",
		projectTitle: "LingoBridge",
	},
	{
		teamName: "Karthik Ajay",
		githubLink: "https://github.com/karthikajay04/Translator-web-extension",
		projectTitle: "Lingo Multitool",
	},
	{
		teamName: "Purvaa Ajay Pednekar",
		githubLink: "https://github.com/purvaapednekar/My-Portfolio",
		projectTitle: "As I am a beginner and this",
	},
	{
		teamName: "Arpit Singh ( Wrong YT link update)",
		githubLink: "https://github.com/TSM-ArpitSG/WeMakeDevsLingo",
		projectTitle: "Lingo Travel Guide",
	},
	{
		teamName: "Rajniesh kumar",
		githubLink: "https://github.com/rznies/lingoSir",
		projectTitle: "Global Meme Translator",
	},
	{
		teamName: "Bishal Jena",
		githubLink: "https://github.com/BishalJena/ARSP-v1",
		projectTitle: "ARSP",
	},
	{
		teamName: "Never Lucky Protocol (NLP)",
		githubLink: "https://github.com/radixanuj/multilingual-incident-room",
		projectTitle: "Multilingual Incident Room",
	},
	{
		teamName: "AWNEET KUMAR",
		githubLink: "https://github.com/awneet23/Lingo-Hack",
		projectTitle: "Lingo Hack",
	},
	{
		teamName: "Pritam awatade ",
		githubLink: "https://github.com/Pritamawatade/lingo-hackthon",
		projectTitle: "Lingocare",
	},
	{
		teamName: "Aditya Kumar",
		githubLink: "https://github.com/ad1tyayadav/anuvaad",
		projectTitle: "Anuvaad",
	},
	{
		teamName: "Nishchey Manuja",
		githubLink: "https://github.com/Nishchey27/polysearch.git",
		projectTitle: "PolySearch",
	},
];

export { topProjects, winningProjects, otherProjects };
