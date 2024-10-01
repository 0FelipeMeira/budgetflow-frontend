import React from "react";

const Text = () => {
  const obj = {
    name: "dsadsa",
  };
  return <p className="text-red-500 font-semibold">{obj?.name}</p>;
};

export default Text;
