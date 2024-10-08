import React from "react";

interface TitleInterface {
  text: string;
}

const Title = ({ text }: TitleInterface) => {
  return <h1 className="text-blue-600 font-bold text-3xl">{text}</h1>;
};

export default Title;
