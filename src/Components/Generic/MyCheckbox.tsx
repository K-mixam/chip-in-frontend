import { FC } from "react";
import "./MyCheckbox.scss";


const MyCheckbox:FC = () => {
    return(
        <>
        <input className="my-checkbox" type="checkbox"/>
        <div className="check-mark"></div>
        </>
    );
};

export default MyCheckbox;