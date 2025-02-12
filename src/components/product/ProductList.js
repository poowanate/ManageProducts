import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIndex,deleteProduct, updateProduct,clearData } from '../../store/Slice/ProductSlice';
import { FixedSizeList } from "react-window";

const TableWithFixedSizeList = ({ products }) => {

  const dispatch = useDispatch();


  const handleRemove = (product) => {
    // console.log(id)
    dispatch(deleteProduct(product.id));
  };

  const handleEdit = (product) => {
    
    dispatch(selectIndex(product.id))
    // const updatedProduct = { ...product, name: prompt('Edit product name:', product.name) };
    // if (updatedProduct.name) {
    //   dispatch(updateProduct(updatedProduct));
    // }
  };

  const rowHeight = 50;

  // จำนวนแถวทั้งหมด
  const rowCount = products.length;  

  const renderRow = ({ index, style }) => {
    const product = products[index];
    return (
     
         
      <div style={style} class=" grid grid-cols-5 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
        
          <div   class="truncate px-6 py-4 font-medium text-gray-900  dark:text-white">
          {product.name}
          </div>
          <div  class="truncate px-6 py-4 dark:text-white">
          {product.name}
          </div>
          <div  class="truncate px-6 py-4 dark:text-white" >
          {product.price}
          </div>
          <div  class="truncate text-left px-6 py-4 dark:text-white">
          {product.detail}
          </div>
          <div  class=" px-6 py-4 flex gap-4 ">
           
              <a onClick={() => handleEdit(product)} class="font-medium text-blue-600 dark:text-blue-500 hover:underline"><svg class=" hover:bg-green-200 hover:text-green-600 mb-2 border rounded-lg border-green-400 w-8 h-8 text-green-500 dark:text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M10.779 17.779 4.36 19.918 6.5 13.5m4.279 4.279 8.364-8.643a3.027 3.027 0 0 0-2.14-5.165 3.03 3.03 0 0 0-2.14.886L6.5 13.5m4.279 4.279L6.499 13.5m2.14 2.14 6.213-6.504M12.75 7.04 17 11.28"/>
</svg>
</a>

              <a onClick={() => handleRemove(product)} class=" btn   font-medium text-blue-600 dark:text-blue-500 hover:underline"><svg class="hover:bg-red-200 hover:text-red-600 border rounded-lg border-red-400 w-8 h-8 text-red-500 dark:text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
</svg>
</a>
             
          </div>
      </div>
    
 






      // <div style={style} className="product-item">
      //   {product.name}
      //   <button onClick={() => handleEdit(product)}>Edit</button>
      //   <button onClick={() => handleRemove(product.id)}>Delete</button>
      // </div>
    );
  };

  return (
   
<div  class="w-full text-sm text-left rtl:text-right text-gray-500  dark:bg-gray-800  ">

          <div  className='grid grid-cols-5 dark:bg-gray-500 dark:  text-white  bg-gray-500 '>
              
              <div  scope="col" className="flex-1 p-3   text-left">
                   Image
              </div>
              <div  scope="col" className="flex-1 p-3  text-left">
                   Name
              </div>
              <div  scope="col" className="flex-1 p-3   text-left">
                  Price
              </div>
              <div  scope="col" className="flex-1  p-3   text-left">
                  detail
              </div>
              <div  scope="col" className="flex-1 p-3   text-left">
                  Action
              </div>
          </div>
     
      
      <FixedSizeList
        height={500} // ความสูงของ list
        itemCount={rowCount} // จำนวนรายการทั้งหมด
        itemSize={rowHeight } // ความสูงของแต่ละรายการ
        width="100%" // ความกว้างของ list
      >
        {renderRow}
        </FixedSizeList> 
       

 </div>

  );
}


const ProductList = () => {
 

   const products = useSelector(state => state.Products.products);

  return (

    
    <div className='mt-5'>
      <a className=' text-2xl font-bold p-3'>Product List</a>
      <br/>
     
  
  <TableWithFixedSizeList products={products} />
     
    

      
    
       
</div>
    
  
  );
};

export default ProductList;