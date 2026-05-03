import Link from 'next/link';
import { 
  FaSprayCan, 
  FaDroplet, 
  FaUmbrellaBeach, 
  FaSun, 
  FaWandSparkles 
} from 'react-icons/fa6';

const ExtraSections = () => {
  // Mapping summer tips to specific product IDs from your JSON
  const summerTips = [
    {
      id: "2", 
      title: "Skincare",
      desc: "Protect your skin with SPF 50+ sunscreen.",
      icon: <FaSprayCan className="text-3xl" />, 
    },
    {
      id: "6", 
      title: "Hydration",
      desc: "Drink at least 3L of water to stay fresh.",
      icon: <FaDroplet className="text-3xl" />,
    },
    {
      id: "5", 
      title: "Beach Safety",
      desc: "Stay safe under the shade during noon.",
      icon: <FaUmbrellaBeach className="text-3xl" />,
    },
  ];

  const popularBrands = [
    { 
      name: "Sunly", 
      icon: <FaSun className="text-4xl text-orange-500" />, 
      color: "bg-orange-100" 
    },
    { 
      name: "Aqua", 
      icon: <FaDroplet className="text-4xl text-blue-500" />, 
      color: "bg-blue-100" 
    },
    { 
      name: "BeachVibe", 
      icon: <FaUmbrellaBeach className="text-4xl text-yellow-600" />, 
      color: "bg-yellow-100" 
    },
    { 
      name: "Glow", 
      icon: <FaWandSparkles className="text-4xl text-teal-500" />, 
      color: "bg-teal-100" 
    },
  ];

  return (
    <div className="space-y-16 py-16 px-4 md:px-12 bg-white">
      
      {/* --- Summer Care Tips Section --- */}
      <section>
        <h2 className="text-3xl font-extrabold text-center mb-10 text-gray-800">Summer Care Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {summerTips.map((tip) => (
            <Link 
              key={tip.id} 
              href={`/products/${tip.id}`} 
              className="group flex flex-col items-center text-center p-8 rounded-2xl bg-[#E0F2F1] hover:bg-[#00A99D] hover:text-white transition-all duration-500 shadow-sm hover:shadow-xl"
            >
              <div className="mb-4 text-[#00A99D] group-hover:text-white transition-colors duration-500">
                {tip.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{tip.title}</h3>
              <p className="text-sm opacity-80">{tip.desc}</p>
              <span className="mt-4 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                View Product →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* --- Popular Brands Section --- */}
      <section className="bg-gray-50 rounded-3xl p-10">
        <h2 className="text-3xl font-extrabold text-center mb-10 text-gray-800">Popular Brands</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {popularBrands.map((brand, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col items-center justify-center p-6 rounded-2xl ${brand.color} border border-transparent hover:border-[#00A99D] transition-all cursor-pointer group`}
            >
              <div className="mb-2 group-hover:scale-110 transition-transform">
                {brand.icon}
              </div>
              <h4 className="font-bold text-gray-700">{brand.name}</h4>
            </div>
          ))}
        </div>
      </section>
      
    </div>
  );
};

export default ExtraSections;