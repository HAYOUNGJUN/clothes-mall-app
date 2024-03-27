import { Outlet } from 'react-router-dom';
import Header from '../components/Navigation/Header';

export default function Root() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
