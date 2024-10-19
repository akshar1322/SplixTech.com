'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Headerimage from '@/components/ui/Headerimage';
import Navigationbar from '@/components/Navigationbar/Navigationbar';
import Footer from '@/components/Footer/footer';

// Define types for the flags and updates
interface Flag {
  country: string;
  src: string;
}

interface Update {
  id: number;
  title: string;
  description: string;
  highlight: string;
  links: string;
}

const flags: Flag[] = [
  { country: 'India', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_India.png/1280px-Flag_of_India.png' },
  { country: 'USA', src: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Flag_of_the_United_States.png' },
  { country: 'UK', src: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Flag_of_the_United_Kingdom.png' },

];

const updates: Update[] = [
  {
    id: 1,
    title: 'Privacy Policy Update',
    description: 'We have updated our privacy policy to better protect your data.',
    highlight: 'Key changes in data handling and user rights.',
    links: '#privacy-policy-update',
  },
  {
    id: 2,
    title: 'New Data Protection Measures',
    description: 'Introducing new measures to secure user data.',
    highlight: 'Enhanced encryption and secure storage.',
    links: '#data-protection-measures',
  },
  // Add more updates as needed
];

const PrivacyHub: React.FC = () => {
  useEffect(() => {
    document.title = 'Privacy Hub | SpliXtech';
  }, []);

  const [activeUpdate, setActiveUpdate] = useState<number | null>(null);

  const handleClick = (updateId: number) => {
    setActiveUpdate(updateId);
    const element = document.getElementById(updateId.toString());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-black text-white ">

      <br />
            <Navigationbar />
        <br />
      <Headerimage
        backgroundImageUrl="https://images.unsplash.com/photo-1638072536413-61c5c62b652e?q=80&w=1858&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        text="Privacy Hub" />
      <div className="container mx-auto p-8 min-h-screen rounded-lg">
      <div className="flex space-x-4 mb-8">
        {flags.map(flag => (
          <Image key={flag.country} src={flag.src} alt={flag.country}
          width={40} height={40}
          className="w-10 h-6" />
        ))}
      </div>
      <p className="text-lm mb-4">Last updated: 2024-06-29</p>
      <p className="text-lg mb-8">
        Welcome to the Privacy Hub. Here you can find the latest updates and changes to our privacy policies and data protection measures.
      </p>
      <ul className="mb-8 justify-start">
        {updates.map(update => (
          <li key={update.id} className="mb-2 p-2 max-w-full max-h-full text-lg font-semibold cursor-pointer flex items-center justify-start transition duration-300 ease-in-out group" onClick={() => handleClick(update.id)}>
            {update.title}
            <span className="ml-2 text-white transform transition-transform duration-300 ease-in-out group-hover:rotate-45">→</span>
          </li>

        ))}
      </ul>
      {updates.map(update => (
        <div key={update.id} id={update.id.toString()} className="bg-[#282828] p-6 mb-4 rounded-lg">
          <h2 className="text-2xl font-bold mb-2">{update.title}</h2>
          <p className="text-sm mb-2">{update.description}</p>
          <p className="text-sm mb-2">{update.highlight}</p>
          <div className="flex justify-start">
            <a
              href={update.links}
              className="p-2 max-w-52 max-h-36 text-sm font-semibold rounded-full  text-indigo-500 flex items-center justify-center transition duration-300 ease-in-out group"
            >
              Read more
              <span className="ml-2 text-white transform transition-transform duration-300 ease-in-out group-hover:-rotate-45">→</span>
            </a>
          </div>
        </div>
      ))}
    </div>
    <Footer />
    </div>
  );
};

export default PrivacyHub;
