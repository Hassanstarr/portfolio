const linkedinProfile = "https://www.linkedin.com/in/1ts-muhammad-hassan/";
const umt = "University of Management and Technology, Lahore";
const mathematics = "Department of Mathematics · School of Science (SSC)";

// Semesters supplied by Hassan; event sources do not verify individual recipients.
// See docs/achievement-sources.md for research notes and date limitations.
const academicAwards = [
    { semester: "Fall 2025", code: "f2025", year: "2025", ceremony: "18 June 2026" },
    { semester: "Spring 2025", code: "s2025", year: "2025", ceremony: "4 December 2025" },
    { semester: "Fall 2024", code: "f2024", year: "2024", rector: true },
    { semester: "Spring 2024", code: "s2024", year: "2024" },
    { semester: "Fall 2023", code: "f2023", year: "2023" },
].map(({ semester, code, year, ceremony, rector }) => ({
    id: `${rector ? "rector" : "dean"}-merit-${code}`,
    category: "Awards",
    title: `${rector ? "Rector's" : "Dean's"} Merit Award — ${semester}`,
    organization: umt,
    department: mathematics,
    year,
    description: `Awarded for academic achievement in the ${semester} semester.`,
    ceremony,
    image: null,
    type: "AWARD",
    source: rector
        ? "https://www.umt.edu.pk/news/Rector-Merit-Awards.aspx"
        : code === "s2025"
          ? "https://events.umt.edu.pk/events/12263?EID=12263"
          : "https://ssc.umt.edu.pk/",
    sourceLabel: rector ? "UMT award news" : code === "s2025" ? "Ceremony details" : "SSC event calendar",
}));

const certifications = [
    ["ai-agents", "AI agents and creator tools for sales professionals", "AI Business School", "Jul 2026"],
    ["hela-roadshow", "HeLa CrossRoads Roadshow", "Google", "Jan 2026"],
    ["generative-ai", "Generative AI", "HEC Pakistan", "Dec 2025"],
    ["data-science", "Data Science Orientation", "Coursera", "Jun 2025"],
    ["django-sql", "Django Application Development with SQL and Databases", "IBM", "Mar 2025"],
    ["ai-for-everyone", "AI For Everyone", "DeepLearning.AI", "Jan 2025"],
    ["cpp-basics", "C++ Basics: Selection and Iteration", "Codio", "Jan 2025"],
    ["django-web", "Web Application Technologies and Django", "University of Michigan", "Jan 2025"],
    ["data-fest", "Data Seekho - Data Fest 2024", "Data Seekho", "Nov 2024"],
    ["microsoft-word", "Microsoft Office Specialist: Word Certification", "Microsoft", "Apr 2022"],
].map(([id, title, organization, year]) => ({
    id,
    category: "Certifications",
    title,
    organization,
    year,
    image: null,
    type: "CERTIFICATE",
    source: linkedinProfile,
    sourceLabel: "LinkedIn profile",
}));

const volunteerRoles = [
    ["uicpam-media", "Media Team — 9th UICPAM", "Jun 2026"],
    ["ssc-fest", "Organizer & SSC Participants Council Member — SSC-FEST", "Jan 2026"],
    ["orientation-leader", "Orientation Leader", "Oct 2025"],
    ["math-olympiad", "Organizer & Module Head — 2nd National Mathematical Olympiad", "Aug–Sep 2025"],
    ["cire-launch", "Volunteer — CIRE Launch", "Aug 2025"],
    ["peer-tutor", "Peer Tutor — Calculus I", "Mar–Jul 2025"],
    ["uicpam-usher", "Usher — 8th UICPAM", "Apr 2025"],
].map(([id, title, year]) => ({
    id,
    category: "Volunteer",
    title,
    organization: umt,
    year,
    image: null,
    type: "COMMUNITY",
    source: linkedinProfile,
    sourceLabel: "LinkedIn profile",
}));

const achievementsData = {
    eyebrow: "05 / ACHIEVEMENTS",
    heading: {
        firstLine: "Beyond",
        highlighted: "Projects",
        lastLine: "And Code.",
    },
    description: "Academic awards, certifications, research, competitions, and community contributions that shape my work.",
    categories: ["All", "Awards", "Certifications", "Hackathons", "Research", "Volunteer"],
    achievements: [
        ...academicAwards,
        {
            id: "mathalon-2025",
            category: "Hackathons",
            title: "Overall 3rd Place — Mathalon 2025",
            organization: "Forman Christian College (A Chartered University), Lahore",
            year: "Apr 2025",
            description: "Also placed third in the Scavenger Hunt module, representing UMT.",
            image: null,
            type: "BRONZE",
            source: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7326288006317850624/",
            sourceLabel: "Event post",
        },
        {
            id: "uicpam-speaker",
            category: "Research",
            title: "General Speaker — 8th UICPAM",
            organization: umt,
            year: "Apr 2025",
            image: null,
            type: "PRESENTATION",
            source: linkedinProfile,
            sourceLabel: "LinkedIn profile",
        },
        {
            id: "dynamic-fuzzy-soft-sets",
            category: "Research",
            title: "Modeling temporal uncertainty using Dynamic Fuzzy Soft Sets: A framework for longitudinal decision-making with time-varying criteria",
            organization: "Systems and Soft Computing (Elsevier)",
            year: "May 2026",
            image: null,
            type: "PUBLICATION",
            source: linkedinProfile,
            sourceLabel: "LinkedIn profile",
        },
        ...certifications,
        // Retained from the existing portfolio; not newly verified on LinkedIn.
        {
            id: "softtech-hackathon",
            category: "Hackathons",
            title: "SoftTech Hackathon 2025",
            organization: "FAST-NUCES Lahore",
            year: "2025",
            description: "Participated in a team-based hackathon focused on developing a CV analysis and recommendation solution.",
            image: null,
            type: "HACKATHON",
        },
        {
            id: "genai-hackathon",
            category: "Hackathons",
            title: "Generative AI Hackathon",
            organization: "GenAI / HEC / NCEAC Program",
            year: "2025",
            description: "Participated in a Generative AI focused hackathon and worked on an AI-based application as part of a team.",
            image: null,
            type: "HACKATHON",
        },
        ...volunteerRoles,
        {
            id: "gdgoc",
            category: "Volunteer",
            title: "GDGoC-UMT Core Team",
            organization: "Google Developer Groups on Campus UMT",
            year: "2024 - 2026",
            description: "Contributed to the developer community through web development, technical activities, bootcamps, and speaker events.",
            image: null,
            type: "COMMUNITY",
        },
    ],
};

export default achievementsData;
