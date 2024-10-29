"use client";
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import "swiper/swiper-bundle.css";
import { gsap } from "gsap";
import { Howl } from "howler";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface PricingPackage {
  id: number;
  title: string;
  description: string;
  price: number;
  originalPrice: number;
  category: string;
  image: string;
  features: string[];
  label?: string;
}

const packages: PricingPackage[] = [
    {
        id: 1,
        title: 'Basic Web Development',
        description: 'Basic web development services.',
        price: 100,
        originalPrice: 120,
        category: 'Web Development',
        image: './images/Art/10368879.jpg',
        features: ['✓ Responsive Design', '✓ SEO Optimization', '✓ 1-Year Support'],
        label: '',//Limited Time Offer
    },
    {
        id: 2,
        title: 'E-Commerce Web Development',
        description: 'Build your online store with us.',
        price: 250,
        originalPrice: 300,
        category: 'Web Development',
        image: './images/Art/3507897.jpg',
        features: ['✓ Shopping Cart Integration', '✓ Payment Gateway Setup', '✓ SEO Optimization'],
        label: 'Recommended',
    },
    {
        id: 3,
        title: 'Premium UI/UX',
        description: 'Premium UI/UX services with advanced features.',
        price: 150,
        originalPrice: 180,
        category: 'UI/UX Design',
        image: './images/Art/4461751.jpg',
        features: ['✓ User Research', '✓ Wireframing', '✓ Prototyping'],
        label: 'Most Popular',
    },
    {
        id: 4,
        title: 'Basic UI/UX',
        description: 'Basic UI/UX services.',
        price: 100,
        originalPrice: 120,
        category: 'UI/UX Design',
        image: './images/Art/4524740.jpg',
        features: ['✓ User Interface Design', '✓ Feedback Iteration', '✓ Basic User Testing'],
        label: 'Limited Time Offer',
    },
    {
        id: 5,
        title: 'Custom Software Development',
        description: 'Tailored software solutions.',
        price: 300,
        originalPrice: 350,
        category: 'Software Development',
        image: './images/Art/5397952.jpg',
        features: ['✓ Custom Software', '✓ System Integration', '✓ User Training'],
        label: 'Recommended',
    },
    {
        id: 6,
        title: 'AI Solutions',
        description: 'Innovative AI-driven solutions.',
        price: 400,
        originalPrice: 450,
        category: 'AI',
        image: './images/Art/10_geometric.jpg',
        features: ['✓ Machine Learning', '✓ Data Analysis', '✓ Predictive Modeling'],
        label: '',
    },
    {
        id: 7,
        title: 'Advanced AI Solutions',
        description: 'Advanced solutions using AI technologies.',
        price: 500,
        originalPrice: 550,
        category: 'AI',
        image: './images/Art/6882381.jpg',
        features: ['✓ Deep Learning', '✓ Natural Language Processing', '✓ Custom AI Solutions'],
        label: 'Limited Time Offer',
    },
    {
        id: 8,
        title: 'Mobile App Development',
        description: 'Create mobile apps for iOS and Android.',
        price: 350,
        originalPrice: 400,
        category: 'Mobile Development',
        image: './images/Art/8269165.jpg',
        features: ['✓ Cross-Platform Development', '✓ User-Centric Design', '✓ Testing & Deployment'],
        label: 'Recommended',
    },
    {
        id: 9,
        title: 'Enterprise Software Development',
        description: 'Custom solutions for enterprises.',
        price: 600,
        originalPrice: 650,
        category: 'Software Development',
        image: './images/Art/10368879.jpg',
        features: ['✓ Scalable Solutions', '✓ Multi-user Access', '✓ Performance Optimization'],
        label: 'Most Popular',
    },
    {
        id: 10,
        title: 'Web App Development',
        description: 'Responsive web applications.',
        price: 400,
        originalPrice: 450,
        category: 'Web Development',
        image: './images/Art/10368879.jpg',
        features: ['✓ Real-time Data', '✓ User Authentication', '✓ Scalable Architecture'],
        label: 'Limited Time Offer',
    },
  ];

const PricingCard = () => {
  const sound = new Howl({ src: ["/sounds/CHOICE.mp3"] });
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    gsap.from(".pricing-card", { opacity: 100, duration: 1.5, stagger: 0.3 });
  }, []);

  const handleButtonClick = (pkg: PricingPackage) => {
    const message = `I am interested in the ${pkg.title} package for ${pkg.price}. Details: ${pkg.description}`;
    const whatsappUrl = `https://wa.me/916352191174?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handlePrevClick = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNextClick = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <div className="min-h-screen bg-[#F1F0EB] p-4 sm:p-6 md:p-8">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-8">
        Our Packages
      </h1>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={20}
        slidesPerView={1} // Default to 1 slide on mobile
        breakpoints={{
          // Define breakpoints for responsiveness
          640: {
            slidesPerView: 1, // 1 slide on small devices
          },
          768: {
            slidesPerView: 2, // 2 slides on medium devices (tablets)
          },
          1024: {
            slidesPerView: 3, // 3 slides on large devices (desktops)
          },
        }}
      >
        {packages.map((pkg) => (
          <SwiperSlide key={pkg.id}>
            <div
              className={`pricing-card relative bg-white rounded-lg shadow-lg overflow-hidden p-4 sm:p-6 ${
                pkg.label ? "border-2 border-purple-600" : ""
              }`}
              onMouseEnter={() => sound.play()}
              onMouseLeave={() => sound.stop()}
            >
              {pkg.label && (
                <div className="bg-purple-600 text-white text-center text-xs font-bold p-2 w-full">
                  {pkg.label}
                </div>
              )}
              <img
                src={pkg.image}
                alt={pkg.title}
                className="h-24 sm:h-32 md:h-40 lg:h-48 w-full object-cover mb-4"
              />
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-black">
                {pkg.title}
              </h3>
              <p className="mb-2 text-black line-through text-sm sm:text-base">
                ${pkg.originalPrice}
              </p>
              <div className="text-xl sm:text-2xl font-semibold mb-6 text-black">
                ${pkg.price}
              </div>
              <ul className="mb-4 text-sm sm:text-base text-black">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="text-xs sm:text-sm">
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className="px-4 py-2 sm:px-6 sm:py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-all duration-300"
                onClick={() => handleButtonClick(pkg)}
              >
                Get Started
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex text-lg sm:text-xl md:text-2xl lg:text-3xl justify-end space-x-2 sm:space-x-4 mt-4">
        <button
          onClick={handlePrevClick}
          className="bg-[#d1d5db] hover:bg-[#9ca3af] text-[#333333] font-bold py-2 px-3 sm:py-3 sm:px-4 rounded-md"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={handleNextClick}
          className="bg-[#d1d5db] hover:bg-[#9ca3af] text-[#333333] font-bold py-2 px-3 sm:py-3 sm:px-4 rounded-md"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
