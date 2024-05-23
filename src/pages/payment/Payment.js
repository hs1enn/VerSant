import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const navigate = useNavigate();

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handlePlaceOrder = () => {
    // Perform any additional actions needed before navigating
    navigate("/ordercheckout"); // Navigate to the OrderCheckout screen
  };

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Payment Gateway" />
      <div className="pb-10">
        <h2 className="text-2xl font-bold mb-6">Checkout</h2>
        <form className="space-y-6">
          <div className="p-4 border border-gray-300 rounded bg-white shadow-md">
            <h3 className="text-xl font-semibold mb-4">Billing Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full h-10 px-3 border border-gray-300 rounded"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full h-10 px-3 border border-gray-300 rounded"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full h-10 px-3 border border-gray-300 rounded"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full h-10 px-3 border border-gray-300 rounded"
              />
              <input
                type="text"
                placeholder="Address"
                className="w-full h-10 px-3 border border-gray-300 rounded"
              />
              <input
                type="text"
                placeholder="City"
                className="w-full h-10 px-3 border border-gray-300 rounded"
              />
              <input
                type="text"
                placeholder="State/Province"
                className="w-full h-10 px-3 border border-gray-300 rounded"
              />
              <input
                type="text"
                placeholder="Postal Code"
                className="w-full h-10 px-3 border border-gray-300 rounded"
              />
              <input
                type="text"
                placeholder="Country"
                className="w-full h-10 px-3 border border-gray-300 rounded"
              />
            </div>
          </div>

          <div className="p-4 border border-gray-300 rounded bg-white shadow-md">
            <h3 className="text-xl font-semibold mb-4">Shipping Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full h-10 px-3 border border-gray-300 rounded"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full h-10 px-3 border border-gray-300 rounded"
              />
              <input
                type="text"
                placeholder="Address"
                className="w-full h-10 px-3 border border-gray-300 rounded"
              />
              <input
                type="text"
                placeholder="City"
                className="w-full h-10 px-3 border border-gray-300 rounded"
              />
              <input
                type="text"
                placeholder="State/Province"
                className="w-full h-10 px-3 border border-gray-300 rounded"
              />
              <input
                type="text"
                placeholder="Postal Code"
                className="w-full h-10 px-3 border border-gray-300 rounded"
              />
              <input
                type="text"
                placeholder="Country"
                className="w-full h-10 px-3 border border-gray-300 rounded"
              />
            </div>
          </div>

          <div className="p-4 border border-gray-300 rounded bg-white shadow-md">
            <h3 className="text-xl font-semibold mb-4">Payment Information</h3>
            <div className="space-y-2">
              <div>
                <input
                  type="radio"
                  id="creditCard"
                  name="paymentMethod"
                  value="creditCard"
                  checked={paymentMethod === "creditCard"}
                  onChange={handlePaymentMethodChange}
                />
                <label htmlFor="creditCard" className="ml-2">
                  Credit Card
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="paypal"
                  name="paymentMethod"
                  value="paypal"
                  checked={paymentMethod === "paypal"}
                  onChange={handlePaymentMethodChange}
                />
                <label htmlFor="paypal" className="ml-2">
                  PayPal
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="bankTransfer"
                  name="paymentMethod"
                  value="bankTransfer"
                  checked={paymentMethod === "bankTransfer"}
                  onChange={handlePaymentMethodChange}
                />
                <label htmlFor="bankTransfer" className="ml-2">
                  Bank Transfer
                </label>
              </div>
            </div>

            {paymentMethod === "creditCard" && (
              <div className="space-y-4 mt-4">
                <input
                  type="text"
                  placeholder="Card Number"
                  className="w-full h-10 px-3 border border-gray-300 rounded"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Expiration Date (MM/YY)"
                    className="w-full h-10 px-3 border border-gray-300 rounded"
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    className="w-full h-10 px-3 border border-gray-300 rounded"
                  />
                </div>
              </div>
            )}

            {paymentMethod === "paypal" && (
              <div className="mt-4">
                <p className="text-sm">
                  You will be redirected to PayPal to complete your payment
                  securely.
                </p>
              </div>
            )}

            {paymentMethod === "bankTransfer" && (
              <div className="mt-4">
                <p className="text-sm">
                  Bank transfer instructions will be sent to your email after
                  you place your order.
                </p>
              </div>
            )}
          </div>

          <div className="flex justify-between items-center pt-6">
            <Link to="/">
              <button className="w-36 h-10 bg-gray-300 text-black text-lg hover:bg-gray-400 duration-300">
                Back to Shop
              </button>
            </Link>
            <button
              type="button"
              onClick={handlePlaceOrder}
              className="w-36 h-10 bg-primeColor text-white text-lg hover:bg-black duration-300"
            >
              Place Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Payment;