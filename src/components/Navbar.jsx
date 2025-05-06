import React from "react";
import { appleImg } from "../utils";
import { useEffect } from "react";

const Navbar = () => {
  return (
    <header>
      <nav>
        <img src={appleImg} alt="Apple" width={14} height={18} />
        <div>
          {["Phones", "Macbooks", "Tablets"].map((nav, i) => (
            <div>{nav}</div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
