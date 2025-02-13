import React from 'react'
import { FixedSizeList } from "react-window";

const data = Array.from({ length: 100000 }, (_, index) => `Item ${index}`);
const renderRow = ({ index, style }) => (
    <div className=' bg-gray-200 dark:text-white dark:bg-gray-500' style={style}>{data[index]}</div>



  );

const VirtualizedList = () => {
  
  return (
    
    <div style={{}  }>

<h1 className=' text-2xl font-bold '>Virtualized List (100,000 Items)</h1>
<br></br>
        <FixedSizeList
        height={500} // ความสูงของ list
        itemCount={data.length} // จำนวนรายการทั้งหมด
        itemSize={40} // ความสูงของแต่ละรายการ
        width="100%" // ความกว้างของ list
      >
        {renderRow}
        </FixedSizeList>

    
    
    
  </div>
  )
}

export default VirtualizedList