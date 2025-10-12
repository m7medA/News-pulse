import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import HeaderUtilityBar from "../components/header/HeaderUtilityBar";
import Logo from "../components/Logo";
import MainNav from "../components/header/MainNav";
import DateItem from "../components/DateItem";
import SearchBar from "../components/header/SearchBar";
import UserInfo from "../components/header/UserInfo";
import Menu from "../components/header/Menu";

function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col flex-1 mx-auto px-2 text-color">
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default AppLayout;
