export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="border-b border-slate-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-black tracking-tight">ROISTAR</h1>

          <div className="flex items-center gap-4">
            <a href="https://roistar.app" className="text-sm font-medium text-slate-600 hover:text-slate-900">
              Login
            </a>
            <a href="https://roistar.app/signup" className="rounded-xl bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-700">
              Start Free Trial
            </a>
          </div>
        </div>
      </nav>

      <section className="mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center">
        <span className="mb-6 rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
          Property Maintenance Software
        </span>

        <h1 className="max-w-5xl text-5xl font-black tracking-tight text-slate-900 md:text-7xl">
          Run Your Entire Operation From One Platform
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-8 text-slate-600">
          Roistar helps contractors, property managers, project managers, vendors, and field teams manage jobs, photos, estimates, invoices, payments, and communication in one place.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a href="https://roistar.app/signup" className="rounded-2xl bg-sky-600 px-8 py-4 font-semibold text-white hover:bg-sky-700">
            Start Free Trial
          </a>
          <a href="https://roistar.app" className="rounded-2xl border border-slate-300 px-8 py-4 font-semibold text-slate-700 hover:bg-slate-50">
            Log In
          </a>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-24 md:grid-cols-3">
        {[
          "Job Management",
          "Field Teams",
          "Photos & Documentation",
          "Estimates & Invoices",
          "Online Payments",
          "Team Communication",
        ].map((feature) => (
          <div key={feature} className="rounded-3xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900">{feature}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Manage your operations faster and keep everyone aligned from start to finish.
            </p>
          </div>
        ))}
      </section>

      <footer className="border-t border-slate-200 py-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Roistar. Built for contractors, property managers, and field service teams.
      </footer>
    </main>
  );
}
