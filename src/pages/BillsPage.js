import React, { useEffect, useState } from "react";
import axios from "axios";

function BillsPage() {
  const [bills, setBills] = useState([]);

  useEffect(() => {
    fetchBills();
  }, []);

  const fetchBills = async () => {
    try {
      const res = await axios.get("http://localhost:5000/bills");
      const billsWithId = res.data.map((bill, index) => ({
        ...bill,
        id: bill.id || `temp-id-${index}`,  // Tạo id giả nếu backend không có id
      }));
      setBills(billsWithId);
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu hóa đơn:", error);
    }
  };

  const handleDeleteBill = async (billId) => {
    const confirmDelete = window.confirm("Bạn có chắc chắn muốn xóa hóa đơn này?");
    if (!confirmDelete) return;

    try {
      // Nếu id là giả thì không gửi xóa được, bạn có thể xử lý tùy ý
      if (billId.toString().startsWith("temp-id")) {
        alert("Không thể xóa hóa đơn vì không có ID thực.");
        return;
      }

      const url = `http://localhost:5000/bills/${billId}`;
      const response = await axios.delete(url);
      if (response.status === 200 || response.status === 204) {
        alert("Xóa hóa đơn thành công!");
        fetchBills();
      } else {
        alert("Xóa hóa đơn thất bại. Mã trạng thái: " + response.status);
      }
    } catch (error) {
      console.error("Lỗi khi xóa hóa đơn:", error);
      alert("Xóa hóa đơn thất bại. Có thể server không chạy hoặc ID không tồn tại.");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ fontWeight: "bold", fontSize: 24, marginBottom: 20 }}>
        Danh sách hóa đơn
      </h1>

      {bills.length === 0 ? (
        <p>Chưa có hóa đơn nào.</p>
      ) : (
        bills.map((bill) => (
          <div
            key={bill.id}
            style={{
              marginBottom: 20,
              border: "1px solid #ddd",
              borderRadius: 8,
              padding: 16,
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            <p>
              <strong>Thời gian: </strong>
              {new Date(bill.createdAt).toLocaleString("vi-VN")}
            </p>
            <p>
              <strong>Số lượng sản phẩm: </strong>
              {bill.items.length}
            </p>
            <ul style={{ paddingLeft: 20 }}>
              {bill.items.map((item, idx) => (
                <li key={idx}>
                  {item.name} x {item.quantity || 1} - {item.price} đ
                </li>
              ))}
            </ul>
            <button
              style={{
                backgroundColor: "red",
                color: "white",
                padding: "8px 12px",
                border: "none",
                borderRadius: 4,
                cursor: "pointer",
                marginTop: 10,
              }}
              onClick={() => handleDeleteBill(bill.id)}
            >
              Xóa hóa đơn
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default BillsPage;
