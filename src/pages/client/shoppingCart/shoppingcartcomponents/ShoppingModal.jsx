import { useState } from "react";
import { X } from "lucide-react";


export default function ShoppingModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl p-6 w-[90%] max-w-3xl shadow-lg relative">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <X size={24} />
        </button>

        <div className="flex gap-6">
          {/* Image Section */}
          <div className="w-1/3">
            <img
              src="/images/chinese-cabbage.jpg"
              alt="Chinese Cabbage"
              className="w-full rounded-lg"
            />
          </div>

          {/* Product Details */}
          <div className="w-2/3">
            <h2 className="text-2xl font-semibold">Chinese Cabbage</h2>
            <p className="text-green-600 font-medium">In Stock</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-gray-400 line-through">$48.00</span>
              <span className="text-green-600 text-xl font-semibold">
                $17.28
              </span>
              <span className="text-red-500 font-medium">64% Off</span>
            </div>
            <p className="text-gray-600 text-sm mt-2">
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Example Usage
export function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex justify-center items-center h-screen">
      <Button
        onClick={() => setModalOpen(true)}
        className="bg-green-600 text-white px-4 py-2 rounded-lg"
      >
        Open Modal
      </Button>
      <ShoppingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
