const winningProjects = [
	{
		teamName: "Rahul Joshi",
		projectTitle: "InFoundry",
		description:
			"InFoundry is a self-adaptive Cloud Architect + SRE agent that inspects codebases and telemetry, proposes deployable IaC/CI changes, runs safe test deployments, and iteratively optimizes cost, latency, and reliability with human-in-the-loop approvals.",
		githubLink: "https://github.com/crypticsaiyan/infoundry",
		youtubeEmbed: "https://www.youtube.com/embed/FSsgkSt77LM",
		prize: "CodeRabbit",
	},
	{
		teamName: "Jitendra Bhati, Swarnendu Bhandari, Ankit Dutta, Nabarup Ghosh",
		projectTitle: "InfuseAI",
		description:
			"InfuseAI is a production-ready platform for building and deploying custom AI applications powered by your own knowledge bases. It combines a powerful RAG (Retrieval-Augmented Generation) pipeline with an intuitive management dashboard and a developer-friendly SDK for seamless integration.",
		githubLink: "https://github.com/Jeetukgpian/InfuseAI",
		youtubeEmbed: "https://www.youtube.com/embed/wRe3GRd5cYE",
		prize: "Vercel",
	},
	{
		teamName: "ADINATH R",
		projectTitle: "Vriksha AI",
		description:
			"Vriksha AI empowers anyone to build, train, and deploy advanced AI models effortlessly through a visual, node-based orchestration platform powered by Oumi and vLLM. ALL WITH ZERO LINES OF CODE",
		githubLink: "https://github.com/adinath-codes/Vriksha-AI/tree/main",
		youtubeEmbed: "https://www.youtube.com/embed/4DUvrxZDt5E",
		prize: "Oumi",
	},
	{
		teamName: "Shivam Katare",
		projectTitle: "Tria",
		description:
			"Tria is an AI-powered email intelligence tool that automatically sorts, summarizes, and prioritizes your Gmail inbox. Built with Kestra workflows and AI agents, it helps you reclaim your time by showing only what matters",
		githubLink: "https://github.com/Shivam-Katare/tria",
		youtubeEmbed: "https://www.youtube.com/embed/u9mC-yijldk",
		prize: "Kestra",
	},
	{
		teamName: "Joyston Monteiro",
		projectTitle: "Cadara",
		description:
			"Cadara is an interactive, web-based 3D design education platform focused on making CAD learning free and accessible for underprivileged children. It combines real time 3D modeling with AI-driven guidance, interactive tutorials and challenges to build practical skills step by step. By removing cost, hardware, and software barriers, Cadara empowers young learners with equal access to professional 3D design education and future engineering opportunities.",
		githubLink: "https://github.com/Joystonm/cadara",
		youtubeEmbed: "https://www.youtube.com/embed/luWS6nxP9Mg",
		prize: "Cline",
	},
];

const topProjects = [
	{
		teamName: "Team Orbairo",
		projectTitle: "AI Reliability Judge",
		description:
			"AI Reliability Judge is a web app that stress‑tests any AI agent GitHub repo, scores how trustworthy it is, and auto‑opens AI‑generated fix PRs. Users paste a public repo, run realistic end‑to‑end tasks against the agent, and get a 0–100 reliability score plus a breakdown of where it fails (timeouts, crashes, unsafe responses, brittle flows). When issues are detected, the app prepares a focused GitHub pull request with proposed code/config changes so teams can harden their agents before they break in production.",
		githubLink: "https://github.com/priyanshap/ai-reliability-judge",
		youtubeEmbed: "https://www.youtube.com/embed/iCoz4mFXh_A",
	},
	{
		teamName: "Saurav Mukherjee",
		projectTitle: "AI Disaster Response Orchestrator",
		description:
			"AI Disaster Response Orchestrator is an intelligent system designed to assist emergency response teams during disasters by transforming scattered, real-time data into actionable decisions. During disasters, critical information comes from many sources like social media, alerts, and sensor data. This data is scattered, slow to analyze, and overwhelming for responders. The platform ingests disaster-related information from multiple sources, summarizes the situation using AI agents, and automatically prioritizes response actions such as rescue operations, medical deployment, and logistics coordination. Key Features: AI-driven disaster data summarization, Automated decision-making for emergency response, Real-time crisis dashboard with live updates, Reinforcement learning to improve response strategies over time. Tech Stack: Kestra AI Agent for data summarization and decision workflows, Cline CLI for automation and response script generation, Oumi for reinforcement learning fine-tuning, Next.js frontend deployed on Vercel, CodeRabbit for automated PR reviews and code quality.",
		githubLink: "https://github.com/SauravMukherjee44/AI-Disaster-Response-Orchestrator",
		youtubeEmbed: "https://www.youtube.com/embed/CCWMAjFZs2M",
	},
	{
		teamName: "TriplAI",
		projectTitle: "ResumeMatchAI",
		description:
			"ResumeMatchAI - An AI multi-agent system that rewrites resumes for specific roles, scores ATS compatibility, generates cover letters, explains weaknesses, and recommends projects — helping users apply smarter, not blindly.",
		githubLink: "https://github.com/aryanhash/ResumeMatch",
		youtubeEmbed: "https://www.youtube.com/embed/udZpn9X54ZM",
	},
	{
		teamName: "AI-4ce",
		projectTitle: "AI-Driven CI/CD Failure Analysis",
		description:
			"This project is an AI-driven CI/CD failure analysis and remediation system designed to reduce the time engineers spend debugging broken pipelines. When a GitHub Actions workflow fails, the failure logs are securely sent to a locally running Kestra instance via webhooks. Kestra orchestrates the event flow, captures and structures the CI/CD metadata, and forwards the logs to Oumi, a FastAPI-based AI service. Oumi uses a language model (SmolLM2-135M-Instruct) fine-tuned on real CI/CD failure logs from a Kaggle dataset to analyze the errors, identify likely root causes, and generate actionable fix suggestions. The analysis is surfaced through a dashboard and can be used to assist developers in correcting code, raising pull requests, and triggering automated reviews via CodeRabbit. By combining workflow orchestration, AI-powered log understanding, and automated review tooling, the system helps teams debug CI/CD failures faster, maintain developer flow, and improve overall pipeline reliability.",
		githubLink: "https://github.com/Saha-7/DevOps-Guardian-Agent",
		youtubeEmbed: "https://www.youtube.com/embed/q4nwHdKrGRs",
	},
	{
		teamName: "Adnan khan",
		projectTitle: "InfraPilot",
		description:
			"InfraPilot predicts the drifts in kubernetes yaml files or terraform hcl files.",
		githubLink: "https://github.com/RamyaVedi/InfraPilot-Hackathon",
		youtubeEmbed: "https://www.youtube.com/embed/qvdRrBLMmzc",
	},
	{
		teamName: "Rishi Jat",
		projectTitle: "AI DevOps Commander",
		description:
			"AI DevOps Commander is a prototype built to explore how AI can help automate post-deployment decision-making in DevOps. After a deployment, engineers often have to manually inspect logs and metrics under pressure to decide whether to roll back or continue. This project models that workflow using Kestra orchestration and an AI agent that summarizes deployment signals such as error rates and memory usage (simulated for the demo). Based on the summary, the system makes a clear CONTINUE or ROLLBACK decision and records the outcome. A small reinforcement learning loop using Oumi shows how decisions can improve over time, while Cline demonstrates how automated fixes could be scaffolded after failures. A clean Next.js dashboard deployed on Vercel shows the deployment status, AI reasoning, and actions taken. The project is intentionally scoped as a clear, explainable prototype rather than a production system, focusing on realism, clarity, and real DevOps workflows.",
		githubLink: "https://github.com/rishi-jat/ai-devops-commander",
		youtubeEmbed: "https://www.youtube.com/embed/dwzV_YzquRo",
	},
	{
		teamName: "Pavan Kumar Anupoju",
		projectTitle: "AutoAudit",
		description:
			"AutoAudit lets users scan the codebase (or specific files) using Oumi and Vercel AI Gateway Models to identify issues and bugs and with a single click, detected problems can be converted into GitHub issues. AutoAudit also allows automation of github issue assignment like Kestra AI agent intelligently assigns issues to the most suitable contributor based on AI-driven analysis of comments and context. AutoAudit also reviews pull requests by analyzing code diffs, descriptions, and file changes, generating a merge-readiness score and a clear recommendation on whether the PR should be merged using AI analysis.",
		githubLink: "https://github.com/Pavan-personal/AutoAudit",
		youtubeEmbed: "https://www.youtube.com/embed/g33oaVsgBh4",
	},
	{
		teamName: "Sentinel",
		projectTitle: "Sentinel",
		description:
			"Sentinel is an AI-powered autonomous DevOps agent that revolutionizes incident response by combining intelligent monitoring, root cause analysis, and self-healing capabilities. Built with Kestra for workflow orchestration, Groq's Llama 3.3 70B for AI analysis, and Next.js for real-time visualization, Sentinel detects service failures within 5 seconds and autonomously executes recovery workflows without human intervention. Key Features: AI-Driven Analysis using LLMs to provide actionable insights beyond simple Error 500 alerts, Autonomous Self-Healing that automatically restarts failed services within ~65 seconds of detection, Cost-Optimized Intelligence where AI only runs when failures occur, reducing API costs by 99%, Real-Time Dashboard with Next.js 14 dashboard with live metrics, incident tracking, and AI reasoning panels, Developer CLI (Cline) - Production-ready terminal tool built with Cline's autonomous coding assistance. Tech Stack: Kestra (orchestration), Groq API (Llama 3.3 70B), Next.js 14, Node.js, Docker, PostgreSQL, Cline (autonomous development).",
		githubLink: "",
		youtubeEmbed: "https://www.youtube.com/embed/VlqGomVrFzQ",
	},
	{
		teamName: "Aman mogal",
		projectTitle: "Vero - Test Infrastructure Copilot",
		description:
			"Vero turns any GitHub repo into production-ready test infrastructure in 5-7 minutes. Paste a repo → Vero generates: pytest test suites, fixtures & conftest.py, pytest.ini config, GitHub Actions CI workflows, requirements-test.txt, Opens a single PR with everything. No manual setup. Tests that actually run. The Problem: AI test generation hallucinates 70-90% of the time. Tests reference non-existent functions, break on first run, and require manual cleanup. Vero delivers complete, working test infrastructure that passes 83%+ on first run. How Vero Works (4 Agents): ARCHITECT → Tree-sitter blueprint.json (real functions only), BUILDER → Gemini + File Search → test_*.py + fixtures, VALIDATOR → pytest execution, POLISHER → CI workflows + GitHub PR. Kestra orchestrates. Mem0 learns from failures. Production-grade. Sponsor Integration: Kestra AI Agent summarizes test metrics and decides: re-run, open issue, or mark stable. Vercel: Production Next.js dashboard with SSE live logs + metrics. CodeRabbit: All PRs (generated + internal) reviewed by CodeRabbit.",
		githubLink: "https://github.com/Vero-ai-org/vero",
		youtubeEmbed: "https://www.youtube.com/embed/QCRD_b_xQSE",
	},
	{
		teamName: "Khushal Agarwal",
		projectTitle: "Sento AI",
		description:
			"Sento AI is your automated social media marketing department, built for businesses that lack the time and budget for a dedicated team. The Problem: Creating consistent, high-quality content for Instagram and Facebook is a full-time job that most small business owners can't afford. Our Solution: Sento AI transforms a single text prompt into a complete social media campaign. Our AI agents handle everything: Generate & Post - Creates stunning images and engaging video reels with audio, writes captions, and posts them directly to Instagram and Facebook. Engage Automatically - Intelligently analyzes comments and posts contextual replies, keeping your audience/customers engaged 24/7. Unique Impact: Built this end-to-end automation pipeline by orchestrating powerful AI models like Google's Gemini, Nano Banana, and Veo using Kestra. Sento AI doesn't just generate content it manages your entire social media presence. This empowers entrepreneurs to focus on growing their business, not on mastering content creation. Other platforms may just generate video/image but Sento AI does everything, you just prompt and sit.",
		githubLink: "https://github.com/khushal1512/sento-ai",
		youtubeEmbed: "https://www.youtube.com/embed/AY4DDuCtpeM",
	},
	{
		teamName: "Ayan Gupta",
		projectTitle: "PatchyAI",
		description:
			"PatchyAI is an autonomous GitHub App designed to continuously improve repository security by detecting and fixing known vulnerabilities in dependencies and codebases. Patchy uses Kestra to orchestrate, Cline CLI to fix the vulnerabilities, and Vercel for the web hosting. Patchy can do the following: Scan repositories for known vulnerabilities using trusted vulnerability databases, Summarize findings in a clear, developer-friendly format, Automatically create fix branches and open pull requests with recommended patches, React to follow-up comments to refine or scope fixes. Built for modern DevSecOps workflows, PatchyAI integrates seamlessly into GitHub repositories to reduce security debt while keeping developers in control.",
		githubLink: "https://github.com/xkaper001/patchyai",
		youtubeEmbed: "https://www.youtube.com/embed/std1Ihd9eC8",
	},
];

const otherProjects = [
	{
		teamName: "Aayush Gupta",
		projectTitle: "Anti-deepfake app",
		githubLink: "https://github.com/San1357/Final_Version_Anti_deepfake_Apps",
	},
	{
		teamName: "Yash",
		projectTitle: "Ai agent celebrity workflow",
		githubLink: "https://github.com/yashpal2104/agent-hacks-serverless-ai-agent",
	},
	{
		teamName: "Ketan Singh",
		projectTitle: "SAPOR",
		githubLink: "https://github.com/Ken-1412/Agentic-Ai-Sopar",
	},
	{
		teamName: "Myadam Sachin",
		projectTitle: "GDPR-Zero",
		githubLink: "https://github.com/SachinMyadam/gdpr-zero",
	},
	{
		teamName: "Kunal Kushwaha",
		projectTitle: "Career Advisor Platform",
		githubLink: "https://github.com/Faizan-77/Edu-Nav",
	},
	{
		teamName: "Hasnain Raza",
		projectTitle: "AI StudyMate",
		githubLink: "https://github.com/Hasnain-111/smart-study-agent-dashboard.git",
	},
	{
		teamName: "Sohum Seth",
		projectTitle: "DevPilot",
		githubLink: "https://github.com/sohumseth703/devpilot-frontend",
	},
	{
		teamName: "Okeoma",
		projectTitle: "AxiosChat",
		githubLink: "https://github.com/OkeyAmy/axioschat-sensay",
	},
	{
		teamName: "Mohit Jeswani",
		projectTitle: "AgentZero",
		githubLink: "https://github.com/mohitjeswani01/nemesis_ai",
	},
	{
		teamName: "Okeoma Amaobi",
		projectTitle: "Eventbuddy",
		githubLink: "https://github.com/OkeyAmy/Eventbuddy-Sensay",
	},
	{
		teamName: "RITIK VERMA",
		projectTitle: "Universal AutoML Pipeline",
		githubLink: "https://github.com/ritikverma2000/python-kestra-ml-etl",
	},
	{
		teamName: "Ayana Sarkar",
		projectTitle: "LogicLens",
		githubLink: "https://github.com/ghosthouse7/logic-lens",
	},
	{
		teamName: "Shivansh Bagga",
		projectTitle: "AI Log Doctor",
		githubLink: "https://github.com/baggashivansh/ai-log-doctor",
	},
	{
		teamName: "Chandan Kumar Sah Teli",
		projectTitle: "ThePhoenix-Agent",
		githubLink: "https://github.com/ChandanLabs/ThePhoenix-Agent",
	},
	{
		teamName: "Rohit Kohli",
		projectTitle: "Resume Vs Job description analyser",
		githubLink: "https://github.com/rohitkoh123/resume-jd-analyser",
	},
	{
		teamName: "Shubham Sharma",
		projectTitle: "Cline-devops",
		githubLink: "https://github.com/shubhamsharma-10/Cline-devops",
	},
	{
		teamName: "Shubham Sharma",
		projectTitle: "CodeNarrator",
		githubLink: "https://github.com/shubhamsharma-10/CodeNarrator",
	},
	{
		teamName: "Kundan Sahu",
		projectTitle: "Edge-Netic",
		githubLink: "https://github.com/Kundan730/Edge-Netic",
	},
	{
		teamName: "Manju Vasanth",
		projectTitle: "AI-Driven Transaction Fraud Detection",
		githubLink: "https://github.com/ManjuVasanth/AI-Driven-Transaction-Fraud-Detection-Risk-Alert-System.git",
	},
	{
		teamName: "Vishnu Varthan",
		projectTitle: "The Autonomous Study Planner Agent",
		githubLink: "https://github.com/Vishnu-Varthan1/aihack",
	},
	{
		teamName: "Kunal Kashyap",
		projectTitle: "sec-agent",
		githubLink: "https://github.com/Kunal1522/sec-agent",
	},
	{
		teamName: "Anuj Mishra",
		projectTitle: "AutoPR CLI",
		githubLink: "https://github.com/anujmishra03/auto-pr-cli",
	},
	{
		teamName: "Ujjwal Singh",
		projectTitle: "error-flow-agent",
		githubLink: "https://github.com/Ujjwal-Singh-20/error-flow-agent",
	},
	{
		teamName: "Chaithanya vishwamitra D A",
		projectTitle: "SHADOWSYNC",
		githubLink: "",
	},
	{
		teamName: "Achyut Dilip Natekar",
		projectTitle: "Distraction Killer AI",
		githubLink: "https://github.com/AceAchyut/distraction-killer-ai#distraction-killer-ai",
	},
	{
		teamName: "Cosmas Mandikonza",
		projectTitle: "SketchMotion",
		githubLink: "https://github.com/CosmasMandikonza/sketchMotion",
	},
	{
		teamName: "Sabuj Ghosh",
		projectTitle: "temp-ide",
		githubLink: "https://github.com/Night3y3/temp-ide",
	},
	{
		teamName: "Sundaram Katare",
		projectTitle: "Planix",
		githubLink: "https://github.com/Sundaram-Katare/study-planner",
	},
	{
		teamName: "Aryan Kapoor",
		projectTitle: "Kaggle-Lab-Bench-Copilot",
		githubLink: "https://github.com/Keninjavelas/Kaggle-Lab-Bench-Copilot",
	},
	{
		teamName: "ANIRUDDHA ADAK",
		projectTitle: "LingoLens",
		githubLink: "https://github.com/aniruddhaadak80/LingoLens",
	},
	{
		teamName: "Esheshwari Kumari",
		projectTitle: "PWOA",
		githubLink: "https://github.com/Esheshwari/PWOA",
	},
	{
		teamName: "Md. Kamran Alam",
		projectTitle: "FinCompliance-AI",
		githubLink: "https://github.com/mdkamranalam/FinCompliance-AI",
	},
	{
		teamName: "Adeyemi Adeniyi Abdul-Raheem",
		projectTitle: "TaskPilot",
		githubLink: "https://github.com/Raheem2010/taskpilot",
	},
	{
		teamName: "Abhinav Gupta",
		projectTitle: "File-hider",
		githubLink: "https://github.com/Abhinavgupta2404/File-hider",
	},
	{
		teamName: "Umer Jahangir",
		projectTitle: "C++ Project Builder",
		githubLink: "https://github.com/Umer-Jahangir/Cpp_Project_Structure_Builder",
	},
	{
		teamName: "Basireddy Anusha",
		projectTitle: "E commerce website",
		githubLink: "https://github.com/anushadev2003/hackathon",
	},
	{
		teamName: "basireddy karthik",
		projectTitle: "E - commerce website",
		githubLink: "https://github.com/kartik480/Hackathon-1",
	},
	{
		teamName: "Medha S Harish",
		projectTitle: "MSN Loan Agent",
		githubLink: "https://github.com/medha0618nair/MSN-loan-agent",
	},
	{
		teamName: "Samyakkumar Jain",
		projectTitle: "Cyber Remediator",
		githubLink: "https://github.com/samyaktempwork-cell/Cyber-Remediator",
	},
	{
		teamName: "Ravindra Bijarniya",
		projectTitle: "AI Code Review Agent",
		githubLink: "https://github.com/Ravindrabijarniya/ai-code-review-agent",
	},
	{
		teamName: "Anurag sharma",
		projectTitle: "AI-Antra",
		githubLink: "https://github.com/Anuragsharma15-dell/AI-Antra",
	},
	{
		teamName: "venkatesh kotoju",
		projectTitle: "PRPilot AI",
		githubLink: "https://github.com/venkateshkotoju/prpilot",
	},
	{
		teamName: "Muhammed Haroon",
		projectTitle: "RedLoop",
		githubLink: "https://github.com/haroon0x/RedLoop/",
	},
	{
		teamName: "Sai Gangadhar B",
		projectTitle: "continuous-docs-generator",
		githubLink: "https://github.com/im-sg/continuous-docs-generator",
	},
	{
		teamName: "Raman Pratap",
		projectTitle: "ai-code-explainer",
		githubLink: "https://github.com/ramanpratappilai/ai-code-explainer",
	},
	{
		teamName: "Shrinivas Kulkarni",
		projectTitle: "A4DA-Self-Optimizing-DevOps",
		githubLink: "https://github.com/KulkarniShrinivas/A4DA-Self-Optimizing-DevOps-Hackathon",
	},
	{
		teamName: "Aswin B",
		projectTitle: "weMakeDevs_hackathon",
		githubLink: "https://github.com/aswinbalasubramanian/weMakeDevs_hackathon/tree/master",
	},
	{
		teamName: "Mohammed Afridi",
		projectTitle: "LoopLingo",
		githubLink: "https://github.com/codeafridi/LoopLingo",
	},
	{
		teamName: "Sahil Kumar",
		projectTitle: "prep-ai",
		githubLink: "https://github.com/kmr-sahil/prep-ai",
	},
	{
		teamName: "Pulagalla Sai Kiran",
		projectTitle: "Coolie_Assistant",
		githubLink: "https://github.com/Saikirankmit/Coolie_Assistant.git",
	},
	{
		teamName: "VISHNU PRIYA P",
		projectTitle: "IoT Real-Time Sensor Diagnostic Agent",
		githubLink: "https://github.com/vishnupriyapurantharan/langchain-langraph-IoT-SENSOR-DIAGNOSTIC-AGENT.git",
	},
	{
		teamName: "Will Wild",
		projectTitle: "Liquid Metal Forge",
		githubLink: "https://github.com/wildhash/liquidmetal-forge",
	},
	{
		teamName: "Sameer Kumar Debata",
		projectTitle: "Seed_image_detector",
		githubLink: "https://github.com/SameerkumarDebata/Seed_image_detector",
	},
	{
		teamName: "wahab shafi shaikh",
		projectTitle: "autopilot-planner",
		githubLink: "https://github.com/000wahab000/autopilot-planner",
	},
	{
		teamName: "Arshad Ahamed",
		projectTitle: "Open-Source-Contribution-Engine",
		githubLink: "https://github.com/arshad98333/Open-Source-Contribution-Engine",
	},
	{
		teamName: "Aditya",
		projectTitle: "OpenSourceHub",
		githubLink: "https://github.com/Adii0906/OpenSourceHub",
	},
	{
		teamName: "Adil Kadival",
		projectTitle: "open-fix",
		githubLink: "https://github.com/adilkadivala/open-fix",
	},
	{
		teamName: "SUSHANT KUMAR SINGH",
		projectTitle: "AI_Agents_Assemble",
		githubLink: "https://github.com/Sushantkumarsingh01/AI_Agents_Assemble.git",
	},
	{
		teamName: "Lalit Borase",
		projectTitle: "hackathon-rfp",
		githubLink: "https://github.com/lalitborase001/hackathon-rfp",
	},
	{
		teamName: "Ayush Sahani",
		projectTitle: "Cyber_King_Cafe",
		githubLink: "https://github.com/AayushSahani01/Cyber_King_Cafe",
	},
	{
		teamName: "Gabriel Effangha",
		projectTitle: "RepoRanger",
		githubLink: "https://github.com/Geff115/repo-ranger",
	},
	{
		teamName: "N DIVIJ",
		projectTitle: "Agentmesh",
		githubLink: "https://github.com/N-45div/Agentmesh",
	},
	{
		teamName: "Vansh",
		projectTitle: "AI Incident Commander",
		githubLink: "https://github.com/kymibuilds/ai-sre-kestra",
	},
	{
		teamName: "Honey Paptan",
		projectTitle: "IdeaFlow",
		githubLink: "https://github.com/HoneyPaptan/IdeaFlow",
	},
	{
		teamName: "Karan Singh",
		projectTitle: "devops-intelligence-platform",
		githubLink: "https://github.com/ksingh-08/devops-intelligence-platform",
	},
	{
		teamName: "Rakesh Potnuru",
		projectTitle: "astralyte",
		githubLink: "https://github.com/RakeshPotnuru/astralyte",
	},
	{
		teamName: "Kushal Kabra",
		projectTitle: "DevPilot",
		githubLink: "https://github.com/Kushalkabra/DevPilot",
	},
	{
		teamName: "Harsh Daga",
		projectTitle: "Incident Scribe",
		githubLink: "https://github.com/Harsh-Daga/Incident-Scribe",
	},
	{
		teamName: "Akshay koul",
		projectTitle: "task-Api",
		githubLink: "https://github.com/AKSHAYK0UL/task-Api",
	},
	{
		teamName: "Sudhanshu Raj",
		projectTitle: "AI-Code-Review",
		githubLink: "https://github.com/sudhanshu-raj/AI-Code-Review",
	},
	{
		teamName: "Anas Khan",
		projectTitle: "Heisenberg",
		githubLink: "https://github.com/ANAS727189/Heisenberg",
	},
	{
		teamName: "Hemanth",
		projectTitle: "SitePulse-Agent",
		githubLink: "https://github.com/Canbow/SitePulse-Agent",
	},
	{
		teamName: "ZAHIQ IBRAHIM",
		projectTitle: "galactica",
		githubLink: "https://github.com/ZahiqIbrahim/galactica",
	},
	{
		teamName: "Prashant Iranna Jamagondi",
		projectTitle: "FutureProof",
		githubLink: "https://github.com/Prashantijamgondi/FutureProof",
	},
	{
		teamName: "Piyush",
		projectTitle: "AgentOps Commander",
		githubLink: "https://github.com/Piyush0000/AgentOps-Commander",
	},
	{
		teamName: "Vinay Ghate",
		projectTitle: "The-Gauntlet",
		githubLink: "https://github.com/vinay-ghate/The-Gauntlet",
	},
	{
		teamName: "Nirali Pandey",
		projectTitle: "Kiki-ai",
		githubLink: "https://github.com/Niralisj/Kiki-ai",
	},
	{
		teamName: "Vedant Solanki",
		projectTitle: "Cloud Janitor",
		githubLink: "https://github.com/solankivedant10/WeMakeDevs-Hackathon",
	},
	{
		teamName: "Shivam Chaubey",
		projectTitle: "Kubernetes-Monitoring-and-Autoscaling-System",
		githubLink: "https://github.com/shivamchaubey027/Kubernetes-Monitoring-and-Autoscaling-System",
	},
	{
		teamName: "soumen mahali",
		projectTitle: "TimelineAI",
		githubLink: "https://github.com/s-mahali/TimelineAI",
	},
	{
		teamName: "GAURAV KUMAR",
		projectTitle: "lighthouse-ops",
		githubLink: "https://github.com/gauravk16in/lighthouse-ops",
	},
	{
		teamName: "Manikant Kella",
		projectTitle: "FlowCraft",
		githubLink: "https://github.com/Manikant92/FlowCraft",
	},
	{
		teamName: "Devraj Atri",
		projectTitle: "finance_agent",
		githubLink: "https://github.com/DevrajAtri/finance_agent-",
	},
	{
		teamName: "Aditya Srivastava",
		projectTitle: "Inverge",
		githubLink: "https://github.com/AdityaSrivastava185/Inverge",
	},
	{
		teamName: "V Sreenivas",
		projectTitle: "DEEPS",
		githubLink: "https://github.com/cnu1812/DEEPS--Diagnostic-Emergency-Execution-Planning-System-",
	},
	{
		teamName: "sparsh chadha",
		projectTitle: "Veritasium in a Box",
		githubLink: "https://github.com/SparshChadha/Veritasium-in-a-Box",
	},
	{
		teamName: "Ashutosh Jha",
		projectTitle: "CivicLens",
		githubLink: "https://github.com/ashutosh887/CivicLens",
	},
	{
		teamName: "Yashvanth S",
		projectTitle: "Flowlens",
		githubLink: "https://github.com/YashvanthsKernel/Flowlens.git",
	},
	{
		teamName: "Felicia Ebikon",
		projectTitle: "PulseGuardian",
		githubLink: "https://github.com/Pearlicia/PulseGuardian",
	},
	{
		teamName: "Vinay Kumar Karani",
		projectTitle: "trade-reconciliation-agent",
		githubLink: "https://github.com/kvinay7/trade-reconciliation-agent",
	},
	{
		teamName: "Ajay Singh",
		projectTitle: "AutoForge",
		githubLink: "https://github.com/AjaySingh-a/AutoForge.git",
	},
	{
		teamName: "Daniel Guerrero",
		projectTitle: "mockingbird-cli",
		githubLink: "https://github.com/danxguerrero/mockingbird-cli",
	},
	{
		teamName: "Nitin Kamlesh",
		projectTitle: "ai-powered-kisan-assistance",
		githubLink: "https://github.com/Nitinkamlesh/ai-powered-kisan-assistance",
	},
	{
		teamName: "Dev Rangoonwala",
		projectTitle: "career-compass",
		githubLink: "https://github.com/devrangoonwala/career-compass",
	},
	{
		teamName: "Dhritiraj Nath",
		projectTitle: "Gemini-Action-Vercel-Generator",
		githubLink: "https://github.com/Dhritiraj-Nath/Gemini-Action-Vercel-Generator.",
	},
	{
		teamName: "Himanshu Bhatt",
		projectTitle: "kestra-flows-Agentic-AI",
		githubLink: "https://github.com/desininja/kestra-flows-Agentic-AI",
	},
	{
		teamName: "Devyani Chavan",
		projectTitle: "cline-studio",
		githubLink: "https://github.com/devyanic11/cline-studio",
	},
	{
		teamName: "Asmita Das",
		projectTitle: "smart-email-summarizer",
		githubLink: "https://github.com/Asmita-das2502/smart-email-summarizer",
	},
	{
		teamName: "Zujajah Batool",
		projectTitle: "ai-agent-dispatcher-frontend",
		githubLink: "https://github.com/zujajahbatool/ai-agent-dispatcher-frontend.git",
	},
	{
		teamName: "Akhil C",
		projectTitle: "valorant-sentinel-ai",
		githubLink: "https://github.com/akhilc19/valorant-sentinel-ai",
	},
	{
		teamName: "Kunal Maurya",
		projectTitle: "AegiOps",
		githubLink: "https://github.com/KUNAL-MAURYA1470/AegiOps",
	},
	{
		teamName: "Garv Agnihotri",
		projectTitle: "blu",
		githubLink: "https://github.com/GarvAgnihotri/blu",
	},
	{
		teamName: "Upanya Chennoju",
		projectTitle: "study-agent",
		githubLink: "https://github.com/upanyachennoju/study-agent",
	},
	{
		teamName: "Sattvik Shukla",
		projectTitle: "glytch",
		githubLink: "https://github.com/sattvik-shukla/glytch",
	},
	{
		teamName: "Isheka singh",
		projectTitle: "CodeCards",
		githubLink: "https://github.com/ishekaa12/CodeCards",
	},
	{
		teamName: "Makiko Ohashi",
		projectTitle: "sales-reservation-agent",
		githubLink: "https://github.com/MakikoOhashi/sales-reservation-agent",
	},
	{
		teamName: "SALAAM",
		projectTitle: "Thanos AI",
		githubLink: "https://github.com/samblackspy/thanos-ai",
	},
	{
		teamName: "Sharan Raj T",
		projectTitle: "depwiki",
		githubLink: "https://github.com/sharanrajt/depwiki",
	},
	{
		teamName: "Monal Gupta",
		projectTitle: "algo-sage",
		githubLink: "https://github.com/monalgupta03/algo-sage",
	},
	{
		teamName: "Sanchit Wadhwa",
		projectTitle: "first-issue-sorting-agent",
		githubLink: "https://github.com/AdityaMaggo13/first-issue-sorting-agent",
	},
	{
		teamName: "Drubo Nath",
		projectTitle: "GitHub Issue Triage Agent",
		githubLink: "https://github.com/drubo-nath/github-issue-triage",
	},
	{
		teamName: "Sujal Gupta",
		projectTitle: "Bug Smash",
		githubLink: "https://github.com/heysujal/bugsmash",
	},
	{
		teamName: "stefan binoj",
		projectTitle: "Gitbee",
		githubLink: "https://github.com/stefanbinoj/gitbee",
	},
	{
		teamName: "Anup Dangi",
		projectTitle: "SmartAIInterviewer-SAI",
		githubLink: "https://github.com/AnupDangi/SmartAIInterviewer-SAI-",
	},
	{
		teamName: "Parth Garg",
		projectTitle: "lingo-chat-flow",
		githubLink: "https://github.com/Parth06102006/lingo-chat-flow",
	},
	{
		teamName: "Kavya Bhand",
		projectTitle: "RepoArchitectAgent",
		githubLink: "https://github.com/KabirKhanuja/RepoArchitectAgent",
	},
	{
		teamName: "Lakshya",
		projectTitle: "BugBountyAgent",
		githubLink: "https://github.com/lucky0612/bugbounty-agent",
	},
	{
		teamName: "Adnan Chherawala",
		projectTitle: "Study_Helper",
		githubLink: "https://github.com/Adnan2208/Study_Helper",
	},
	{
		teamName: "Arun Kumar Chukkala",
		projectTitle: "ClaimGuardian AI",
		githubLink: "https://github.com/arun3676/claim-guardian",
	},
	{
		teamName: "Purnima R",
		projectTitle: "Kala_Kahani",
		githubLink: "https://github.com/PurnimaRout06/Kala_Kahani",
	},
	{
		teamName: "Pravin Wavare",
		projectTitle: "pravin_ai",
		githubLink: "https://github.com/yash9154/pravin_ai",
	},
	{
		teamName: "Bandaru pavan kumar",
		projectTitle: "lifelens-ai",
		githubLink: "https://github.com/pavankumar050905/lifelens-ai",
	},
	{
		teamName: "Samuel",
		projectTitle: "A-self-healing-pipeline",
		githubLink: "https://github.com/timix648/A-self-healing-pipeline",
	},
	{
		teamName: "Aftab memon",
		projectTitle: "real-dev--platform",
		githubLink: "https://github.com/Aftabmemon20/real-dev--platform",
	},
	{
		teamName: "Thakkar Hetvi Ronald",
		projectTitle: "AI-Market-Analyst",
		githubLink: "https://github.com/HetviThakkar-025/AI-Market-Analyst",
	},
	{
		teamName: "Shashwat Jain",
		projectTitle: "autoinfra",
		githubLink: "https://github.com/shashwat558/autoinfra",
	},
	{
		teamName: "Ramya Vedi",
		projectTitle: "InfraPilot-Hackathon",
		githubLink: "https://github.com/RamyaVedi/InfraPilot-Hackathon",
	},
	{
		teamName: "Dhiraj Bhakare",
		projectTitle: "resume-chameleon",
		githubLink: "https://github.com/Dhiraj111/resume-chameleon.git",
	},
	{
		teamName: "Biplab Bera",
		projectTitle: "agri-link",
		githubLink: "https://github.com/bishalbera/agri-link",
	},
	{
		teamName: "Vrushabh Gawas",
		projectTitle: "To-Do-List-NextApp",
		githubLink: "https://github.com/vrushabhgawas14/To-Do-List-NextApp",
	},
	{
		teamName: "Raj shakya",
		projectTitle: "dashmail",
		githubLink: "https://github.com/Rjshakya/dashmail",
	},
	{
		teamName: "Mohammed Rihan Wahid",
		projectTitle: "velocite-agent",
		githubLink: "https://github.com/rihanstranger09/velocite-agent.git",
	},
	{
		teamName: "Ei Sandi Aung",
		projectTitle: "HaggleOs-Poc",
		githubLink: "https://github.com/MRainOE/HaggleOs-Poc",
	},
	{
		teamName: "Avinash Verma",
		projectTitle: "A_SQUAD_ASSEMBLE",
		githubLink: "https://github.com/SoniAnshika/A_SQUAD_ASSEMBLE",
	},
	{
		teamName: "Ujwal Bagul",
		projectTitle: "-WeMakeDevs-Hackathon-Ai-Agent-Assemble-",
		githubLink: "https://github.com/Ujwal164/-WeMakeDevs-Hackathon-Ai-Agent-Assemble-",
	},
	{
		teamName: "S.Manikandan",
		projectTitle: "claimguardAI",
		githubLink: "https://github.com/sankar1mani/claimguardAI",
	},
	{
		teamName: "Adarsh",
		projectTitle: "Self-Healing CI/CD Pipeline",
		githubLink: "https://github.com/adarsh-dev001/self-healing-demo",
	},
	{
		teamName: "Piyush chauhan",
		projectTitle: "Decapsule_backend_and_ml",
		githubLink: "https://github.com/ThakurNishant2004/Decapsule_backend_and_ml.git",
	},
	{
		teamName: "Krrish Mahar",
		projectTitle: "e2e-ml-cline",
		githubLink: "https://github.com/krrishmahar/e2e-ml-cline.git",
	},
	{
		teamName: "Rudra Veer Singh Rathore",
		projectTitle: "r2d2-agent",
		githubLink: "https://github.com/something1703/r2d2-agent",
	},
	{
		teamName: "Anoop Agrawal",
		projectTitle: "End-to-End-Ai-Native-App",
		githubLink: "https://github.com/Anoop840/End-to-End-Ai-Native-App",
	},
	{
		teamName: "Sparsh Gupta",
		projectTitle: "AEGIS-AI",
		githubLink: "https://github.com/sparshg23/AEGIS-AI",
	},
	{
		teamName: "Ayush Kamal Dutta",
		projectTitle: "samplerepo",
		githubLink: "https://github.com/AyushKDutta271/samplerepo",
	},
	{
		teamName: "Sai Gangadhar B",
		projectTitle: "continuous-docs-generator",
		githubLink: "https://github.com/im-sg/continuous-docs-generator",
	},
	{
		teamName: "Sameer Kumar Debata",
		projectTitle: "Seed_image_detector",
		githubLink: "https://github.com/SameerkumarDebata/Seed_image_detector",
	},
	{
		teamName: "Omkar Mishra",
		projectTitle: "ten-days-of-voice-agents-2025-by-murf-ai",
		githubLink: "https://github.com/OmkarMishra56/ten-days-of-voice-agents-2025-by-murf-ai",
	},
	{
		teamName: "Souvik Mandal",
		projectTitle: "resume-agent",
		githubLink: "https://github.com/user23052036/resume-agent",
	},
	{
		teamName: "Dilip gour",
		projectTitle: "jarvis-os",
		githubLink: "https://github.com/dilipgour/jarvis-os",
	},
	{
		teamName: "Mihika Ajay Jadhav",
		projectTitle: "ctrl-shift-delusion-main",
		githubLink: "https://github.com/Chintamani26/ctrl-shift-delusion-main",
	},
	{
		teamName: "Hithesh R",
		projectTitle: "yourstack",
		githubLink: "https://github.com/rhithesh/yourstack",
	},
	{
		teamName: "Archana S",
		projectTitle: "agent_assemble",
		githubLink: "https://github.com/Archanagowda05/agent_assemble.git",
	},
	{
		teamName: "Henry Okechukwu",
		projectTitle: "wingman",
		githubLink: "https://github.com/olaDmenace/wingman.git",
	},
	{
		teamName: "Arpan Charola",
		projectTitle: "SmartDocumentWorkflow",
		githubLink: "https://github.com/ArpanCharola/SmartDocumentWorkflow",
	},
	{
		teamName: "Sahil Mokal",
		projectTitle: "Grreen-India",
		githubLink: "https://github.com/Sahilmokal/Grreen-India",
	},
	{
		teamName: "Abhipsa Srivastava",
		projectTitle: "AgenticAI_wemakedevs",
		githubLink: "https://github.com/abhipsa14/AgenticAI_wemakedevs",
	},
	{
		teamName: "Nilanjan Saha",
		projectTitle: "OSCA-Open-Source-Maintainer-Agent",
		githubLink: "https://github.com/Devnil434/OSCA-Open-Source-Maintainer-Agent.git",
	},
	{
		teamName: "Omkar",
		projectTitle: "the-night-agent",
		githubLink: "https://github.com/omkarChend1kar/the-night-agent",
	},
	{
		teamName: "Mayank Bansal",
		projectTitle: "ai-writing-agent",
		githubLink: "https://github.com/MayankBansal12/ai-writing-agent",
	},
	{
		teamName: "Mohammad Abubaker",
		projectTitle: "autosec-ai",
		githubLink: "https://github.com/Sheikh-Abubaker/autosec-ai.git",
	},
	{
		teamName: "Yogesh Kumar",
		projectTitle: "n8n-saas",
		githubLink: "https://github.com/Debjyoti-19/n8n-saas",
	},
	{
		teamName: "Rithvik",
		projectTitle: "Jarvis",
		githubLink: "https://github.com/8428215330a-ui/Jarvis",
	},
	{
		teamName: "Mukul",
		projectTitle: "castrisk",
		githubLink: "https://github.com/MukulParasar/castrisk",
	},
	{
		teamName: "Dhruv Suthar",
		projectTitle: "auto-rca",
		githubLink: "https://github.com/dhruv-suthar/auto-rca",
	},
	{
		teamName: "Ariya P",
		projectTitle: "LifeGuardianAI",
		githubLink: "https://github.com/Ariya-rithvik/LifeGuardianAI",
	},
	{
		teamName: "Madhur Chaturvedi",
		projectTitle: "Auto-Analysis-Hub_frontend",
		githubLink: "https://github.com/MadhurChaturvedi/Auto-Analysis-Hub_frontend",
	},
	{
		teamName: "ABHISHEK PRASAD BAHELIYA",
		projectTitle: "Agentops-dashboard",
		githubLink: "https://github.com/ABHISHEK-PRASAD-BAHELIYA/Agentops-dashboard",
	},
	{
		teamName: "Mahesh Dindur",
		projectTitle: "auto-maintainer-demo",
		githubLink: "https://github.com/Maheshdindur/auto-maintainer-demo.git",
	},
	{
		teamName: "Bishal Jena",
		projectTitle: "hackjudge",
		githubLink: "https://github.com/BishalJena/hackjudge",
	},
	{
		teamName: "Dandigam Nitesh Kumar",
		projectTitle: "devops-health-agent",
		githubLink: "https://github.com/niteshdandi26/devops-health-agent",
	},
	{
		teamName: "tejas",
		projectTitle: "Paper2Product-AI",
		githubLink: "https://github.com/tejas-2232/Paper2Product-AI",
	},
	{
		teamName: "Prateek Rai Srivastav",
		projectTitle: "Kubeyug",
		githubLink: "https://github.com/prateekrai1/Kubeyug",
	},
	{
		teamName: "Mukul rajput",
		projectTitle: "study notes agent",
		githubLink: "",
	},
	{
		teamName: "Shashidhar Pawadashetti",
		projectTitle: "Autonumous-Deployement-Agent",
		githubLink: "https://github.com/JeevanBennur1234/Autonumous-Deployement-Agent.git",
	},
	{
		teamName: "Emmanuel Ebiendele",
		projectTitle: "africareai",
		githubLink: "https://github.com/emmanuel-123tech/africareai",
	},
	{
		teamName: "Vivek Arora",
		projectTitle: "TrustAI",
		githubLink: "https://github.com/gitvivek14/TrustAI",
	},
	{
		teamName: "David He",
		projectTitle: "concierge-ai",
		githubLink: "https://github.com/beetz12/concierge-ai",
	},
	{
		teamName: "Venkatesh Alampally",
		projectTitle: "creator-ops-pro",
		githubLink: "https://github.com/polywreck/creator-ops-pro",
	},
	{
		teamName: "Bryan Blitman",
		projectTitle: "BugSmith",
		githubLink: "https://github.com/Blitty9/BugSmith",
	},
	{
		teamName: "brandon wallace",
		projectTitle: "nexus_evo",
		githubLink: "https://github.com/Evogoatml/nexus_evo.git",
	},
	{
		teamName: "Alex (astrohacker)",
		projectTitle: "arena402",
		githubLink: "https://github.com/saitosolto/arena402",
	},
	{
		teamName: "Mohit",
		projectTitle: "LA CROSTA",
		githubLink: "https://github.com/Mohit-Pandey1/WEB-DEV-PRACTICE/tree/master/LA%20CROSTA",
	},
	{
		teamName: "Evanglin Priyanka R",
		projectTitle: "metamorphosis",
		githubLink: "https://github.com/Evanglinpriyanka/metamorphosis/",
	},
	{
		teamName: "Ekarna Das",
		projectTitle: "ShikshaSetu_Hackathon",
		githubLink: "https://github.com/eku2307/ShikshaSetu_Hackathon",
	},
	{
		teamName: "Tasfia Chowdhury",
		projectTitle: "Nimbus01",
		githubLink: "https://github.com/Tasfia-17/Nimbus01.git",
	},
	{
		teamName: "Ankit raj",
		projectTitle: "Estas-Ai",
		githubLink: "https://github.com/Ankit-raj-11/Estas-Ai.git",
	},
	{
		teamName: "Aditya chhabra",
		projectTitle: "autoguard-ai",
		githubLink: "https://github.com/ADITYACHHABRA1707/autoguard-ai",
	},
	{
		teamName: "EKJOT SINGH",
		projectTitle: "ai-agent",
		githubLink: "https://github.com/ekjot2727-png/ai-agent.git",
	},
	{
		teamName: "Shashwat Jain",
		projectTitle: "autoinfra",
		githubLink: "https://github.com/shashwat558/autoinfra",
	},
	{
		teamName: "Kartikeshwar Hingole",
		projectTitle: "UI_LangFlu_WebApp",
		githubLink: "https://github.com/kartikeshwar156/UI_LangFlu_WebApp/tree/deployment",
	},
	{
		teamName: "Prasad Borse",
		projectTitle: "custom-ai-chatbot",
		githubLink: "https://github.com/prasdif/custom-ai-chatbot",
	},
	{
		teamName: "Aum",
		projectTitle: "weMakeDevsHackathon",
		githubLink: "https://github.com/AumOzaa/weMakeDevsHackathon",
	},
	{
		teamName: "Sri Sankar Giri V",
		projectTitle: "adaptive-etl-factory",
		githubLink: "https://github.com/giri14v/adaptive-etl-factory",
	},
	{
		teamName: "Abhiranjan Kumar",
		projectTitle: "AutoDev-Analyst",
		githubLink: "https://github.com/Abk700007/AutoDev-Analyst",
	},
	{
		teamName: "Arya Anand Pathak",
		projectTitle: "AutoMaintainer---AI-ASSEMBLE-HACKATHON",
		githubLink: "https://github.com/runningpoem30/AutoMaintainer---AI-ASSEMBLE-HACKATHON",
	},
	{
		teamName: "Md Furquan Anwer",
		projectTitle: "ThunderClash-8t",
		githubLink: "https://github.com/FurquanAnwer/ThunderClash-8t",
	},
	{
		teamName: "PRANJAL SHAHI",
		projectTitle: "AI-Emergency-Agent",
		githubLink: "https://github.com/skull09god/AI-Emergency-Agent.git",
	},
	{
		teamName: "Kaushik Paykoli",
		projectTitle: "soc-ai",
		githubLink: "https://github.com/kaushik0010/soc-ai",
	},
	{
		teamName: "Yadnyesh",
		projectTitle: "ContextKeeper",
		githubLink: "https://github.com/yadnyeshkolte/ContextKeeper",
	},
	{
		teamName: "Shouvik Sarkar",
		projectTitle: "Readme_Generator",
		githubLink: "https://github.com/Shouvik1Sarkar/Readme_Generator",
	},
	{
		teamName: "Himanshu Negi",
		projectTitle: "Promptagent",
		githubLink: "https://github.com/Himanshu200316/Promptagent",
	},
	{
		teamName: "Aniket kushwaha",
		projectTitle: "credit-reminder",
		githubLink: "https://github.com/Aniket3637/credit-reminder",
	},
	{
		teamName: "Aditya Sandip Patil",
		projectTitle: "DevJudge",
		githubLink: "https://github.com/MeAditya239/DevJudge",
	},
	{
		teamName: "Spandan Mukherjee",
		projectTitle: "AI-Arena",
		githubLink: "https://github.com/SpandanM110/AI-Arena",
	},
	{
		teamName: "Shri Ram K",
		projectTitle: "gauntlet",
		githubLink: "https://github.com/Shriram-RZ/gauntlet.git",
	},
	{
		teamName: "Vraj Shah",
		projectTitle: "pholkhol",
		githubLink: "https://github.com/v4vraj/pholkhol",
	},
	{
		teamName: "Ashraful Nuhash",
		projectTitle: "Deep-Research-Agent",
		githubLink: "https://github.com/YashNuhash/Deep-Research-Agent",
	},
	{
		teamName: "Waseem Bagwan",
		projectTitle: "agentflow-pro",
		githubLink: "https://github.com/Waseem-Bagwan/agentflow-pro",
	},
	{
		teamName: "Pritam Mishra",
		projectTitle: "repoguardian-ai",
		githubLink: "https://github.com/PritamMishra065/repoguardian-ai",
	},
	{
		teamName: "ajithbalabhadruni",
		projectTitle: "WeForDevs",
		githubLink: "https://github.com/Itz-gopi204/WeForDevs",
	},
	{
		teamName: "Aditya Majhi",
		projectTitle: "dev-pulse",
		githubLink: "https://github.com/aditya-majhi/dev-pulse",
	},
	{
		teamName: "T Mohamed Yaser",
		projectTitle: "ContextOS",
		githubLink: "https://github.com/Yaser-123/ContextOS",
	},
	{
		teamName: "Pavithra Ebbali",
		projectTitle: "AgentForce-DevOps",
		githubLink: "https://github.com/PavithraEbbali/AgentForce-DevOps",
	},
	{
		teamName: "Karan Bansal",
		projectTitle: "Repo-Warden",
		githubLink: "https://github.com/ErenYeager-cse/Repo-Warden",
	},
	{
		teamName: "Sreehari Nallapaneni",
		projectTitle: "nanite",
		githubLink: "https://github.com/sreehariX/nanite",
	},
	{
		teamName: "Hitesh Sheregar",
		projectTitle: "AccoSpark",
		githubLink: "https://github.com/Hitesh-K-S/AccoSpark",
	},
	{
		teamName: "Nikil Paul",
		projectTitle: "Reclaim",
		githubLink: "https://github.com/Nikil-D-Gr8/Reclaim.git",
	},
	{
		teamName: "Anuj Kumar",
		projectTitle: "Collision-Cloud",
		githubLink: "https://github.com/anuj846k/Collision-Cloud",
	},
	{
		teamName: "Anmol Wadhwa",
		projectTitle: "logsense-ai",
		githubLink: "https://github.com/anmolwadhwaxx/logsense-ai",
	},
	{
		teamName: "Viraj",
		projectTitle: "NutriGuardAI",
		githubLink: "https://github.com/virajpwdn/NutriGuardAI",
	},
	{
		teamName: "Manish Yadav",
		projectTitle: "Digital-Twin",
		githubLink: "https://github.com/monty0007/Digital-Twin",
	},
	{
		teamName: "Bajhaw Rayed Obaid",
		projectTitle: "promptsite-ai",
		githubLink: "https://github.com/Rayed-Bajhaw/promptsite-ai",
	},
	{
		teamName: "Swapnil Nicolson Dadel",
		projectTitle: "autofixer-ai",
		githubLink: "https://github.com/swapitsneil/autofixer-ai",
	},
	{
		teamName: "Satish H Vaishyar",
		projectTitle: "Zentra-AI-Assemble",
		githubLink: "https://github.com/Satish-vaishyar/Zentra-AI-Assemble",
	},
	{
		teamName: "Kalathur Jahnavi",
		projectTitle: "AI_agents_Hackathon",
		githubLink: "https://github.com/Jahnavi4050/AI_agents_Hackathon",
	},
	{
		teamName: "Siddhesh Kiran Hote",
		projectTitle: "aqi-assist",
		githubLink: "https://github.com/siddz-h/aqi-assist",
	},
	{
		teamName: "Ayush Sarkar",
		projectTitle: "dietgpt_01",
		githubLink: "https://github.com/rudra-nl/dietgpt_01",
	},
	{
		teamName: "Aditya Kumar Puri",
		projectTitle: "mednotes-ai",
		githubLink: "https://github.com/puri-adityakumar/mednotes-ai",
	},
	{
		teamName: "Vinay Kumar Karani",
		projectTitle: "trade-reconciliation-agent",
		githubLink: "https://github.com/kvinay7/trade-reconciliation-agent",
	},
	{
		teamName: "Poonam Pawar",
		projectTitle: "safeupgrade",
		githubLink: "https://github.com/Poonam1607/safeupgrade",
	},
	{
		teamName: "Mann Shah",
		projectTitle: "Illusion-Breaker",
		githubLink: "https://github.com/mannshah24/Illusion-Breaker.git",
	},
	{
		teamName: "Harshal Yadav",
		projectTitle: "autoforge-agent",
		githubLink: "https://github.com/Harshalyadav/autoforge-agent",
	},
	{
		teamName: "Devanand",
		projectTitle: "lstm-predictor",
		githubLink: "https://github.com/Devanand-Rai283/lstm-predictor",
	},
	{
		teamName: "Yash Gupta",
		projectTitle: "Cortex-AI",
		githubLink: "https://github.com/yashgupta184/Cortex-AI",
	},
	{
		teamName: "Kusuma",
		projectTitle: "ai-email-summarizer-agent",
		githubLink: "https://github.com/Kusuma447/ai-email-summarizer-agent",
	},
	{
		teamName: "Akshay",
		projectTitle: "aras",
		githubLink: "https://github.com/Akshaybagai52/aras",
	},
	{
		teamName: "Tejasgowda T R",
		projectTitle: "AgentForge",
		githubLink: "https://github.com/Tejas1024/AgentForge.git",
	},
	{
		teamName: "Ashish Patil",
		projectTitle: "devops-automation-agent",
		githubLink: "https://github.com/AshishAGP-dev/devops-automation-agent",
	},
	{
		teamName: "Siva Sai",
		projectTitle: "Refacto",
		githubLink: "https://github.com/Siva-Sai22/Refacto",
	},
	{
		teamName: "Likhith Gowda T R",
		projectTitle: "AgentForge",
		githubLink: "https://github.com/Tejas1024/AgentForge.git",
	},
	{
		teamName: "Mohamedkaseem",
		projectTitle: "review-forge",
		githubLink: "https://github.com/Mohamedkaseem/review-forge",
	},
	{
		teamName: "Kibiwott Kamoo",
		projectTitle: "AutoDebugger",
		githubLink: "",
	},
	{
		teamName: "Soumyadeep Bhowmik",
		projectTitle: "infinity-hacks",
		githubLink: "https://github.com/soumyacodes007/infinity-hacks",
	},
	{
		teamName: "Amitosh Biswas",
		projectTitle: "WMD_Team_Bindass",
		githubLink: "https://github.com/biswas2200/WMD_Team_Bindass",
	},
	{
		teamName: "Ariya",
		projectTitle: "LifeGuardianAI",
		githubLink: "https://github.com/Ariya-rithvik/LifeGuardianAI",
	},
	{
		teamName: "Abhishek",
		projectTitle: "govguide-ai",
		githubLink: "https://github.com/0abhi007/govguide-ai/tree/main",
	},
	{
		teamName: "virendra sahu",
		projectTitle: "project",
		githubLink: "https://github.com/sahu-virendra-1908/project",
	},
	{
		teamName: "Venkatesh Dhangar",
		projectTitle: "Devops_autopilot",
		githubLink: "https://github.com/BugBuster18/Devops_autopilot",
	},
	{
		teamName: "Divyansh Dewangan",
		projectTitle: "Synapse",
		githubLink: "https://github.com/DivyanshDew77/Synapse",
	},
	{
		teamName: "Ayoub Marzouki",
		projectTitle: "auto-sre",
		githubLink: "https://github.com/md-dev970/auto-sre",
	},
	{
		teamName: "Oscar Kandir",
		projectTitle: "infinity-snap",
		githubLink: "https://github.com/oscarosk/infinity-snap",
	},
	{
		teamName: "Harsh Bhatt",
		projectTitle: "code-archaeologist",
		githubLink: "https://github.com/Harsh8818198/code-archaeologist.git",
	},
	{
		teamName: "Shweta Saw",
		projectTitle: "Fashion_sales_agent",
		githubLink: "https://github.com/shwetasaw24/Fashion_sales_agent.git",
	},
	{
		teamName: "Swati",
		projectTitle: "Code-Review-Automation-System",
		githubLink: "https://github.com/Developer-Swati/Code-Review-Automation-System",
	},
	{
		teamName: "Anshuman Purohit",
		projectTitle: "LogAura-UnitCraft",
		githubLink: "https://github.com/anshuman2602/LogAura-UnitCraft",
	},
	{
		teamName: "Sahil",
		projectTitle: "hackathon_oumi",
		githubLink: "https://github.com/Sahillather002/hackathon_oumi",
	},
	{
		teamName: "Pratik Prakash Yesane",
		projectTitle: "ai-testing-tool",
		githubLink: "https://github.com/Pratik5252/ai-testing-tool",
	},
	{
		teamName: "Misbah Ansari",
		projectTitle: "wemakedevs-broken-repo",
		githubLink: "https://github.com/MisbahAnsar/wemakedevs-broken-repo",
	},
	{
		teamName: "Aarti Seth and Taran MR",
		projectTitle: "focus-ai-wemakedevs",
		githubLink: "https://github.com/4artiseth/focus-ai-wemakedevs",
	},
	{
		teamName: "Siddhant Akash Bobde",
		projectTitle: "ClearPerks-mobile-v2",
		githubLink: "https://github.com/BrewCode-WMDHackathon/ClearPerks-mobile-v2",
	},
	{
		teamName: "Pratik Shah",
		projectTitle: "openmlaids",
		githubLink: "https://github.com/PratikCreates/openmlaids",
	},
	{
		teamName: "Akshat Valani",
		projectTitle: "ai-agent",
		githubLink: "https://github.com/akshat1074/ai-agent",
	},
	{
		teamName: "Akshat Batra",
		projectTitle: "upcline",
		githubLink: "https://github.com/akshatbatra/upcline",
	},
	{
		teamName: "Pranav Pipariya",
		projectTitle: "promance",
		githubLink: "https://github.com/PranavPipariya/promance",
	},
	{
		teamName: "vinitha",
		projectTitle: "AutoOps-Mini",
		githubLink: "https://github.com/Vinitharameshchand/AutoOps-Mini.git",
	},
	{
		teamName: "Harshal Rembhotkar",
		projectTitle: "squadron",
		githubLink: "https://github.com/harshal-rembhotkar/squadron",
	},
	{
		teamName: "Vrushank Mukesh Vyas",
		projectTitle: "ProSync.ai",
		githubLink: "https://github.com/Vrushank248/ProSync.ai",
	},
	{
		teamName: "Arjun Sharma",
		projectTitle: "triggr",
		githubLink: "https://github.com/Arjunhg/triggr",
	},
	{
		teamName: "Rajat Rulaniya",
		projectTitle: "CloudCart-AI",
		githubLink: "https://github.com/Rajat-Rulaniya/CloudCart-AI",
	},
	{
		teamName: "Spriha Sahu",
		projectTitle: "market-hackathon",
		githubLink: "https://github.com/sprihasahu/market-hackathon",
	},
	{
		teamName: "Amritanshu Goutam",
		projectTitle: "UniPrep",
		githubLink: "https://github.com/Avoy-Sasmal/UniPrep",
	},
	{
		teamName: "aryan",
		projectTitle: "AI-Project-Scaffolding-Agent",
		githubLink: "https://github.com/ARYANN-07/AI-Project-Scaffolding-Agent.git",
	},
	{
		teamName: "Haragam Deep Singh",
		projectTitle: "APIBLUEPRINT-PRO",
		githubLink: "https://github.com/haragam22/APIBLUEPRINT-PRO",
	},
	{
		teamName: "Henry Okechukwu",
		projectTitle: "wingman",
		githubLink: "https://github.com/olaDmenace/wingman.git",
	},
	{
		teamName: "Himanshu Balani",
		projectTitle: "nb8",
		githubLink: "https://github.com/himanshubalani/nb8",
	},
	{
		teamName: "Anushay Jain",
		projectTitle: "Paxio",
		githubLink: "https://github.com/robu9/Paxio",
	},
	{
		teamName: "Rambabu Kushwaha",
		projectTitle: "Documentation-Hub",
		githubLink: "https://github.com/Rambabu-kushwaha/Documentation-Hub",
	},
	{
		teamName: "Kuhan Sundaram",
		projectTitle: "services_doomsday",
		githubLink: "https://github.com/thisiskuhan/services_doomsday",
	},
	{
		teamName: "piyush tamoli",
		projectTitle: "resurrect-code",
		githubLink: "https://github.com/hackerpsyco/resurrect-code/tree/main",
	},
	{
		teamName: "Rajat Sharma",
		projectTitle: "8bit-Museum",
		githubLink: "https://github.com/git-pixel22/8bit-Museum",
	},
	{
		teamName: "Raviraj Kushwaha",
		projectTitle: "docserver",
		githubLink: "https://github.com/ravi0900/docserver",
	},
	{
		teamName: "SACHIV C",
		projectTitle: "Autonomous_AI_Research_Lab",
		githubLink: "https://github.com/SACHokstack/Autonomous_AI_Research_Lab.git",
	},
	{
		teamName: "Aishwary Gupta",
		projectTitle: "AutoDev",
		githubLink: "https://github.com/Aishwary2004Gupta/AutoDev",
	},
	{
		teamName: "Salmaan",
		projectTitle: "js-to-ts-mvp",
		githubLink: "https://github.com/Salmaan-M/js-to-ts-mvp",
	},
	{
		teamName: "SAISARAN R",
		projectTitle: "cline-intelligence",
		githubLink: "https://github.com/Sai2834/cline-intelligence",
	},
	{
		teamName: "S raj kumar reddy",
		projectTitle: "information-summerizer",
		githubLink: "https://github.com/RAJANISA2005/information-summerizer",
	},
	{
		teamName: "Atul Kaushal",
		projectTitle: "workplace-safety-monitor",
		githubLink: "https://github.com/Atul-Kaushall/workplace-safety-monitor",
	},
	{
		teamName: "Umar Tanveer",
		projectTitle: "Dev-Agent",
		githubLink: "https://github.com/not-noobcoder99/Dev-Agent-",
	},
	{
		teamName: "Shubham Paliwal",
		projectTitle: "self-review-agent",
		githubLink: "https://github.com/shubhampaliwal3011/self-review-agent",
	},
	{
		teamName: "Mahadevan K S",
		projectTitle: "autodev",
		githubLink: "https://github.com/M-DEV-1/autodev",
	},
	{
		teamName: "Yogita",
		projectTitle: "Repositron",
		githubLink: "https://github.com/yogitagoel/Repositron.git",
	},
	{
		teamName: "Lanke Kiran Teja",
		projectTitle: "DevSentinel",
		githubLink: "https://github.com/KiranTejz20005/DevSentinel",
	},
	{
		teamName: "Priyanshu Tomar",
		projectTitle: "Shadow.ai",
		githubLink: "https://github.com/r0c0y/Shadow.ai",
	},
	{
		teamName: "Sundaram Pandey",
		projectTitle: "renard",
		githubLink: "https://github.com/pandeygsundaram/renard",
	},
	{
		teamName: "Archie Tansaria",
		projectTitle: "dura",
		githubLink: "https://github.com/ArchieTansaria/dura",
	},
	{
		teamName: "Sarvadnya Chavhan",
		projectTitle: "smeek",
		githubLink: "https://github.com/flex3-org/smeek",
	},
	{
		teamName: "Mohit Mehtre",
		projectTitle: "ai-code-explainer",
		githubLink: "https://github.com/MohitMehtre/ai-code-explainer",
	},
	{
		teamName: "Mohd Tanzeel",
		projectTitle: "SCOPESHIELD",
		githubLink: "https://github.com/MohdTanzeel/Ai_Agent_Hackathone.git",
	},
	{
		teamName: "Mohamedkaseem",
		projectTitle: "review-forge",
		githubLink: "https://github.com/Mohamedkaseem/review-forge",
	},
	{
		teamName: "Omkar",
		projectTitle: "the-night-agent",
		githubLink: "https://github.com/omkarChend1kar/the-night-agent",
	},
	{
		teamName: "Mayank Umrey",
		projectTitle: "good one",
		githubLink: "",
	},
	{
		teamName: "Suraj",
		projectTitle: "DataIncidentManager",
		githubLink: "https://github.com/Suraj-kumar00/DataIncidentManager",
	},
	{
		teamName: "Sridevi",
		projectTitle: "guardianx",
		githubLink: "https://github.com/Sridevi139/guardianx/tree/main",
	},
	{
		teamName: "Soumyadeep Bhowmik",
		projectTitle: "infinity-hacks",
		githubLink: "https://github.com/soumyacodes007/infinity-hacks",
	},
	{
		teamName: "Karan Saini",
		projectTitle: "e2e-ai-dev-agent",
		githubLink: "https://github.com/805karansaini/e2e-ai-dev-agent/",
	},
	{
		teamName: "Mukesh Kumar Poddar",
		projectTitle: "wemake",
		githubLink: "https://github.com/Mukesh77po/wemake",
	},
	{
		teamName: "Harshita Sharma",
		projectTitle: "all_in_one_alert",
		githubLink: "https://github.com/harshita214/all_in_one_alert",
	},
	{
		teamName: "Karan Bansal",
		projectTitle: "Repo-Warden",
		githubLink: "https://github.com/ErenYeager-cse/Repo-Warden",
	},
	{
		teamName: "Sreehari Nallapaneni",
		projectTitle: "nanite",
		githubLink: "https://github.com/sreehariX/nanite",
	},
	{
		teamName: "Hitesh Sheregar",
		projectTitle: "AccoSpark",
		githubLink: "https://github.com/Hitesh-K-S/AccoSpark",
	},
	{
		teamName: "Dimple",
		projectTitle: "code-evaluation-orchestra",
		githubLink: "https://github.com/me-Dimple72/code-evaluation-orchestra",
	},
	{
		teamName: "Muhammed Tijani",
		projectTitle: "sist",
		githubLink: "https://github.com/contigen/sist",
	},
	{
		teamName: "Rahul Patel",
		projectTitle: "bugsquash-ai",
		githubLink: "https://github.com/rahulpatel902/bugsquash-ai",
	},
	{
		teamName: "FARZAN AMAN KHAN",
		projectTitle: "GitVerified.ai",
		githubLink: "https://github.com/cheese-cakee/GitVerified.ai",
	},
	{
		teamName: "Kasula Shravya",
		projectTitle: "cline_automation_project",
		githubLink: "https://github.com/shravya1998/cline_automation_project",
	},
	{
		teamName: "Dyuti Haranee L",
		projectTitle: "agent_assemble",
		githubLink: "https://github.com/Archanagowda05/agent_assemble.git",
	},
	{
		teamName: "Yogeshwar Bari",
		projectTitle: "dpdp-quick-audit-vercel-deploy",
		githubLink: "https://github.com/yogeshwarbari/dpdp-quick-audit-vercel-deploy/",
	},
	{
		teamName: "Suraj",
		projectTitle: "DataIncidentManager",
		githubLink: "https://github.com/Suraj-kumar00/DataIncidentManager",
	},
	{
		teamName: "Subhraneel Goswami",
		projectTitle: "ai-docs-assistant",
		githubLink: "https://github.com/subhraneel2005/ai-docs-assistant",
	},
	{
		teamName: "Aman Kumar Chaurasiya",
		projectTitle: "getdevcomm",
		githubLink: "https://github.com/Amanc77/getdevcomm",
	},
	{
		teamName: "Kunal Kashyap",
		projectTitle: "sec-agent",
		githubLink: "https://github.com/Kunal1522/sec-agent",
	},
	{
		teamName: "David Anderson",
		projectTitle: "calimojo",
		githubLink: "https://github.com/fapulito/calimojo",
	},
	{
		teamName: "Abubakar",
		projectTitle: "devOpsOrchestrate",
		githubLink: "https://github.com/me1abu/devOpsOrchestrate",
	},
	{
		teamName: "Prafull Sahu",
		projectTitle: "LifeCare_AI",
		githubLink: "https://github.com/Prafullsahu369/LifeCare_AI/tree/main",
	},
	{
		teamName: "KHEMESH BISEN",
		projectTitle: "LifeCare_AI",
		githubLink: "https://github.com/Prafullsahu369/LifeCare_AI/tree/main",
	},
	{
		teamName: "Rahul  Banappagouda Patil",
		projectTitle: "FutureProof",
		githubLink: "https://github.com/Prashantijamgondi/FutureProof/tree/main",
	},
	{
		teamName: "Sanjana Karanth U",
		projectTitle: "To be updated",
		githubLink: "",
	},
].filter((project, index, self) => {
	// Get all GitHub links from winning and top projects
	const winningAndTopLinks = [
		...winningProjects.map(p => p.githubLink),
		...topProjects.map(p => p.githubLink),
	].filter(Boolean);

	// Remove duplicates based on GitHub link
	const githubLink = project.githubLink || "";
	
	// Exclude if GitHub link matches a winning or top project
	if (githubLink && winningAndTopLinks.includes(githubLink)) {
		return false;
	}
	
	// Remove duplicates within otherProjects
	if (!githubLink) return true; // Keep projects without GitHub links
	return index === self.findIndex(p => (p.githubLink || "") === githubLink);
});

export { winningProjects, topProjects, otherProjects };
