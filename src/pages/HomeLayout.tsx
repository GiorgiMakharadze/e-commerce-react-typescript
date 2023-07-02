import { Outlet } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "../components";
import { AuthWrapper } from ".";

const HomePage = () => {
  return (
    <AuthWrapper>
      <Navbar />
      <Sidebar />
      <section>
        <Outlet />
      </section>
      <Footer />
    </AuthWrapper>
  );
};

export default HomePage;
