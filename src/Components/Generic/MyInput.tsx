import { FC } from "react";
import { DeleteCategory } from "../../assets/svg";
import "./MyInput.scss";

interface MyInputProps{
    title: string;
    inputType: string;
}

interface LongInputProps{
    title: string;
}

interface ShortInputProps{
    title: string;
}

const MyInput:FC<MyInputProps> = ({title, inputType}) => {
    const currentInput = () => {
        switch(inputType){
            case "longInput":
                return(               
                    <LongInput title={title}/>
                );
            case "shortInput":
                return(        
                    <ShortInput title={title}/>
                );
            case "addInput":
                return(
                    <AddIput/>
                );
        }
    }

    return <>{currentInput()}</>;
};

const LongInput:FC<LongInputProps> = ({title}) => {
    return (
        <div className="long-input-item">
            <label className="long-input-title">
                {title}
                <input className="long-input"></input>
            </label>                    
        </div>
    );
};

const ShortInput:FC<ShortInputProps> = ({title}) => {
    return (
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

const AddIput:FC =() => {
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
};

export default MyInput;