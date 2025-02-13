import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';

import Product from "./../products/Product";
import Toggle from "./../Toggle";
import Chat from "./../Chat";
import FormValidation from "./../FormValidation";
import InfiniteScroll from "./../InfiniteScroll";
import Cart from "./../cart/Cart";
import VirtualizedList from "./../VirtualizedList";
import Pagination from "./../Pagination";


import Landingpage from "../Landingpage";
const Layout = ({ children }) => {
  return (

    

<Router>  
      <div className="flex flex-col min-h-screen dark:bg-gray-900 text-black dark:text-white min-h-screen">
      <Navbar />
       

        {/* Content */}
        <div className=" mt-5  mx-auto px-8 container w-full  flex-grow">
          <Routes>
            <Route path="/" element={<Landingpage/>} />
            <Route path="/Virtualized" element={<VirtualizedList />} />
            <Route path="/Pagination" element={<Pagination />} />
            <Route path="/Product" element={<Product />} />
            <Route path="/Chat" element={<Chat />} />
            <Route path="/FormValidation" element={<FormValidation />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/InfiniteScroll" element={<InfiniteScroll />} />

          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
   
  );
};

export default Layout;