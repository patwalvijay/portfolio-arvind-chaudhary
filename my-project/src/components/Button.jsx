import React from "react";

const Button = (props) => {
  return (
    <button
      className="bg-[#297922] text-white  py-2 px-6 rounded md:ml-8 hover:bg-[#72A66E] 
    duration-500"
    >
      {props.children}
    </button>
  );
};

export default Button;
