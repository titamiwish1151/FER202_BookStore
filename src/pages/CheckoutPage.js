import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const CheckoutPage = () => {
  const { billId } = useParams();
  const navigate = useNavigate();
  const [bill, setBill] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("");

  useEffect(() => {
    const fetchBill = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/bills/${billId}`);
        setBill(res.data);
      } catch (error) {
        console.error("Lỗi khi lấy hóa đơn:", error);
      }
    };
    fetchBill();
  }, [billId]);

  const handleConfirmPayment = () => {
    alert(`Thanh toán hóa đơn ${billId} bằng ${paymentMethod} thành công!`);
    navigate("/bills");
  };

  const formatCurrency = (number) =>
    number.toLocaleString("vi-VN", { style: "currency", currency: "VND" });

  if (!bill) return <div className="p-8">Đang tải hóa đơn...</div>;

  const total = bill.items.reduce(
    (sum, item) => sum + (item.price || 0) * item.quantity,
    0
  );

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">💳 Thanh toán hóa đơn #{billId}</h2>

      <div className="bg-gray-50 p-4 rounded shadow mb-4">
        <p className="mb-2">
          <strong>Ngày tạo:</strong>{" "}
          {new Date(bill.createdAt).toLocaleString("vi-VN")}
        </p>
        <ul className="list-disc ml-5">
          {bill.items.map((item, idx) => (
            <li key={idx}>
              {item.name || item.title} x {item.quantity} -{" "}
              {formatCurrency(item.price)}
            </li>
          ))}
        </ul>
        <p className="mt-4">
          <strong>Tổng tiền:</strong> {formatCurrency(total)}
        </p>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold mb-2">Chọn phương thức thanh toán:</h3>
        {["Banking", "Momo", "VNPay"].map((method) => (
          <label key={method} className="flex items-center gap-2 mb-1">
            <input
              type="radio"
              value={method}
              checked={paymentMethod === method}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            {method}
          </label>
        ))}
      </div>

      <div className="flex gap-3">
        <button
          onClick={() => navigate("/bills")}
          className="px-4 py-2 border rounded hover:bg-gray-100"
        >
          Quay lại
        </button>
        <button
          onClick={handleConfirmPayment}
          disabled={!paymentMethod}
          className={`px-4 py-2 rounded text-white ${
            paymentMethod
              ? "bg-green-600 hover:bg-green-700"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Xác nhận thanh toán
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
