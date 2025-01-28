import React, { useState } from 'react';
import { assets } from '../assets/assets';

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Jagadeesh Hanuman",
    image: assets.profile_pic,
    email: 'jagadeesh@email.com',
    phone: '+91 7893969974',
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Church Road, London",
    },
    gender: 'Male',
    dob: '2000-01-20',
  });

  const [isEdit, setIsEdit] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUserData((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-lg mx-auto flex flex-col gap-4 p-4 bg-white shadow-md rounded-lg">
      <div className="relative mx-auto w-36 h-36">
        <img
          className="w-full h-full rounded-full object-cover"
          src={userData.image}
          alt="Profile"
        />
        {isEdit && (
          <div className="absolute bottom-0 right-0">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              id="profileImageInput"
              onChange={handleImageChange}
            />
            <label
              htmlFor="profileImageInput"
              className="bg-blue-500 text-white text-xs px-2 py-1 rounded cursor-pointer hover:bg-blue-600"
            >
              Change
            </label>
          </div>
        )}
      </div>

      {isEdit ? (
        <input
          className="bg-gray-100 text-3xl font-medium text-center mt-4 p-2 rounded"
          type="text"
          value={userData.name}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <p className="font-medium text-3xl text-neutral-800 text-center mt-4">
          {userData.name}
        </p>
      )}

      <hr className="bg-zinc-400 h-[1px] border-none" />

      <div className="text-sm text-neutral-700">
        <p className="text-neutral-500 underline font-semibold">CONTACT INFORMATION</p>
        <div className="mt-2">
          <p className="font-medium">Email:</p>
          <p>{userData.email}</p>

          <p className="font-medium mt-2">Phone:</p>
          {isEdit ? (
            <input
              className="bg-gray-100 w-full p-1 rounded"
              type="text"
              value={userData.phone}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
          ) : (
            <p>{userData.phone}</p>
          )}

          <p className="font-medium mt-2">Address:</p>
          {isEdit ? (
            <div>
              <input
                className="bg-gray-100 w-full p-1 mb-2 rounded"
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value },
                  }))
                }
                value={userData.address.line1}
                type="text"
              />
              <input
                className="bg-gray-100 w-full p-1 rounded"
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value },
                  }))
                }
                value={userData.address.line2}
                type="text"
              />
            </div>
          ) : (
            <p>
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          )}
        </div>
      </div>

      <div className="mt-4">
        <p className="text-neutral-500 underline font-semibold">BASIC INFORMATION</p>
        <div className="mt-2">
          <p>Gender:</p>
          {isEdit ? (
            <select
              className="bg-gray-100 w-full p-1 rounded"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
              value={userData.gender}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p>{userData.gender}</p>
          )}

          <p className="mt-2">Birthday:</p>
          {isEdit ? (
            <input
              className="bg-gray-100 w-full p-1 rounded"
              type="date"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, dob: e.target.value }))
              }
              value={userData.dob}
            />
          ) : (
            <p>{userData.dob}</p>
          )}
        </div>
      </div>

      <div className="mt-4 flex justify-center">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
          onClick={() => setIsEdit((prev) => !prev)}
        >
          {isEdit ? "Save Information" : "Edit"}
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
