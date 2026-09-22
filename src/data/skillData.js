const skillsData = {
    eyebrow: "03 / SKILLS",

    heading: {
        firstLine: "Tools I Use",
        highlighted: "To Build",
        lastLine: "Ideas.",
    },

    description:
        "A practical set of technologies I use across frontend development, backend systems, databases, programming, and everyday development workflows.",

    categories: [
        {
            id: "frontend",
            number: "01",
            title: "Frontend",
            description: "Building responsive and interactive user interfaces.",
            skills: [
                "React.js",
                "React Router",
                "Tailwind CSS",
                "Axios",
                "HTML5",
                "CSS3",
            ],
        },

        {
            id: "backend",
            number: "02",
            title: "Backend",
            description: "Developing APIs, authentication systems, and server-side applications.",
            skills: [
                "Node.js",
                "Express.js",
                "REST APIs",
                "JWT Authentication",
            ],
        },

        {
            id: "databases",
            number: "03",
            title: "Databases",
            description: "Working with relational and NoSQL data systems.",
            skills: [
                "Microsoft SQL Server",
                "MongoDB",
                "Mongoose",
                "MySQL",
                "Redis",
            ],
        },

        {
            id: "languages",
            number: "04",
            title: "Languages",
            description: "Programming and querying languages used across my projects.",
            skills: [
                "JavaScript (ES6+)",
                "Python",
                "C / C++",
                "SQL",
            ],
        },

        {
            id: "tools",
            number: "05",
            title: "Tools",
            description: "Tools that support development, testing, design, and deployment.",
            skills: [
                "Git",
                "GitHub",
                "Postman",
                "Figma",
                "Jira",
                "Bash",
            ],
        },
    ],
};

export default skillsData;