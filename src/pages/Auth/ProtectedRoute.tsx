import { selectCurrentToken } from 'app/auth/auth.slice';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const token = useSelector(selectCurrentToken);

  return token ? <Outlet /> : <Navigate to='/dang-nhap' replace />;
};

export default ProtectedRoute;
