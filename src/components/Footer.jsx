import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#9de2df] text-gray-800 pt-10 pb-6 px-4 md:px-12 mt-12">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pb-10">
        
        {/* Contact Info */}
        <div>
          <h6 className="font-bold text-lg mb-3">Contact Info</h6>
          <div className="space-y-1 text-sm md:text-base opacity-90">
            <p>Contact Us</p>
            <p>suncart.vercel.com</p>
            <p>www.vercel.com</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-start md:items-center">
          <h6 className="font-bold text-lg mb-3">Social Links</h6>
          <div className="flex gap-4 text-2xl">
            <a href="#" className="hover:text-[#00A99D] transition-colors"><FaFacebook /></a>
            <a href="#" className="hover:text-[#00A99D] transition-colors"><FaXTwitter /></a>
            <a href="#" className="hover:text-[#00A99D] transition-colors"><FaYoutube /></a>
            <a href="#" className="hover:text-[#00A99D] transition-colors"><FaLinkedin /></a>
          </div>
        </div>

        {/* Privacy Policy Link */}
        <div className="flex flex-col items-start md:items-end">
          <h6 className="font-bold text-lg mb-3">Privacy Policy</h6>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="max-w-7xl mx-auto border-t border-gray-300 pt-6 flex flex-col md:flex-row justify-between items-center text-sm opacity-80">
        <p>Copyright : 2026 SunCart</p>
        <p className="mt-2 md:mt-0 cursor-pointer hover:underline">Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;