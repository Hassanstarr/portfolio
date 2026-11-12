import aiAgentsCertificate from "../assets/certificates/ai-agents.jpg";
import aiForEveryoneCertificate from "../assets/certificates/ai-for-everyone.jpg";
import cppCertificate from "../assets/certificates/cpp-basics.jpg";
import dataFestCertificate from "../assets/certificates/data-fest.webp";
import djangoSqlCertificate from "../assets/certificates/django-sql.jpg";
import djangoWebCertificate from "../assets/certificates/django-web.jpg";
import gdgoc2024Certificate from "../assets/certificates/GCGoC_UMT_cert_1year.png";
import gdgoc2025Certificate from "../assets/certificates/GCGoC_UMT_cert_2year.png";
import helaCertificate from "../assets/certificates/hela-roadshow.webp";
import mathOlympiadCertificate from "../assets/certificates/math-olympiad.jpg";
import mathalonCertificate from "../assets/certificates/mathalon-2025.jpg";
import microsoftWordCertificate from "../assets/certificates/microsoft-word.jpg";
import orientationCertificate from "../assets/certificates/orientation-leader.jpg";
import peerTutorCertificate from "../assets/certificates/peer-tutor.jpg";
import uicpamUsherCertificate from "../assets/certificates/uicpam-2026-usher.jpg";

const linkedinProfile = "https://www.linkedin.com/in/1ts-muhammad-hassan/";
const linkedinPost = (urn) => `https://www.linkedin.com/feed/update/urn:li:${urn}/`;
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

const courseraCredential = (id) => `https://www.coursera.org/account/accomplishments/verify/${id}`;

const certifications = [
    ["ai-agents", "AI agents and creator tools for sales professionals", "AI Business School", "Jul 2026", aiAgentsCertificate, courseraCredential("IZFSUNFC7OP3")],
    ["hela-roadshow", "HeLa CrossRoads Roadshow", "Google", "Jan 2026", helaCertificate, "https://credsverse.com/credentials/5bbade18-353f-4d9e-88c5-cfce726600ac"],
    ["data-science", "Data Science Orientation", "Coursera · IBM", "Jun 2025", "https://images.credly.com/size/680x680/images/5fc2d535-e716-46c4-881a-f4822b8da0e5/Cognitive_Class_-_What_is_Data_Science.png", "https://www.credly.com/badges/35e7bbee-5d50-4635-b2b4-a01075650c86/linked_in_profile", "badge"],
    ["django-sql", "Django Application Development with SQL and Databases", "IBM", "Mar 2025", djangoSqlCertificate, courseraCredential("3L4SSFFA7ASL")],
    ["django-web", "Web Application Technologies and Django", "University of Michigan", "Jan 2025", djangoWebCertificate, courseraCredential("S7S2NQY38IIY")],
    ["cpp-basics", "C++ Basics: Selection and Iteration", "Codio", "Jan 2025", cppCertificate, courseraCredential("A80HEJVR1MDF")],
    ["ai-for-everyone", "AI For Everyone", "DeepLearning.AI", "Jan 2025", aiForEveryoneCertificate, courseraCredential("QYJITD9L6MIV")],
    ["data-fest", "Data Seekho - Data Fest 2024", "Data Seekho", "Nov 2024", dataFestCertificate, "https://credsverse.com/credentials/c0021b67-1e7c-41df-82f2-787fa229cbde"],
    ["microsoft-word", "Microsoft Office Specialist: Word 2019 Associate", "Microsoft", "Apr 2022", microsoftWordCertificate, "https://www.certiport.com/portal/pages/credentialverification.aspx?code=waVGa-H9mE"],
].map(([id, title, organization, year, image = null, credential, imageKind]) => ({
    id,
    category: "Certifications",
    title,
    organization,
    year,
    image,
    imageKind,
    credential,
    type: "CERTIFICATE",
    source: linkedinProfile,
    sourceLabel: "LinkedIn profile",
}));

const volunteerRoles = [
    ["uicpam-media", "Media Team Member — 9th UICPAM 2026", "Jun 2026", "activity:7482843487370145792"],
    ["uicpam-2026-usher", "Usher — 9th UICPAM 2026", "Jun 2026", "activity:7482843487370145792", uicpamUsherCertificate, "Received a Certificate of Participation for serving as an usher."],
    ["ssc-fest", "Organizer & SSC Participants Council Member — SSC-FEST", "Jan 2026"],
    ["orientation-leader", "Orientation Leader", "Oct 2025", "ugcPost:7426690826761551873", orientationCertificate, "Received a Certificate of Appreciation for leading Fall 2025 orientation activities."],
    ["math-olympiad", "Organizer & Module Head — 2nd National Mathematical Olympiad", "Aug–Sep 2025", "activity:7382806838884319232", mathOlympiadCertificate, "Led the Desmos Graphing Calculator module and received a Certificate of Appreciation from CMAP and SSC."],
    ["cire-launch", "Volunteer — CIRE Launch", "Aug 2025", "activity:7372431850008543232"],
    ["peer-tutor", "Peer Tutor — Calculus I", "Mar–Jul 2025", "activity:7387211104004902913", peerTutorCertificate, "Received a Certificate of Acknowledgement from the Office of Participant Success for tutoring Calculus I."],
    ["uicpam-usher", "Usher — 8th UICPAM", "Apr 2025"],
].map(([id, title, year, post, image = null, description]) => ({
    id,
    category: "Volunteer",
    title,
    organization: umt,
    year,
    description,
    image,
    type: "COMMUNITY",
    source: post ? linkedinPost(post) : linkedinProfile,
    sourceLabel: post ? "LinkedIn post" : "LinkedIn profile",
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
            image: mathalonCertificate,
            type: "BRONZE",
            source: linkedinPost("ugcPost:7326288006317850624"),
            sourceLabel: "LinkedIn post",
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
            source: "https://doi.org/10.1016/j.sasc.2026.200504",
            sourceLabel: "Read publication",
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
            organization: "HEC Pakistan / NCEAC",
            year: "Dec 2025",
            description: "Worked with a team to build an AI application during the Generative AI Hackathon.",
            image: null,
            type: "HACKATHON",
            source: linkedinProfile,
            sourceLabel: "LinkedIn profile",
        },
        ...volunteerRoles,
        {
            id: "gdgoc",
            category: "Volunteer",
            title: "GDGoC-UMT Core Team — 2025–2026",
            organization: "Google Developer Groups on Campus UMT",
            year: "2025–2026",
            description: "Received a Certificate of Appreciation for serving on the Web Development Team.",
            image: gdgoc2025Certificate,
            type: "COMMUNITY",
            source: linkedinPost("activity:7500942653400940544"),
            sourceLabel: "LinkedIn post",
        },
        {
            id: "gdgoc-2024-2025",
            category: "Volunteer",
            title: "GDGoC-UMT Core Team — 2024–2025",
            organization: "Google Developer Groups on Campus UMT",
            year: "2024–2025",
            description: "Received a Certificate of Appreciation for serving on the Web Development Team.",
            image: gdgoc2024Certificate,
            type: "COMMUNITY",
        },
    ],
};

export default achievementsData;
