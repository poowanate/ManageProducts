import React,{useEffect,useState} from 'react'
import axios from "axios";

const Pagination = () => {

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 10; 
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(false);
    try {  //comments
      const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?_page=${currentPage}&_limit=${itemsPerPage}`);
      console.log(response)
      setData(response.data);
      const totalItems = response.headers["x-total-count"]; 
      setTotalPages(Math.ceil(totalItems / itemsPerPage)); 
      setLoading(true);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
// หน้าก่อนหน้า
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
// หน้าถัดไป
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
// ฟังก์ชันสำหรับคำนวณช่วงหน้าที่จะแสดง
const getPageRange = () => {
  const range = [];
  const maxPagesToShow = 5; // จำนวนหน้าที่แสดงใน UI
  let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
  let endPage = startPage + maxPagesToShow - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, endPage - maxPagesToShow + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    range.push(i);
  }

  return range;
};
const goToPage = (page) => {
  if (page >= 1 && page <= totalPages) {
    setCurrentPage(page);
  }
};
const pageRange = getPageRange();

  useEffect(()=>{
    fetchData()
  },[currentPage])

  return (
    <>
       <div className='text-center text-2xl font-bold p-4 dark:bg-gray-800 dark:text-white'>Pagination</div>
       <hr/>
       <div>
       {loading?(
        <>
         <div class="mx-auto max-w-none p-4 dark:bg-gray-800 text-black dark:text-white">
         <div className="grid grid-cols-[20%_80%] gap-1  p-2 text-center text-lg  font-bold">
         <div  >id</div>
  <div >name</div>
          </div>
          <hr/>
        <div class="overflow-hidden dark:bg-gray-800 text-black dark:text-white bg-white shadow-sm sm:rounded-lg">
        {data.map((item)=>(
          <>
          <div className="grid grid-cols-[20%_80%] gap-1 p-2 text-center">
  <div>{item.id}</div>
  <div >{item.name}</div>
          
</div>
<hr/>
           <ul role="list" class="divide-y divide-gray-200 ">
           {/* <div class="px-4 py-4 sm:px-6 hover:bg-gray-50">
                    <div class="grid grid-cols-12 gap-4 items-center ">
                      <div class="col-start-1 col-end-3 ...">
                        <span class="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-green-600/20 ring-inset">{item.id}</span>
                      </div>
                      <div class="col-span-2 col-end-7 truncate text-sm font-medium text-indigo-600">{item.name}</div>
                      
                    </div>
                
                  </div> */}

          
           </ul>
          </>
        ))}
        </div>
        </div>
        </>
       ):(<>loading</>)

       }
       </div>
    
       <div  class=" flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 text-black dark:bg-gray-800 dark:text-white">
  <div class="flex flex-1 justify-between sm:hidden">
    <a href="#" class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 ">Previous</a>
    <a href="#" class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>
  </div>
  <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
    <div>
    
    </div>
    <div>
      <nav class="isolate inline-flex -space-x-px rounded-md shadow-xs" aria-label="Pagination">
        <a onClick={prevPage} disabled={currentPage === 1} class="dark:bg-gray-800 hover:cursor-pointer relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
        <svg class="w-6 h-6 text-gray-800 dark:text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l4-4m-4 4 4 4"/>
</svg>

        </a>
        <> {/*  เลขหน้า */}
        {pageRange[0] > 1 && (
          <>
            <button className=' dark:bg-gray-800 dark:text-white relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0' onClick={() => goToPage(1)}>1</button>
            {pageRange[0] > 2 && <></>}
          </>
        )}
        {pageRange.map((page) => (
          <button
            key={page}
            onClick={() => goToPage(page)}
           
            className={ 'dark:bg-gray-800 dark:text-white relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 '+ (currentPage === page ? 'bg-indigo-600 text-white dark:bg-indigo-600 dark:text-white' : '')}
            // style={{ fontWeight: currentPage === page ? 'bold' : 'normal' }}
          >
            {page}
          </button>
        ))}
        {pageRange[pageRange.length - 1] < totalPages && (
          <>
            {pageRange[pageRange.length - 1] < totalPages - 1 && <></>}
            <button  className='dark:bg-gray-800 dark:text-white relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0' onClick={() => goToPage(totalPages)}>{totalPages}</button>
          </>
        )}
       
        {/* <a href="#" aria-current="page" class="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">1</a>
        <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0">2</a>
         */}
           </>

        <a onClick={nextPage} disabled={currentPage === totalPages} class=" dark:bg-gray-800 dark:text-white hover:cursor-pointer relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
        <svg class="w-6 h-6 text-gray-800 dark:text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
</svg>

        </a>
      </nav>
    </div>
  </div>
</div>

         {/* <button onClick={nextPage} disabled={currentPage === totalPages}>
          Next
        </button> */}
    </>
 
  )
}

export default Pagination