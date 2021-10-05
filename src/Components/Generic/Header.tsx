import { FC } from "react";
import "./Header.scss";

const Header: FC = ({children}) => {
  return <header className="header">
      {children}
    </header>;
};

export default Header;
