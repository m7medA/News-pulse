import { useAuth } from "../context/AuthContext";
import { NavLink } from "react-router-dom";

import Button from "../components/Button";
import { useQuery } from "@tanstack/react-query";
import { getProfileData } from "../services/userServices";

function UserInfoPage() {
  const { isAuth, token, logout } = useAuth();

  const { data, isLoading, error } = useQuery({
    queryKey: ["dataProfile", isAuth],
    queryFn: () => getProfileData(token),
  });

  console.log(data);

  return (
    <section className="py-8 px-2 h-80 flex flex-col justify-center">
      {" "}
      {isAuth ? (
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1 border-b pb-2">
            <p className="font-semibold text-stone-900">Mohamed</p>
            <p className="text-stone-500">moh@gmail.com</p>
          </div>
          <Button
            onClick={() => logout()}
            color="bg-[var(--third-color)] hover:opacity-90"
          >
            Logout
          </Button>
        </div>
      ) : (
        <div className="flex flex-col justify-center gap-6 text-center">
          <p className="text-stone-500 text-xl md:text-3xl font-bold">
            Access your account to begin
          </p>

          <div>
            {" "}
            <Button color="bg-[var(--third-color)] hover:opacity-90">
              <NavLink to="/auth" className="text-base md:text-xl">
                Get Started
              </NavLink>
            </Button>
          </div>
        </div>
      )}
    </section>
  );
}

export default UserInfoPage;
