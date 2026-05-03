"use client";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    // BetterAuth লগইন লজিক এখানে যুক্ত হবে
    toast.success("Login functionality coming soon!", {
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-[#E0F2F1] to-white px-4 py-10">
      <div className="card w-full max-w-md bg-white shadow-2xl rounded-3xl overflow-hidden border border-gray-100 animate__animated animate__zoomIn">
        
        {/* Top Accent Bar with your brand color */}
        <div className="h-2 w-full bg-[#00A99D]"></div>

        <div className="card-body p-8 md:p-10">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-extrabold text-[#00A99D] mb-2">Welcome Back!</h2>
            <p className="text-gray-500 text-sm font-medium">Please enter your details to sign in.</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-5">
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
              <div className="flex justify-between items-center">
                <label className="label">
                  <span className="label-text font-semibold text-gray-700">Password</span>
                </label>
                <Link href="#" className="text-xs text-[#00A99D] hover:underline font-medium">Forgot Password?</Link>
              </div>
              <input 
                type="password" 
                placeholder="••••••••" 
                className="input input-bordered focus:border-[#00A99D] focus:ring-1 focus:ring-[#00A99D] transition-all bg-gray-50" 
                required 
              />
            </div>

            <button 
              type="submit" 
              className="btn border-none w-full mt-6 bg-[#00A99D] hover:bg-[#008c82] text-white font-bold text-lg rounded-xl shadow-lg shadow-teal-100 transition-all transform active:scale-95"
            >
              Login
            </button>
          </form>

          <div className="divider text-xs text-gray-400 font-bold my-6 uppercase tracking-widest">Or Login With</div>

          {/* Social Login Button */}
          <button className="btn btn-outline border-gray-200 w-full flex items-center justify-center gap-3 rounded-xl hover:bg-gray-50 hover:text-gray-700 transition-all font-semibold">
            <FcGoogle className="text-2xl" />
            Continue with Google
          </button>

          <p className="text-center mt-8 text-gray-600 font-medium">
            New to SunCart?{" "}
            <Link href="/register" className="text-[#00A99D] hover:underline font-bold">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;