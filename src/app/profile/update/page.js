"use client";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function UpdateProfile() {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const router = useRouter();

    const handleUpdate = async (e) => {
        e.preventDefault();
        // এখানে BetterAuth এর client-side update লজিক আসবে
        toast.success("Profile updated successfully!");
        router.push("/profile");
    };

    return (
        <div className="container mx-auto px-4 py-20">
            <div className="max-w-md mx-auto card bg-base-100 shadow-xl border">
                <div className="card-body">
                    <h2 className="card-title text-2xl mb-4">Update Information</h2>
                    <form onSubmit={handleUpdate} className="space-y-4">
                        <div className="form-control">
                            <label className="label"><span className="label-text">New Name</span></label>
                            <input 
                                type="text" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="input input-bordered" 
                                placeholder="Enter new name"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label"><span className="label-text">New Photo URL</span></label>
                            <input 
                                type="text" 
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                                className="input input-bordered" 
                                placeholder="https://image-link.com"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-full mt-4">Save Changes</button>
                    </form>
                </div>
            </div>
        </div>
    );
}