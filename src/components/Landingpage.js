import React from 'react'
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import Product from "./products/Product";
import Toggle from "./Toggle";
import Chat from "./Chat";
import FormValidation from "./FormValidation";
import InfiniteScroll from "./InfiniteScroll";
import Cart from "./cart/Cart";
import VirtualizedList from "./VirtualizedList";
import Pagination from "./Pagination";


const Landingpage = () => {
  return (
  <>

 
<h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Topic List</h2>
<ul class=" space-y-1 text-gray-500 list-inside dark:text-gray-400">
    <li class="flex items-center p-4">
        <svg class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
         </svg>
         1. สร้าง Virtualized List Component     <Link to="/Virtualized"  class="font-semibold pl-5 text-blue-500 text-2xl dark:text-white hover:underline">Link</Link>
    </li>
    <li class="flex items-center p-4">
        <svg class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
         </svg>
         2. สร้าง Custom Hook สำหรับ Pagination     <Link to="/Pagination"  class="font-semibold pl-5 text-blue-500 text-2xl dark:text-white hover:underline">Link</Link>
    </li>
    <li class="flex items-center p-4">
        <svg class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
         </svg>
         3. สร้างระบบจัดการสินค้า (CRUD)     <Link to="/Product"  class="font-semibold pl-5 text-blue-500 text-2xl dark:text-white hover:underline">Link</Link>
    </li>
    <li class="flex items-center p-4">
        <svg class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
         </svg>
         4. ทำ Dark Mode Toggle    <p className='p-4 '> < Toggle/></p>
    </li>
    <li className="grid-flow-col items-center p-4 flex">
        <div className="flex items-center">  <svg class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
         </svg>5.สร้าง Real-Time Chat Application  </div>
      
             <Link to="/Chat"  class="font-semibold pl-5 text-blue-500 text-2xl dark:text-white hover:underline">Link</Link> 
       <p className='pl-5 text-red-500   font-semibold '>หมายเหตุ จะต้องรันตัว server ก่อน <input className=' bg-gray-200 dark:text-black p-4  w-full h-5' value="cd server"></input> -> 
       <input className=' bg-gray-200  w-full h-5 dark:text-black p-4' value="node server.js"></input></p>
    </li>
    <li class="flex items-center p-4">
        <svg class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
         </svg>
         6. ทำ Form Validation     <Link to="/FormValidation"  class="font-semibold pl-5 text-blue-500 text-2xl dark:text-white hover:underline">Link</Link>
    </li>
    <li class="flex items-center p-4">
        <svg class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
         </svg>
         7. พัฒนา Infinite Scroll     <Link to="/InfiniteScroll"  class="font-semibold pl-5 text-blue-500 text-2xl dark:text-white hover:underline">Link</Link>
    </li>
    <li class="flex items-center p-4">
        <svg class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
         </svg>
         8. สร้างระบบการจัดการตะกร้าสินค้า     <Link to="/Cart"  class="font-semibold pl-5 text-blue-500 text-2xl dark:text-white hover:underline">Link</Link>
         <p className='pl-5 text-red-500   font-semibold '>หมายเหตุ ข้อมูลสินค้าจะดึงจาก CRUD ที่ทำในหัวข้อที่ 3.  </p>
         </li>
    <li class="flex items-center p-4">
        <svg class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
         </svg>
         9. Export ข้อมูลเป็น CSV    <Link to="/Cart"  class="font-semibold pl-5 text-blue-500 text-2xl dark:text-white hover:underline">Link</Link>
         <p className='pl-5 text-red-500   font-semibold '>หมายเหตุ ข้อมูลสินค้าจะดึงจาก CRUD ที่ทำในหัวข้อที่ 3.  </p>
    </li>
    <li class="flex items-center p-4">
        <svg class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
         </svg>
         10. ใช้ Redux Toolkit ในการจัดการ State     <Link to="/InfiniteScroll"  class="font-semibold pl-5 text-blue-500 text-2xl dark:text-white hover:underline">Link</Link>
    </li>
   
    
   
</ul>


  </>
  )
}

export default Landingpage