// Single source of truth for personal info, drawn from the résumé.
// Update links here once and they propagate across the site.

export const profile = {
  name: "Om Praveer Y Sharan",
  role: "Backend Developer",
  location: "Delhi, India",

  // Two-sentence intro, kept terse and specific — no buzzword filler.
  intro: [
    "I build backends in Java and Spring Boot — secure REST APIs, event-driven pipelines on Apache Kafka, and distributed systems backed by Redis and MongoDB.",
    "I care about the parts that don't show up in a screenshot: ordering guarantees, cache correctness, container builds, and what happens under load.",
  ],

  email: "ompraveer@gmail.com",
  phone: "+91-7017264484",

  // TODO(om): replace the placeholder handles with your real profile URLs.
  links: {
    github: "https://github.com/OmiKat",
    linkedin: "https://www.linkedin.com/in/ompraveer-sharan-bbb398243/",
    leetcode: "https://leetcode.com/ompraveer",
  },

  resumeHref: "/Om-Praveer-Y-Sharan-Resume.pdf",
} as const;

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Java", "C++"] },
  {
    group: "Backend",
    items: [
      "Spring Boot",
      "Spring MVC",
      "Spring JPA",
      "Spring Security",
      "Spring AI",
      "Apache Kafka",
      "Redis",
    ],
  },
  { group: "Data", items: ["PostgreSQL", "MongoDB", "MySQL", "H2"] },
  {
    group: "Tooling",
    items: [
      "Docker",
      "AWS",
      "Git",
      "Postman",
      "Maven",
      "IntelliJ IDEA",
      "Render",
      "Railway",
    ],
  },
];

export const education = [
  {
    school: "Gurukul Kangri (Deemed University)",
    place: "Haridwar, India",
    detail: "B.Tech, Computer Science & Engineering — 8.37 CGPA",
    period: "2022 – 2026",
  },
  {
    school: "Kendriya Vidyalaya, Sector 5 Dwarka",
    place: "Delhi, India",
    detail: "Senior Secondary (Intermediate) — 87%",
    period: "2020 – 2021",
  },
];

export const achievements = [
  {
    title: "InnerveX Hackathon, AIT Pune",
    detail: "Winner — MLH Sponsor Track, Best Use of Vultr",
    period: "Jan 2026",
  },
  {
    title: "NTSE Stage 1",
    detail: "Qualified",
    period: "2018 – 2019",
  },
];
