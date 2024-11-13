// src/pages/index.tsx
"use client";
import { useState, useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Navigationbar from "@/components/Navigationbar/Navigationbar";
import WorksSlider from "@/components/ui/WorksSlider";

import TeamSlider from "@/components/ui/TeamSlider";
import Footer from "@/components/Footer/footer";


import CookieCard from "@/components/CookieCard/CookieCard";
import useInView from '@/hooks/useInView';

import Portfolio from "@/components/ui/Portfolio";


import FAQSection from "@/components/ui/FAQSection";
import AnimatedSVG from "@/components/ui/AnimatedSVG";

import HeroSection from "@/components/Hero/HeroSection";





// import PricingSection from "@/components/ui/price";



// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const { ref: heroRef, inView: heroInView } = useInView();
  const { ref: worksRef, inView: worksInView } = useInView();
  const { ref: teamRef, inView: teamInView } = useInView();

  const [heroAnimated, setHeroAnimated] = useState(false);
  const [worksAnimated, setWorksAnimated] = useState(false);
  const [teamAnimated, setTeamAnimated] = useState(false);

  useEffect(() => {
    if (heroInView && !heroAnimated) {
      gsap.fromTo('.hero-title', { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1 });
      gsap.fromTo('.hero-description', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 });
      gsap.fromTo('.contact-button', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1 });
      setHeroAnimated(true);
    }
  }, [heroInView, heroAnimated]);

  useEffect(() => {
    if (worksInView && !worksAnimated) {
      gsap.fromTo('.works-slider', { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1 });
      setWorksAnimated(true);
    }
  }, [worksInView, worksAnimated]);

  useEffect(() => {
    if (teamInView && !teamAnimated) {
      gsap.fromTo('.team-slider', { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1 });
      setTeamAnimated(true);
    }
  }, [teamInView, teamAnimated]);

      // const [loading, setLoading] = useState(true);

      // useEffect(() => {
      //   const timer = setTimeout(() => {
      //     setLoading(false);
      //   }, 5000); // Match this duration with the animation duration

      //   return () => clearTimeout(timer);
      // }, []);

      // if (loading) {
      //   return <LoadingScreen />;
      // }


  return (
    <main className=" overflow-y-auto  scrollbar-hide">
            <Navigationbar />
            {/* <RightSideEmail/> */}
      <div ref={heroRef} className="">
        <HeroSection/>

      </div>
      <CookieCard />
      <div ref={worksRef} className="works-slider">

      <AnimatedSVG />
        <WorksSlider />
      </div>
      <div ref={teamRef} className="team-slider">

        <TeamSlider />
      </div>

      <Portfolio />
      {/* <PricingSection /> */}
      <br />
      <AnimatedSVG />
      <FAQSection />

      <Footer />
    </main>
  );
}

export default Home;
