import { useAuth } from "../context/AuthContext";
import { NavLink } from "react-router-dom";

import Button from "../components/Button";
import { useQuery } from "@tanstack/react-query";
import { getProfileData } from "../services/userServices";
import Loading from "../components/Loading";
import Error from "../components/Error";
import UserCard from "../components/UserCard";

function UserInfoPage() {
  const { isAuth, token, logout } = useAuth();

  const { data, isLoading, error } = useQuery({
    queryKey: ["dataProfile", isAuth],
    queryFn: () => getProfileData(token),
    enabled: isAuth,
  });

  if (isLoading)
    return (
      <div className="relative h-80 flex items-center justify-center">
        <Loading />
      </div>
    );

  if (error)
    return (
      <div className="relative h-80 flex items-center justify-center">
        <Error error={error.message} />
      </div>
    );

  return (
    <section className="py-4 px-2 h-85 flex flex-col justify-center">
      {isAuth ? (
        <UserCard user={data} onLogout={logout} />
      ) : (
        <div className="flex flex-col justify-center items-center gap-6 text-center">
          <p className="text-stone-500 text-xl md:text-3xl font-bold">
            Access your account to begin
          </p>

          <Button color="bg-[var(--third-color)] hover:opacity-90">
            <NavLink to="/auth" className="text-base md:text-xl">
              Get Started
            </NavLink>
          </Button>
        </div>
      )}
    </section>
  );
}

export default UserInfoPage;
