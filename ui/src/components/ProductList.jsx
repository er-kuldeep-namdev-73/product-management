import { useEffect, useState } from "react";
import { DeleteProductDialog } from "./DeleteProductDialog";
import Sidebar from "./Sidebar";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  fetchProducts,
} from "../redux/store/actions/productAction";

function ProductList() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [showDelete, setShowDelete] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const navigate = useNavigate();

  const handleDelete = () => {
    if (selectedProduct) {
      dispatch(deleteProduct(selectedProduct?._id));
    }
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar for medium and larger screens */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Mobile sidebar */}
      <div
        className={`fixed inset-0 z-40 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="relative w-64 ">
          <Sidebar />
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="absolute top-4 right-4 text-white"
          >
            <ArrowLeft size={24} />
          </button>
        </div>
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-50 -z-10"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      </div>
      <div className="w-full p-4 md:p-6 space-y-6">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <a href="#" className="hover:text-gray-700">
            Dashboard
          </a>
          <span>/</span>
          <span className="text-gray-700">Products</span>
        </div>

        <a
          href="#"
          className="inline-flex items-center gap-2 text-sm hover:text-blue-600"
        >
          ← Back
        </a>

        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Products</h1>
          <button
            onClick={() => navigate("/add-product")}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Add Product
          </button>
        </div>

        <div className="border h-[70vh] rounded-lg overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50 sticky top-0">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  #
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Brand
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {products?.products?.map((product, index) => (
                <tr key={product.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <img
                        className="h-10 w-10 rounded-full mr-3"
                        src={product?.image || "/placeholder.svg"}
                        alt={product?.name}
                      />
                      <div className="text-sm font-medium text-gray-900">
                        {product?.productName}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {product?.status || "draft"}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {product?.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ₹{product?.pricing?.basePrice?.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {product?.brand}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                    <button
                      onClick={() => {
                        setSelectedProduct(product);
                        navigate("/add-product");
                      }}
                      className="text-indigo-600 hover:text-indigo-900 mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        setSelectedProduct(product);
                        setShowDelete(true);
                      }}
                      className="text-red-600 hover:text-red-900"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="mr-2">Rows per page</span>
            <select
              value={rowsPerPage}
              onChange={(e) => setRowsPerPage(Number(e.target.value))}
              className="border rounded px-2 py-1"
            >
              {[10, 20, 30, 40, 50].map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center">
            <span className="mr-2">Page {page} of 1</span>
            <div>
              <button disabled className="px-2 py-1 border rounded mr-1">
                ←
              </button>
              <button disabled className="px-2 py-1 border rounded">
                →
              </button>
            </div>
          </div>
        </div>

        {showDelete && (
          <DeleteProductDialog
            open={showDelete}
            onOpenChange={setShowDelete}
            onConfirm={handleDelete}
          />
        )}
      </div>
    </div>
  );
}

export default ProductList;
