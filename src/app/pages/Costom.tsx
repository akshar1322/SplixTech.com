// pages/404.tsx
import React from "react";

const Costom = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/Images/BG/404.png')" }}>
      <div className="bg-blue-violet bg-opacity-75 text-2xl p-10 rounded">
        {/* <h1 className="text-4xl font-bold">404</h1> */}
        <p className="mt-4">Sorry&apos; the page you&apos;re looking for cannot be found.</p>
      </div>
    </div>
  );
};

export default Costom;
