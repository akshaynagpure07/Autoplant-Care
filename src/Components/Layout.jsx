import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav"; // Import Nav component
import BottomBar from "../Components/BottomBar"; // Import BottomBar component

const Layout = () => {
  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Navbar - Fixed at the top */}
      <Nav className="fixed top-0 left-0 right-0 z-50" />

      {/* Main content with padding for Navbar and BottomBar */}
      <div className="flex-grow pt-16 pb-16">
        <Outlet />
      </div>

      {/* BottomBar - Fixed at the bottom */}
      <BottomBar className="fixed bottom-0 left-0 right-0 z-50" />
    </div>
  );
};

export default Layout;
