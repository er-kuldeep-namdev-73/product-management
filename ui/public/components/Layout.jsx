import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

export default function Layout() {
  return (
    <div className="h-screen bg-gray-50">
      <Sidebar />
      <main className="pl-64">
        <Outlet />
      </main>
    </div>
  );
}