export function Footer() {
  return (
    <footer className="relative z-20 mx-auto w-full max-w-6xl px-6 pb-12 md:px-10">
      <div className="border-t border-cream/10 pt-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-2">
            <span className="relative inline-block h-2 w-2 rounded-full bg-ember2" />
            <span className="serif text-base">Alchemy of Breath</span>
            <span className="text-cream/30">·</span>
            <span className="text-sm text-cream/50">Est. in stillness</span>
          </div>
          <ul className="flex flex-wrap items-center gap-6 text-sm text-cream/55">
            <li><a href="#" className="hover:text-cream">Practice</a></li>
            <li><a href="#" className="hover:text-cream">Lineage</a></li>
            <li><a href="#" className="hover:text-cream">Research</a></li>
            <li><a href="#" className="hover:text-cream">Privacy</a></li>
          </ul>
        </div>
        <p className="mt-8 text-xs text-cream/35">
          © {new Date().getFullYear()} Alchemy of Breath. Hand-crafted between
          inhale and exhale.
        </p>
      </div>
    </footer>
  );
}
