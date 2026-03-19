export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">תמחור</span>
          <h2 className="text-4xl font-extrabold text-navy mt-3 mb-4">שקט נפשי במחיר שלא תאמינו</h2>
          <p className="text-gray-400 text-lg font-light">
            מחיר שקוף ואחיד לעובד. ללא עמלות הפתעה, ללא עלויות הקמה.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch justify-center">
          {/* Main pricing card */}
          <div className="relative bg-navy rounded-3xl p-10 text-white flex-1 max-w-md mx-auto lg:mx-0 overflow-hidden shadow-2xl shadow-navy/30">
            {/* Background glow */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-gold/10 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 bg-gold/20 text-gold text-xs font-bold px-3 py-1.5 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                המחיר שלא האמנתם שיכול להיות
              </div>

              <div className="mb-6">
                <div className="flex items-end gap-2 mb-1">
                  <span className="text-white/50 text-lg line-through font-light">₪120</span>
                  <span className="text-xs text-white/40 mb-1">מחיר שוק ממוצע</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-gold text-6xl font-black leading-none">₪45</span>
                  <div className="mr-1">
                    <div className="text-white/60 text-sm">לעובד</div>
                    <div className="text-white/60 text-sm">לחודש</div>
                  </div>
                </div>
              </div>

              <p className="text-white/60 text-sm font-light leading-relaxed mb-8">
                מחיר אחיד. כולל הכל. ללא עמלות הפתעה, ללא תוספות נסתרות.
              </p>

              <ul className="space-y-3 mb-10">
                {[
                  'דיווח פנסיוני חודשי מלא',
                  'ציות לכל דרישות הרגולציה',
                  'דוח חודשי שקוף ומפורט',
                  'ליווי אישי מנציג קבוע',
                  'תגובה תוך יום עסקים',
                  'ללא עלויות הקמה',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white/80 text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="block w-full bg-gold text-navy font-bold text-base py-4 rounded-xl text-center hover:bg-gold-light transition-all shadow-lg shadow-gold/30 hover:-translate-y-0.5"
              >
                התחל עכשיו — ללא התחייבות
              </a>
            </div>
          </div>

          {/* Side info card */}
          <div className="flex flex-col gap-6 flex-1 max-w-sm mx-auto lg:mx-0">
            <div className="bg-[#F7F8FA] rounded-2xl p-7 border border-gray-100 flex-1">
              <div className="w-10 h-10 rounded-xl bg-navy/5 text-navy flex items-center justify-center mb-4">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-navy text-lg mb-2">חישוב לדוגמה</h3>
              <p className="text-gray-400 text-sm font-light mb-5 leading-relaxed">
                חברה עם 20 עובדים משלמת:
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-semibold text-navy">₪900 לחודש</span>
                  <span className="text-gray-400">20 עובדים × ₪45</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>₪10,800 לשנה</span>
                  <span>במקום ₪24,000+</span>
                </div>
              </div>
              <div className="mt-4 bg-green-50 border border-green-100 rounded-xl px-4 py-3">
                <p className="text-green-700 text-sm font-semibold">חיסכון של ₪13,200+ בשנה</p>
              </div>
            </div>

            <div className="bg-[#F7F8FA] rounded-2xl p-7 border border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-navy/5 text-navy flex items-center justify-center mb-4">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="font-bold text-navy text-lg mb-2">שאלות?</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed mb-4">
                נשמח לענות על כל שאלה ולהתאים הצעה מדויקת לגודל העסק שלכם.
              </p>
              <a
                href="#contact"
                className="text-navy font-semibold text-sm hover:text-gold transition-colors flex items-center gap-1"
              >
                דברו איתנו
                <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
