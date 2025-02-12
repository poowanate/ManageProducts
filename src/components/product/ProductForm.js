import React, { useState,useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { addProduct } from '../../store/Slice/ProductSlice';

const ProductForm = () => {

  const data = useSelector((state)=>({...state.Products }))
  console.log(data.products)
  console.log(data.index)
   const item = data.products.find((item) => item.id === parseInt(data.index));

  const dispatch = useDispatch();
  const [productImg, setproductImg] = useState('');
  const [productName, setproductName] = useState('');
  
  const [productDetail, setproductDetail] = useState('');
  const [productPrice, setproductPrice] = useState('');
  const [fileName,setfileName] = useState('');

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setfileName(event.target.value);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result; // เก็บ Base64 string
        console.log(base64String)
        setproductImg(base64String); // อัปเดต state

       
      };
      reader.readAsDataURL(file); // อ่านไฟล์และแปลงเป็น Base64
    }
  };
  useEffect(() => {
    if (item) {
      setvalue(item)

    }
  }, [item]);
  const setvalue = (data)=>{
    setproductImg(data.image);
    setproductName(data.image);
    setproductDetail(data.image);
    setproductPrice(data.image);
    setfileName(data.image);
  }

  const clearvalue = ()=>{
    setproductImg('');
    setproductName('');
    setproductDetail('');
    setproductPrice('');
    setfileName('');
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Date.now(),
      image: productImg,
      name: productName,
      detail: productDetail,
      price: productPrice,
    };
    dispatch(addProduct(newProduct));
    clearvalue()
  };

  return (
    
<form onSubmit={handleSubmit}>
  <div>
<label for="last_name" class="block  text-sm font-medium text-gray-900 dark:text-white">Product image</label>
<div class="flex items-center justify-center w-ful ">
  
    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG </p>
        </div>
        <input id="dropzone-file" type="file" class="hidden"   accept="image/*" onChange={handleImageUpload}  />
    </label>
    
</div> 
<label for="last_name" class="block mb-6 text-sm font-medium text-gray-900 dark:text-white">{fileName}</label>
</div>

    <div class="grid gap-6 mb-6 md:grid-cols-2">
        
        <div>
            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product name</label>
            <input 
            value={productName}
            onChange={(e) => setproductName(e.target.value)}
            type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ใส่ชื่อสินค้า" required />
        </div>
        <div>
            <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product price</label>
            <input 
            value={productPrice}
            onChange={(e) => setproductPrice(e.target.value)}
            type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ใส่ราคา" required />
        </div>  
      
       
    </div>
    
    <div className='mb-6'>
           
<label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product detail</label>
<textarea value={productDetail}
         onChange={(e) => setproductDetail(e.target.value)}

id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="คำอธิบายเกี่ยวกับสินค้า"></textarea>
     </div>
    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>


  );
};

export default ProductForm;