import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

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
