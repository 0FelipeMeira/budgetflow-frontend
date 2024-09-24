import React from "react";

interface TitleInterface {
  text: string;
  a?: string;
  b?: string;
  c?: string;
  d?: string;
  e?: string;
}

const Title = ({ text, a, b, c, d, e }: TitleInterface) => {
  return <h1 className="text-blue-600">{text}</h1>;
};

export default Title;
