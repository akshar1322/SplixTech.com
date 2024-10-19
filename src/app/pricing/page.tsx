"use client";
import { FC } from 'react';

import FAQSection from '@/components/ui/FAQSection';
import Navigationbar from '@/components/Navigationbar/Navigationbar';
import Footer from '@/components/Footer/footer';
import Headerimage from '@/components/ui/Headerimage';
import PricingCard from '@/components/ui/PricingCard';
import AnimatedSVG from '@/components/ui/AnimatedSVG';
// import PricingSection from '@/components/ui/price';

const page: FC = () => {
  return (
    <div className=" mt-4 ">
            <Navigationbar />
        <br />

      <Headerimage
      backgroundImageUrl="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" text="Pricing"
      />
      <br /><br />
      <PricingCard />
      <AnimatedSVG />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default page;
