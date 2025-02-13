// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 p-4 dark:bg-gray-600 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2025 Poowanate App. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a  href="https://github.com/poowanate/"  target="_blank" className=" text-black dark:text-white hover:text-gray-400">Github</a>
       
        </div>
      </div>
    </footer>
  );
};

export default Footer;
