  
  export function DeleteProductDialog({ open, onOpenChange, onConfirm }) {
    if (!open) return null
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg max-w-sm w-full">
          <h2 className="text-xl font-bold mb-4">Are you sure?</h2>
          <p className="mb-4">This action cannot be undone. This will permanently delete the product.</p>
          <div className="flex justify-end gap-2">
            <button
              onClick={() => onOpenChange(false)}
              className="px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                onConfirm()
                onOpenChange(false)
              }}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    )
  }
  
  