import React from "react";

const Aside = () => {
  return (
    <aside className="w-1/5 bg-white h-screen flex flex-col justify-center items-center">
      <div className="bg-main-5 rounded-full w-4/5 flex items-center p-2 gap-3 pl-10 cursor-pointer">
        <img src="./home.svg" alt="Dashboard Icon" />
        <h1 className="w-2/5 text-2xl text-black text-center">Home</h1>
      </div>
    </aside>
  );
};

export default Aside;
