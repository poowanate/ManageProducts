import "./App.css";

import Testredux from "./components/testredux";
import Testredux2 from "./components/testredux2";
import VirtualizedList from "./components/VirtualizedList";
import Pagination from "./components/Pagination";
function App() {

  
  return (
    <>
  <div className= "justify-center text-center text-2xl">
    <Pagination/>
    {/* <Testredux/>
    <hr></hr>
    <Testredux2/>
    <br>
    </br> */}
    {/* <VirtualizedList/> */}
    </div>
    </>
  );
}

export default App;
