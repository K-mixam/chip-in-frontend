import { FC } from "react";
import "./LongInput.scss";

interface LongInputProps{
    title: string;
}

const LongInput:FC<LongInputProps> = ({title}) => {
    return(
        <div className="long-input-item">
            <label className="long-input-title">
                {title}
                <input className="long-input"></input>
            </label>                    
        </div>
    );
};

export default LongInput;