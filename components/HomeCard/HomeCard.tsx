import React from "react";

const HomeCard = ({ title, value }: { title: string; value: number }) => {
  return (
    <div className="bg-white border-2 flex flex-col items-center justify-center p-4 rounded-xl gap-3">
      <h1 className="text-black text-2xl">{title}</h1>
      <h2 className="text-black text-3xl">R${value.toFixed(2)}</h2>
    </div>
  );
};

export default HomeCard;
