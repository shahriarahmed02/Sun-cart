"use client";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc"; // Google আইকনের জন্য

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-[#E0F2F1] px-4 py-10">
      <div className="card w-full max-w-md bg-white shadow-2xl rounded-3xl overflow-hidden border border-gray-100 animate__animated animate__zoomIn">
        
        {/* Top Accent Bar */}
        <div className="h-2 w-full bg-[#00A99D]"></div>

        <div className="card-body p-8 md:p-10">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-extrabold text-[#00A99D] mb-2">Join SunCart</h2>
            <p className="text-gray-500 text-sm font-medium">Start your summer shopping journey today! ☀️</p>
          </div>
          
          <form className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-gray-700">Full Name</span>
              </label>
              <input 
                type="text" 
                placeholder="John Doe" 
                className="input input-bordered focus:border-[#00A99D] focus:ring-1 focus:ring-[#00A99D] transition-all bg-gray-50" 
                required 
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-gray-700">Email Address</span>
              </label>
              <input 
                type="email" 
                placeholder="email@example.com" 
                className="input input-bordered focus:border-[#00A99D] focus:ring-1 focus:ring-[#00A99D] transition-all bg-gray-50" 
                required 
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-gray-700">Password</span>
              </label>
              <input 
                type="password" 
                placeholder="••••••••" 
                className="input input-bordered focus:border-[#00A99D] focus:ring-1 focus:ring-[#00A99D] transition-all bg-gray-50" 
                required 
              />
            </div>

            <button 
              type="submit" 
              className="btn border-none w-full mt-6 bg-[#00A99D] hover:bg-[#087e76] text-white font-bold text-lg rounded-xl shadow-lg shadow-pink-100 transition-all transform active:scale-95"
            >
              Create Account
            </button>
          </form>

          <div className="divider text-xs text-gray-400 font-bold my-6 uppercase tracking-widest">Or Continue With</div>

          <button className="btn btn-outline border-gray-200 w-full flex items-center justify-center gap-3 rounded-xl hover:bg-gray-50 hover:text-gray-700 transition-all font-semibold">
            <FcGoogle className="text-2xl" />
            Sign up with Google
          </button>

          <p className="text-center mt-8 text-gray-600 font-medium">
            Already a member?{" "}
            <Link href="/login" className="text-[#00A99D] hover:underline font-bold">
              Login Now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;