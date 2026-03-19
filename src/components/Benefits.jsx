const benefits = [
  {
    title: 'עד 8 שעות חוזרות אליכם',
    desc: 'דיווח פנסיוני ידני לוקח שעות מזמן ניהול יקר. אנחנו עושים את כל העבודה — אתם מנצלים את הזמן לדברים שחשובים.',
    stat: '8h+',
    statLabel: 'שעות חיסכון חודשי',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'אפס קנסות — מובטח',
    desc: 'טעות בדיווח פנסיוני עולה כסף רב. הצוות המקצועי שלנו מוודא ציות מושלם לרגולציה עדכנית בכל חודש.',
    stat: '₪0',
    statLabel: 'קנסות בממוצע ללקוח',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'שקיפות מלאה בכל עת',
    desc: 'תקבלו דוח חודשי מפורט ובהיר. כל דיווח, כל עובד, כל שינוי — מסודר ומתועד כך שתוכלו לעקוב בכל רגע.',
    stat: '100%',
    statLabel: 'שקיפות ובקרה',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-[#F7F8FA]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">למה שירות PRO</span>
          <h2 className="text-4xl font-extrabold text-navy mt-3 mb-4">הערך שמקבלים המעסיקים שלנו</h2>
          <p className="text-gray-400 text-lg max-w-lg mx-auto font-light">
            לא רק שירות — שותף עסקי שמטפל בכל מה שקשור לדיווח הפנסיוני שלכם.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:shadow-navy/5 transition-all hover:-translate-y-1 group"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-navy/5 text-navy flex items-center justify-center mb-6 group-hover:bg-navy group-hover:text-white transition-all">
                {b.icon}
              </div>

              {/* Stat */}
              <div className="mb-4">
                <span className="text-4xl font-black text-navy leading-none">{b.stat}</span>
                <span className="block text-xs text-gray-400 mt-1 font-medium">{b.statLabel}</span>
              </div>

              <h3 className="text-xl font-bold text-navy mb-3">{b.title}</h3>
              <p className="text-gray-400 leading-relaxed font-light text-[15px]">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
