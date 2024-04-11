import { routerTo } from "@/models/routes";
import { Link } from "react-router-dom";

export interface NavButtonProps  {
  to: routerTo,
  children: React.ReactNode;
}

const NavButton = ({to, children}: NavButtonProps) => {
  return <li>
    <Link to={to}>{children}</Link>
  </li>
};

export default NavButton;