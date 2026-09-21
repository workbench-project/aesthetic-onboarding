import { ArrowRight } from 'lucide-react';

export default function App() {
  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center p-4 overflow-hidden font-sans">
      
      {/* Global Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover scale-[1.05] -z-20 pointer-events-none"
        src="https://cdn.midjourney.com/video/71048e88-d8e6-470e-88ef-555c01eacb12/0.mp4"
      />
      
      {/* Background Overlay */}
      <div className="fixed inset-0 bg-black/10 backdrop-blur-sm -z-10" />

      {}
      {/* Main Center Card */}
      <div className="relative z-10 w-full max-w-[1040px] min-h-[650px] bg-white border border-gray-200 rounded-[2.5rem] p-3 shadow-2xl flex flex-col md:flex-row">
        
        {}
        {/* Left Side (Video Mask Area) */}
        <div className="w-full md:w-[45%] h-[400px] md:h-auto bg-[#0c0c0e] rounded-[2rem] overflow-hidden relative shrink-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            src="https://cdn.midjourney.com/video/71048e88-d8e6-470e-88ef-555c01eacb12/0.mp4"
          />
        </div>

        {}
        {/* Right Side (Form Area) */}
        <div className="w-full md:w-[55%] relative p-8 md:p-14 flex flex-col justify-center">
          
          {/* Decorative Circle */}
          <div className="absolute top-0 left-0 w-64 h-64 blur-[80px] bg-gradient-to-br from-[#FF512F] to-[#F09819] opacity-20 pointer-events-none rounded-full -translate-x-10 -translate-y-10"></div>

          {}
          {/* Header */}
          <div className="relative z-10">
            <h1 className="text-[40px] font-semibold tracking-tight text-center text-gray-900 leading-tight">
              Welcome back
            </h1>
            <p className="text-sm text-gray-500 text-center mb-8 mt-1">
              Sign in to your account
            </p>
          </div>

          {}
          {/* Social Buttons */}
          <div className="relative z-10 w-full">
            <button className="w-full bg-gray-50 border border-gray-200 rounded-[1.25rem] p-4 flex items-center group hover:bg-gray-100 transition-colors mb-4 cursor-pointer outline-none focus:ring-2 focus:ring-gray-200">
              <svg className="w-5 h-5 mr-3 shrink-0" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="font-medium text-gray-900">Continue with Google</span>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-700 ml-auto transition-colors" />
            </button>

            <button className="w-full bg-gray-50 border border-gray-200 rounded-[1.25rem] p-4 flex items-center group hover:bg-gray-100 transition-colors mb-4 cursor-pointer outline-none focus:ring-2 focus:ring-gray-200">
              <svg className="w-5 h-5 mr-3 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <span className="font-medium text-gray-900">Continue with X</span>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-700 ml-auto transition-colors" />
            </button>
          </div>

          {}
          {/* Divider */}
          <div className="relative z-10 flex items-center my-8">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gray-300"></div>
            <span className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold mx-4">OR</span>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gray-300"></div>
          </div>

          {}
          {/* Email Input Group */}
          <div className="relative z-10 bg-gray-50 border border-gray-200 rounded-[1.25rem] p-2 flex items-center focus-within:bg-white focus-within:border-gray-400 transition-all duration-300">
            
            <div className="flex-1 pl-4 flex flex-col justify-center">
              <label htmlFor="emailInput" className="text-[11px] font-medium text-gray-500 uppercase tracking-wider cursor-text">
                Email
              </label>
              <input
                id="emailInput"
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent outline-none text-gray-900 font-medium placeholder:font-normal placeholder:text-gray-400 mt-0.5"
                autoComplete="email"
              />
            </div>

            {/* Submit Button */}
            <button className="relative group w-[52px] h-[52px] rounded-full shrink-0 cursor-pointer border-none outline-none">
              <div className="absolute -inset-[3px] rounded-full bg-[conic-gradient(from_0deg,#00c6ff,#0072ff,#ff007a,#ff8a00,#00c6ff)] blur-xl opacity-0 group-hover:opacity-100 group-hover:animate-spin transition-opacity duration-300 pointer-events-none"></div>
              <div className="absolute -inset-[3px] rounded-full bg-[conic-gradient(from_0deg,#00c6ff,#0072ff,#ff007a,#ff8a00,#00c6ff)] group-hover:animate-spin transition-transform duration-500 pointer-events-none"></div>
              <div className="absolute inset-0 bg-black rounded-full flex items-center justify-center shadow-[inset_0_2px_10px_rgba(255,255,255,0.3)] z-10">
                <ArrowRight className="text-white w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={2.5} />
              </div>
            </button>
            
          </div>

          {}
          {/* Footer */}
          <div className="relative z-10 text-sm text-center mt-8">
            <span className="text-gray-500">Don't have an account? </span>
            <button className="bg-gradient-to-r from-[#FF512F] to-[#F09819] bg-clip-text text-transparent font-semibold cursor-pointer hover:opacity-80 transition-opacity">
              Sign up
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
}