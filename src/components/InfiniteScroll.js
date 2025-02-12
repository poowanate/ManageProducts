import React, { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios"; // นำเข้า Axios

function InfiniteScroll() {
  const [data, setData] = useState([]); // เก็บข้อมูลที่โหลดมา
  const [page, setPage] = useState(1); // เก็บหน้าปัจจุบัน
  const [loading, setLoading] = useState(false); // สถานะการโหลด
  const [hasMore, setHasMore] = useState(true); // ตรวจสอบว่ามีข้อมูลเพิ่มเติมหรือไม่
  const observer = useRef(); // ใช้ Intersection Observer

  // ฟังก์ชันดึงข้อมูลจาก API ด้วย Axios
  const fetchData = async (page) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/photos?_limit=15&_page=${page}`
      );
      const newData = response.data;
      if (newData.length === 0) {
        setHasMore(false); // ไม่มีข้อมูลเพิ่มเติม
      } else {
        setData((prevData) => [...prevData, ...newData]); // เพิ่มข้อมูลใหม่
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  // ใช้ Intersection Observer เพื่อตรวจจับเมื่อผู้ใช้เลื่อนถึงจุดสิ้นสุด
  const lastElementRef = useCallback(
    (node) => {
      if (loading) return; // ไม่ต้องทำอะไรถ้ากำลังโหลด
      if (observer.current) observer.current.disconnect(); // ยกเลิก observer เก่า
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1); // เพิ่มหน้าและดึงข้อมูลใหม่
        }
      });
      if (node) observer.current.observe(node); // เริ่ม observer
    },
    [loading, hasMore]
  );

  // ดึงข้อมูลเมื่อหน้าเปลี่ยน
  useEffect(() => {
    fetchData(page);
  }, [page]);

  return (
    <div>
      <label className=' text-2xl font-bold '>InfiniteScroll</label> 
      <ul>
        {data.map((item, index) => {
          if (data.length === index + 1) {
            // ถ้าเป็น element สุดท้าย ให้เพิ่ม ref
            return (
              <li key={`${item.id}-${index}`} ref={lastElementRef}>
                {item.title}
              </li>
            );
          } else {
            return <li key={`${item.id}-${index}`}>{item.title}</li>;
          }
        })}
      </ul>
      {loading && <p>Loading...</p>}
      {!hasMore && <p>No more data to load.</p>}
    </div>
  );
}

export default InfiniteScroll;