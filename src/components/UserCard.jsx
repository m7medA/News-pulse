import React from "react";
import Button from "./Button";
import { NavLink } from "react-router-dom";

function UserCard({ user, onLogout }) {
  return (
    <div className="w-[32%] mx-auto bg-stone-200 rounded-md shadow-md px-5 py-6 flex flex-col gap-4 ">
      <div className="flex flex-col gap-1 border-b pb-3 w-full">
        <p className="font-semibold text-lg text-stone-900">
          Username: {user.username}
        </p>
        <p className="text-stone-700 text-sm">Email: {user.email}</p>

        {user.role && (
          <span
            className={`mt-2 inline-block px-3 py-1 rounded-full text-xs font-medium w-fit ${
              user.role === "admin"
                ? "bg-red-100 text-red-700"
                : "bg-green-100 text-green-700"
            }`}
          >
            <span>Role: </span>
            {user.role}
          </span>
        )}

        <div className="text-end mt-4">
          <NavLink
            to="/userinfo/changepassword"
            className="text-xs text-stone-800 border-b-2 w-fit "
          >
            Change Password
          </NavLink>
        </div>
      </div>

      <Button
        onClick={onLogout}
        color="bg-[var(--third-color)] hover:opacity-90"
      >
        Logout
      </Button>
    </div>
  );
}

export default UserCard;
