export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-white/60">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="text-right">
            <img
              src="/logo.png"
              alt="שירות PRO"
              className="h-10 w-auto mb-4 brightness-0 invert opacity-80"
              onError={(e) => { e.target.src = '/logo.svg'; e.target.className = 'h-10 w-auto mb-4 opacity-70'; }}
            />
            <p className="text-sm leading-relaxed font-light">
              דיווח פנסיוני מקצועי ומדויק למעסיקים.
              <br />
              אנחנו מנהלים — אתם מתרכזים בעסק.
            </p>
          </div>

          {/* Links */}
          <div className="text-right">
            <h4 className="text-white font-semibold text-sm mb-4">ניווט מהיר</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'איך זה עובד', href: '#how-it-works' },
                { label: 'יתרונות', href: '#benefits' },
                { label: 'לקוחות', href: '#testimonial' },
                { label: 'צרו קשר', href: '#contact' },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="text-right">
            <h4 className="text-white font-semibold text-sm mb-4">יצירת קשר</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="tel:+972501234567" className="hover:text-white transition-colors">
                  050-123-4567
                </a>
              </li>
              <li>
                <a href="mailto:info@sherutpro.co.il" className="hover:text-white transition-colors">
                  info@sherutpro.co.il
                </a>
              </li>
              <li className="font-light">ימים א׳–ה׳, 9:00–18:00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>© {year} שירות PRO. כל הזכויות שמורות.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">מדיניות פרטיות</a>
            <a href="#" className="hover:text-white transition-colors">תנאי שימוש</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
