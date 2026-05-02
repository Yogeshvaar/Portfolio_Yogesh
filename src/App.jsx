import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Sparkles
} from "lucide-react";
import Video2Ascii from "video2ascii";
import { achievements, projects, skills } from "./content";

const asciiVideoSrc = "/ascii-backdrop.mp4";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

function Reveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

function Button({ href, children, variant = "dark", icon: Icon }) {
  const isDark = variant === "dark";

  return (
    <a
      href={href}
      className={`group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition duration-300 ${
        isDark
          ? "bg-white text-ink hover:bg-champagne"
          : "border border-ink/15 bg-ink text-white hover:bg-graphite"
      }`}
    >
      {children}
      {Icon ? (
        <Icon className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5" />
      ) : null}
    </a>
  );
}

function SectionHeading({ eyebrow, title, copy, tone = "dark" }) {
  const dark = tone === "dark";

  return (
    <Reveal className="mx-auto max-w-3xl text-center">
      <p
        className={`mb-4 text-xs font-bold uppercase tracking-[0.32em] ${
          dark ? "text-champagne" : "text-ink/55"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`font-display text-4xl font-black leading-tight text-balance md:text-6xl ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {copy ? (
        <p
          className={`mx-auto mt-5 max-w-2xl text-base leading-8 md:text-lg ${
            dark ? "text-white/68" : "text-ink/62"
          }`}
        >
          {copy}
        </p>
      ) : null}
    </Reveal>
  );
}

function Nav() {
  const links = ["About", "Skills", "Projects", "Contact"];

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-ink/55 px-4 py-3 text-white shadow-glass backdrop-blur-xl md:px-6">
        <a href="#home" className="font-display text-sm font-black tracking-wide">
          YE
        </a>
        <div className="hidden items-center gap-6 text-xs font-semibold uppercase tracking-[0.2em] text-white/62 md:flex">
          {links.map((link) => (
            <a key={link} className="transition hover:text-white" href={`#${link.toLowerCase()}`}>
              {link}
            </a>
          ))}
        </div>
        <a
          href="mailto:yogeshshange15@gmail.com"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink transition hover:bg-champagne"
          aria-label="Email Yogeshvaar"
        >
          <Mail className="h-4 w-4" />
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center overflow-hidden bg-ink px-5 pb-20 pt-32 text-white md:px-8"
    >
      <motion.div
        className="absolute inset-0 bg-radial-spot opacity-80"
        animate={{ scale: [1, 1.08, 1], rotate: [0, 2, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="noise-layer pointer-events-none absolute inset-0 opacity-[0.055]" />
      <div className="absolute left-1/2 top-28 h-px w-[82vw] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      
      {/* Full-width video background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full scale-110 object-cover opacity-35"
          src={asciiVideoSrc}
          muted
          loop
          playsInline
          autoPlay
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-ink/48" />
        <Video2Ascii
          src={asciiVideoSrc}
          numColumns={120}
          colored={true}
          brightness={0.92}
          blend={0}
          highlight={0}
          charset="detailed"
          enableMouse={true}
          trailLength={18}
          enableRipple={true}
          rippleSpeed={34}
          audioEffect={0}
          isPlaying={true}
          autoPlay={true}
          className="absolute inset-0 opacity-72"
        />
      </div>
      
      <div className="relative mx-auto grid w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/70 backdrop-blur">
            <Sparkles className="h-4 w-4 text-champagne" />
            Chennai built. Systems minded.
          </div>
          <h1 className="font-display text-6xl font-black leading-[0.88] tracking-normal text-balance md:text-8xl lg:text-9xl name-glow">
            Yogeshvaar G E
          </h1>
          <p className="mt-7 text-xl font-semibold text-white/88 md:text-2xl">
            Software Engineer | Data Analyst | Innovator
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/64 md:text-xl">
            Aspiring Software Engineer aiming to leverage strong programming and analytical skills to build impactful and scalable software solutions.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href="#projects" icon={ArrowUpRight}>
              View Projects
            </Button>
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/16 px-6 text-sm font-semibold text-white transition hover:border-white/35 hover:bg-white/10"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-pearl px-5 py-24 text-ink md:px-8 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-end">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.32em] text-ink/50">About</p>
          <h2 className="mt-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Engineering curiosity with business context.
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="text-xl leading-9 text-ink/70">
            I'm a Computer Science and Business Systems student at Sri Sai Ram Engineering College, Chennai, passionate about creating impactful products using software, AI, and modern engineering. I build across web dashboards, backend systems, and AI workflows with a focus on useful execution, measurable impact, and scalable solutions.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {["Web Apps", "AI Systems", "Data Analytics"].map((item) => (
              <div key={item} className="rounded-2xl border border-ink/10 bg-white p-5 shadow-premium">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-ink/48">{item}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="bg-ink px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Capabilities"
          title="A modern stack for building from prototype to production."
          copy="Mobile, web, backend, cloud, and AI tooling connected by practical product judgment."
        />
        <motion.div
          className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-5"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-90px" }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.group}
              variants={fadeUp}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="premium-ring rounded-3xl bg-white/[0.055] p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/[0.085]"
            >
              <h3 className="font-display text-xl font-black text-white">{skill.group}</h3>
              <div className="mt-6 flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-semibold text-white/70"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="bg-white px-5 py-24 text-ink md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Featured Work"
          title="Product thinking, AI depth, and execution in motion."
          copy="Selected builds across visual intelligence, travel technology, IoT automation, and AI creator tools."
          tone="light"
        />
        <motion.div
          className="mt-16 grid gap-5 md:grid-cols-2"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-90px" }}
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              variants={fadeUp}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.01 }}
              className={`group relative overflow-hidden rounded-3xl p-7 shadow-premium ${
                index % 3 === 0 ? "bg-ink text-white" : "border border-ink/10 bg-pearl text-ink"
              }`}
            >
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-champagne/20 blur-3xl transition duration-500 group-hover:scale-125" />
              <div className="relative">
                <div
                  className={`mb-10 inline-flex h-11 w-11 items-center justify-center rounded-full ${
                    index % 3 === 0 ? "bg-white text-ink" : "bg-ink text-white"
                  }`}
                >
                  <ArrowUpRight className="h-5 w-5" />
                </div>
                <h3 className="font-display text-3xl font-black">{project.title}</h3>
                <p
                  className={`mt-5 min-h-24 text-base leading-7 ${
                    index % 3 === 0 ? "text-white/66" : "text-ink/64"
                  }`}
                >
                  {project.description}
                </p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-full px-3 py-1.5 text-xs font-bold ${
                        index % 3 === 0
                          ? "border border-white/10 bg-white/[0.08] text-white/72"
                          : "border border-ink/10 bg-white text-ink/64"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Achievements() {
  return (
    <section className="bg-ink px-5 py-24 text-white md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Recognition"
          title="Signals that the work is already competing in serious rooms."
        />
        <motion.div
          className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-90px" }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement}
              variants={fadeUp}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl border border-white/10 bg-white/[0.055] p-6 backdrop-blur transition hover:bg-white/[0.085]"
            >
              <p className="text-xs font-black uppercase tracking-[0.26em] text-champagne">
                0{index + 1}
              </p>
              <h3 className="mt-8 min-h-20 font-display text-2xl font-black leading-tight">
                {achievement}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Resume() {
  return (
    <section className="bg-pearl px-5 py-20 text-ink md:px-8 md:py-28">
      <Reveal className="mx-auto flex max-w-6xl flex-col gap-8 rounded-[2rem] border border-ink/10 bg-white p-7 shadow-premium md:flex-row md:items-center md:justify-between md:p-10">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.32em] text-ink/48">Resume</p>
          <h2 className="mt-4 font-display text-4xl font-black leading-tight">
            A concise view of the build record.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-ink/62">
            Includes internships, engineering education, AI and IoT projects, certifications,
            patents, and hackathon recognition.
          </p>
        </div>
        <Button href="/Yogesh_Resume.pdf" variant="light" icon={Download}>
          Download Resume
        </Button>
      </Reveal>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-white px-5 py-24 text-ink md:px-8 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_0.8fr] md:items-center">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.32em] text-ink/48">Contact</p>
          <h2 className="mt-5 font-display text-5xl font-black leading-tight text-balance md:text-7xl">
            Let's build something useful, intelligent, and durable.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/64">
            Open to product conversations, engineering opportunities, AI builds, innovation
            projects, and collaborations where technology has a clear business purpose.
          </p>
        </Reveal>
        <Reveal delay={0.08} className="rounded-[2rem] bg-ink p-7 text-white shadow-glass">
          <a
            href="mailto:yogeshshange15@gmail.com"
            className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-5 transition hover:bg-white/[0.1]"
          >
            <span className="break-all text-lg font-semibold">yogeshshange15@gmail.com</span>
            <Mail className="h-5 w-5 shrink-0 text-champagne" />
          </a>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <a
              href="https://www.linkedin.com/in/yogeshvaar-elango-5716bb296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noreferrer"
              className="flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-white text-sm font-bold text-ink transition hover:bg-champagne"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href="https://github.com/Yogeshvaar"
              target="_blank"
              rel="noreferrer"
              className="flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-white/12 text-sm font-bold text-white transition hover:bg-white/10"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink px-5 py-10 text-white md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
        <p className="font-display font-black text-white">Yogeshvaar G E</p>
        <p>Software Engineer | Data Analyst | Innovator</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
