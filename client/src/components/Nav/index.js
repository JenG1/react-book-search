import React from "react";

function Nav() {
  return (
    <ul className="flex">

      <li className="flex-1 mr-2">
        <a className="text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4" href="/">Home</a>
      </li>

      <li className="flex-1 mr-2">
        <a className="text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4" href="/">Search</a>
      </li>

      <li className="flex-1 mr-2">
        <a className="text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4" href="/saved">Saved</a>
      </li>

    </ul>
  );
}

export default Nav;
