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
    year: "2026",
    title: "GenAI & Agentic AI Decision Automation Platform",
    description:
      "Built GenAI and Agentic AI prototypes using Python, TensorFlow and PyTorch, integrated models into Node.js services to automate decision flows, reducing manual processing time 60% and increasing throughput 4x. Integrated NLP pipelines using HuggingFace for intent extraction that processed 2M+ documents monthly.",
    tech: ["Python", "TensorFlow", "PyTorch", "HuggingFace", "Node.js", "NLP", "GenAI"],
    link: null,
    github: null,
  },
  {
    year: "2026",
    title: "Scalable Microservices API Platform",
    description:
      "Architected Node.js and Express microservices with MongoDB, supporting 50K+ users. Improved API throughput 3x, reduced median latency 45% via asynchronous programming. Deployed containerized services on AWS and Azure using Docker and Kubernetes with CI/CD pipelines.",
    tech: ["Node.js", "Express", "MongoDB", "Docker", "Kubernetes", "AWS", "Azure"],
    link: null,
    github: null,
  },
  {
    year: "2025",
    title: "Avionics Data Analytics Dashboard",
    description:
      "Engineered REST APIs for avionics data ingestion at Embraer, scaling pipelines to 200K events/day. Built Angular real-time flight analytics dashboards supporting 5,000 concurrent users. Prototyped Agentic AI maintenance assistant reducing diagnosis time 35%.",
    tech: ["Angular", "Node.js", "Express", "MongoDB", "Python", "Google Cloud", "Azure"],
    link: null,
    github: null,
  },
  {
    year: "2020–2025",
    title: "Healthcare EHR Integration Platform",
    description:
      "Built MEAN stack applications for healthcare platforms at Ambula, improving patient data sync throughput 3x and supporting 100K+ EHR transactions monthly. Implemented FHIR and HL7 integrations compliant with HIPAA across 20 hospitals.",
    tech: ["Angular", "Node.js", "Express", "MongoDB", "FHIR", "HL7", "HIPAA"],
    link: null,
    github: null,
  },
  {
    year: "2020–2025",
    title: "Clinical NLP Data Pipeline",
    description:
      "Deployed NLP models for clinical note processing using Python and TensorFlow. Built pipelines that extracted structured data from 500K notes/month, improving coding accuracy 20%. Optimized MongoDB with sharding strategies to scale to 10M+ records.",
    tech: ["Python", "TensorFlow", "NLP", "MongoDB", "Node.js"],
    link: null,
    github: null,
  },
  {
    year: "2018–2020",
    title: "Enterprise Client Portal System",
    description:
      "Developed frontend components with Angular and TypeScript at HumanIT Digital Consulting. Built Node.js REST APIs with MongoDB supporting 200K+ records. Implemented CI pipelines reducing release time from days to hours and JWT-based role access controls.",
    tech: ["Angular", "TypeScript", "Node.js", "Express", "MongoDB", "JWT", "Git"],
    link: null,
    github: null,
  },
];

const experience = [
  {
    period: "Jan 2026 — Present",
    role: "Software Engineer",
    company: "Automate Army",
    description:
      "Architected Node.js/Express microservices backed by MongoDB supporting 50K+ users. Built GenAI/Agentic AI prototypes with Python, TensorFlow and PyTorch. Implemented OAuth2/JWT/SSO security achieving SOC 2 alignment. Deployed on AWS/Azure with Docker/Kubernetes, reducing deployment time to under 1 hour. Led Agile teams and mentored engineers, increasing team velocity 35%.",
    tech: [
      "Node.js",
      "Express",
      "MongoDB",
      "Angular",
      "Python",
      "TensorFlow",
      "GenAI",
      "Docker",
      "Kubernetes",
      "AWS",
      "Azure",
    ],
  },
  {
    period: "Aug 2025 — Jul 2026",
    role: "Software Engineer",
    company: "Embraer",
    description:
      "Engineered REST APIs for avionics data ingestion scaling to 200K events/day. Developed Angular flight analytics dashboards supporting 5,000 concurrent users. Implemented OAuth2/JWT SSO integration reducing login friction 70%. Prototyped Agentic AI maintenance assistant reducing diagnosis time 35%. Optimized MongoDB replica sets with recovery RTO under 30 minutes.",
    tech: [
      "Node.js",
      "Express",
      "Angular",
      "MongoDB",
      "OAuth2",
      "JWT",
      "Python",
      "NLP",
      "Google Cloud",
      "Azure",
    ],
  },
  {
    period: "Aug 2020 — Jul 2025",
    role: "Software Engineer",
    company: "Ambula",
    description:
      "Built MEAN stack healthcare platforms supporting 100K+ EHR transactions monthly. Implemented FHIR/HL7 integrations compliant with HIPAA across 20 hospitals, reducing integration time 45%. Built microservices handling 1M+ records at 99.9% uptime. Deployed NLP models for clinical note processing extracting structured data from 500K notes/month.",
    tech: [
      "Angular",
      "Node.js",
      "Express",
      "MongoDB",
      "FHIR",
      "HL7",
      "HIPAA",
      "Python",
      "TensorFlow",
      "OAuth2",
      "JWT",
    ],
  },
  {
    period: "Jul 2018 — Aug 2020",
    role: "Junior Software Engineer",
    company: "HumanIT Digital Consulting",
    description:
      "Developed Angular/TypeScript frontend components improving page load times 30% across client portals serving 10K+ users. Built Node.js/Express REST APIs with MongoDB supporting 200K+ records. Implemented Git workflows and CI pipelines reducing release time from days to hours. Applied async programming patterns reducing batch job completion time 70%.",
    tech: [
      "Angular",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Git",
      "CI/CD",
    ],
  },
];

const education = [
  {
    period: "2017 — 2020",
    institution: "Anhembi Morumbi University",
    degree: "Bachelor's Degree",
    field: "Computer Science",
    location: "São Paulo, Brazil",
    description:
      "Studied computer science fundamentals: algorithms, data structures, operating systems, databases, and software engineering. Built full-stack projects with Java, Spring Boot, React, and Next.js that grew into a career in web development.",
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
            Senior Software Engineer with 8+ years in MEAN stack, GenAI/Agentic AI
            and enterprise Identity/Security, Healthcare and Data Governance
            platforms. Expertise in Node.js, Express, MongoDB, Angular, TypeScript,
            Python and cloud deployments. Agile practitioner and collaborative
            leader focused on delivering secure, compliant enterprise-grade solutions.
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
              href="mailto:yuri.claro.dev@gmail.com"
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
              I&apos;m a senior software engineer based in{" "}
              <strong className="text-foreground">São Paulo, Brazil</strong>.
              With 8+ years of experience, I specialize in building enterprise-grade
              applications using the MEAN stack, GenAI/Agentic AI, and identity/security
              platforms. I&apos;ve delivered solutions across healthcare, avionics, and
              data governance domains.
            </p>
            <p>
              My track record includes reducing integration time by 45%, improving API
              throughput 3x, and building secure authentication systems with OAuth2, JWT,
              and SSO. I&apos;m proficient in cloud deployments on AWS, Azure, and Google
              Cloud with containerization using Docker and Kubernetes.
            </p>
            <p>
              I&apos;m passionate about GenAI/Agentic AI model development, NLP, and
              data governance to deliver scalable, secure and compliant solutions. I thrive
              as an Agile practitioner, mentoring engineers and managing cross-functional
              stakeholder relationships.
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
              <p className="mt-3 max-w-2xl text-muted-foreground leading-relaxed">
                {e.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {e.tech.map((t) => (
                  <Badge key={t} variant="filled">
                    {t}
                  </Badge>
                ))}
              </div>
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
            <ScrollReveal key={ed.institution}>
            <li className="relative">
              <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-foreground md:-left-[calc(3rem+5px)]" />
              <p className="font-mono text-xs text-muted-foreground">
                {ed.period}
              </p>
              <h3 className="mt-1 text-xl font-semibold">{ed.institution}</h3>
              <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <GraduationCap className="h-4 w-4" />
                  {ed.degree} in {ed.field}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" />
                  {ed.location}
                </span>
              </div>
              <p className="mt-3 max-w-2xl text-muted-foreground leading-relaxed">
                {ed.description}
              </p>
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
              href="mailto:yuri.claro.dev@gmail.com"
              className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-6"
            >
              <Mail className="h-4 w-4" />
              yuri.claro.dev@gmail.com
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