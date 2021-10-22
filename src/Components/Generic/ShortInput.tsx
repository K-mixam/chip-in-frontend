import {FC} from 'react';
import "./ShortInput.scss";
import {DeleteCategory} from "../../assets/svg";


interface ShortInputProps{
    title: string;
}

const ShortInput:FC<ShortInputProps> = ({title}) => {
    return(        
        <div className="short-input-item">
            <label className="short-input-title">
                {title}
                <input className="short-input"></input>
                <DeleteCategory/>
                <input className="short-input"></input>
                <DeleteCategory/>
            </label>
        </div>
    );
};

export default ShortInput;