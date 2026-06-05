const features = [
  {
    title: "Data Cleaning",
    text: "Clean messy CSV and Excel files, normalize columns, remove duplicates, validate fields, and export client-ready deliverables.",
  },
  {
    title: "Data Quality",
    text: "Detect missing values, duplicate rows, risky fields, required-field issues, and rows needing manual review.",
  },
  {
    title: "DuckDB Warehouse",
    text: "Load cleaned data into DuckDB, run SQL models, create fact and dimension tables, validate tests, and export reports.",
  },
  {
    title: "Automation",
    text: "Pull API data, normalize records, remove duplicates, validate required fields, and generate scheduled local outputs.",
  },
];

const workflow = [
  "Raw CSV / API data",
  "Clean with Clean0ps",
  "Load DuckDB warehouse",
  "Run SQL models",
  "Create fact + dimension tables",
  "Validate tests",
  "Export reports",
];

const tech = [
  "Python",
  "Pandas",
  "Streamlit",
  "DuckDB",
  "SQL",
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Pytest",
];

export default function Home() {
  const basePath = process.env.NODE_ENV === "production" ? "/clean0ps-portfolio" : "";
  const githubUrl = "https://github.com/phillipollison/business-analytics-toolkit";
  const liveAppUrl = "https://github.com/phillipollison/business-analytics-toolkit";
  const emailUrl = "mailto:phillip_ollison@yahoo.com";
  const phoneUrl = "tel:+12514630279";

  return (
    <main className="min-h-screen bg-[#020617] text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 py-8 sm:px-10 lg:px-12">
          <nav className="flex items-center justify-between">
            <div className="text-xl font-black tracking-tight">Phillip Ollison</div>
            <div className="hidden gap-6 text-sm text-slate-300 md:flex">
              <a href="#project" className="hover:text-white">Project</a>
              <a href="#pipeline" className="hover:text-white">Pipeline</a>
              <a href="#stack" className="hover:text-white">Stack</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </div>
          </nav>

          <div className="grid items-center gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="mb-5 inline-flex rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm font-bold text-sky-300">
                Data Cleaning · Automation · DuckDB Warehouse · SQL Modeling
              </div>

              <h1 className="max-w-4xl text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
                I build practical data systems that turn messy data into clean, tested workflows.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Clean0ps is my data engineering portfolio project. It cleans raw files,
                validates data quality, automates API-style workflows, loads DuckDB warehouse
                tables, runs SQL models, and exports reports that are ready for review.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={liveAppUrl}
                  className="rounded-xl bg-sky-400 px-6 py-3 text-center text-sm font-black text-slate-950 shadow-lg shadow-sky-500/20 hover:bg-sky-300"
                >
                  View Clean0ps Project
                </a>
                <a
                  href={githubUrl}
                  className="rounded-xl border border-white/15 px-6 py-3 text-center text-sm font-black text-white hover:border-sky-400/60 hover:bg-white/5"
                >
                  View GitHub Repo
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 shadow-2xl shadow-sky-950/40">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950">
                <img
                  src={`${basePath}/profile.jpg`}
                  alt="Phillip Ollison"
                  className="h-[420px] w-full object-cover"
                />
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-2xl border border-white/10 bg-slate-950 p-4">
                  <div className="text-2xl font-black">8+</div>
                  <div className="text-xs text-slate-400">Workflows</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950 p-4">
                  <div className="text-2xl font-black">SQL</div>
                  <div className="text-xs text-slate-400">Models</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950 p-4">
                  <div className="text-2xl font-black">Tests</div>
                  <div className="text-xs text-slate-400">Validation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="project" className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-widest text-sky-300">
            Featured Project
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-tight">
            Clean0ps: Data Cleaning and Warehouse Automation Toolkit
          </h2>
          <p className="mt-4 text-slate-300">
            Built to show practical data work from messy inputs to modeled, validated,
            report-ready outputs.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-sky-400/40"
            >
              <h3 className="text-lg font-black">{feature.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="pipeline" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
          <p className="text-sm font-black uppercase tracking-widest text-sky-300">
            Data Engineering Pipeline
          </p>
          <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-tight">
            From raw files to tested warehouse reports.
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {workflow.map((step, index) => (
              <div key={step} className="rounded-2xl border border-white/10 bg-slate-950 p-5">
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-sky-400 text-sm font-black text-slate-950">
                  {index + 1}
                </div>
                <p className="font-bold text-white">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="stack" className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <p className="text-sm font-black uppercase tracking-widest text-sky-300">
          Tech Stack
        </p>
        <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-tight">
          Built with tools used across modern analytics and engineering teams.
        </h2>

        <div className="mt-10 flex flex-wrap gap-3">
          {tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-bold text-slate-200"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <section id="contact" className="border-t border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="text-sm font-black uppercase tracking-widest text-sky-300">
                Contact
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-tight">
                Looking for data analyst, BI, analytics engineering, or junior data engineering opportunities.
              </h2>
              <p className="mt-4 leading-7 text-slate-300">
                This portfolio is built to show real workflow thinking: cleaning,
                validation, automation, SQL modeling, testing, and reporting.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-950 p-6">
              <h3 className="text-xl font-black">Project Links</h3>
              <div className="mt-5 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-sky-300">Email</p>
                  <p className="mt-1 break-all text-sm text-slate-300">phillip_ollison@yahoo.com</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-sky-300">Phone</p>
                  <p className="mt-1 text-sm text-slate-300">(251) 463-0279</p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <a href={emailUrl} className="rounded-xl bg-sky-400 px-5 py-3 text-center font-black text-slate-950 hover:bg-sky-300">
                    Email Me
                  </a>
                  <a href={phoneUrl} className="rounded-xl bg-emerald-400 px-5 py-3 text-center font-black text-slate-950 hover:bg-emerald-300">
                    Call Me
                  </a>
                </div>

                <a href={liveAppUrl} className="block rounded-xl border border-white/10 px-5 py-3 text-center font-black hover:bg-white/5">
                  Clean0ps Project
                </a>
                <a href={githubUrl} className="block rounded-xl border border-white/10 px-5 py-3 text-center font-black hover:bg-white/5">
                  GitHub Repository
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
