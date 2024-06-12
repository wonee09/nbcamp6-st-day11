import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Main from "../pages/Main";

const PublicRoute = ({ element }) => {
  const isLogin = useSelector((state) => state.auth.isLogin);
  return isLogin ? <Navigate to="/" /> : element;
};

const PrivateRoute = ({ element }) => {
  const isLogin = useSelector((state) => state.auth.isLogin);
  return isLogin ? element : <Navigate to="/login" />;
};

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<PublicRoute element={<Login />} />} />
        <Route path="/" element={<PrivateRoute element={<Main />} />} />
      </Routes>
    </BrowserRouter>
  );
}
