import React from 'react'
import { useForm } from "react-hook-form";

const FormValidation = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
      } = useForm();
    
      const onSubmit = (data) => {
        console.log("Form Data:", data);
        alert("ลงทะเบียนสำเร็จ!");
      };

        // ตรวจสอบ password และ confirmPassword ต้องตรงกัน
  const password = watch("password");

  return (
    <div> <label className=' text-2xl font-bold '>Register Validation</label> 
    <form className='mt-5' onSubmit={handleSubmit(onSubmit)}>
      {/* ชื่อจริง */}
      <div>
      <div class="grid gap-6 mb-6 md:grid-cols-2">
        
        <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ชื่อจริง</label>
            <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          {...register("firstName", {
            required: "กรุณากรอกชื่อจริง",
            minLength: {
              value: 2,
              message: "ชื่อจริงต้องมีความยาวอย่างน้อย 2 ตัวอักษร",
            },
          })}
          placeholder="ชื่อจริง"
        />
   {errors.firstName && (
          <span  className='block mb-2 text-sm font-medium text-red-500 dark:text-red-500'>{errors.firstName.message}</span>
        )}
       
        </div>
        <div>
            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">นามสกุล</label>
            <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          {...register("lastName", {
            required: "กรุณากรอกนามสกุล",
            minLength: {
              value: 2,
              message: "นามสกุลต้องมีความยาวอย่างน้อย 2 ตัวอักษร",
            },
          })}
          placeholder="นามสกุล"
        />
   {errors.lastName && (
          <span  className='block mb-2 text-sm font-medium text-red-500 dark:text-red-500'>{errors.lastName.message}</span>
        )}
       
        </div>
     
       
    </div>
     
    <div class="grid gap-6 mb-6 md:grid-cols-1">

    <div>
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">email</label>
            <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
         {...register("email", {
            required: "กรุณากรอกอีเมล",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "อีเมลไม่ถูกต้อง",
            },
          })}
          placeholder="อีเมล"
        />
   {errors.email && (
          <span  className='block mb-2 text-sm font-medium text-red-500 dark:text-red-500'>{errors.email.message}</span>
        )}
       
        </div>
        
        <div>
            <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
            <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            {...register("username", {
                required: "กรุณากรอก username",
                minLength: {
                  value: 4,
                  message: "username ต้องมีความยาวอย่างน้อย 4 ตัวอักษร",
                },
              })}
              placeholder="Username"
        />
   {errors.username && (
          <span  className='block mb-2 text-sm font-medium text-red-500 dark:text-red-500'>{errors.username.message}</span>
        )}
       
        </div>
        <div>
            <label for="Password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
           type="password"
           {...register("password", {
             required: "กรุณากรอก password",
             minLength: {
               value: 6,
               message: "password ต้องมีความยาวอย่างน้อย 6 ตัวอักษร",
             },
           })}
           placeholder="Password"
        />
   {errors.password && (
          <span  className='block mb-2 text-sm font-medium text-red-500 dark:text-red-500'>{errors.password.message}</span>
        )}
       
        </div>
        <div>
            <label for="confirmPassword" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">confirmPassword</label>
            <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          
           type="password"
           {...register("confirmPassword", {
             required: "กรุณายืนยัน password",
             validate: (value) =>
               value === password || "password ไม่ตรงกัน",
           })}
           placeholder="Confirm Password"
        />
   {errors.confirmPassword && (
          <span  className='block mb-2 text-sm font-medium text-red-500 dark:text-red-500'>{errors.confirmPassword.message}</span>
        )}
       
        </div>
        </div>
      </div>
      <div className='  justify-self-center'>
      <button className=' p-4  bg-blue-500 rounded-md text-white ' type="submit">ลงทะเบียน</button>
      </div>
 
      </form>
      </div>
  )
}

export default FormValidation