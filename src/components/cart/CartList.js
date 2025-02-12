import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { addToCart } from '../../store/Slice/CartSlice';

const CartList = () => {
    const dispatch = useDispatch();
    const data = useSelector((state)=>({...state.Products }))

    

    console.log(data)
    // const products = [
    //   { id: 1, name: 'สินค้า 1', price: 100 },
    //   { id: 2, name: 'สินค้า 2', price: 200 },
    //   { id: 3, name: 'สินค้า 3', price: 300 },
    // ];
  
    const handleAddToCart = (product) => {
       
      dispatch(addToCart(product));
    };
  
    return (
      <div>
        <h2 className='text-2xl font-bold p-3'>รายการสินค้า</h2>
        <ul>
            {data ? 

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Image
                </th>
                <th scope="col" class="px-6 py-3">
                Name
                </th>
                <th scope="col" class="px-6 py-3">
                detail
                </th>
                <th scope="col" class="px-6 py-3">
                price
                </th>
                <th scope="col" class="px-6 py-3">
                Action
                </th>
            </tr>
        </thead>
        <tbody>
       
            {data.products.map((product)=> ( 
                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <img class=" w-24 w-24 object-cover " src= {product.image} alt="image description"/>
                </th>
                <td class="px-6 py-4">
                {product.name}
                </td>
                <td style={{ maxWidth: '200px' }} class="px-6 py-4 break-all">
                {product.detail}
                </td>
                <td class="px-6 py-4">
                {product.price}
                </td>
                <td class="px-6 py-4">
                    
                <a  className=' hover:underline hover:cursor-pointer font-medium text-green-600 dark:text-green-500 hover:underline"' onClick={() => handleAddToCart(product)}>เพิ่มลงตะกร้า</a>
                </td>
                </tr>
            ))}
           
          
         
       
        </tbody>
    </table>
</div>
 : <></>}
          {/* {data.map((product) => (
            <li key={product.id}>
              <span>{product.name} - {product.price} บาท</span>
              <button onClick={() => handleAddToCart(product)}>เพิ่มลงตะกร้า</button>
            </li>
          ))} */}
        </ul>
      </div>
    );
}

export default CartList