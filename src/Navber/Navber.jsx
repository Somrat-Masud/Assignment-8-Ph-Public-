import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav/Nav";


const Navber = () => {
    return (
        <div className="max-w-[1300px] mx-auto">
           <Nav></Nav>
            <div className="">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Navber;