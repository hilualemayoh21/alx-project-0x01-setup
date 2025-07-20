// components/common/UserModal.tsx

import React, { useState } from "react";
import { UserModalProps, UserProps } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, onAddUser }) => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    street: "",
    city: "",
    company: "",
    catchPhrase: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const newUser: UserProps = {
      id: Date.now(),
      name: formData.name,
      username: formData.username,
      email: formData.email,
      phone: formData.phone,
      website: formData.website,
      address: {
        street: formData.street,
        suite: "",
        city: formData.city,
        zipcode: "",
        geo: { lat: "0", lng: "0" },
      },
      company: {
        name: formData.company,
        catchPhrase: formData.catchPhrase,
        bs: "",
      },
    };

    onAddUser(newUser);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Add New User</h2>

        <input name="name" onChange={handleChange} placeholder="Name" className="input" />
        <input name="username" onChange={handleChange} placeholder="Username" className="input" />
        <input name="email" onChange={handleChange} placeholder="Email" className="input" />
        <input name="phone" onChange={handleChange} placeholder="Phone" className="input" />
        <input name="website" onChange={handleChange} placeholder="Website" className="input" />
        <input name="street" onChange={handleChange} placeholder="Street" className="input" />
        <input name="city" onChange={handleChange} placeholder="City" className="input" />
        <input name="company" onChange={handleChange} placeholder="Company Name" className="input" />
        <input name="catchPhrase" onChange={handleChange} placeholder="Catch Phrase" className="input" />

        <div className="flex justify-between mt-4">
          <button onClick={onClose} className="bg-gray-300 px-4 py-2 rounded">Cancel</button>
          <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">Add</button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
