import { TrendingUp, ShieldCheck, Lock, Ban } from "lucide-react";

export default function Login() {

  const handleGoogleSignIn = () => {
    window.location.href = "http://localhost:3000/api/auth/google";
  };
  return (
    <div className="flex min-h-screen font-sans">

      {/* LEFT PANEL */}
      <div className="relative flex flex-col flex-[0_0_50%] bg-linear-to-br from-[#0a1628] via-[#3D456A]  to-[#0a1e38] px-20 py-8 overflow-hidden text-white">

        {/* Logo */}
        <div className="relative z-10 flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-[9px] bg-[#20d2b4] flex items-center justify-center">
            <TrendingUp size={18} color="#0d1b2a" strokeWidth={2.5} />
          </div>
          <span className="text-lg font-semibold tracking-tight">Fintelli</span>
        </div>

        {/* Hero */}
        <div className="relative z-10 flex flex-col justify-center flex-1">
          <h1 className="text-[50px] font-bold leading-tight  mb-4">
            Take control of your financial future
          </h1>
          <p className="text-lg text-white/55 leading-relaxed">
            Debt repayment. Smart savings. Investment
            guidance. All personalized to you.
          </p>
        </div>

        {/* Badges */}
        <div className="relative z-10 flex flex-col gap-2.5 pb-2">
          {[
              { label: "Bank-grade encryption", icon: <ShieldCheck size={13} color="#20d2b4" /> },
              { label: "Your data stays private", icon: <Lock size={13} color="#20d2b4" /> },
              { label: "No ads. Ever.", icon: <Ban size={13} color="#20d2b4" /> },
           ].map(({ label, icon }) => (
            <div key={label} className="flex items-center gap-2">
               {icon}
               <span className="text-[13px] border-2 rounded-full px-2 py-1 text-white/65 font-medium">{label}</span>
            </div>
           ))}
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="flex flex-1 items-center justify-center bg-[#f8f9fb] px-8 py-12">
        <div className="w-full max-w-105">

          <span className="inline-block text-[11px] font-bold tracking-[1.2px] text-[#20a89a] uppercase mb-3.5 bg-[#EFEFFF] px-2 py-1 rounded-full">
            Free to use
          </span>

          <h2 className="text-3xl font-[Plus Jakarta Sans] font-bold text-[#0d1b2a] tracking-tight mb-2.5">
            Welcome to Fintelli
          </h2>
          <p className="text-[14.5px] text-[#6b7a8d] leading-relaxed mb-8">
            Sign in to your account or create one — it takes 30 seconds.
          </p>

          <button
            onClick={handleGoogleSignIn}
            className="flex items-center justify-center w-full px-5 py-3.5 border border-[#d0d5dd] rounded-full bg-white text-[15px] font-semibold text-[#0d1b2a] cursor-pointer shadow-sm hover:shadow-md hover:border-[#b0b8c4] transition-all duration-200"
          >
            <svg width="20" height="20" viewBox="0 0 48 48" className="mr-2.5 shrink-0">
              <path fill="#4285F4" d="M44.5 20H24v8.5h11.7C34.2 33.6 29.7 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6-6C34.5 5.5 29.5 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21c10.9 0 20.4-7.9 20.4-21 0-1.3-.1-2.7-.3-4z"/>
              <path fill="#34A853" d="M6.3 14.7l7 5.1C15.1 16.1 19.2 13 24 13c3.1 0 5.9 1.1 8.1 2.9l6-6C34.5 5.5 29.5 3 24 3 16.2 3 9.5 7.9 6.3 14.7z"/>
              <path fill="#FBBC05" d="M24 45c5.5 0 10.5-1.9 14.3-5.1l-6.6-5.4C29.7 36 27 37 24 37c-5.7 0-10.5-3.6-12.2-8.6l-7 5.4C8 40.5 15.4 45 24 45z"/>
              <path fill="#EA4335" d="M44.5 20H24v8.5h11.7c-.9 2.5-2.6 4.6-4.8 6l6.6 5.4C41.5 36.1 44.5 30.5 44.5 24c0-1.3-.1-2.7-.3-4z"/>
            </svg>
            Continue with Google
          </button>

          <div className="my-5 text-center text-[13px] text-[#8791A3]">OR</div>

          <div className="flex items-start gap-3 bg-[#eef6ff] border border-[#B8FFE9] rounded-xl p-4 mb-7">
            <div className="shrink-0 w-5.5 h-5.5 rounded-full bg-[#005142] text-white text-xs font-bold flex items-center justify-center mt-0.5">
              i
            </div>
            <p className="text-[13.5px] text-[#555F6F] leading-relaxed m-0">
              New users will be guided through a quick setup after signing in.
              Returning users go straight to their dashboard.
            </p>
          </div>

          <p className="text-[12.5px] text-[#9aa3af] text-center">
            By continuing you agree to our{" "}
            <a href="#" className="text-[#38DEBB] font-medium no-underline hover:underline">Terms of Service</a>{" "}
            and{" "}
            <a href="#" className="text-[#38DEBB] font-medium no-underline hover:underline">Privacy Policy</a>.
          </p>

        </div>
      </div>
    </div>
  );
}