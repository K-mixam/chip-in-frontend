import { FC } from "react";
import "./Panel.scss";


const Panel:FC = ({children}) => {
    return(
        <div className="panel">{children}</div>
    );
};

export default Panel;