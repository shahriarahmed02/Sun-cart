import 'animate.css';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative w-full bg-white py-10 px-4 md:px-12 overflow-hidden">
      {/* Container with light yellow background like your design */}
      <div className="max-w-7xl mx-auto bg-[#FFF9E5] rounded-3xl overflow-hidden flex flex-col lg:flex-row items-center shadow-sm">
        
        {/* Left Side: Text Content */}
        <div className="w-full lg:w-1/2 p-10 md:p-16 text-left z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight animate__animated animate__fadeInDown">
            Summer Sale <br />
            <span className="text-gray-900">50% OFF</span>
          </h1>
          
          <p className="py-4 text-xl md:text-2xl font-medium text-gray-700 flex items-center gap-2 animate__animated animate__fadeInUp">
            Hot Deals 🔥
          </p>

          <p className="pb-8 text-gray-600 text-sm md:text-base max-w-md animate__animated animate__fadeInUp">
            The ultimate collection of stylish sunglasses, summer outfits, and skincare is now at SunCart!
          </p>
          
          <div className="flex flex-wrap gap-4 animate__animated animate__zoomIn animate__delay-1s">
            <Link 
              href="/products" 
              className="px-8 py-3 bg-[#00A99D] text-white font-bold rounded-lg hover:bg-[#008c82] transition-all shadow-md"
            >
              Shop Now
            </Link>
            <Link 
              href="/products" 
              className="px-8 py-3 border-2 border-[#00A99D] text-[#00A99D] font-bold rounded-lg hover:bg-[#00A99D] hover:text-white transition-all"
            >
              Explore Details
            </Link>
          </div>
        </div>

        {/* Right Side: Image Area */}
        <div className="w-full lg:w-2/3 relative h-[300px] md:h-[500px] animate__animated animate__fadeInRight">
          {/* Background Image from your public folder */}
          <img 
            src="/image/banner.jpg" 
            alt="Summer Essentials"
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle overlay to blend image with the yellow background if needed */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#fff9e5f6] via-transparent to-transparent lg:block hidden"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;