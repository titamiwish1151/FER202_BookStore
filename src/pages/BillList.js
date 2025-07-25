import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BillList = () => {
  const [bills, setBills] = useState([]);
  const [expandedBillId, setExpandedBillId] = useState(null);
  const navigate = useNavigate();

  const fetchBills = async () => {
    try {
      const response = await axios.get("http://localhost:5000/bills");
      setBills(response.data);
    } catch (err) {
      console.error("❌ Lỗi khi tải hóa đơn:", err);
      alert("Không thể tải danh sách hóa đơn. Vui lòng kiểm tra server.");
    }
  };

  useEffect(() => {
    fetchBills();
  }, []);

  const toggleBillDetails = (id) => {
    setExpandedBillId(expandedBillId === id ? null : id);
  };

  const handlePay = (billId) => {
    navigate(`/payment/${billId}`);
  };

  const handleDeleteBill = async (billId) => {
    const confirmDelete = window.confirm("Bạn có chắc chắn muốn xóa hóa đơn này?");
    if (!confirmDelete) return;

    try {
      const numericId = Number(billId); // đảm bảo ID là số
      const url = `http://localhost:5000/bills/${numericId}`;
      console.log("🔁 Gửi DELETE tới:", url);

      const response = await axios.delete(url);
      if (response.status === 200 || response.status === 204) {
        alert("🗑️ Xóa hóa đơn thành công!");
        fetchBills(); // Refresh danh sách
      } else {
        alert("❌ Xóa hóa đơn thất bại. Mã trạng thái: " + response.status);
      }
    } catch (error) {
      console.error("❌ Lỗi khi xóa hóa đơn:", error);
      alert("❌ Xóa hóa đơn thất bại. Có thể server không chạy hoặc ID không tồn tại.");
    }
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "1rem" }}>📜 Danh sách hóa đơn</h2>

      {bills.length === 0 ? (
        <p>Chưa có hóa đơn nào.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {bills.map((bill) => {
            const billId = bill.id || bill._id;
            return (
              <li
                key={billId}
                style={{
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  padding: "16px",
                  marginBottom: "16px",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                }}
              >
                <div
                  onClick={() => toggleBillDetails(billId)}
                  style={{ cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                >
                  <span>
                    <strong>🧾 Hóa đơn lúc:</strong>{" "}
                    {new Date(bill.createdAt).toLocaleString()}
                  </span>
                  <button style={{ color: "blue", background: "none", border: "none", cursor: "pointer" }}>
                    {expandedBillId === billId ? "Ẩn chi tiết" : "Xem chi tiết"}
                  </button>
                </div>

                {expandedBillId === billId && (
                  <div style={{ marginTop: "1rem" }}>
                    <p>
                      <strong>Số lượng sản phẩm:</strong> {bill.items?.length ?? 0}
                    </p>

                    <ul style={{ marginLeft: "1.5rem" }}>
                      {bill.items?.map((item, idx) => (
                        <li key={idx}>
                          <span style={{ fontWeight: "500" }}>
                            {item.name || item.title || "Không rõ tên"}
                          </span>{" "}
                          × {item.quantity || 1} – {item.price?.toLocaleString()} ₫
                        </li>
                      ))}
                    </ul>

                    <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
                      <button
                        onClick={() => handlePay(billId)}
                        style={{
                          backgroundColor: "green",
                          color: "#fff",
                          padding: "8px 16px",
                          borderRadius: "4px",
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        Thanh toán
                      </button>

                      <button
                        onClick={() => handleDeleteBill(billId)}
                        style={{
                          backgroundColor: "red",
                          color: "#fff",
                          padding: "8px 16px",
                          borderRadius: "4px",
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        Xóa hóa đơn
                      </button>
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default BillList;
