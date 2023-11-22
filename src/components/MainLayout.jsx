import { Outlet } from "react-router-dom"
import Apptitle from "./AppTitle"
import Navs from "./Navs";

const MainLayout = () => {
    return (
      <div>
        <Apptitle />
        <Navs/>
        <Outlet />
      </div>
    );
}

export default MainLayout;