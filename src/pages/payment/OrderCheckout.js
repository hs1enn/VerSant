import React from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const OrderCheckout = () => {
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Payment Gateway" />
      <div className="pb-10">
        <h2 className="text-2xl font-bold mb-6">Order Confirmation</h2>
        <div className="space-y-6 p-4 border border-gray-300 rounded-lg">
          <p className="text-lg">
            Your order is on the way! Please be patient as it will be delivered within the estimated time frame. Thank you for your business!
          </p>
          <div className="flex justify-center pt-6">
            <Link to="/">
              <button className="w-36 h-10 bg-primeColor text-white text-lg hover:bg-black duration-300">
                Back to Shop
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCheckout;