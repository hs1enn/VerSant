import React, { useEffect, useState } from "react";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import localforage from "localforage";

const Profile = () => {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Subject, setSubject] = useState("");
  const [users, setUsers] = useState([]);
  const [showUsers, setShowUsers] = useState(false);

  useEffect(() => {
    localforage.getItem("users").then((storedUsers) => {
      if (storedUsers) {
        setUsers(storedUsers);
      }
    });
  }, []);

  const handleAddUser = () => {
    const newUser = { FirstName, LastName, Email, Subject };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localforage.setItem("users", updatedUsers);
    setFirstName("");
    setLastName("");
    setEmail("");
    setSubject("");
  };

  const handleDeleteUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
    localforage.setItem("users", updatedUsers);
  };

  const toggleShowUsers = () => {
    setShowUsers(!showUsers);
  };

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Profile" />
      <div className="container mx-auto px-4 py-6">
        <div className="bg-white p-6 rounded shadow-md">
          <h1 className="text-lg font-semibold mb-4">User Information</h1>
          <div className="mb-4">
            <label className="block text-lightText mb-2">First Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              value={FirstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-lightText mb-2">Last Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              value={LastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-lightText mb-2">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-lightText mb-2">Subject</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              value={Subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="flex gap-4">
            <button
              className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300"
              onClick={handleAddUser}
            >
              Add
            </button>
            <button
              className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300"
              onClick={toggleShowUsers}
            >
              {showUsers ? "Hide" : "Show"} Users
            </button>
          </div>
        </div>
        {showUsers && (
          <div className="bg-white p-6 mt-6 rounded shadow-md">
            <h2 className="text-lg font-semibold mb-4">Added Users</h2>
            <div className="grid grid-cols-5 gap-4 mb-2 font-semibold">
              <div>First Name</div>
              <div>Last Name</div>
              <div>Email</div>
              <div>Subject</div>
              <div>Action</div>
            </div>
            {users.map((user, index) => (
              <div key={index} className="grid grid-cols-5 gap-4 mb-2">
                <div>{user.FirstName}</div>
                <div>{user.LastName}</div>
                <div>{user.Email}</div>
                <div>{user.Subject}</div>
                <button
                  className="bg-red-500 text-white rounded px-2 py-1"
                  onClick={() => handleDeleteUser(index)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
