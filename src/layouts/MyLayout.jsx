import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MyLayout = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Header></Header>
      <div className="my-8">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MyLayout;
