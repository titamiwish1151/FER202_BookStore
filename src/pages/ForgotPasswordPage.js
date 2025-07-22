import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(''); // Để hiển thị thông báo thành công/lỗi
  const [messageType, setMessageType] = useState(''); // 'success' hoặc 'error'

  const handleSubmit = (e) => {
    e.preventDefault();
    // Đây là nơi bạn sẽ gọi API backend của mình để gửi yêu cầu đặt lại mật khẩu.
    // Vì hiện tại chúng ta chỉ làm frontend, tôi sẽ mô phỏng một phản hồi.

    console.log('Forgot password request for:', email);

    // Mô phỏng API call:
    // Giả định API call thành công sau 2 giây
    setTimeout(() => {
      setMessage('If your email address is registered with us, you will receive an email with instructions to reset your password.');
      setMessageType('success');
      setEmail(''); // Xóa email sau khi gửi
    }, 2000);

    // Nếu có lỗi từ API, bạn sẽ set:
    // setMessage('An error occurred. Please try again.');
    // setMessageType('error');
  };

  return (
    <div style={{
      maxWidth: '500px', // Giữ chiều rộng tương tự trang IKEA
      margin: '4rem auto', // Margin lớn hơn để tạo khoảng cách
      padding: '2rem',
      backgroundColor: '#fff',
      borderRadius: '0.5rem',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      fontFamily: 'Inter, sans-serif',
      color: '#1f2937',
    }}>
      <h1 style={{
        fontSize: '2.5rem', // Tương tự kích thước trên trang IKEA
        fontWeight: 'bold',
        marginBottom: '1.5rem',
        textAlign: 'center', // Canh giữa tiêu đề
      }}>
        Forgot your password?
      </h1>
      <p style={{
        fontSize: '1rem',
        color: '#4b5563',
        marginBottom: '2rem',
        textAlign: 'center', // Canh giữa mô tả
        lineHeight: '1.5',
      }}>
        No worries! Enter your email and we'll send you a link to reset your password.
      </p>

      {message && (
        <div style={{
          padding: '1rem',
          borderRadius: '0.25rem',
          marginBottom: '1.5rem',
          backgroundColor: messageType === 'success' ? '#d4edda' : '#f8d7da',
          color: messageType === 'success' ? '#155724' : '#721c24',
          borderColor: messageType === 'success' ? '#c3e6cb' : '#f5c6cb',
          border: '1px solid',
          textAlign: 'center',
          fontSize: '0.9rem',
        }}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div>
          <label htmlFor="email" style={{
            display: 'block',
            fontSize: '1rem',
            fontWeight: '500',
            color: '#374151',
            marginBottom: '0.5rem',
          }}>
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: '100%',
              padding: '0.75rem 1rem',
              border: '1px solid #d1d5db',
              borderRadius: '0.5rem',
              outline: 'none',
              fontSize: '1rem',
              boxSizing: 'border-box', // Đảm bảo padding không làm tăng chiều rộng
            }}
            required
            autoComplete="email" // Gợi ý điền email tự động
          />
        </div>
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '0.75rem 1rem',
            backgroundColor: '#0056b3', // Màu xanh IKEA
            color: '#fff',
            fontWeight: '600',
            borderRadius: '9999px', // Bo tròn hoàn toàn
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1.125rem', // Kích thước chữ lớn hơn
            transition: 'background-color 0.3s ease',
          }}
        >
          Send
        </button>
      </form>

      <p style={{ textAlign: 'center', fontSize: '1rem', color: '#4b5563', marginTop: '1.5rem' }}>
        <Link to="/login" style={{ color: '#0056b3', textDecoration: 'none', fontWeight: 'bold' }}>
          Back to login
        </Link>
      </p>
    </div>
  );
};

export default ForgotPasswordPage;