import React from "react";

function Input(props) {
  return (
    <div className="input-group input-group-lg" style={{ marginBottom: 15 }}>
<input className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal text-blue-600" type="text" placeholder="Search For Book" {...props}/>
    </div>
  );
}

export default Input;

