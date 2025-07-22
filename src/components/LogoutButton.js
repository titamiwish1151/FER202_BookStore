import { useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
