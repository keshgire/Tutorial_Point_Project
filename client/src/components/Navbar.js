import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const [click, setClick] = useState(false);
  return (
    <nav class="navbar">
      
      <div className="logo">
        
        <h1>
          
          <Link to="/">Tutorial Point</Link>
        </h1>
      </div>
      <ul className={click ? "nav-links active" : "nav-links"}>
        
        <li className="link-item">
          
          <Link to="/">Profile</Link>
        </li>
        <li className="link-item">
          
          <Link to="/createPost">Create Post</Link>
        </li>
        <li className="link-item">
          
          <Link to="/"> Logout</Link>
        </li>
      </ul>
      <div className="toggole" onClick={(e) => setClick(!click)}>
        
        {click ? <AiOutlineClose /> : <MenuIcon />}
      </div>
    </nav>
  );
};
export default Navbar;
