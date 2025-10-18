export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center text-center px-6 text-black">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Design by Prachiti
        </h1>
        <p className="mt-4 text-base md:text-lg opacity-90">
          Discovering design in every detail.
        </p>
        <div className="mt-6 flex gap-4 justify-center">
          <a href="/blog" className="px-5 py-2.5 rounded-xl bg-red-100 text-black hover:opacity-90 transition">
            To Blogs
          </a>
          <a href="/contact" className="px-5 py-2.5 rounded-xl border border-border hover:bg-accent hover:text-accent-foreground transition">
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
