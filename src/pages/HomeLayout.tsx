import { Outlet } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "../components";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <section>
        <Outlet />
      </section>
      <Footer />
    </>
  );
};

export default HomePage;
