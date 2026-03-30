import { TrendingUp, ShieldCheck, Lock, Ban } from "lucide-react";

export default function Login() {
  const handleGoogleSignIn = () => {
    const url = import.meta.env.VITE_BACKEND_URL;
    window.location.href = `${url}/api/auth/google`;
  };
  return (
    <div className="flex flex-col md:flex-row min-h-screen font-sans">
     
      <div className="relative flex flex-col md:flex-[0_0_50%] bg-linear-to-br from-[#0a1628] via-[#3D456A]  to-[#0a1e38] md:px-20 py-8 px-8 overflow-hidden text-white">
        
        <div className="relative z-10 flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-[9px] bg-[#20d2b4] flex items-center justify-center">
            <TrendingUp size={18} color="#0d1b2a" strokeWidth={2.5} />
          </div>
          <a href="/" className="text-lg font-semibold tracking-tight">
            Fintelli
          </a>
        </div>

        
        <div className="relative z-10 flex flex-col justify-center flex-1 py-10 md:py-0">
          <h1 className="font-family: var(--font-sans) text-4xl md:text-[3.5rem] font-bold leading-tight  mb-4">
            Take control of your financial future
          </h1>
          <p className="text-lg text-white/55 leading-relaxed">
            Debt repayment. Smart savings. Investment guidance. All personalized
            to you.
          </p>
        </div>

       
        <div className="relative z-10 flex flex-row flex-wrap md:flex-col gap-2.5 pb-2">
          {[
            {
              label: "Bank-grade encryption",
              icon: <ShieldCheck size={13} color="#20d2b4" />,
            },
            {
              label: "Your data stays private",
              icon: <Lock size={13} color="#20d2b4" />,
            },
            { label: "No ads. Ever.", icon: <Ban size={13} color="#20d2b4" /> },
          ].map(({ label, icon }) => (
            <div key={label} className="flex items-center gap-2">
              {icon}
              <span className="text-[13px] border-2 rounded-full px-2 py-1 text-white/65 font-medium">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      
      <div className="flex flex-1 items-center justify-center bg-[#f8f9fb]  px-6 md:px-8 py-12">
        <div className="w-full max-w-105">
          <span className="inline-block text-[11px] font-bold tracking-[1.2px] text-[#20a89a] uppercase mb-3.5 bg-[#EFEFFF] px-2 py-1 rounded-full">
            Free to use
          </span>

          <h2 className=" text-2xl md:text-3xl font-[Plus Jakarta Sans] font-bold text-[#0d1b2a] tracking-tight mb-2.5">
            Welcome to Fintelli
          </h2>
          <p className="text-[14.5px] text-[#6b7a8d] leading-relaxed mb-8">
            Sign in to your account or create one — it takes 30 seconds.
          </p>

          <button
            onClick={handleGoogleSignIn}
            className="flex items-center justify-center gap-2 w-full px-5 py-3.5 border border-[#d0d5dd] rounded-full background: rgba(255,255,255,0.8) backdrop-blur: 20px text-[15px] font-semibold text-[#0d1b2a] cursor-pointer shadow-sm hover:shadow-md hover:border-[#b0b8c4] transition-all duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="18"
              height="18"
              viewBox="0 0 48 48"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              ></path>
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              ></path>
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
            </svg>
            Continue with Google
          </button>

          <div className="my-5 text-center text-[13px] text-[#8791A3]"></div>

          <div className="flex items-start gap-3 bg-[#eef6ff] backdrop-blur: 20px border border-[#B8FFE9] rounded-xl p-4 mb-7">
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
            <a
              href="#"
              className="text-[#38DEBB] font-medium no-underline hover:underline"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="text-[#38DEBB] font-medium no-underline hover:underline"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
