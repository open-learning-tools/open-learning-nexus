import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Open Learning Tools — Every learning moment, measured and understood" },
      {
        name: "description",
        content:
          "OLT is an open source, hosted suite of seven learning tools that captures rich behavioral data across every learning surface — under one student identity, in one open standard.",
      },
      { property: "og:title", content: "Open Learning Tools (OLT)" },
      {
        property: "og:description",
        content:
          "A unified, open source suite of learning tools — annotation, video, docs, flashcards, quizzes, code, and AI tutoring — instrumented end-to-end with xAPI.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap",
      },
    ],
  }),
  component: Index,
});

const tools = [
  { name: "Hypothesis", desc: "Annotate textbooks and readings", icon: "M4 4h12l4 4v12H4z M16 4v4h4" },
  { name: "PeerTube", desc: "Watch and engage with instructional video", icon: "M8 5v14l11-7z" },
  { name: "CryptPad", desc: "Collaborate on documents and slides", icon: "M6 4h9l5 5v11H6z M14 4v6h6" },
  { name: "Scholarsome", desc: "Practice with flashcards", icon: "M3 7h14v12H3z M7 4h14v12" },
  { name: "H5P", desc: "Complete interactive quizzes", icon: "M9 11l3 3 7-7 M3 12a9 9 0 1018 0 9 9 0 00-18 0" },
  { name: "code-server", desc: "Write and run code in the browser", icon: "M8 6l-6 6 6 6 M16 6l6 6-6 6 M14 4l-4 16" },
  { name: "LibreChat", desc: "Learn with an AI tutor", icon: "M21 11a8 8 0 01-12.6 6.5L3 19l1.5-5.4A8 8 0 1121 11z" },
];

function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="4" fill="currentColor" />
      </svg>
      <span className="font-semibold tracking-tight">Open Learning Tools</span>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <header className="sticky top-0 z-30 backdrop-blur-md bg-background/80 border-b hairline">
        <div className="container-prose flex items-center justify-between py-4">
          <Logo />
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#platform" className="hover:text-foreground transition-colors">Platform</a>
            <a href="#schools" className="hover:text-foreground transition-colors">Schools</a>
            <a href="#researchers" className="hover:text-foreground transition-colors">Researchers</a>
            <a href="#open-source" className="hover:text-foreground transition-colors">Open Source</a>
          </nav>
          <a href="#demo" className="btn btn-primary text-xs px-4 py-2">Request a Demo</a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-grid pointer-events-none" aria-hidden />
        <div className="container-prose relative pt-24 pb-28 md:pt-36 md:pb-40">
          <div className="max-w-4xl">
            <p className="eyebrow mb-6">Open source learning analytics · olt.academy</p>
            <h1 className="display text-5xl md:text-7xl">
              Every learning moment,<br />
              <span className="italic text-[color:var(--accent-amber)]">measured</span> and understood.
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              A unified, open source suite of seven learning tools — readings, video, documents,
              flashcards, quizzes, coding environments, and AI tutoring — that captures rich behavioral
              data across every learning surface, under one student identity.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#demo" className="btn btn-primary">
                Request a Demo
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="btn btn-ghost">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.34-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 015.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z"/>
                </svg>
                View on GitHub
              </a>
            </div>
          </div>

          {/* xAPI stream visualization */}
          <div className="relative mt-20 mx-auto max-w-3xl hidden md:block" aria-hidden>
            <svg viewBox="0 0 800 140" className="w-full">
              {[...Array(7)].map((_, i) => (
                <line
                  key={i}
                  x1={60 + i * 110} y1="20"
                  x2="400" y2="120"
                  stroke="oklch(0.21 0.045 255)" strokeOpacity="0.18" strokeWidth="1"
                />
              ))}
              {[...Array(7)].map((_, i) => (
                <g key={`n-${i}`}>
                  <circle cx={60 + i * 110} cy="20" r="6" fill="oklch(0.21 0.045 255)" />
                  <text x={60 + i * 110} y="8" textAnchor="middle" fontSize="9" fill="oklch(0.45 0.02 260)">
                    {tools[i].name}
                  </text>
                </g>
              ))}
              <circle cx="400" cy="120" r="10" fill="oklch(0.62 0.15 150)" />
              <text x="400" y="138" textAnchor="middle" fontSize="10" fontWeight="600" fill="oklch(0.21 0.045 255)">
                Single learning record · xAPI
              </text>
            </svg>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="border-t hairline">
        <div className="container-prose py-24 md:py-32 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="eyebrow">The Problem</p>
          </div>
          <div className="md:col-span-8">
            <p className="display text-3xl md:text-4xl leading-tight">
              Learning happens across a dozen tools. The data lives in none of them.
            </p>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Annotations, video watch-time, quiz attempts, code submissions, tutor conversations —
              each lives behind its own login, in its own proprietary format, or simply isn't
              captured at all. Schools end up with grades and attendance, and almost no signal about
              how students actually learn.
            </p>
          </div>
        </div>
      </section>

      {/* Platform */}
      <section id="platform" className="border-t hairline bg-secondary/40">
        <div className="container-prose py-24 md:py-32">
          <div className="max-w-2xl mb-14">
            <p className="eyebrow mb-4">The Platform</p>
            <h2 className="display text-4xl md:text-5xl">
              Seven open source tools.<br />One coherent learning record.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {tools.map((t) => (
              <div key={t.name} className="tool-card">
                <div className="tool-icon mb-5">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d={t.icon} />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg">{t.name}</h3>
                <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 max-w-2xl">
            <p className="text-base md:text-lg text-foreground leading-relaxed">
              Every interaction across all seven tools flows into a single learning record —
              attributed to one student, in one open standard{" "}
              <span className="font-mono text-sm bg-background border hairline px-1.5 py-0.5 rounded">xAPI</span>.
            </p>
          </div>
        </div>
      </section>

      {/* For Schools */}
      <section id="schools" className="bg-[color:var(--navy)] text-[color:var(--navy-foreground)]">
        <div className="container-prose py-24 md:py-32 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <p className="eyebrow">For Schools</p>
            <h2 className="display text-4xl md:text-5xl mt-4">
              Hosted, integrated, and yours to keep.
            </h2>
            <p className="mt-6 text-base text-[color:var(--navy-foreground)]/70 leading-relaxed">
              Pricing: <span className="text-[color:var(--accent-amber)]">Contact us for institutional pricing.</span>
            </p>
            <a href="#demo" className="btn btn-on-navy-primary mt-8">
              Request a Demo
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="md:col-span-7">
            {[
              ["Hosted solution, fully managed", "We run the infrastructure. You focus on teaching."],
              ["Single sign-on across all tools", "One account per student — no shuffling between logins."],
              ["FERPA-compliant data handling", "Educational records stay protected, by design and by policy."],
              ["No vendor lock-in", "Built entirely on open source. Self-host any time, no migration penalty."],
            ].map(([title, body]) => (
              <div key={title} className="check-row">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="oklch(0.62 0.15 150)" strokeWidth="2" className="mt-0.5 shrink-0">
                  <path d="M5 12l5 5L20 7" />
                </svg>
                <div>
                  <h3 className="font-medium">{title}</h3>
                  <p className="text-sm text-[color:var(--navy-foreground)]/65 mt-1">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Researchers */}
      <section id="researchers" className="border-t hairline">
        <div className="container-prose py-24 md:py-32 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <p className="eyebrow">For Researchers</p>
            <h2 className="display text-4xl md:text-5xl mt-4">
              Anonymized learning data, openly accessible.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              OLT contributes anonymized learning datasets to the{" "}
              <span className="text-foreground font-medium">Massachusetts Data Commons</span>,
              available to credentialed researchers under standard data-use agreements.
            </p>
            <a href="mailto:research@olt.academy" className="btn btn-primary mt-8">
              Request Data Access
            </a>
            <p className="text-xs text-muted-foreground mt-4">
              Data shared in accordance with FERPA and IRB guidelines.
            </p>
          </div>
          <div className="md:col-span-7 space-y-6">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Data covers</h4>
              <ul className="space-y-2 text-base">
                <li className="flex gap-3"><span className="text-[color:var(--accent-amber)]">—</span> Behavioral engagement across reading, video, and code</li>
                <li className="flex gap-3"><span className="text-[color:var(--accent-amber)]">—</span> Assessment outcomes from quizzes and flashcard practice</li>
                <li className="flex gap-3"><span className="text-[color:var(--accent-amber)]">—</span> Demographic context, anonymized at the cohort level</li>
                <li className="flex gap-3"><span className="text-[color:var(--accent-amber)]">—</span> Cross-tool learning patterns under a unified identity</li>
              </ul>
            </div>
            <div className="border-t hairline pt-6">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Useful for</h4>
              <div className="flex flex-wrap gap-2">
                {["Learning science", "AI model training", "Educational equity research"].map((t) => (
                  <span key={t} className="text-sm border hairline rounded-full px-3 py-1.5">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Source */}
      <section id="open-source" className="border-t hairline bg-secondary/40">
        <div className="container-prose py-24 md:py-32">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-5">
              <p className="eyebrow">Open Source</p>
              <h2 className="display text-4xl md:text-5xl mt-4">
                MIT-licensed.<br />Forkable. Yours.
              </h2>
            </div>
            <div className="md:col-span-7">
              <p className="text-lg text-muted-foreground leading-relaxed">
                OLT Academy is MIT-licensed open source — free to use, modify, and self-host
                without restriction. The full instrumentation layer, LRS pipeline, and SSO
                wrapper live in the public repository.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="btn btn-primary">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.34-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 015.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z"/>
                  </svg>
                  View on GitHub
                </a>
                <a href="#" className="btn btn-ghost">Read the docs</a>
              </div>
              <p className="mt-8 text-sm text-muted-foreground italic border-l-2 border-[color:var(--accent-amber)] pl-4">
                Want to contribute instrumentation for a new tool? We welcome pull requests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo CTA */}
      <section id="demo" className="border-t hairline">
        <div className="container-prose py-24 md:py-28 text-center">
          <h2 className="display text-4xl md:text-6xl max-w-3xl mx-auto">
            See what your students' learning actually looks like.
          </h2>
          <div className="mt-10 flex justify-center gap-3 flex-wrap">
            <a href="mailto:hello@olt.academy" className="btn btn-primary">Request a Demo</a>
            <a href="mailto:research@olt.academy" className="btn btn-ghost">Request Data Access</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t hairline">
        <div className="container-prose py-14">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-5">
              <Logo />
              <p className="mt-3 text-sm text-muted-foreground">olt.academy</p>
              <p className="mt-6 text-xs text-muted-foreground">
                Developed in Cambridge, MA · MIT License
              </p>
            </div>
            <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">
              <div>
                <p className="font-semibold mb-3">Project</p>
                <a href="https://github.com" className="block text-muted-foreground hover:text-foreground py-1">GitHub</a>
                <a href="#open-source" className="block text-muted-foreground hover:text-foreground py-1">License</a>
              </div>
              <div>
                <p className="font-semibold mb-3">Schools</p>
                <a href="#demo" className="block text-muted-foreground hover:text-foreground py-1">Request Demo</a>
                <a href="#schools" className="block text-muted-foreground hover:text-foreground py-1">Pricing</a>
              </div>
              <div>
                <p className="font-semibold mb-3">Research</p>
                <a href="mailto:research@olt.academy" className="block text-muted-foreground hover:text-foreground py-1">Data Access</a>
                <a href="#researchers" className="block text-muted-foreground hover:text-foreground py-1">Datasets</a>
              </div>
              <div>
                <p className="font-semibold mb-3">Contact</p>
                <a href="mailto:hello@olt.academy" className="block text-muted-foreground hover:text-foreground py-1">hello@olt.academy</a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-6 border-t hairline flex flex-col sm:flex-row justify-between gap-3 text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} Open Learning Tools. Released under the MIT License.</p>
            <p>Every learning moment, measured and understood.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
