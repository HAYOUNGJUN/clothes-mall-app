import { Navigate } from 'react-router-dom';
import Product from '../pages/Product';
import { useAppSelector } from '../store/hooks';

export default function PrivateRoute() {
  const isLogin = useAppSelector((state) => state.auth.isAuth);

  if (isLogin) {
    return <Product />;
  } else {
    return <Navigate to='/login' />;
  }
}
