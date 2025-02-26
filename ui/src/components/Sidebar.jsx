import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="col-2 bg-dark text-white sidebar py-3">
      <div className="d-flex align-items-center mb-4 px-3">
        <i className="bi bi-box-seam fs-4 me-2"></i>
        <h5 className="mb-0">Jithvar CMS</h5>
      </div>

      <div className="px-3 mb-4">
        <small className="text-muted">Management</small>
        <div className="nav flex-column">
          <a href="#" className="nav-link text-white">
            <i className="bi bi-people me-2"></i>
            User Management
          </a>
          <a href="#" className="nav-link text-white">
            <i className="bi bi-gear me-2"></i>
            Masters
          </a>
        </div>
      </div>

      <div className="px-3">
        <small className="text-muted">Products</small>
        <div className="nav flex-column">
          <a href="#" className="nav-link text-white">
            <i className="bi bi-grid me-2"></i>
            Categories
          </a>
          <a href="#" className="nav-link text-white">
            <i className="bi bi-box me-2"></i>
            Products
          </a>
        </div>
      </div>
    </div>
  );
}