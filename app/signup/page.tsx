export default function SignupPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-5xl">
        <nav className="mb-12 flex items-center justify-between">
          <a href="/" className="text-2xl font-black tracking-tight">
            ROISTAR
          </a>

          <a
            href="https://roistar.app"
            className="rounded-xl border border-white/15 px-4 py-2 text-sm font-semibold text-white/80 hover:bg-white/10"
          >
            Login
          </a>
        </nav>

        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <section>
            <p className="mb-4 inline-flex rounded-full bg-sky-500/10 px-4 py-2 text-sm font-bold text-sky-300">
              Start your Roistar trial
            </p>

            <h1 className="max-w-3xl text-5xl font-black tracking-tight md:text-6xl">
              Let’s see if Roistar is the right fit for your operation.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Tell us about your company and we’ll follow up with demo access,
              pricing, and the fastest path to get your team running jobs,
              photos, invoices, payments, and communication in one place.
            </p>

            <div className="mt-8 grid gap-4 text-sm text-slate-300 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                Built for contractors, PMs, handyman teams, and property maintenance.
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                Perfect for teams that need jobs, vendors, photos, and invoices organized.
              </div>
            </div>
          </section>

          <form
            action="https://formsubmit.co/francisco@fl4sh.org"
            method="POST"
            className="rounded-3xl border border-white/10 bg-white p-6 text-slate-950 shadow-2xl"
          >
            <input type="hidden" name="_subject" value="New Roistar Trial Request" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value="https://roistar.org/signup/thank-you" />

            <h2 className="text-2xl font-black">Request Free Trial</h2>
            <p className="mt-2 text-sm text-slate-500">
              We’ll send your request directly to the Roistar team.
            </p>

            <div className="mt-6 space-y-4">
              <label className="block space-y-2">
                <span className="text-xs font-black uppercase tracking-wide text-slate-500">
                  Company Name
                </span>
                <input name="company_name" required className="min-h-12 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none focus:border-sky-500" />
              </label>

              <label className="block space-y-2">
                <span className="text-xs font-black uppercase tracking-wide text-slate-500">
                  Full Name
                </span>
                <input name="full_name" required className="min-h-12 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none focus:border-sky-500" />
              </label>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block space-y-2">
                  <span className="text-xs font-black uppercase tracking-wide text-slate-500">
                    Email
                  </span>
                  <input type="email" name="email" required className="min-h-12 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none focus:border-sky-500" />
                </label>

                <label className="block space-y-2">
                  <span className="text-xs font-black uppercase tracking-wide text-slate-500">
                    Phone
                  </span>
                  <input name="phone" className="min-h-12 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none focus:border-sky-500" />
                </label>
              </div>

              <label className="block space-y-2">
                <span className="text-xs font-black uppercase tracking-wide text-slate-500">
                  Business Type
                </span>
                <select name="business_type" className="min-h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none focus:border-sky-500">
                  <option>Contractor</option>
                  <option>Property Management</option>
                  <option>Project Manager</option>
                  <option>Handyman Business</option>
                  <option>Property Maintenance</option>
                  <option>Field Service Team</option>
                </select>
              </label>

              <label className="block space-y-2">
                <span className="text-xs font-black uppercase tracking-wide text-slate-500">
                  What are you trying to manage?
                </span>
                <textarea name="message" rows={4} className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-sky-500" />
              </label>

              <button className="min-h-12 w-full rounded-xl bg-sky-600 px-4 py-3 text-sm font-black text-white hover:bg-sky-700">
                Send Trial Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
