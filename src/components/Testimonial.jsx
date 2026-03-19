export default function Testimonial() {
  return (
    <section id="testimonial" className="relative py-28 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=80"
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-navy/90" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        {/* Quote mark */}
        <svg
          className="w-14 h-14 text-gold/30 mx-auto mb-8"
          fill="currentColor"
          viewBox="0 0 32 32"
          aria-hidden="true"
        >
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>

        <blockquote className="text-white text-2xl lg:text-3xl font-light leading-relaxed mb-10 max-w-3xl mx-auto">
          "מאז שעברנו לשירות PRO, אנחנו לא צריכים לחשוב על פנסיה בכלל. הכל מסודר, מדויק, בזמן — ועם דוחות ברורים שאני מבין בשניה. זה שחרר לנו זמן ניהול משמעותי."
        </blockquote>

        <div className="flex flex-col items-center gap-1">
          <div className="w-10 h-px bg-gold mb-4" />
          <p className="text-white font-semibold text-base">מנכ"ל, חברת טכנולוגיה בת 80 עובדים</p>
          <p className="text-white/40 text-sm">תל אביב</p>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-white/10 pt-12">
          {[
            { num: '200+', label: 'מעסיקים פעילים' },
            { num: '99.8%', label: 'דיוק בדיווחים' },
            { num: '5 שנים', label: 'ניסיון בתחום' },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-4xl font-black text-gold mb-2">{s.num}</div>
              <div className="text-white/60 text-sm font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
