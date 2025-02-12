import "./App.css";

import Testredux from "./components/testredux";
import Testredux2 from "./components/testredux2";
import VirtualizedList from "./components/VirtualizedList";
import Pagination from "./components/Pagination";
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './store/Slice/DarkModeSlice';
import Product from "./components/products/Product";
import Toggle from "./components/Toggle";
import Chat from "./components/Chat";
import FormValidation from "./components/FormValidation";
import InfiniteScroll from "./components/InfiniteScroll";
function App() {
  const theme = useSelector((state) => state.DarkMode.theme);

  console.log(theme) 
  
  return (
    <>
 <div className="dark:bg-gray-900 text-black dark:text-white min-h-screen p-8">
 <Toggle/>  
  <div className= " dark:bg-gray-800 dark:text-white mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl">
  <div className="p-8">
    <div className=" md:flex "></div>
    {/* <Pagination/> */}
    {/* <Product/> */}
{/* <Chat/> */}
    {/* <FormValidation/> */}
    <InfiniteScroll/>
    </div>
    </div>
    </div>  
    </>
  );
}

export default App;
