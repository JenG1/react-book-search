import React from "react";

function Button({ type = "default",children, click, value }) {
  return (
      <button onClick={click} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" value={value}>
      
      {children}
    </button>
  );
}

export default Button;
