import { NavLink } from "react-router-dom";
import Logo from './../Logo/Logo';
const Nav = () => {
    return (
        <div>
           <nav className="flex justify-between py-5 px-4 shadow-md" >
            <div>
                <Logo></Logo>
            </div>
      <div className="flex gap-4">
          <ul>
                <li>
                <NavLink
                     to="/"
                     className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-green-400 underline" : ""}>
                       Home 
                 </NavLink>
                </li>
            </ul>
            <ul>
                <li>
                <NavLink
                     to="/Donation"
                     className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-green-400 underline"  : ""}>
                       Donation
                 </NavLink>
                </li>
            </ul>
            <ul>
                <li>
                <NavLink
                     to="/Statistics"
                     className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-green-400 underline"  : ""}>
                       Statistics
                 </NavLink>
                </li>
            </ul>
      </div>
           </nav>
        </div>
    );
};

export default Nav;