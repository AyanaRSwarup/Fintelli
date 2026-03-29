import { useNavigate } from "react-router-dom";

export default function FourZeroFour() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f9f9ff] flex flex-col">

      {/* Navbar */}
      <div className="w-full h-15 bg-white/80 backdrop-blur-[20px] flex items-center px-6 md:px-10 shadow-[0px_12px_32px_rgba(18,28,42,0.06)]">
        <p className="text-2xl font-semibold text-[#121c2a] tracking-tight">Fintelli</p>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-20">

        {/* Illustration */}
        <div className="relative w-48 h-44 mb-8">
          {/* Bar chart bars */}
          <div className="absolute bottom-8 left-10 w-10 h-20 bg-[#00c9a7]/40 rounded-t-md" />
          <div className="absolute bottom-8 left-24 w-10 h-32 bg-[#006b58] rounded-t-md" />
          {/* Fallen bar */}
          <div className="absolute bottom-8 left-6 w-28 h-9 bg-[#ba1a1a] rounded-md origin-bottom-right rotate-[-8deg] translate-y-2" />
          {/* Wrench icon bubble */}
          <div className="absolute top-0 right-4 w-12 h-12 bg-white rounded-full shadow-[0px_12px_32px_rgba(18,28,42,0.10)] flex items-center justify-center">
            <svg className="w-6 h-6 text-[#006b58]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
            </svg>
          </div>
        </div>

        {/* 500 */}
        <h1 className="text-[5rem] md:text-[7rem] font-bold text-[#ba1a1a] leading-none tracking-tighter mb-1"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          500
        </h1>
        <div className="w-32 h-0.5 bg-[#ba1a1a] mb-6" />

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-[#121c2a] text-center mb-3 tracking-tight"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          Something went wrong on our end.
        </h2>

        {/* Subtext */}
        <p className="text-[#4a5568] text-sm text-center max-w-sm mb-8 leading-relaxed">
          Our servers hit a snag. This isn't your fault — we're already looking into it. Please try again in a moment.
        </p>

        {/* Alert box */}
        <div className="flex items-center gap-3 bg-[#ffdad6] rounded-xl px-5 py-4 mb-8 max-w-md w-full">
          <div className="flex-shrink-0">
            <svg className="w-5 h-5 text-[#93000a]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
          </div>
          <p className="text-sm text-[#93000a]">
            If this keeps happening, contact us at{" "}
            <a href="mailto:hello@fintelli.com" className="font-semibold underline underline-offset-2">
              sharmatijil06@gmail.com
            </a>
          </p>
        </div>

        {/* CTA Button */}
        <button
          onClick={() => navigate("/onboarding")}
          className="px-10 py-3.5 rounded-full text-white font-semibold text-sm tracking-wide mb-4 transition-all duration-300 hover:brightness-110 active:scale-95"
          style={{ background: "linear-gradient(135deg, #006b58, #00c9a7)" }}
        >
          Try Again
        </button>

        {/* Secondary link */}
        <p className="text-sm text-[#4a5568]">
          or{" "}
          <button
            onClick={() => navigate("/dashboard")}
            className="text-[#006b58] font-semibold hover:underline underline-offset-2 transition"
          >
            go back to the Dashboard
          </button>
        </p>
      </div>

      {/* Footer */}
      <div className="w-full border-t border-[#e6eeff] bg-white px-6 md:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-sm text-[#4a5568]">
          Need help?{" "}
          <a href="mailto:sharmatijil06@gmail.com" className="text-[#006b58] font-semibold hover:underline underline-offset-2">
            sharmatijil06@gmail.com
          </a>
        </p>
        <p className="text-sm text-[#4a5568]">© 2026 Fintelli. All rights reserved.</p>
      </div>

    </div>
  );
}