import Papa from 'papaparse';

export const exportToCSV = (items, totalAmount) => {



   const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
  const data = items.map((item) => ({
   
    Name:item.name,
    Price: item.price,
    Quantity: item.quantity,
    Total: item.price * item.quantity,
  }));

  // เพิ่มข้อมูลยอดรวมในไฟล์ CSV
  data.push({
    Product: 'Total',
    Price: '',
    Quantity: totalQuantity,
    Total: totalAmount,
  });

  // แปลงข้อมูลเป็น CSV
  const csv = Papa.unparse(data);

  // สร้างไฟล์ CSV และดาวน์โหลด
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'cart_items.csv');
    link.click();
  }
};