import React from 'react';

interface HeaderimageProps {
  backgroundImageUrl: string;
  text: string;
}

const Headerimage: React.FC<HeaderimageProps> = ({ backgroundImageUrl, text }) => {
  return (
    <div
      className="h-80 bg-cover bg-center rounded-e-full p-9 flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <h1 className="text-white text-3xl md:text-5xl lg:text-7xl font-array">
        {text}
      </h1>
    </div>
  );
};

export default Headerimage;
