"use client";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [loading, setLoading] = useState(true);

  const defaultIcon = "https://i.ibb.co.com/v489pMv/user-icon.png";

  useEffect(() => {
    // Load user data from localStorage on component mount
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      setUser(savedUser);
      setPreviewImage(savedUser.userImage || defaultIcon);
    }
    setLoading(false);
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file size (Limit: 1MB)
      if (file.size > 1024 * 1024) {
        toast.error("File is too large! Max 1MB.");
        return;
      }
      // Convert image file to Base64 string for local storage
      const reader = new FileReader();
      reader.onloadend = () => setPreviewImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    const updatedUser = {
      ...user,
      name: formData.get("name"),
      address: formData.get("address"),
      interests: formData.get("interests"), // Comma-separated string
      userImage: previewImage
    };

    // Save updated data to localStorage
    localStorage.setItem("user", JSON.stringify(updatedUser));
    
    // Update local state
    setUser(updatedUser);


    window.dispatchEvent(new Event("storage"));

    toast.success("Profile updated successfully! 🎉");
  };

  if (loading) return <div className="text-center p-20 text-[#00A99D] font-bold">Loading...</div>;
  if (!user) return <div className="text-center p-20 text-red-500 font-bold">Please login first.</div>;

  return (
    <div className="max-w-2xl mx-auto my-10 p-6 md:p-10 bg-white shadow-2xl rounded-3xl border border-gray-100 animate__animated animate__fadeIn">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Edit Your Profile</h2>
        <p className="text-gray-500 mt-1">Keep your information up to date</p>
      </div>

      <form onSubmit={handleUpdate} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Left Side: Avatar Upload */}
        <div className="flex flex-col items-center justify-center space-y-4 border-r border-gray-100 pr-0 md:pr-6">
          <div className="relative group">
            <img 
              src={previewImage} 
              className="w-40 h-40 rounded-full object-cover border-4 border-[#00A99D] shadow-lg" 
              alt="Profile" 
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white text-xs font-bold">Change Photo</span>
            </div>
          </div>
          <input 
            type="file" 
            accept="image/*"
            onChange={handleFileChange}
            className="file-input file-input-bordered file-input-accent w-full max-w-xs" 
          />
        </div>

        {/* Right Side: Information Form */}
        <div className="space-y-4">
          <div className="form-control">
            <label className="label font-bold text-gray-700">Full Name</label>
            <input 
              name="name" 
              type="text" 
              defaultValue={user.name} 
              className="input input-bordered focus:border-[#00A99D] bg-gray-50" 
              required 
            />
          </div>

          <div className="form-control">
            <label className="label font-bold text-gray-700">Email (Read Only)</label>
            <input 
              type="email" 
              value={user.email} 
              className="input input-bordered bg-gray-100 cursor-not-allowed" 
              disabled 
            />
          </div>

          <div className="form-control">
            <label className="label font-bold text-gray-700">Address</label>
            <input 
              name="address" 
              type="text" 
              placeholder="e.g. Dhaka, Bangladesh"
              defaultValue={user.address || ""} 
              className="input input-bordered focus:border-[#00A99D] bg-gray-50" 
            />
          </div>

          <div className="form-control">
            <label className="label font-bold text-gray-700">Interests</label>
            <textarea 
              name="interests" 
              placeholder="e.g. Fishkeeping, Web Development, Gaming"
              defaultValue={user.interests || ""} 
              className="textarea textarea-bordered focus:border-[#00A99D] bg-gray-50 h-24"
            ></textarea>
            <label className="label">
              <span className="label-text-alt text-gray-400">Separate with commas ( , )</span>
            </label>
          </div>
        </div>

        {/* Bottom Section: Action Button */}
        <div className="md:col-span-2 mt-6">
          <button 
            type="submit" 
            className="btn bg-[#00A99D] hover:bg-[#008c82] text-white w-full border-none rounded-xl text-lg shadow-lg"
          >
            Update All Information
          </button>
        </div>
      </form>

      {/* Interests Preview (Dynamic Tags) */}
      {user.interests && (
        <div className="mt-10 pt-6 border-t border-gray-100">
          <h3 className="font-bold text-gray-700 mb-3">Your Interests:</h3>
          <div className="flex flex-wrap gap-2">
            {user.interests.split(",").map((interest, idx) => (
              <span key={idx} className="badge badge-accent badge-outline p-3">
                {interest.trim()}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}