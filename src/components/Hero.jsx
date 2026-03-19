import DashboardMockup from './DashboardMockup';

/* ── Floating badge components ───────────────────── */
function ToastNotification() {
  return (
    <div
      className="absolute z-10 flex items-center gap-2.5 bg-white rounded-2xl shadow-xl shadow-navy/10 border border-gray-100 px-4 py-3"
      style={{
        top: '-22px',
        left: '10px',
        animation: 'floatA 4s ease-in-out infinite',
        minWidth: '190px',
      }}
    >
      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
        <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <div className="text-right">
        <p className="text-[11px] font-bold text-navy leading-none mb-0.5">דיווח נשלח בהצלחה!</p>
        <p className="text-[10px] text-gray-400 leading-none">פברואר 2025 · 847 עובדים</p>
      </div>
    </div>
  );
}

function SavingsBadge() {
  return (
    <div
      className="absolute z-10 flex items-center gap-2 bg-navy rounded-2xl shadow-xl shadow-navy/25 px-4 py-3"
      style={{
        bottom: '28px',
        left: '-28px',
        animation: 'floatB 5s ease-in-out infinite',
      }}
    >
      <span className="text-gold text-lg font-black leading-none">₪0</span>
      <div className="text-right">
        <p className="text-white text-[10px] font-semibold leading-none mb-0.5">קנסות השנה</p>
        <p className="text-white/40 text-[9px] leading-none">ציות מושלם</p>
      </div>
    </div>
  );
}

function TimeBadge() {
  return (
    <div
      className="absolute z-10 flex items-center gap-2 bg-white rounded-2xl shadow-xl shadow-navy/10 border border-gray-100 px-4 py-3"
      style={{
        top: '38%',
        right: '-36px',
        animation: 'floatC 4.5s ease-in-out infinite',
      }}
    >
      <div className="w-8 h-8 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
        <svg className="w-4 h-4 text-gold-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <div className="text-right">
        <p className="text-[11px] font-bold text-navy leading-none mb-0.5">8 שעות חוזרות</p>
        <p className="text-[10px] text-gray-400 leading-none">לחודש בממוצע</p>
      </div>
    </div>
  );
}

/* ── Decorative background SVG ───────────────────── */
function BackgroundDecor() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Dot grid */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.035]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="#0F2444" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>

      {/* Large soft blobs */}
      <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(251,176,60,0.06) 0%, transparent 70%)' }} />
      <div className="absolute -bottom-60 -left-40 w-[600px] h-[600px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(15,36,68,0.06) 0%, transparent 70%)' }} />

      {/* Decorative arcs */}
      <svg className="absolute top-16 left-12 opacity-[0.07]" width="200" height="200" viewBox="0 0 200 200" fill="none">
        <circle cx="100" cy="100" r="90" stroke="#0F2444" strokeWidth="1" />
        <circle cx="100" cy="100" r="65" stroke="#0F2444" strokeWidth="1" strokeDasharray="4 8" />
        <circle cx="100" cy="100" r="40" stroke="#fbb03c" strokeWidth="1.5" />
      </svg>

      {/* Geometric corner accent */}
      <svg className="absolute bottom-20 right-8 opacity-[0.06]" width="120" height="120" viewBox="0 0 120 120" fill="none">
        <rect x="10" y="10" width="100" height="100" rx="12" stroke="#0F2444" strokeWidth="1.5" />
        <rect x="28" y="28" width="64" height="64" rx="8" stroke="#fbb03c" strokeWidth="1.5" strokeDasharray="5 5" />
        <rect x="46" y="46" width="28" height="28" rx="4" fill="#0F2444" />
      </svg>
    </div>
  );
}

export default function Hero() {
  return (
    <>
      {/* Float keyframes injected once */}
      <style>{`
        @keyframes floatA {
          0%, 100% { transform: translateY(0px) rotate(-1deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
        @keyframes floatB {
          0%, 100% { transform: translateY(0px) rotate(1deg); }
          50% { transform: translateY(-8px) rotate(-1deg); }
        }
        @keyframes floatC {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
      `}</style>

      <section className="relative min-h-screen bg-[#F7F8FA] flex items-center overflow-hidden pt-24 pb-16">
        <BackgroundDecor />

        <div className="relative max-w-6xl mx-auto px-6 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

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

              {/* Price highlight */}
              <div className="inline-flex items-center gap-3 bg-white border border-gold/30 rounded-2xl px-5 py-3.5 mt-8 shadow-sm shadow-gold/10">
                <div className="flex flex-col items-center leading-none bg-gold rounded-xl px-3 py-2">
                  <span className="text-white text-[10px] font-semibold">החל מ</span>
                  <span className="text-white text-2xl font-black leading-none">₪45</span>
                  <span className="text-white/80 text-[9px]">לעובד/חודש</span>
                </div>
                <div className="text-right">
                  <p className="text-navy font-bold text-sm">המחיר הנמוך בשוק</p>
                  <p className="text-gray-400 text-xs font-light">ללא עמלות נסתרות · ללא הפתעות</p>
                </div>
              </div>

              {/* Quick trust signals */}
              <div className="flex flex-wrap gap-6 mt-8 text-sm text-gray-400">
                {['ללא התחייבות', 'ציות מלא לרגולציה', 'מעל 200 מעסיקים'].map((t) => (
                  <div key={t} className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {t}
                  </div>
                ))}
              </div>
            </div>

            {/* Dashboard + floating badges — left side in RTL */}
            <div className="flex-1 w-full flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[420px]" style={{ paddingTop: '32px', paddingBottom: '32px', paddingLeft: '44px', paddingRight: '44px' }}>
                <ToastNotification />
                <SavingsBadge />
                <TimeBadge />
                <DashboardMockup />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
