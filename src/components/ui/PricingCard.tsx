"use client";
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper"; // Only import the Swiper type here
import "swiper/swiper-bundle.css"; // Import Swiper styles
import { gsap } from "gsap";
import { Howl } from "howler"; // For sound playback
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import icons

// Define the PricingPackage type
interface PricingPackage {
    id: number;
    title: string;
    description: string;
    price: number;
    originalPrice: number;
    category: string;
    image: string;
    features: string[];
    label?: string; // Label is optional
}
const packages: PricingPackage[] = [
    {
        id: 1,
        title: 'Basic Web Development',
        description: 'Basic web development services.',
        price: 100,
        originalPrice: 120,
        category: 'Web Development',
        image: '/images/webdev1.jpg',
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
        image: '/images/webdev2.jpg',
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
        image: '/images/uiux1.jpg',
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
        image: '/images/uiux2.jpg',
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
        image: '/images/software1.jpg',
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
        image: '/images/ai1.jpg',
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
        image: '/images/ai2.jpg',
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
        image: '/images/mobile1.jpg',
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
        image: '/images/software2.jpg',
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
        image: '/images/webdev3.jpg',
        features: ['✓ Real-time Data', '✓ User Authentication', '✓ Scalable Architecture'],
        label: 'Limited Time Offer',
    },
  ];


const PricingCard = () => {
    const sound = new Howl({ src: ['/sounds/CHOICE.mp3'] }); // Replace with your sound file
    const swiperRef = useRef<SwiperType | null>(null); // Keep it as SwiperType | null

    // GSAP animation for card appearance
    useEffect(() => {
        gsap.from('.pricing-card', { opacity: 100, duration: 1.5, stagger: 0.3 });
    }, []);

    const handleButtonClick = (pkg: PricingPackage) => {
        const message = `I am interested in the ${pkg.title} package for ${pkg.price}. Details: ${pkg.description}`;
        const whatsappUrl = `https://wa.me/916352191174?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    // Navigation button click handlers
    const handlePrevClick = () => {
        swiperRef.current?.slidePrev();
    };

    const handleNextClick = () => {
        swiperRef.current?.slideNext();
    };

    return (
        <div className="min-h-screen bg-[#F1F0EB] p-8">
            <h1 className="text-5xl font-neopixelregular font-bold text-gray-800 mb-8">Our Packages</h1>
            <Swiper
                onSwiper={(swiper) => {
                    swiperRef.current = swiper; // Set the swiper reference here
                }}
                spaceBetween={30}
                slidesPerView={3}
            >
                {packages.map(pkg => (
                    <SwiperSlide key={pkg.id}>
                        <div
                            className={`pricing-card relative bg-white rounded-lg shadow-lg overflow-hidden p-6 ${pkg.label ? 'border-2 border-purple-600' : ''}`}
                            onMouseEnter={() => sound.play()} // Play sound on hover
                            onMouseLeave={() => sound.stop()} // Stop sound on mouse leave
                        >
                            {pkg.label && (
                                <div className="bg-purple-600 text-white text-center text-xs font-bold p-2 w-full">{pkg.label}</div>
                            )}
                            <img src={pkg.image} alt={pkg.title} className="h-32 w-full object-cover mb-4" />
                            <h3 className="text-xl font-bold mb-2 text-black">{pkg.title}</h3>
                            <p className="mb-2 text-black line-through">${pkg.originalPrice}</p>
                            <div className="text-2xl font-semibold mb-6 text-black">${pkg.price}</div>
                            <ul className="mb-4 text-black">
                                {pkg.features.map((feature, index) => (
                                    <li key={index} className="text-sm">{feature}</li>
                                ))}
                            </ul>
                            <button
                                className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-all duration-300"
                                onClick={() => handleButtonClick(pkg)}
                            >
                                Get Started
                            </button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="flex text-xl md:text-2xl lg:text-3xl justify-end space-x-4 mt-4">
                <button
                    onClick={handlePrevClick}
                    className="bg-[#d1d5db] hover:bg-[#9ca3af] text-[#333333] font-bold py-2 px-4 md:py-3 md:px-6 rounded-md"
                >
                    <FaArrowLeft />
                </button>
                <button
                    onClick={handleNextClick}
                    className="bg-[#d1d5db] hover:bg-[#9ca3af] text-[#333333] font-bold py-2 px-4 md:py-3 md:px-6 rounded-md"
                >
                    <FaArrowRight />
                </button>
            </div>
        </div>
    );
};

export default PricingCard;
