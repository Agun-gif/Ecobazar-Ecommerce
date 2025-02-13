import React from "react";

function Torder() {
  return (
    <div>
      <div className="container mx-auto p-6 bg-gray-100">
        <div className=" p-8 mt-10">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <p className="text-xl font-semibold text-gray-700">
                Order ID: 3354654654526
              </p>
            </div>
            <div className="flex space-x-6 text-sm text-blue-600">
              <span className="cursor-pointer hover:underline">Invoice</span>
              <span className="cursor-pointer hover:underline">
                Track order
              </span>
            </div>
          </div>

          {/* Order Date and Delivery */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <p className="text-gray-600">Order date: Feb 16, 2022</p>
            </div>
            <div>
              <p className="text-gray-600">Estimated delivery: May 16, 2022</p>
            </div>
          </div>

          {/* Order Status */}
          <div className="flex justify-between mb-8">
            {[
              "Order Confirmed",
              "Shipped",
              "Out for Delivery",
              "Delivered",
            ].map((status, index) => (
              <div key={index} className="text-center">
                <span
                  className={`inline-block w-4 h-4 rounded-full ${
                    index === 0 ? "bg-green-500" : "bg-gray-300"
                  } mr-2`}
                ></span>
                <p className="text-sm text-gray-700">{status}</p>
                <span className="text-xs text-gray-500">Wed, 11th Jan</span>
              </div>
            ))}
          </div>

          {/* Order Items */}
          <table className="w-full mb-8 table-auto">
            <thead>
              <tr>
                <th className="text-left text-sm font-medium text-gray-600">
                  Item
                </th>
                <th className="text-left text-sm font-medium text-gray-600">
                  Details
                </th>
                <th className="text-left text-sm font-medium text-gray-600">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  image:
                    "https://res.cloudinary.com/da43e0ikj/image/upload/v1736520266/v8qbojbj7hixvojgna0t.png",
                  name: "Apple",
                  description: "Fresh Fruits",
                  price: "$250.00",
                },
                {
                  image:
                    "https://res.cloudinary.com/da43e0ikj/image/upload/v1736520266/v8qbojbj7hixvojgna0t.png",
                  name: 'Apple"',
                  description: "Fresh Fruits",
                  price: "$250.00",
                },
                {
                  image:
                    "https://res.cloudinary.com/da43e0ikj/image/upload/v1736520266/v8qbojbj7hixvojgna0t.png",
                  name: "Apple",
                  description: "Fresh Fruits",
                  price: "$250.00",
                },
              ].map((item, index) => (
                <tr key={index} className="border-t border-gray-200">
                  <td className="py-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="max-w-20 rounded-lg shadow-md"
                    />
                  </td>
                  <td className="py-4">
                    <p className="font-semibold text-gray-700">{item.name}</p>
                    <p className="text-gray-500">{item.description}</p>
                  </td>
                  <td className="py-4">
                    <p className="font-semibold text-gray-700">{item.price}</p>
                    <p className="text-gray-500">Qty: 1</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Payment, Delivery, Need Help */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                Payment
              </h3>
              <p className="text-gray-700">
                Bkash
                <img
                  src="https://res.cloudinary.com/da43e0ikj/image/upload/v1738932290/adx4hez52dtdszffhvqa.webp"
                  alt="Bkash"
                  className="inline-block h-5 ml-2"
                />
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                Delivery
              </h3>
              <p className="text-gray-700">UttorBadda</p>
              <p className="text-gray-700 ">+880 1953598922</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                Need Help
              </h3>
              <ul className="text-gray-700">
                <li>Order Issues</li>
                <li>Delivery Info</li>
                <li>Returns</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                Order Summary
              </h3>
              <div className="mb-2 flex justify-between">
                <span>Price</span> <span>$750.00</span>
              </div>
              <div className="mb-2 flex justify-between">
                <span>Delivery</span> <span>$50.00</span>
              </div>
              <div className="mb-2 flex justify-between">
                <span>Tax</span> <span>+$221.88</span>
              </div>
              <div className="font-semibold flex justify-between">
                <span>Total</span> <span>$921.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Torder;
