import React,{useEffect,useState} from 'react'
import axios from "axios";

const Pagination = () => {

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 10; 

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?_page=${currentPage}&_limit=${itemsPerPage}`);
      console.log(response)
      setData(response.data);
      const totalItems = response.headers["x-total-count"]; 
      setTotalPages(Math.ceil(totalItems / itemsPerPage)); 
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(()=>{
    fetchData()
  },[currentPage])

  return (
    <div>Pagination</div>
  )
}

export default Pagination