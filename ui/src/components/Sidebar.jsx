import React from 'react';
import { Users, Package, Grid, ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const SidebarLink = ({ icon, text, href, hasSubmenu }) => (
  <Link
    to={href}
    className="flex items-center px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg"
  >
    <span className="mr-3">{icon}</span>
    <span className="flex-1">{text}</span>
    {hasSubmenu && <ChevronRight size={16} />}
  </Link>
);

const Sidebar = () => {
  return (
    <div className="bg-gray-900 text-white w-64 min-h-screen flex flex-col">
      {/* Logo */}
      <div className="p-4 border-b border-gray-800">
        <div className="flex items-center">
          <Package className="h-8 w-8 mr-2" />
          <div>
            <h1 className="text-xl font-bold">Jithvar CMS</h1>
            <p className="text-xs text-gray-400">Enterprise</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <div className="mb-8">
          <h2 className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
            Management
          </h2>
          <div className="space-y-1">
            <SidebarLink
              icon={<Users size={20} />}
              text="User Management"
              href="/users"
              hasSubmenu
            />
            <SidebarLink
              icon={<Grid size={20} />}
              text="Masters"
              href="/masters"
              hasSubmenu
            />
          </div>
        </div>

        <div>
          <h2 className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
            Products
          </h2>
          <div className="space-y-1">
            <SidebarLink
              icon={<Grid size={20} />}
              text="Categories"
              href="/categories"
            />
            <SidebarLink
              icon={<Package size={20} />}
              text="Products"
              href="/products"
            />
          </div>
        </div>
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-gray-800">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-sm font-medium">
            CN
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium">shadcn</p>
            <p className="text-xs text-gray-400">m@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;