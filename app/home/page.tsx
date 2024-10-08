"use client";

import Aside from "@/components/Aside/Aside";
import HomeContent from "@/components/HomeContent/HomeContent";

const HomePage = () => {
  return (
    <div className="w-screen h-screen flex">
      <Aside />

      {/* Container for background & centralizer content */}
      <main className="flex flex-1 bg-main-0 items-center justify-center">
        <HomeContent />
      </main>
    </div>
  );
};

export default HomePage;
