import React from "react";
import PropTypes from "prop-types";
import "../styles/App.css";

const Button1 = ({ title, onClick }) => {
  return (
    <div className="flex justify-center pb-6">
      <button
        onClick={onClick}
        className="text-[#101010] text-base bg-[#E1E4EB] block w-full px-6 py-5 rounded-xl"
      >
        {title}
      </button>
    </div>
  );
};

Button1.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button1;