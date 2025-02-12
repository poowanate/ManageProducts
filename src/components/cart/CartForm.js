import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updatePlusQuantity , updateDeQuantity } from '../../store/Slice/CartSlice';
import { exportToCSV } from '../../utils/exportCSV';

const CartForm = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.Cart.items);
    const [cartData,setcartData] = useState([]);
   
    const handleRemove = (id) => {
      dispatch(removeFromCart(id));
    };
  
    const handleUpdatePlusQuantity = (id, quantity) => {
        
      dispatch(updatePlusQuantity({ id, quantity }));
    };


    const handleUpdateDeQuantity = (id, quantity) => {
        
        dispatch(updateDeQuantity({ id, quantity }));
      };
  
    
    const getTotal = () => {
      return cartData.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };
    
    const handleExportCSV = () => {
        const totalAmount = getTotal();
        exportToCSV(cartItems, totalAmount);  // ส่งข้อมูลสินค้ากับยอดรวมไปที่ฟังก์ชัน export
      };

    useEffect(() => {
        console.log(cartItems)
        // console.log(data)
        if (cartItems) {
            setcartData(cartItems)
        //   setButton(true)
         }
      }, [cartItems]);


    return (
      <div>
        <h2 className='text-2xl font-bold p-3'>ตะกร้าสินค้า</h2>
        
        {cartData ?
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    <span >Image</span>
                </th>
                <th scope="col" class="px-6 py-3">
                    Product
                </th>
                <th scope="col" class="px-6 py-3">
                    Qty
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Total
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
      
           
            {cartData.map((item) => (
                
                 <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className='p-4' >
                        <img class=" w-16 md:w-32 max-w-full max-h-full object-cover " src= {item.image} alt="image description"/>
                    </td>
                    <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        {item.name}
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center">
                        <button onClick={(e)=> handleUpdateDeQuantity(item.id,parseInt(item.quantity))}  class="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                            <span class="sr-only">Quantity button</span>
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <div>
                            <input value={item.quantity} type="number" id="first_product" class="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1" required />
                        </div>
                        <button onClick={(e)=> handleUpdatePlusQuantity(item.id,parseInt(item.quantity))} class="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                            <span class="sr-only">Quantity button</span>
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </button>
                    </div>
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        {item.price}
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                       {item.price*item.quantity}
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                <a  className=' hover:underline hover:cursor-pointer font-medium text-red-600 dark:text-red-500 hover:underline"' onClick={() => handleRemove(item.id)}>ทิ้งรายการ</a>
                </td>
                 </tr>
                  
            ))}
      
   
      {/* <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
      {getTotal()}
      </td> */}
        </tbody>
    
        <tfoot>
            <tr class="font-semibold text-gray-900 dark:text-white">
            <td class="px-6 py-3"><button  className='p-4 bg-green-500 rounded-lg text-white hover:bg-green-600 hover:text-gray-200' onClick={handleExportCSV}>ดาวน์โหลด CSV</button></td>
            <td scope="row" class="px-6 py-3 text-base"></td>
            <td scope="row" class="px-6 py-3 text-base"></td>
                <td scope="row" class="px-6 py-3 text-base">Total</td>
                
                <td class="px-6 py-3">{getTotal()} &nbsp;&nbsp; บาท</td>
               
            </tr>

            
        </tfoot>
            <div>
           
          
        </div>
    </table>
</div>
: <></>
}


        {/* {carData?  <ul>
        // 
       
        {/* <div>ยอดรวม: {getTotal()} บาท</div> */}
      </div>
    );
}

export default CartForm