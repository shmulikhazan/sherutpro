const steps = [
  {
    num: '01',
    title: 'פגישת היכרות קצרה',
    desc: 'אנחנו מקשיבים לצרכים שלכם, מבינים את גודל החברה ומסבירים בדיוק איך התהליך עובד. ללא מחויבות.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'חיבור למערכות השכר',
    desc: 'הצוות שלנו מתחבר למערכת השכר הקיימת, מגדיר את כל הפרמטרים ומוודא שהכל תקין לפני הדיווח הראשון.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'שקט נפשי מובטח',
    desc: 'מכאן ואילך — הדיווח החודשי מנוהל אוטומטית על ידינו. תקבלו דוח חודשי ברור, וניתן להתייעץ עם הצוות שלנו בכל עת.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 bg-white overflow-hidden">
      {/* Subtle ambient background photo */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=60"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-[0.04]"
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">תהליך העבודה</span>
          <h2 className="text-4xl font-extrabold text-navy mt-3 mb-4">שלושה שלבים לשקט נפשי</h2>
          <p className="text-gray-400 text-lg max-w-lg mx-auto font-light">
            מפגישת ההיכרות ועד לדיווח החודשי השוטף — אנחנו מטפלים בהכל.
          </p>
        </div>

        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-16 right-[calc(16.67%-20px)] left-[calc(16.67%-20px)] h-px bg-gradient-to-l from-transparent via-navy/10 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {steps.map((step, i) => (
              <div key={i} className="relative flex flex-col items-start lg:items-center text-right lg:text-center">
                {/* Number + icon */}
                <div className="flex items-center gap-4 lg:flex-col lg:gap-3 mb-6">
                  <div className="relative flex-shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-navy flex items-center justify-center text-white shadow-lg shadow-navy/20">
                      {step.icon}
                    </div>
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gold text-white text-[10px] font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>
                  <span className="text-6xl font-black text-navy/5 lg:hidden">{step.num}</span>
                </div>

                <span className="hidden lg:block text-7xl font-black text-navy/5 leading-none mb-3">{step.num}</span>

                <h3 className="text-xl font-bold text-navy mb-3">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed font-light text-[15px]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
