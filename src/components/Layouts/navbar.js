// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Product from "../products/Product";
import Toggle from "../Toggle";
import Chat from "../Chat";
import FormValidation from "../FormValidation";
import InfiniteScroll from "../InfiniteScroll";
import Cart from "../cart/Cart";
import VirtualizedList from "../VirtualizedList";
import Pagination from "../Pagination";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    
    <div>
        
    <nav className="bg-gray-200 p-4  dark:bg-gray-600">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-black dark:text-white font-bold text-xl">
          <Link to="/">Home</Link> 
        </div>
      
      
    
        {/* Navbar Links */}
        
       
        {/* Hamburger Icon (for mobile) */}
        <div> <Toggle/></div>
      </div>

      
      {/* Mobile Menu */}
      
    </nav>

      {/* กำหนด Routes สำหรับแต่ละหน้า */}
     
    </div>


    
  );
};

export default Navbar;
