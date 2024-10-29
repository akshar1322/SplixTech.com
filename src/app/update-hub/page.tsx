'use client';
import React ,{useEffect} from 'react';
import Headerimage from '@/components/ui/Headerimage';
import Footer from '@/components/Footer/footer';
import Navigationbar from '@/components/Navigationbar/Navigationbar';

interface Update {
  id: number;
  name: string;
  version?: string;
  dateTime: string;
  title: string;
  what: string;
  why: string;
  performance: string;
}

const updates: Update[] = [

    {
      id: 3,
      name: 'Stable - 1.05.2.A',
      version: '1.02.2.A',
      dateTime: 'Sunday, October 29, 2024 01:00 am',
      title: 'Stable Release 1.01.0.A for All Users',
      what: ' Offer multiple pricing tiers and packages that are affordable and cater to different user needs.',
      why: 'To ensure stability and optimize the developer experience based on feedback from the beta phase.',
      performance: 'This update provides a more stable and efficient environment for developers working with the platform.',
    },

    {
      id: 5,
      name: 'Stable - 1.01.0.A',
      version: '1.01.0.A',
      dateTime: 'Sunday, September 8, 2024 01:00 am',
      title: 'Stable Release 1.01.0.A for Developers',
      what: 'This stable release comes after rigorous beta testing, with all identified bugs resolved.',
      why: 'To ensure stability and optimize the developer experience based on feedback from the beta phase.',
      performance: 'This update provides a more stable and efficient environment for developers working with the platform.',
    },

  {
    id: 6,
    name: 'Stable - 1.0.A',
    version: 'Stable',
    dateTime: 'Monday, September 8, 2024 04:10 pm',
    title: 'Stable release of version 1.0.A',
    what: 'This release marks the stable version after the beta testing phase. All reported bugs have been fixed.',
    why: 'To provide a more reliable and polished experience based on the beta feedback.',
    performance: 'Significant performance improvements, including faster load times and reduced memory usage.',
  },
  {
    id: 7,
    name: 'Beta - 1.0.A',
    version: 'Beta',
    dateTime: 'Friday, September 8, 2024 04:10 am',
    title: 'Welcome to the first beta release of the app',
    what: 'This release includes initial features for testing. It is the first public version for feedback.',
    why: 'We aim to gather user feedback to improve the stability and performance of the app.',
    performance: 'Some minor performance improvements have been made, but further optimization is planned for future updates.',
  },


  // Add more updates as needed
];

const UpdateHub: React.FC = () => {
  useEffect(() => {
    document.title = 'Update Hub | SpliXtech';
  }, []);
  const handleClickDeveloper = () => {
    // Handle click action for developer link
    window.open('https://splixtechcom.vercel.app/', '_blank');
  };

  return (

    <div className="bg-black text-white">
        <Navigationbar />
        <br />

      <Headerimage
        backgroundImageUrl="https://images.unsplash.com/photo-1627637819794-fba32f82be16?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        text="Release Updates" />
     <div className="container mx-auto  p-8 min-h-screen rounded-lg">

      {updates.map((update) => (
        <div key={update.id} className="bg-[#282828] p-6 mb-4 rounded-lg">
          <div className="flex justify-between items-center p-3">
            <div>
              <p className="text-2xl font-bold mb-2">{update.name}</p>
              <p className="text-sm mb-2">{update.dateTime}</p>
              <p className="text-xl font-semibold mb-2">{update.title}</p>
              <p className="text-sm mb-2">What: {update.what}</p>
              <p className="text-sm mb-2">Why: {update.why}</p>
              <p className="text-sm mb-2">Performance: {update.performance}</p>
            </div>
          </div>
        </div>
      ))}
      <div>
        <p className="cursor-pointer hover:text-blue-300" onClick={handleClickDeveloper}>
          Developer: Splix Tech
        </p>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default UpdateHub;
