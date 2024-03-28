import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import AuthContextProvider from '../store/auth-context';

export default function Root() {
  return (
    <AuthContextProvider>
      <Header />
      <Outlet />
    </AuthContextProvider>
  );
}
