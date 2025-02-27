import React, { useState } from "react";
import { ArrowLeft, Menu } from "lucide-react";
import RichTextEditor from "./RichTextEditor";
import VariantSection from "./VariantSection";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [isTaxable, setIsTaxable] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  //   onChange Fuunction
  const handleChange = (e) => {
    console.log("e", e.target.value, e.target.name);
  };

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

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                {/* for mobile screens */}
                <button
                  className="md:hidden text-gray-600 hover:text-gray-900 mr-4"
                  onClick={() => setIsSidebarOpen(true)}
                >
                  <Menu size={24} />
                </button>
                <div className="flex items-center">
                  {/* for back  */}
                  <button
                    className="text-gray-600 hover:text-gray-900"
                    onClick={() => navigate("/products")}
                  >
                    <ArrowLeft size={24} />
                  </button>
                  <h1 className="ml-4 text-xl font-semibold">Add Product</h1>
                </div>
              </div>
              <button
                className="px-4 py-2 bg-black text-white rounded-lg hover:bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                onClick={() => navigate("/products")}
              >
                Save
              </button>
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-auto">
          <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column */}
              <div className="lg:col-span-2 space-y-8">
                {/* Basic Info */}
                <div className="bg-white rounded-lg shadow p-6">
                  <h2 className="text-lg font-semibold mb-4">
                    Basic Information
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Product Name
                      </label>
                      <input
                        type="text"
                        className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter product name"
                        onChange={(e) => handleChange(e)}
                        name="productName"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Description
                      </label>
                      <RichTextEditor />
                    </div>
                  </div>
                </div>

                {/* Media */}
                <div className="bg-white rounded-lg shadow p-6">
                  <h2 className="text-lg font-semibold mb-4">Images</h2>
                  <div className="border-2  border-gray-100 bg-gray-100 rounded-lg p-8">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-3">
                        <div className="bg-black text-white p-2 px-4 rounded-3xl cursor-pointer">
                          <label
                            htmlFor="file-upload"
                            className="cursor-pointer"
                          >
                            Upload New
                          </label>
                          <input
                            type="file"
                            id="file-upload"
                            className="hidden"
                          />
                        </div>

                        <button className="bg-white text-black p-2 px-4 rounded-3xl">
                          Select existing
                        </button>
                      </div>
                      {/* <ImageIcon className="mx-auto h-12 w-12 text-gray-400" /> */}
                      <p className="text-sm text-gray-500 mt-2">
                        Accepts images, videos, or 3D models
                      </p>
                      <p className="text-sm text-gray-500 font-[600] mt-2">
                        Choose files to upload
                      </p>
                    </div>
                  </div>
                </div>

                {/* Pricing */}
                <div className="bg-white rounded-lg shadow p-6">
                  <h2 className="text-lg font-semibold mb-4">Pricing</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Base Price
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          className="w-full pl-2 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="0"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Compare At Price
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                          $
                        </span>
                        <input
                          type="number"
                          className="w-full pl-7 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="0.00"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Cost Per Item
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                          $
                        </span>
                        <input
                          type="number"
                          className="w-full pl-7 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="0.00"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Variants */}
                <div className="bg-white rounded-lg shadow p-6">
                  <VariantSection />
                </div>

                {/* SEO */}
                <div className="bg-white rounded-lg shadow p-6">
                  <h2 className="text-lg font-semibold mb-4">SEO</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Page Title
                      </label>
                      <input
                        type="text"
                        className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter page title for SEO"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Meta Description
                      </label>
                      <textarea
                        className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        rows={3}
                        placeholder="Enter meta description"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        URL Slug
                      </label>
                      <input
                        type="text"
                        className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter URL slug"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Made sticky */}
              <div className="lg:sticky lg:top-8 space-y-8 self-start">
                <div className="bg-white rounded-lg shadow p-6">
                  <h2 className="text-lg font-semibold mb-4">Organization</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Brand
                      </label>
                      <select className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option value="">Select a brand</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Category
                      </label>
                      <select className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option value="">Select a category</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        SKU
                      </label>
                      <input
                        type="text"
                        className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter SKU"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Tags
                      </label>
                      <input
                        type="text"
                        className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Type and press Enter to add tags..."
                      />
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="taxable"
                        checked={isTaxable}
                        onChange={(e) => setIsTaxable(e.target.checked)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label
                        htmlFor="taxable"
                        className="ml-2 block text-sm text-gray-900"
                      >
                        This product is taxable
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
