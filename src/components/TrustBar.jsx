const companies = [
  {
    name: 'נובה סולושנס',
    logo: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="6" fill="#2563EB" opacity="0.9" />
        <circle cx="14" cy="14" r="12" stroke="#2563EB" strokeWidth="1.5" opacity="0.3" />
        <circle cx="14" cy="6" r="2.5" fill="#2563EB" />
      </svg>
    ),
  },
  {
    name: 'קפיטל גרופ',
    logo: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="14" width="6" height="11" rx="1" fill="#0F4C81" opacity="0.9" />
        <rect x="11" y="9" width="6" height="16" rx="1" fill="#0F4C81" opacity="0.7" />
        <rect x="18" y="4" width="6" height="21" rx="1" fill="#0F4C81" opacity="0.5" />
      </svg>
    ),
  },
  {
    name: 'מרקט פלוס',
    logo: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 14 L14 4 L24 14 L14 24 Z" fill="#E8A020" opacity="0.85" />
        <path d="M10 14 L14 10 L18 14 L14 18 Z" fill="white" opacity="0.9" />
      </svg>
    ),
  },
  {
    name: 'לנד & פרטנרס',
    logo: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="3" width="10" height="10" rx="2" fill="#1E3A5F" opacity="0.9" />
        <rect x="15" y="3" width="10" height="10" rx="2" fill="#1E3A5F" opacity="0.5" />
        <rect x="3" y="15" width="10" height="10" rx="2" fill="#1E3A5F" opacity="0.5" />
        <rect x="15" y="15" width="10" height="10" rx="2" fill="#E8A020" opacity="0.9" />
      </svg>
    ),
  },
  {
    name: 'פינטק ישראל',
    logo: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3 L25 9.5 L25 18.5 L14 25 L3 18.5 L3 9.5 Z" stroke="#0F4C81" strokeWidth="1.8" fill="none" opacity="0.5" />
        <path d="M14 8 L20 11.5 L20 16.5 L14 20 L8 16.5 L8 11.5 Z" fill="#0F4C81" opacity="0.85" />
      </svg>
    ),
  },
];

export default function TrustBar() {
  return (
    <section className="bg-navy py-10 relative overflow-hidden">
      {/* Background decoration */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {/* Dot grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
        {/* Glowing orbs */}
        <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-blue-400/10 blur-3xl" />
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-96 h-32 bg-white/[0.03] blur-2xl rounded-full" />
      </div>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <p className="text-white/50 text-sm font-medium text-center mb-8 tracking-widest uppercase">
          מעל 212 מעסיקים כבר בוטחים בנו
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-10">
          {companies.map((co) => (
            <div
              key={co.name}
              className="flex items-center gap-3 px-5 py-3 bg-white/[0.06] border border-white/10 rounded-xl hover:bg-white/10 transition-colors"
            >
              {co.logo}
              <span className="text-white/70 text-sm font-semibold tracking-tight">{co.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

