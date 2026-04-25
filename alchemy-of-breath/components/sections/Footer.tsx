export function Footer() {
  return (
    <footer className="relative z-20 mx-auto w-full max-w-6xl px-6 pb-12 md:px-10">
      <div className="border-t border-cream/10 pt-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-2">
            <span className="relative inline-block h-2 w-2 rounded-full bg-ember2" />
            <span className="serif text-base">Alchemy of Breath</span>
            <span className="text-cream/30">·</span>
            <span className="text-sm text-cream/50">Online Breathwork training & events</span>
          </div>
          <ul className="flex flex-wrap items-center gap-6 text-sm text-cream/55">
            <li><a href="/" className="hover:text-cream">Foundations</a></li>
            <li><a href="/transforming-anxiety" className="hover:text-cream">Transforming Anxiety</a></li>
            <li><a href="#curriculum" className="hover:text-cream">Curriculum</a></li>
            <li><a href="#" className="hover:text-cream">Privacy</a></li>
          </ul>
        </div>
        <p className="mt-8 max-w-3xl text-xs text-cream/45">
          Alchemy of Breath is not a medical practice and facilitators are
          not medically trained. The content of this site is for
          educational and contemplative purposes and is not a substitute
          for medical or psychological care.
        </p>
        <p className="mt-3 text-xs text-cream/35">
          © {new Date().getFullYear()} Alchemy of Breath.
        </p>
      </div>
    </footer>
  );
}
