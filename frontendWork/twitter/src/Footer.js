import React from "react";
import SearchIcon from "./img/search.png";
import Login from "./component/Login";

function Footer() {
  return (
    <div className="w-1/4 min-h-screen px-2">
      {/* searchBox */}
      <div className="flex rounded-full border-2 m-4 px-4 py-2 bg-gray-200">
        <div className="p-1">
          <img src={SearchIcon} className="w-4" />
        </div>
        <input className="ml-4 w-full bg-transparent"></input>
      </div>

      <hr></hr>
      <Login></Login>
    </div>
  );
}

export default Footer;
