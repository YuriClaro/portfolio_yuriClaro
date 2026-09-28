import Image from "next/image";
import {
  ArrowDown,
  Mail,
  ExternalLink,
  GraduationCap,
  MapPin,
} from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { ScrollReveal } from "@/components/ScrollReveal";

/* ───────── data ───────── */

const skills = [
  "Angular",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express",
  "MongoDB",
  "React",
  "Next.js",
  "Python",
  "TensorFlow",
  "PyTorch",
  "NLP",
  "GenAI / Agentic AI",
  "HuggingFace",
  "REST APIs",
  "Microservices",
  "OAuth2",
  "JWT",
  "SSO",
  "Docker",
  "Kubernetes",
  "AWS",
  "Azure",
  "Google Cloud",
  "Redis",
  "CI/CD",
  "FHIR",
  "HL7",
  "HIPAA",
  "Terraform",
  "Git / VSTS",
];

const projects = [
  {
    year: "2024",
    title: "Salary Management System",
    description:
      "Salary management system with a microservices architecture composed of four services orchestrated via Docker. APIs secured with Spring Security and JWT, data auditing with Hibernate Envers, and database versioning with Liquibase. Asynchronous communication via Apache Kafka for sending Excel reports to authenticated users.",
    tech: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "PostgreSQL",
      "Apache Kafka",
      "Docker",
      "Hibernate Envers",
      "Liquibase",
      "JUnit",
      "Swagger",
    ],
    link: null,
    github: "https://github.com/YuriClaro/Salary-Management-System",
  },
];

const experience = [
  {
    period: "May 2026 — Present",
    role: "Software Engineer",
    company: "Automate Army",
    type: "Full-time",
    location: "Denver, Colorado, United States · Remote",
    description: "",
    tech: [],
  },
  {
    period: "Aug 2025 — Jul 2026",
    role: "Software Engineer",
    company: "Embraer",
    type: "Full-time",
    location: "São José dos Campos, São Paulo, Brasil · On-site",
    description:
      "Experience in Salesforce development within the CRM Commercial area at Embraer, supporting Product, Marketing, Contracts, Opportunities, Committees, and Proposals. Proven experience in end-to-end project execution, including requirements gathering and analysis with multiple stakeholders, data analysis, and performance indicator monitoring, with strong proficiency in Excel. Hands-on experience in developing and managing Salesforce solutions, as well as in the design and development of AI agents and Machine Learning initiatives to enhance automation, decision-making, and operational efficiency, transforming engineering and business data into actionable insights through Power BI dashboards.",
    tech: [
      "Salesforce",
      "Power BI",
      "AI Agents",
      "Machine Learning",
      "Excel",
      "Data Analysis",
      "CRM",
    ],
  },
  {
    period: "Jan 2025 — Jul 2025",
    role: "Full Stack Junior Developer",
    company: "Ambula",
    type: "Part-time",
    location: "Portugal · Remote",
    description:
      "Development of web and mobile applications for Ambula's partner companies, including Crew Member, Coordinator, and User roles, using FlutterFlow, Supabase, Figma, Javascript and Tailwind. Responsible for managing vehicles, crew members, trips, beneficiaries, and financial reports, optimizing operational processes and enhancing user experience. Developed skills in prototyping, software architecture, process automation, data analysis, and problem-solving.",
    tech: [
      "JavaScript",
      "HTML5",
      "FlutterFlow",
      "Supabase",
      "Figma",
      "Tailwind",
      "CSS",
      "Mobile Development",
      "Software Architecture",
      "Process Automation",
      "Data Analysis",
    ],
  },
  {
    period: "Jul 2024 — Dec 2024",
    role: "Java Trainee Developer",
    company: "HumanIT Digital Consulting",
    type: "Part-time",
    location: "Porto, Portugal · Remote",
    description:
      "Development of skills in Java 21, Spring Boot 3 (including Spring Data and Spring Security), JWT, Docker, messaging with Apache Kafka and RabbitMQ, data auditing with Hibernate Envers, and database versioning with Liquibase. Exception handling, file manipulation, email sending, scheduling with Scheduler, and unit testing using JUnit. Participation in project management with the agile Scrum methodology and improvement of communication skills in English in a collaborative and challenging environment.",
    tech: [
      "Spring Framework",
      "Docker",
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "Apache Kafka",
      "RabbitMQ",
      "Hibernate Envers",
      "Liquibase",
      "JUnit",
      "Scrum",
      "REST APIs",
      "PostgreSQL",
      "Git",
      "CI/CD",
      "Maven",
      "Spring Data",
      "Microservices",
      "Linux",
      "IntelliJ IDEA",
      "Postman",
    ],
  },
  {
    period: "Aug 2018 — Jul 2024",
    role: "Administrative Assistant",
    company: "Força Aérea Brasileira - FAB",
    type: "Full-time",
    location: "São José dos Campos, São Paulo, Brazil · On-site",
    description:
      "Responsible for the administration and development of military courses, implementing the Moodle system for the operational maintenance and qualification of GSD-SJ. Optimized processes related to enrollment, tracking, evaluation, and publication, achieving an improvement of over 100%. Developed skills in problem-solving, time management, critical thinking, organizational abilities, and continuous learning.",
    tech: [],
  },
];

const education = [
  {
    period: "Aug 2023 — Aug 2026",
    institution: "Universidade Anhembi Morumbi",
    degree: "Bachelor's degree",
    field: "Computer Science",
    location: "São Paulo, Brazil",
    description: "",
  },
  {
    period: "Jan 2021 — Aug 2023",
    institution: "Universidade Anhembi Morumbi",
    degree: "Higher Education",
    field: "Systems Analysis and Development",
    location: "São Paulo, Brazil",
    description: "",
  },
];

/* ───────── helpers ───────── */

function SectionHeading({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-12 flex items-center gap-4">
      <h2 className="flex items-baseline gap-3 text-2xl font-bold tracking-tight sm:text-3xl">
        <span className="font-mono text-base text-muted-foreground">
          {number}.
        </span>
        {children}
      </h2>
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}

function Badge({
  children,
  variant = "outline",
}: {
  children: React.ReactNode;
  variant?: "outline" | "filled";
}) {
  const base =
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors font-mono";
  const styles =
    variant === "filled"
      ? "border-transparent bg-secondary text-secondary-foreground"
      : "text-foreground border-border";
  return <div className={`${base} ${styles}`}>{children}</div>;
}

/* ───────── page ───────── */

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="container relative flex min-h-[88vh] flex-col justify-center py-24">
        <div className="max-w-3xl space-y-6 animate-fade-up">
          <p className="font-mono text-sm text-muted-foreground">
            Hi, my name is
          </p>
          <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            Yuri Claro.
          </h1>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-muted-foreground sm:text-4xl md:text-5xl">
            I build scalable enterprise systems.
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Software Engineer with 2+ years of experience focused on Full Stack
            Development and Artificial Intelligence. Based in São José dos Campos,
            Brazil, building scalable solutions that connect technology, business
            strategy, and user experience.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-6"
              href="#projects"
            >
              View my work
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors border border-border bg-background hover:bg-accent hover:text-accent-foreground h-11 px-6"
              href="mailto:yuri.claro@outlook.com"
            >
              <Mail className="h-4 w-4" />
              Get in touch
            </a>

            <div className="ml-2 flex items-center gap-1">
              <a
                href="https://www.linkedin.com/in/yuriclaro/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center justify-center rounded-md transition-colors hover:bg-accent hover:text-accent-foreground h-10 w-10"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/YuriClaro"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="inline-flex items-center justify-center rounded-md transition-colors hover:bg-accent hover:text-accent-foreground h-10 w-10"
              >
                <FaGithub className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── About ─── */}
      <section id="about" className="container py-24 scroll-mt-16">
        <ScrollReveal>
          <SectionHeading number="01">About</SectionHeading>
        </ScrollReveal>

        <ScrollReveal>
        <div className="grid gap-12 md:grid-cols-3">
          <div className="space-y-4 text-muted-foreground md:col-span-2">
            <p>
              Software Engineer focused on{" "}
              <strong className="text-foreground">Full Stack Development</strong>{" "}
              and{" "}
              <strong className="text-foreground">Artificial Intelligence</strong>,
              building scalable solutions that connect technology, business
              strategy, and user experience.
            </p>
            <p>
              Currently at{" "}
              <strong className="text-foreground">Automate Army</strong>, I work
              with clients across the United States and the world, developing
              AI-powered products, intelligent automations, and software
              solutions that drive business efficiency and growth.
            </p>
            <p>
              My career includes experience with the{" "}
              <strong className="text-foreground">Brazilian Air Force</strong>,{" "}
              <strong className="text-foreground">Embraer</strong>, and
              technology companies across Europe, providing me with a strong
              foundation in discipline, adaptability, and delivering results in
              international and high-performance environments.
            </p>
            <p>
              Passionate about technology, data, and process optimization, I
              thrive in dynamic environments where technological innovation is
              closely connected to business strategy.
            </p>

            <p className="pt-2 text-foreground">
              Some of the technologies I work with:
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <Badge key={s} variant="filled">
                  {s}
                </Badge>
              ))}
            </div>
          </div>

          {/* Portrait */}
          <div className="relative">
            <div className="aspect-square w-full max-w-xs overflow-hidden rounded-xl border bg-gradient-to-br from-muted to-secondary p-1">
              <div className="relative h-full w-full overflow-hidden rounded-lg bg-card">
                <Image
                  src="/images/profile/yuri_profile.jpg"
                  alt="Portrait of Yuri Claro"
                  fill
                  priority
                  sizes="(min-width: 768px) 20rem, 80vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        </ScrollReveal>
      </section>

      {/* ─── Projects ─── */}
      <section id="projects" className="container py-24 scroll-mt-16">
        <ScrollReveal>
          <SectionHeading number="02">Selected work</SectionHeading>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <ScrollReveal key={p.title}>
            <div
              className="rounded-xl border bg-card text-card-foreground shadow-sm transition-colors group flex flex-col overflow-hidden hover:border-foreground/20 hover:shadow-md"
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1.5">
                    <p className="font-mono text-xs text-muted-foreground">
                      {p.year}
                    </p>
                    <h3 className="font-semibold tracking-tight text-xl">
                      {p.title}
                    </h3>
                  </div>
                  <div className="flex shrink-0 items-center gap-1">
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${p.title} GitHub`}
                        className="text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <FaGithub className="h-4 w-4" />
                      </a>
                    )}
                    {p.link && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${p.title} link`}
                        className="text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 flex flex-1 flex-col justify-between gap-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </div>
            </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ─── Experience ─── */}
      <section id="experience" className="container py-24 scroll-mt-16">
        <ScrollReveal>
          <SectionHeading number="03">Experience</SectionHeading>
        </ScrollReveal>

        <ol className="relative space-y-12 border-l border-border pl-8 md:pl-12">
          {experience.map((e) => (
            <ScrollReveal key={`${e.company}-${e.period}`}>
            <li className="relative">
              <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-foreground md:-left-[calc(3rem+5px)]" />
              <p className="font-mono text-xs text-muted-foreground">
                {e.period}
              </p>
              <h3 className="mt-1 text-xl font-semibold">
                {e.role}{" "}
                <span className="text-muted-foreground">· {e.company}</span>
              </h3>
              <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
                <span>{e.type}</span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" />
                  {e.location}
                </span>
              </div>
              {e.description && (
                <p className="mt-3 max-w-2xl text-muted-foreground leading-relaxed">
                  {e.description}
                </p>
              )}
              {e.tech.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {e.tech.map((t) => (
                    <Badge key={t} variant="filled">
                      {t}
                    </Badge>
                  ))}
                </div>
              )}
            </li>
            </ScrollReveal>
          ))}
        </ol>
      </section>

      {/* ─── Education ─── */}
      <section id="education" className="container py-24 scroll-mt-16">
        <ScrollReveal>
          <SectionHeading number="04">Education</SectionHeading>
        </ScrollReveal>

        <ol className="relative space-y-12 border-l border-border pl-8 md:pl-12">
          {education.map((ed) => (
            <ScrollReveal key={`${ed.institution}-${ed.period}`}>
            <li className="relative">
              <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-foreground md:-left-[calc(3rem+5px)]" />
              <p className="font-mono text-xs text-muted-foreground">
                {ed.period}
              </p>
              <h3 className="mt-1 text-xl font-semibold">{ed.institution}</h3>
              <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <GraduationCap className="h-4 w-4" />
                  {ed.degree}, {ed.field}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" />
                  {ed.location}
                </span>
              </div>
              {ed.description && (
                <p className="mt-3 max-w-2xl text-muted-foreground leading-relaxed">
                  {ed.description}
                </p>
              )}
            </li>
            </ScrollReveal>
          ))}
        </ol>
      </section>

      {/* ─── Contact ─── */}
      <section id="contact" className="container py-24 scroll-mt-16">
        <ScrollReveal>
          <SectionHeading number="05">Get in touch</SectionHeading>
        </ScrollReveal>

        <ScrollReveal>
        <div className="mx-auto max-w-2xl space-y-6 text-center">
          <h3 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s build something amazing together.
          </h3>
          <p className="text-balance text-muted-foreground leading-relaxed">
            I&apos;m always excited to discuss new opportunities, collaborate on
            interesting projects, or simply chat about technology and
            development. Feel free to reach out!
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="mailto:yuri.claro@outlook.com"
              className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-6"
            >
              <Mail className="h-4 w-4" />
              yuri.claro@outlook.com
            </a>

            <a
              href="https://www.linkedin.com/in/yuriclaro/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md transition-colors border border-border bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/YuriClaro"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md transition-colors border border-border bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10"
              aria-label="GitHub"
            >
              <FaGithub className="h-5 w-5" />
            </a>
          </div>
        </div>
        </ScrollReveal>

        {/* Footer */}
        <footer className="mt-24 border-t border-border pt-8 text-center font-mono text-xs text-muted-foreground">
          Built with Next.js &amp; Tailwind · © {currentYear} Yuri Claro
        </footer>
      </section>
    </>
  );
}