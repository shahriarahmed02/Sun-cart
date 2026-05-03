"use client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { Suspense } from "react";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // কোথায় ফেরত যাবে সেটি ধরা (Default: Home)
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // ১. লোকাল স্টোরেজ থেকে রেজিস্টার্ড ইউজারকে খুঁজে বের করা
    const savedUser = JSON.parse(localStorage.getItem("user"));

    // ২. কন্ডিশন চেক (যদি ইউজার থাকে এবং পাসওয়ার্ড মিলে যায়)
    if (savedUser && savedUser.email === email && savedUser.password === password) {
      
      // ৩. সবচেয়ে গুরুত্বপূর্ণ ধাপ: লগইন স্ট্যাটাস ট্রু করা
      localStorage.setItem("isLoggedIn", "true");
      
      toast.success("Welcome back! ☀️");

      // ৪. পেজটি রিফ্রেশ করে গন্তব্যে পাঠানো (যাতে নেভবার আপডেট হয়)
      router.push(callbackUrl);
      
      // ৫. কিছুক্ষণ পর হার্ড রিফ্রেশ দেওয়া যাতে মেমোরি সিঙ্ক হয়
      setTimeout(() => {
        window.location.reload();
      }, 100);

    } else {
      toast.error("Invalid Email or Password! Please register first.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-[#E0F2F1] to-white px-4 py-10">
      <div className="card w-full max-w-md bg-white shadow-2xl rounded-3xl overflow-hidden border border-gray-100 animate__animated animate__zoomIn">
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
                name="email"
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
                name="password"
                type="password" 
                placeholder="••••••••" 
                className="input input-bordered focus:border-[#00A99D] focus:ring-1 focus:ring-[#00A99D] transition-all bg-gray-50" 
                required 
              />
            </div>

            <button type="submit" className="btn border-none w-full mt-6 bg-[#00A99D] hover:bg-[#008c82] text-white font-bold text-lg rounded-xl shadow-lg transition-all transform active:scale-95">
              Login
            </button>
          </form>

          <p className="text-center mt-8 text-gray-600 font-medium">
            New to SunCart? <Link href="/register" className="text-[#00A99D] hover:underline font-bold">Create an account</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

// Next.js 15 এ useSearchParams ব্যবহার করলে Suspense লাগে
export default function LoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <LoginForm />
    </Suspense>
  );
}