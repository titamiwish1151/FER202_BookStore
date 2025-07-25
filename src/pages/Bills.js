// src/pages/Bills.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Bills = () => {
  const [bills, setBills] = useState([]);

  useEffect(() => {
    const fetchBills = async () => {
      try {
        const res = await axios.get("http://localhost:5000/bills");
        const billsWithId = res.data.map((bill) => ({
          ...bill,
          id: bill._id, // đảm bảo sử dụng _id
        }));
        setBills(billsWithId);
      } catch (error) {
        console.error("Lỗi khi tải hóa đơn:", error);
      }
    };

    fetchBills();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-8 p-4 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">📜 Danh sách hóa đơn</h2>

      {bills.length === 0 ? (
        <p className="text-gray-600">Chưa có hóa đơn nào.</p>
      ) : (
        <ul className="space-y-4">
          {bills.map((bill) => (
            <li key={bill.id} className="border p-4 rounded shadow-sm">
              <div className="mb-2">
                <p><strong>ID hóa đơn:</strong> {bill.id}</p>
                <p><strong>Ngày tạo:</strong> {bill.createdAt ? new Date(bill.createdAt).toLocaleString() : "Không rõ"}</p>
                <p><strong>Tổng tiền:</strong> {bill.total?.toLocaleString("vi-VN") || 0} ₫</p>
              </div>
              <Link
                to={`/bills/${bill.id}`}
                className="inline-block text-blue-600 hover:underline mt-2"
              >
                🔎 Xem chi tiết
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Bills;
