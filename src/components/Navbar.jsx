"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  
  const [user, setUser] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const [loading, setLoading] = useState(true);

  // ১. ইউজার এবং কার্ট ডেটা লোড করা
  const loadData = () => {
    // ইউজার চেক
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn === "true") {
      const savedUser = JSON.parse(localStorage.getItem("user"));
      setUser(savedUser);
    } else {
      setUser(null);
    }

    // কার্ট কাউন্ট চেক
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(cart.length);
    setLoading(false);
  };

  useEffect(() => {
    loadData();

    // অন্য পেজ থেকে কার্ট বা প্রোফাইল আপডেট হলে যাতে নেভবার বুঝতে পারে
    window.addEventListener("storage", loadData);
    return () => window.removeEventListener("storage", loadData);
  }, []);

  // ২. লগআউট ফাংশন
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setUser(null);
    toast.success("Logged out successfully");
    router.push("/");
    // স্টেট ক্লিয়ার করার জন্য রিফ্রেশ
    setTimeout(() => {
        window.location.reload();
    }, 100);
  };

  // ৩. একটিভ লিঙ্ক স্টাইল
  const activeClass = (path) => 
    pathname === path 
      ? "bg-[#D1F3F1] text-[#00A99D] font-bold px-4 py-2 rounded-lg" 
      : "text-gray-700 hover:text-[#00A99D] font-medium px-4 py-2 transition-all";

  return (
    <div className="navbar bg-white shadow-sm sticky top-0 z-50 px-4 md:px-12 py-3 border-b border-gray-100">
      
      {/* --- Section: Logo --- */}
      <div className="navbar-start">
        <Link href="/" className="flex items-center gap-2 transform hover:scale-105 transition-transform">
          <span className="text-2xl">☀️</span>
          <span className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">SunCart</span>
        </Link>
      </div>
      
      {/* --- Section: Desktop Links --- */}
      <div className="navbar-center hidden lg:flex">
        <div className="flex items-center gap-4">
          <Link href="/" className={activeClass("/")}>Home</Link>
          <Link href="/products" className={activeClass("/products")}>Products</Link>
          {user && <Link href="/profile" className={activeClass("/profile")}>My Profile</Link>}
        </div>
      </div>

      {/* --- Section: Cart & Profile --- */}
      <div className="navbar-end gap-2 md:gap-4">
        
        {/* Cart Icon with Dynamic Badge */}
        <Link href="/cart" className="btn btn-ghost btn-circle hover:bg-gray-100 relative">
          <div className="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
            </svg>
            {cartCount > 0 && (
              <span className="badge badge-sm indicator-item bg-[#00A99D] text-white border-none font-bold">
                {cartCount}
              </span>
            )}
          </div>
        </Link>

        {/* Auth Logic */}
        {!loading && (
          user ? (
            /* Logged In Status */
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar border-2 border-[#00A99D] hover:border-[#008c82] transition-all">
                <div className="w-10 rounded-full">
                  <img 
                    alt="User" 
                    src={user.userImage || "https://i.ibb.co.com/v489pMv/user-icon.png"} 
                  />
                </div>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow-xl bg-white rounded-xl w-52 border border-gray-100 animate__animated animate__fadeInUp">
                <li className="px-4 py-2 font-bold text-[#00A99D] border-b border-gray-50 mb-2 truncate">
                  {user.name}
                </li>
                <li><Link href="/profile" className="py-2">View Profile</Link></li>
                <li><Link href="/cart" className="py-2">My Cart ({cartCount})</Link></li>
                <div className="divider my-1"></div>
                <li>
                  <button 
                    onClick={handleLogout} 
                    className="text-red-500 font-semibold hover:bg-red-50 py-2"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            /* Logged Out Status */
            <div className="flex items-center gap-2">
              <Link 
                href="/login" 
                className="hidden md:inline-block px-5 py-2 font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-all"
              >
                Login
              </Link>
              <Link 
                href="/register" 
                className="px-5 py-2 font-medium bg-[#00A99D] text-white hover:bg-[#008c82] rounded-lg shadow-md transition-all active:scale-95"
              >
                Register
              </Link>
            </div>
          )
        )}

        {/* Mobile Hamburger Menu */}
        <div className="dropdown dropdown-end lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow-xl bg-white rounded-xl w-52 border border-gray-100">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Products</Link></li>
            {user && <li><Link href="/profile">My Profile</Link></li>}
            {!user && <li><Link href="/login">Login</Link></li>}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Navbar;