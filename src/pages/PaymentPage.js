import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const PaymentPage = () => {
  const { billId } = useParams();
  const [selectedMethod, setSelectedMethod] = useState(null);

  const renderPaymentDetails = () => {
    switch (selectedMethod) {
      case "momo":
        return (
          <div className="mt-4">
            <p><strong>📱 Momo:</strong></p>
            <ul className="list-disc ml-6">
              <li>Số tài khoản: <strong>0836714262</strong></li>
              <li>Chủ tài khoản: <strong>Nguyễn Đức Phương</strong></li>
            </ul>
          </div>
        );
      case "vnpay":
        return (
          <div className="mt-4">
            <p><strong>🔳 Quét mã QR bên dưới để thanh toán qua VNPay:</strong></p>
            <img
              src="/images/maqr.jpg"
              alt="VNPay QR"
              className="dw-48 h-auto mt-2 border rounded"
            />
          </div>
        );
      case "bank":
        return (
          <div className="mt-4">
            <p><strong>🏦 Chuyển khoản ngân hàng:</strong></p>
            <ul className="list-disc ml-6">
              <li>Số tài khoản: <strong>0836714262</strong></li>
              <li>Ngân hàng: <strong>MB Bank</strong></li>
              <li>Chủ tài khoản: <strong>Nguyễn Đức Phương</strong></li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">💳 Thanh toán cho Hóa đơn #{billId}</h2>

      <div className="flex gap-4 flex-wrap">
        <button
          onClick={() => setSelectedMethod("momo")}
          className="border px-4 py-2 rounded hover:bg-purple-100"
        >
          Thanh toán qua Momo
        </button>

        <button
          onClick={() => setSelectedMethod("vnpay")}
          className="border px-4 py-2 rounded hover:bg-blue-100"
        >
          Thanh toán qua VNPay
        </button>

        <button
          onClick={() => setSelectedMethod("bank")}
          className="border px-4 py-2 rounded hover:bg-green-100"
        >
          Chuyển khoản ngân hàng
        </button>
      </div>

      {renderPaymentDetails()}
    </div>
  );
};

export default PaymentPage;
