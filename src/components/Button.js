import React from "react";
import PropTypes from "prop-types";
import "../styles/App.css";

const Button = ({ title, onClick }) => {
  return (
    <div className="flex justify-center pb-6">
      <button
        onClick={onClick}
        className="text-white text-base bg-[#0052F6] block w-full px-6 py-5 rounded-xl"
      >
        {title}
      </button>
    </div>
  );
};


Button.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;