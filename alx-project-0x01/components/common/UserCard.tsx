// components/common/UserCard.tsx

import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 w-full max-w-md mx-auto mb-4">
      <h2 className="text-xl font-bold mb-1">{user.name}</h2>
      <p className="text-sm text-gray-600">@{user.username}</p>
      <p className="text-gray-700 mt-2">📧 {user.email}</p>
      <p className="text-gray-700">📱 {user.phone}</p>
      <p className="text-gray-700">🌐 {user.website}</p>

      <div className="mt-4 text-sm text-gray-600">
        <p>
          🏠 {user.address.street}, {user.address.city}
        </p>
        <p>🏢 {user.company.name}</p>
        <p className="italic text-xs mt-1">"{user.company.catchPhrase}"</p>
      </div>
    </div>
  );
};

export default UserCard;
