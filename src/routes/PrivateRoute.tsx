import { Navigate } from 'react-router-dom';
import Product from '../pages/Product';
import { useAuthContext } from '../store/auth-context';

export default function PrivateRoute() {
  const { isLogin } = useAuthContext();

  if (isLogin) {
    return <Product />;
  } else {
    return <Navigate to='/login' />;
  }
}
