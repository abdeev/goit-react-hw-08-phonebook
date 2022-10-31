import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectAuth } from 'redux/auth/authSelector';

const PrivateRoute = () => {
  const { token } = useSelector(selectAuth);
  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
