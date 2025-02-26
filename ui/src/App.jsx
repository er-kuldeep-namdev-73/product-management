import { useState } from 'react'
// import ReactQuill from 'react-quill'
// import 'react-quill/dist/quill.snow.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css'
import Sidebar from './components/Sidebar'

const modules = {
  toolbar: [
    [{ 'header': [1, 2, 3, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'align': [] }],
    ['clean']
  ]
}

function App() {
  const [productName, setProductName] = useState('')
  const [description, setDescription] = useState('')

  return (
    <div className="container-fluid  bg-light">
      <div className="row">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="col-10 offset-2">
          <div className="container-fluid py-4">
            {/* Breadcrumb */}
            <nav aria-label="breadcrumb" className="mb-4">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
                <li className="breadcrumb-item"><a href="#">Products</a></li>
                <li className="breadcrumb-item active" aria-current="page">Add Product</li>
              </ol>
            </nav>

            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h4 className="mb-0">Add Product</h4>
              <button className="btn btn-primary">Save</button>
            </div>

            <div className="row">
              {/* Main Form */}
              <div className="col-8">
                <div className="card mb-4">
                  <div className="card-body">
                    <div className="mb-3">
                      <label htmlFor="productName" className="form-label">Product Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="productName"
                        value={productName}
                        placeholder='Enter the product name'
                        onChange={(e) => setProductName(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Description</label>
                      {/* <ReactQuill
                        theme="snow"
                        value={description}
                        onChange={setDescription}
                        modules={modules}
                        className="product-editor"
                      /> */}
                    </div>
                  </div>
                </div>

                <div className="card mb-4">
                  <div className="card-body">
                    <h6 className="card-title">Images</h6>
                    <div className="text-center p-4 border rounded">
                      <div className="mb-3">
                        <i className="bi bi-cloud-upload fs-2"></i>
                        <p className="text-muted mb-2">Accepts images, videos, or 3D models</p>
                      </div>
                      <div>
                        <button className="btn btn-dark me-2">Upload new</button>
                        <button className="btn btn-outline-dark">Select existing</button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pricing */}
                <div className="card mb-4">
                  <div className="card-body">
                    <div className='row justify-content-between'>
                      <div className='col-4'>
                        <label htmlFor="basePrice" className="form-label">Base Price</label>
                        <input
                          type="text"
                          className="form-control"
                          id="basePrice"
                          value={productName}
                          placeholder='Enter base price'
                          onChange={(e) => setProductName(e.target.value)}
                        />
                      </div>
                      <div className='col-4'>
                        <label htmlFor="productName" className="form-label">Compare At Price</label>
                        <input
                          type="text"
                          className="form-control"
                          id="productName"
                          value={productName}
                          placeholder='Enter compare at price'
                          onChange={(e) => setProductName(e.target.value)}
                        />
                      </div>
                      <div className='col-4'>
                        <label htmlFor="productName" className="form-label">Cost Per Item</label>
                        <input
                          type="text"
                          className="form-control"
                          id="productName"
                          value={productName}
                          placeholder='Enter cost per item'
                          onChange={(e) => setProductName(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Sidebar */}
              <div className="col-4">
                <div className="card mb-4">
                  <div className="card-body">
                    <div className="mb-3">
                      <label className="form-label">Brand</label>
                      <select className="form-select">
                        <option>Select a brand</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Category</label>
                      <select className="form-select">
                        <option>Select a category</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">SKU</label>
                      <input type="text" className="form-control" placeholder="Enter SKU" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Tags</label>
                      <input type="text" className="form-control" placeholder="Type and press Enter to add tags..." />
                    </div>
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="taxable" />
                      <label className="form-check-label" htmlFor="taxable">This product is taxable</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App