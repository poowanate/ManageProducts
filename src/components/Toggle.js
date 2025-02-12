import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../store/Slice/DarkModeSlice';
import '../App.css'


const Toggle = () => {
  const theme = useSelector((state) => state.DarkMode.theme);
  const dispatch = useDispatch();
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  // console.log(theme) 
  return (
   
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white  p-8">
      
      <button
        onClick={() => dispatch(toggleTheme())}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    
    </div>
   
  );
};

export default Toggle;