import DashboardMockup from './DashboardMockup';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#F7F8FA] flex items-center overflow-hidden pt-24 pb-16">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-navy/[0.03] rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-gold/[0.05] rounded-full translate-y-1/2" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Text content — right side in RTL */}
          <div className="flex-1 text-right">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 text-gold-dark text-xs font-semibold px-4 py-2 rounded-full mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              דיווח פנסיוני מקצועי למעסיקים
            </div>

            <h1 className="text-5xl lg:text-6xl font-extrabold text-navy leading-[1.1] mb-6 tracking-tight">
              שקט נפשי מלא
              <br />
              <span className="text-gold">למעסיקים.</span>
              <br />
              הדיווח הפנסיוני
              <br />
              עלינו.
            </h1>

            <p className="text-lg text-gray-500 leading-relaxed mb-10 max-w-md font-light">
              אנחנו מנהלים את כל הדיווח הפנסיוני שלכם — במדויק, בזמן, וללא כאבי ראש.
              <br />
              אתם מתמקדים בעסק. אנחנו דואגים לכל השאר.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-navy text-white font-semibold text-base px-8 py-4 rounded-xl hover:bg-navy-light transition-all shadow-lg shadow-navy/20 hover:shadow-navy/30 hover:-translate-y-0.5"
              >
                קבל ייעוץ חינם
                <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 text-navy font-semibold text-base px-8 py-4 rounded-xl border-2 border-navy/15 hover:border-navy/30 transition-all hover:bg-navy/5"
              >
                גלה איך זה עובד
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>

            {/* Quick trust signals */}
            <div className="flex flex-wrap gap-6 mt-10 text-sm text-gray-400">
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                ללא התחייבות
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                ציות מלא לרגולציה
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                מעל 200 מעסיקים
              </div>
            </div>
          </div>

          {/* Dashboard mockup — left side in RTL */}
          <div className="flex-1 w-full flex justify-center lg:justify-start">
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
