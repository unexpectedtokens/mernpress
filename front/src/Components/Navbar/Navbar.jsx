import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo/Logo";
import Navcont from "./Navcont/Navcont";
import Search from "./Search/Searchbar";

const Navbar = () => {
  return (
    <Navcont>
      <Link to="/">
        <Logo>MERNPRESS</Logo>
      </Link>
      <Search />
    </Navcont>
  );
};

export default Navbar;
