"use client"; 
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  // সেশন হ্যান্ডেল করার জন্য আপাতত null রাখা হয়েছে
  const user = null; 

  // একটিভ লিঙ্কের জন্য স্টাইল
  const activeClass = (path) => 
    pathname === path 
      ? "bg-[#D1F3F1] text-[#0D3B3F] font-bold px-4 py-2 rounded-lg" 
      : "text-gray-700 hover:text-cyan-600 font-medium px-4 py-2";

  return (
    <div className="navbar bg-white shadow-sm sticky top-0 z-50 px-4 md:px-12 py-3 border-b border-gray-100">
      {/* --- Start Section: Logo --- */}
      <div className="navbar-start">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">☀️</span>
          <span className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">SunCart</span>
        </Link>
      </div>
      
      {/* --- Center Section: Desktop Links --- */}
      <div className="navbar-center hidden lg:flex">
        <div className="flex items-center gap-4">
          <Link href="/" className={activeClass("/")}>Home</Link>
          <Link href="/products" className={activeClass("/products")}>Products</Link>
          <Link href="/profile" className={activeClass("/profile")}>My Profile</Link>
        </div>
      </div>

      {/* --- End Section: Auth Buttons --- */}
      <div className="navbar-end gap-3">
        {user ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar border border-gray-200">
              <div className="w-10 rounded-full">
                <img 
                  alt="User" 
                  src={user.image || "https://i.pravatar.cc/150"} 
                />
              </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow-xl bg-white rounded-xl w-52 border border-gray-100">
              <li className="px-4 py-2 font-bold text-gray-800">{user.name || "User"}</li>
              <div className="divider my-1"></div>
              <li><Link href="/profile">View Profile</Link></li>
              <li><button className="text-red-500 font-semibold mt-1">Logout</button></li>
            </ul>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Link 
              href="/login" 
              className="px-5 py-2 text-sm md:text-base font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-all"
            >
              Login
            </Link>
            <Link 
              href="/register" 
              className="px-5 py-2 text-sm md:text-base font-medium bg-[#00A99D] text-white hover:bg-[#008c82] rounded-lg shadow-md transition-all"
            >
              Register
            </Link>
          </div>
        )}

        {/* --- Mobile: Hamburger Menu --- */}
        <div className="dropdown dropdown-end lg:hidden ml-2">
          <div tabIndex={0} role="button" className="btn btn-ghost px-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow-xl bg-white rounded-xl w-52 border border-gray-100">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/profile">My Profile</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;