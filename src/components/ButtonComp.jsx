import React from "react";

const ButtonComp = ({ link, text, width }) => {
  return (
    <button className={`bg-orange-500 py-1 px-4 rounded-lg hover:bg-orange-700 transition-all ease-in-out duration-200 ${width} mt-5`}>
      <a href={link} target="_blank">
        {text}
      </a>
    </button>
  );
};

export default ButtonComp;
