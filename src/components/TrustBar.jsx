const logos = [
  'חברת טכנולוגיה',
  'קבוצת השקעות',
  'רשת קמעונאית',
  'משרד עורכי דין',
  'סטארטאפ פינטק',
];

export default function TrustBar() {
  return (
    <section className="bg-navy py-10">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-white/50 text-sm font-medium text-center mb-8 tracking-widest uppercase">
          מעל 200 מעסיקים כבר בוטחים בנו
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
          {logos.map((name) => (
            <div
              key={name}
              className="h-8 px-5 bg-white/[0.06] border border-white/10 rounded-lg flex items-center justify-center"
            >
              <span className="text-white/30 text-sm font-medium">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
