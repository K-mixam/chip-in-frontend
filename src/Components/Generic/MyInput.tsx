import { FC } from "react";
import { DeleteCategory } from "../../assets/svg";
import "./MyInput.scss";

interface MyInputProps{
    title: string;
    inputType: string;
}

const MyInput:FC<MyInputProps> = ({title}, {inputType}) => {
    const currentInput = () => {
        switch(inputType){
            case "longInput":
                return(               
                    <div className="long-input-item">
                        <label className="long-input-title">
                            {title}
                            <input className="long-input"></input>
                        </label>                    
                    </div>                
                );
            case "shortInput":
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
            case "addInput":
                return(
                    <div className="tmp-input-item">
                        <label>
                            <span className="tmp-input-title">Кол-во</span>
                            <div>
                                <input className="tmp-input"></input>
                                <span className="text">шт.</span>
                            </div> 
                        </label>
                        <label>
                            <span className="tmp-input-title">Цена</span>
                            <div>
                                <input className="tmp-input"></input>
                                <span className="text">₽</span>
                            </div>
                        </label>
                    </div>
                );
        }
    }

    return <>{currentInput()}</>;
};

export default MyInput;