"use client";
import Link from "next/link";
import { toast } from "react-hot-toast";

const LoginPage = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    // এখানে BetterAuth এর লগইন লজিক আসবে
    toast.success("Login functionality coming soon!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl animate__animated animate__zoomIn">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center mb-6 text-primary">Welcome Back!</h2>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="form-control">
              <label className="label"><span className="label-text">Email</span></label>
              <input type="email" placeholder="email@example.com" className="input input-bordered focus:input-primary" required />
            </div>
            
            <div className="form-control">
              <label className="label"><span className="label-text">Password</span></label>
              <input type="password" placeholder="******" className="input input-bordered focus:input-primary" required />
            </div>

            <button type="submit" className="btn btn-primary w-full mt-4">Login</button>
          </form>

          <div className="divider text-sm opacity-50">OR</div>

          {/* Social Login Button */}
          <button className="btn btn-outline btn-secondary w-full flex items-center gap-2">
            <img src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png" className="w-5 h-5" alt="Google" />
            Continue with Google
          </button>

          <p className="text-center mt-6 text-sm">
            New here? <Link href="/register" className="link link-primary font-bold">Create an account</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;