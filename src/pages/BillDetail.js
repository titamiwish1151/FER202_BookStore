// src/pages/BillDetail.jsx
import React from "react";
import { useSelector } from "react-redux";

const BillDetail = () => {
  const { bills } = useSelector((state) => state.cart);

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Danh sách hóa đơn</h2>
      {bills.length === 0 ? (
        <p>Chưa có hóa đơn nào được tạo.</p>
      ) : (
        <ul className="space-y-4">
          {bills.map((bill) => (
            <li
              key={bill.id}
              className="p-4 border border-gray-200 rounded-lg shadow-sm"
            >
              <p><strong>Khách hàng:</strong> {bill.name}</p>
              <p><strong>Email:</strong> {bill.email}</p>
              <p><strong>Địa chỉ:</strong> {bill.address}</p>
              <p><strong>Số điện thoại:</strong> {bill.phone}</p>
              <p><strong>Thời gian:</strong> {bill.date}</p>
              <p className="mt-2"><strong>Chi tiết:</strong></p>
              <ul className="list-disc ml-5">
                {bill.items.map((item, idx) => (
                  <li key={idx}>
                    {item.name} - SL: {item.quantity} - Giá: {item.price}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BillDetail;
