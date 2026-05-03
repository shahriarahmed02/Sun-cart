"use client"; 

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ProfilePage() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        
        const loggedIn = localStorage.getItem("isLoggedIn");
        const savedUser = localStorage.getItem("user");

        if (loggedIn === "true" && savedUser) {
            setUser(JSON.parse(savedUser));
            setLoading(false);
        } else {
           
            router.push("/login?callbackUrl=/profile");
        }
    }, [router]);

    
    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
       
        window.location.href = "/";
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <span className="loading loading-spinner loading-lg text-[#00A99D]"></span>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-20 animate__animated animate__fadeIn">
            <div className="max-w-2xl mx-auto card bg-base-100 shadow-2xl border border-base-200 rounded-3xl overflow-hidden">
               
                <div className="h-32 bg-[#00A99D]"></div>
                
                <div className="card-body items-center text-center -mt-16">
                    <div className="avatar mb-4">
                        <div className="w-32 rounded-full ring ring-[#00A99D] ring-offset-base-100 ring-offset-4 shadow-xl">
                            <img 
                                src={user.userImage || "https://i.ibb.co.com/v489pMv/user-icon.png"} 
                                alt={user.name} 
                            />
                        </div>
                    </div>
                    
                    <h2 className="text-3xl font-extrabold text-gray-800">{user.name}</h2>
                    <p className="text-lg text-gray-500 font-medium">{user.email}</p>
                    
                    <div className="badge badge-outline mt-2 px-4 py-3 text-[#00A99D] border-[#00A99D]">
                        SunCart Member
                    </div>
                    
                    <div className="card-actions mt-10 gap-4 w-full justify-center">
                        <Link 
                            href="/profile/update" 
                            className="btn bg-[#00A99D] hover:bg-[#008c82] text-white border-none rounded-xl px-8"
                        >
                            Update Profile
                        </Link>
                        <button 
                            onClick={handleLogout}
                            className="btn btn-outline btn-error rounded-xl px-8"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}