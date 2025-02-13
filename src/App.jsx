import "./App.css";
import Layout from "./components/Layouts/layout"

import Testredux from "./components/testredux";
import Testredux2 from "./components/testredux2";

import { useSelector, useDispatch } from 'react-redux';



function App() {
  const theme = useSelector((state) => state.DarkMode.theme);

  console.log(theme) 
  
  return (
    <>

    <Layout/>

    
   
    </>
  );
}

export default App;
