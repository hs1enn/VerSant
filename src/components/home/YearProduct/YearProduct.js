import React from "react";
import { Link } from "react-router-dom";
import { productOfTheYear } from "../../../assets/images";
import ShopNow from "../../designLayouts/buttons/ShopNow";
import Image from "../../designLayouts/Image";

const YearProduct = () => {
  return (
    <Link to="/shop">
      <div className="w-full h-80 mb-20 bg-[#f3f3f3] md:bg-transparent relative font-titleFont">
        <div className="border border-gray-300 rounded-lg p-4 shadow-lg">
          <Image
            className="w-full h-full object-cover hidden md:inline-block"
            imgSrc={productOfTheYear}
          />
          <div className="w-full md:w-2/3 xl:w-1/2 h-80 absolute px-4 md:px-0 top-0 right-0 flex flex-col items-start gap-6 justify-center">
            <h1 className="text-3xl font-semibold text-primeColor">
              Product of The year
            </h1>
            <p className="text-base font-normal text-primeColor max-w-[600px] mr-4 text-justify">
              Experience the year's most groundbreaking product that's redefining industry standards and leaving competitors in the dust. Our award-winning iPhone 15 has garnered top honors for its unparalleled innovation and performance. Don't miss out on this game-changer that's setting a new benchmark in Antutu Benchmark Ranking. Join the ranks of satisfied customers and elevate your SHOPPING to new heights with iPhone 15 Pro Max. Order now and embrace the future of Ver'Sant.
            </p>
            <ShopNow />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default YearProduct;
