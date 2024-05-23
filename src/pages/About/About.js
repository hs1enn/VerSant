import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");

  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="About" prevLocation={prevLocation} />
      <div className="pb-10">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="max-w-[600px] text-base text-lightText mb-2 font-semibold">About Us</h2>
          <h1 className="max-w-[600px] text-base text-lightText mb-4">
            Welcome to <span className="text-primeColor font-semibold text-lg">Ver'Sant</span>, your ultimate destination for the latest and greatest in gadgets. In the rapidly evolving landscape of e-commerce, we recognize both the opportunities and challenges that come with serving tech enthusiasts, especially those from the millennial and Gen Z generations who prioritize convenience and accessibility. Our mission is to make the world of gadgets more accessible, providing you with the ability to browse and purchase discreetly from the comfort of your home or on the go.
          </h1>
          <h2 className="max-w-[600px] text-base text-lightText mb-2 font-semibold">Who We Are</h2>
          <p className="max-w-[600px] text-base text-lightText mb-4">
            <span className="text-primeColor font-semibold text-lg">Ver'Sant</span> was founded with a clear vision: to create a premier e-commerce platform that caters to technology and innovation enthusiasts. We understand the growing demand for a diverse range of gadgets, from smartphones and wearables to smart home devices. Traditional brick-and-mortar stores often struggle to meet this diverse demand due to limited shelf space and inventory constraints. That's where we come in.
          </p>
          <h2 className="max-w-[600px] text-base text-lightText mb-2 font-semibold">What We Offer</h2>
          <p className="max-w-[600px] text-base text-lightText mb-4">
            Our platform is designed to benefit both buyers and gadget brands alike:
          </p>
          <ul className="list-disc list-inside max-w-[600px] text-base text-lightText mb-4">
            <li><strong>For Buyers:</strong> At <span className="text-primeColor font-semibold text-lg">Ver'Sant</span>, you can easily search for and purchase gadgets with complete convenience and privacy. We offer a vast array of products accessible from anywhere, at any time. Beyond simple transactions, we provide detailed product descriptions, reviews, and comparisons to empower you to make informed purchasing decisions.</li>
            <li><strong>For Gadget Brands:</strong> We serve as a valuable tool for reaching target audiences and collecting essential customer data. This data can be utilized to tailor marketing campaigns and enhance brand loyalty, fostering repeat business and sustained growth in a competitive online marketplace.</li>
          </ul>
          <h2 className="max-w-[600px] text-base text-lightText mb-2 font-semibold">Our Commitment</h2>
          <p className="max-w-[600px] text-base text-lightText mb-4">
            We are committed to delivering a seamless user experience. Utilizing modern development tools, we create intuitive and user-friendly interfaces for both web and mobile devices. This ensures easy navigation, advanced search and filtering options based on product specifications, and a streamlined checkout process for hassle-free transactions.
          </p>
          <h2 className="max-w-[600px] text-base text-lightText mb-2 font-semibold">Join Us</h2>
          <p className="max-w-[600px] text-base text-lightText mb-4">
            At <span className="text-primeColor font-semibold text-lg">Ver'Sant</span>, we offer a comprehensive solution that meets the needs of modern consumers while providing a strategic advantage for gadget brands in the dynamic online retail landscape. Join us on this journey and experience the future of gadget shopping today.
          </p>
          <p className="max-w-[600px] text-base text-lightText mb-4">
            Thank you for choosing <span className="text-primeColor font-semibold text-lg">Ver'Sant</span>. We're excited to help you discover and enjoy the latest in technological innovation.
          </p>
          <Link to="/shop">
            <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
