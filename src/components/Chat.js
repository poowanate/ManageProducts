import React, { useState, useEffect } from 'react';

const App = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [ws, setWs] = useState(null);
  useEffect(() => {
    const websocket = new WebSocket('ws://localhost:8080');
  
    websocket.onopen = () => {
      console.log('Connected to WebSocket');
    };
  
    websocket.onmessage = async (event) => {
      let newMessage;
  
      if (event.data instanceof Blob) {
        newMessage = await event.data.text();
      } else {
        newMessage = event.data;
      }
  
      // อัปเดต state โดยไม่ทำให้ข้อความซ้ำ
      setMessages((prevMessages) => {
        // ตรวจสอบว่าข้อความนี้ยังไม่มีอยู่ใน state
        if (!prevMessages.includes(newMessage)) {
          return [...prevMessages, newMessage];
        }
        return prevMessages;
      });
    };
  
    websocket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };
  
    websocket.onclose = () => {
      console.log('WebSocket connection closed');
    };
  
    // บันทึก WebSocket instance ใน state
    setWs(websocket);
  
    // ปิดการเชื่อมต่อเมื่อคอมโพเนนต์ถูก unmount
    return () => {
      websocket.close();
    };
  }, []);

  const sendMessage = () => {
    if (ws && ws.readyState === WebSocket.OPEN && inputValue) {
      ws.send(inputValue);
      setInputValue('');
    } else {
      console.error('WebSocket is not open');
    }
  };

  return (
    <div className=''>
      <h4 className=' font-bold text-2xl'>Real-Time Chat</h4>
      <div class="h-96 overflow-y-scroll ">
  {messages.map((message, index) => (
    <div className=' p-4  text-center  ' key={index}>{message}
     <hr class="h-px mt-4 bg-gray-200 border-0 dark:bg-gray-700" /></div>
    
  ))}
 
</div>
<div>
<input className=' mt-3 p-3 rounded-l-lg  shadow text-black bg-gray-100 dark:bg-white  '
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className='  justify-center bg-blue-500 p-3   shadow text-black dark:text-white rounded-r-lg' onClick={sendMessage}>Send</button>

</div>
     
    </div>
  );
};

export default App;