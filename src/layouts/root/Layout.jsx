import { Outlet } from "react-router-dom";
import Header from "../../components/navigation/header/Header";
import "./styles.css";
const Layout = () => {
  return (
    <div className="root-container">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
