import { useForm } from 'react-hook-form';
import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('form-name', 'contact');
    Object.entries(data).forEach(([key, val]) => formData.append(key, val));

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });
      setSubmitted(true);
    } catch {
      alert('אירעה שגיאה. אנא נסו שנית או פנו אלינו ישירות.');
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">

          {/* Left side — copy with background photo */}
          <div className="relative rounded-2xl overflow-hidden order-2 lg:order-1 min-h-[360px]">
            {/* Background photo */}
            <img
              src="https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=900&q=80"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Dark navy overlay */}
            <div className="absolute inset-0 bg-navy/80" />

            {/* Content on top */}
            <div className="relative h-full p-10 flex flex-col justify-center text-right">
              <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-3 block">צרו קשר</span>
              <h2 className="text-4xl font-extrabold text-white mt-1 mb-5 leading-tight">
                קבלו ייעוץ ראשוני
                <br />
                ללא עלות
              </h2>
              <p className="text-white/70 text-lg leading-relaxed font-light mb-8">
                השאירו פרטים ונחזור אליכם תוך יום עסקים אחד לשיחה קצרה, בלי מחויבות.
              </p>

              <div className="space-y-4">
                {[
                  'ייעוץ ראשוני ללא עלות',
                  'ללא התחייבות',
                  'חזרה תוך יום עסקים',
                ].map((text) => (
                  <div key={text} className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-gold/20 border border-gold/40 text-gold text-xs font-bold flex items-center justify-center flex-shrink-0">
                      ✓
                    </span>
                    <span className="text-white/80 font-medium">{text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-white/10">
                <p className="text-sm text-white/40 mb-3">מעדיפים ליצור קשר ישירות?</p>
                <a
                  href="tel:+972501234567"
                  className="text-gold font-semibold text-lg hover:text-white transition-colors"
                >
                  050-123-4567
                </a>
              </div>
            </div>
          </div>

          {/* Right side — form */}
          <div className="order-1 lg:order-2">
            {submitted ? (
              <div className="bg-green-50 border border-green-100 rounded-2xl p-12 text-center h-full flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-navy mb-3">תודה רבה!</h3>
                <p className="text-gray-500 font-light leading-relaxed">
                  קיבלנו את פרטיכם ונחזור אליכם בהקדם, תוך יום עסקים אחד.
                </p>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit(onSubmit)}
                className="bg-[#F7F8FA] rounded-2xl p-8 border border-gray-100 h-full flex flex-col justify-center"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div className="hidden">
                  <input name="bot-field" />
                </div>

                <div className="space-y-5">
                  {/* Full name */}
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">
                      שם מלא <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="ישראל ישראלי"
                      {...register('name', { required: 'שדה חובה' })}
                      className={`w-full bg-white border rounded-xl px-4 py-3.5 text-right text-gray-700 placeholder-gray-300 text-[15px] outline-none transition-all focus:ring-2 focus:ring-navy/20 focus:border-navy ${
                        errors.name ? 'border-red-300' : 'border-gray-200'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">
                      טלפון <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="050-000-0000"
                      {...register('phone', {
                        required: 'שדה חובה',
                        pattern: { value: /^[0-9\-+\s()]{7,15}$/, message: 'מספר טלפון לא תקין' },
                      })}
                      className={`w-full bg-white border rounded-xl px-4 py-3.5 text-right text-gray-700 placeholder-gray-300 text-[15px] outline-none transition-all focus:ring-2 focus:ring-navy/20 focus:border-navy ${
                        errors.phone ? 'border-red-300' : 'border-gray-200'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-navy text-white font-bold text-base py-4 rounded-xl hover:bg-navy-light transition-all shadow-lg shadow-navy/20 hover:shadow-navy/30 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? 'שולח...' : 'שלח ונחזור אליכם'}
                  </button>
                </div>

                <p className="text-center text-gray-400 text-xs mt-4">
                  ללא התחייבות. לא נשלח ספאם.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
