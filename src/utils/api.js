// utils/api.js
export const createBill = async (billData) => {
  const res = await fetch('http://localhost:5000/bills', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(billData),
  });

  if (!res.ok) throw new Error('Tạo hóa đơn thất bại');
  return await res.json();
};
