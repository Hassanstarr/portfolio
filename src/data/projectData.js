import cyberCrime from "../assets/projects/cyberCrime.png";
import mernNotes from "../assets/projects/mern-notes.png";
import teacherPortfolio from "../assets/projects/teacher-portfolio.png";

const projectsData = {
    eyebrow: "04 / PROJECTS",

    heading: {
        firstLine: "Things I've",
        highlighted: "Built",
        lastLine: "Along the Way.",
    },

    description:
        "A selection of projects where I turn ideas into practical applications using modern web technologies, backend systems, and problem-solving skills.",

    projects: [
        {
            id: "cyber-crime-cms",
            number: "01",
            category: "FULL STACK / SECURITY",
            title: "Cyber Crime Complaint Management System",
            description:
                "A secure full-stack platform for citizens to report cyber crimes and admins to track, assign, and resolve cases through role-based workflows.",

            image: cyberCrime,

            technologies: [
                "React.js",
                "Node.js",
                "Express.js",
                "MS SQL Server",
                "JWT",
                "Bcrypt",
                "Swagger UI",
            ],

            features: [
                "Normalized relational DB (FK, CHECK & UNIQUE constraints)",
                "Role-based access control (Citizen vs. Admin)",
                "Parameterized queries & connection pooling for SQL security",
                "Interactive API documentation via Swagger UI",
            ],

            github: "https://github.com/Hassanstarr/Cyber-Crime-Complaint-System",
            live: null,
        },

        {
            id: "mern-notes",
            number: "02",
            category: "FULL STACK / MERN",
            title: "MERN Notes App",
            description:
                "A performant full-stack note-taking platform featuring high-throughput REST APIs, in-memory caching, and robust API rate limiting.",

            image: mernNotes,

            technologies: [
                "React",
                "Node.js",
                "Express",
                "MongoDB",
                "Mongoose",
                "Redis",
                "Tailwind CSS",
            ],

            features: [
                "Full CRUD operations with structured REST APIs",
                "Redis-backed API rate limiting & response caching",
                "Responsive and modern UI built with Tailwind CSS",
                "Optimized MongoDB data schemas",
            ],

            github: "https://github.com/Hassanstarr/mern-thinkboard",
            live: null,
        },

        {
            id: "ecommerce-backend",
            number: "03",
            category: "BACKEND / API",
            title: "E-Commerce REST API Engine",
            description:
                "A scalable backend service handling user authentication, automated payment processing, cloud media uploads, and shopping cart lifecycle.",

            image: null,

            technologies: [
                "Node.js",
                "Express",
                "MongoDB",
                "Mongoose",
                "JWT",
                "Cloudinary",
                "Stripe",
            ],

            features: [
                "Secure admin & customer JWT authentication",
                "Stripe payment gateway webhook integration",
                "Cloudinary media upload pipe for products",
                "Cart management & order fulfillment endpoints",
            ],

            github: "https://github.com/Hassanstarr/E-Commerce-Backend-API",
            live: null,
        },

        {
            id: "teacher-portfolio",
            number: "04",
            category: "FRONTEND / WEB",
            title: "Academic Research Portfolio",
            description:
                "A high-performance portfolio website built for university faculty, integrating live academic database APIs for publications and citations.",

            image: teacherPortfolio,

            technologies: [
                "React.js",
                "JavaScript",
                "CSS3",
                "Google Scholar API",
                "Crossref API",
            ],

            features: [
                "Dynamic fetch of citations via Crossref & Scholar APIs",
                "SEO-optimized structure for academic search indexing",
                "Interactive research paper showcase & download portal",
                "Responsive cross-browser UI layout",
            ],

            github: null,
            live: "https://hypersoft-lab-hassans-projects-098c3892.vercel.app/",
        },
    ],
};

export default projectsData;