const bars = [55, 70, 65, 80, 75, 88, 82, 91, 87, 95, 90, 100];
const months = ['א׳', 'פ׳', 'מ׳', 'א׳', 'מ׳', 'י׳', 'י׳', 'א׳', 'ס׳', 'א׳', 'נ׳', 'ד׳'];

const employees = [
  { name: 'דנה כהן', dept: 'שיווק', status: 'מדווח' },
  { name: 'אריאל לוי', dept: 'פיתוח', status: 'מדווח' },
  { name: 'מיכל אברהם', dept: 'מכירות', status: 'בטיפול' },
];

export default function DashboardMockup() {
  return (
    <div className="relative w-full max-w-[420px] mx-auto select-none" aria-hidden="true">
      {/* Subtle shadow cards behind for depth */}
      <div className="absolute -bottom-3 -left-3 w-full h-full bg-navy/10 rounded-2xl" />
      <div className="absolute -bottom-1.5 -left-1.5 w-full h-full bg-navy/5 rounded-2xl" />

      {/* Main card */}
      <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">

        {/* Top bar */}
        <div className="bg-navy px-5 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
          </div>
          <span className="text-white/90 text-xs font-medium tracking-wide">לוח בקרה פנסיוני</span>
          <span className="text-white/50 text-xs">מרץ 2025</span>
        </div>

        <div className="p-5">
          {/* Stats row */}
          <div className="grid grid-cols-3 gap-3 mb-5">
            <div className="bg-slate-50 rounded-xl p-3 text-center border border-slate-100">
              <div className="text-2xl font-bold text-navy leading-none mb-1">847</div>
              <div className="text-[10px] text-gray-400 font-medium">עובדים פעילים</div>
            </div>
            <div className="bg-amber-50 rounded-xl p-3 text-center border border-amber-100">
              <div className="text-2xl font-bold text-gold-dark leading-none mb-1">100%</div>
              <div className="text-[10px] text-gray-400 font-medium">דיוק דיווח</div>
            </div>
            <div className="bg-green-50 rounded-xl p-3 text-center border border-green-100">
              <div className="text-2xl font-bold text-green-600 leading-none mb-1">₪0</div>
              <div className="text-[10px] text-gray-400 font-medium">קנסות השנה</div>
            </div>
          </div>

          {/* Bar chart */}
          <div className="mb-5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] text-gray-400">דיווחים חודשיים — 2025</span>
              <span className="text-[10px] font-semibold text-navy">12/12 הוגשו</span>
            </div>
            <div className="flex items-end gap-[3px] h-16">
              {bars.map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
                  <div
                    className="w-full rounded-t-sm"
                    style={{
                      height: `${h}%`,
                      backgroundColor: h === 100 ? '#fbb03c' : '#0F2444',
                      opacity: h === 100 ? 1 : 0.6 + i * 0.03,
                    }}
                  />
                  <span className="text-[7px] text-gray-300">{months[i]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Employee mini-list */}
          <div className="mb-4">
            <div className="text-[10px] text-gray-400 font-medium mb-2">עובדים אחרונים</div>
            <div className="flex flex-col gap-1.5">
              {employees.map((e) => (
                <div key={e.name} className="flex items-center justify-between bg-slate-50 rounded-lg px-3 py-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-navy/10 flex items-center justify-center text-[9px] font-bold text-navy">
                      {e.name[0]}
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold text-gray-700 leading-none">{e.name}</div>
                      <div className="text-[9px] text-gray-400 mt-0.5">{e.dept}</div>
                    </div>
                  </div>
                  <span
                    className={`text-[9px] font-semibold px-2 py-0.5 rounded-full ${
                      e.status === 'מדווח'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-amber-100 text-amber-700'
                    }`}
                  >
                    {e.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Success status */}
          <div className="flex items-center gap-2.5 bg-green-50 border border-green-100 rounded-xl px-4 py-2.5">
            <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            <span className="text-xs font-semibold text-green-700">דיווח מרץ 2025 — עבר בהצלחה</span>
            <svg className="w-3.5 h-3.5 text-green-500 mr-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
