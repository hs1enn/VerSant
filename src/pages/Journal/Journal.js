import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Profile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [prevLocation, setPrevLocation] = useState("");
  const [profilePhoto, setProfilePhoto] = useState("/path/to/default/profile/photo.jpg");
  const [name, setName] = useState("Nathan James");
  const [isEditingName, setIsEditingName] = useState(false);
  const [email, setEmail] = useState("Jamess@gmail.com");
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  
  const [productPhoto, setProductPhoto] = useState("/path/to/default/product/photo.jpg");
  const [productName, setProductName] = useState("");
  const [productColor, setProductColor] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");

  useEffect(() => {
    if (location.state && location.state.data) {
      setPrevLocation(location.state.data);
    }
  }, [location]);

  const handlePhotoChange = (event, setPhoto) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveChanges = () => {
    // Handle save changes logic here
    setIsEditingName(false);
    setIsEditingEmail(false);
  };

  const handleAddProduct = () => {
    // Handle add product logic here
    console.log("Product added:", {
      productPhoto,
      productName,
      productColor,
      productDescription,
      productPrice,
    });
    // Redirect to shop page after adding product
    navigate("/shop");
  };

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Profile" prevLocation={prevLocation} />
      <div className="flex flex-wrap justify-between pb-10">
        <div className="profile-section w-full md:w-2/3 p-4 border border-gray-300 rounded bg-white shadow-md">
          <h1 className="max-w-[600px] text-base text-lightText mb-2">
            <span className="text-primeColor font-semibold text-lg">Ver'Sant</span>{" "}
            Welcome to your profile page. Manage your account details below.
          </h1>
          <div className="profile-photo relative mb-4">
            <img
              src={profilePhoto}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border border-black"
            />
            {!profilePhoto && (
              <span className="absolute inset-0 flex items-center justify-center text-primeColor">
                Add Photo
              </span>
            )}
          </div>
          <button
            className="mb-4 w-52 h-10 bg-primeColor text-white hover:bg-black duration-300"
            onClick={() => document.getElementById('photoInput').click()}
          >
            Add Photo
          </button>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            id="photoInput"
            onChange={(event) => handlePhotoChange(event, setProfilePhoto)}
          />
          <div className="profile-details mt-6 w-full max-w-[400px]">
            <div className="mb-4">
              <label className="block text-lightText mb-2">Name</label>
              {isEditingName ? (
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              ) : (
                <div className="flex items-center">
                  <span className="text-lg">{name}</span>
                  <button
                    className="ml-4 text-primeColor"
                    onClick={() => setIsEditingName(true)}
                  >
                    Change
                  </button>
                </div>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-lightText mb-2">Email</label>
              {isEditingEmail ? (
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              ) : (
                <div className="flex items-center">
                  <span className="text-lg">{email}</span>
                  <button
                    className="ml-4 text-primeColor"
                    onClick={() => setIsEditingEmail(true)}
                  >
                    Change
                  </button>
                </div>
              )}
            </div>
            <div className="flex flex-wrap gap-4">
              <button
                className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300"
                onClick={handleSaveChanges}
              >
                Save Changes
              </button>
              <Link to="/shop">
                <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
                  Continue Shopping
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="add-product-section w-full md:w-1/3 mt-8 md:mt-0 p-4 border border-gray-300 rounded bg-white shadow-md">
          <h2 className="text-lg font-semibold mb-4">Add Product</h2>
          <div className="product-photo relative mb-4">
            <img
              src={productPhoto}
              alt="Product"
              className="w-32 h-32 object-cover border border-black"
            />
            {!productPhoto && (
              <span className="absolute inset-0 flex items-center justify-center text-primeColor">
                Add Photo
              </span>
            )}
          </div>
          <button
            className="mb-4 w-52 h-10 bg-primeColor text-white hover:bg-black duration-300"
            onClick={() => document.getElementById('productPhotoInput').click()}
          >
            Add Product Photo
          </button>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            id="productPhotoInput"
            onChange={(event) => handlePhotoChange(event, setProductPhoto)}
          />
          <div className="product-details mt-6 w-full max-w-[400px]">
            <div className="mb-4">
              <label className="block text-lightText mb-2">Name</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-lightText mb-2">Color</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                value={productColor}
                onChange={(e) => setProductColor(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-lightText mb-2">Description</label>
              <textarea
                className="w-full p-2 border border-gray-300 rounded"
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-lightText mb-2">Price</label>
              <input
                type="number"
                className="w-full p-2 border border-gray-300 rounded"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
              />
            </div>
            <button
              className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300"
              onClick={handleAddProduct}
            >
              Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;