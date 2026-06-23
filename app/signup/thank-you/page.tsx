export default function ThankYouPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 p-6 text-white">
      <div className="max-w-xl rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
        <h1 className="text-4xl font-black">Thanks for reaching out.</h1>
        <p className="mt-4 text-slate-300">
          Your Roistar trial request was sent. We’ll follow up soon with next steps.
        </p>
        <a
          href="/"
          className="mt-8 inline-flex rounded-xl bg-sky-600 px-5 py-3 text-sm font-black text-white hover:bg-sky-700"
        >
          Back to Home
        </a>
      </div>
    </main>
  );
}
