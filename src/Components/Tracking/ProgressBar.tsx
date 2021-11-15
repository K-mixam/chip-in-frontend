import "./ProgressBar.scss";
import { FC } from "react";

interface ProgressBarProps{
    paid: number;
    debt: number;
}

const ProgressBar:FC<ProgressBarProps> = ({paid, debt}) => {
    
    return(
        <div className="progress-bar">
            <div className="progress-bar__debt">
                <span className="progress-bar__debt__paid"></span>
                <span className="progress-bar__debt__text">{paid} / {debt} </span>
            </div>
        </div>
    );
};

export default ProgressBar;