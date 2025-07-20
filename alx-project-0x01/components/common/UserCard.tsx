// components/common/UserCard.tsx

import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC< UserProps > = ( UserProps ) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 w-full max-w-md mx-auto mb-4">
      <h2 className="text-xl font-bold mb-1">{UserProps.name}</h2>
      <p className="text-sm text-gray-600">@{UserProps.username}</p>
      <p className="text-gray-700 mt-2">📧 {UserProps.email}</p>
      <p className="text-gray-700">📱 {UserProps.phone}</p>
      <p className="text-gray-700">🌐 {UserProps.website}</p>

      <div className="mt-4 text-sm text-gray-600">
        <p>
          🏠 {UserProps.address.street}, {UserProps.address.city}
        </p>
        <p>🏢 {UserProps.company.name}</p>
        <p className="italic text-xs mt-1">"{UserProps.company.catchPhrase}"</p>
      </div>
    </div>
  );
};

export default UserCard;
