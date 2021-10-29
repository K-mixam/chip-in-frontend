import { FC } from "react";
import { DeleteCategory } from "../../assets/svg";
import "./MyInput.scss";

interface MyInputProps{
    title: string;
    inputType: string;
}

interface InputProps{
    title: string;
}

interface CategoryInputProps{
    title: string;
}

const MyInput:FC<MyInputProps> = ({title, inputType}) => {
    const currentInput = () => {
        switch(inputType){
            case "Input":
                return(               
                    <Input title={title}/>
                );
            case "categoryInput":
                return(        
                    <CategoryInput title={title}/>
                );
            case "quantityInput":
                return(
                    <QuantityInput/>
                );
        }
    }

    return <>{currentInput()}</>;
};

const Input:FC<InputProps> = ({title}) => {
    return (
        <div className="input-item">
            <label className="input-title">
                {title}
                <input className="input"></input>
            </label>                    
        </div>
    );
};

const CategoryInput:FC<CategoryInputProps> = ({title}) => {
    return (
        <div>
            <label className="category-input-title">
                {title}
                <input className="category-input"></input>
                <DeleteCategory/>
                <input className="category-input"></input>
                <DeleteCategory/>
            </label>
        </div>
    );
};

const QuantityInput:FC =() => {
    return(
        <div className="quantity-input-item">
        <div>
            <label>
                <span className="quantity-input-title">Кол-во</span>
                <div>
                    <input className="quantity-input"></input>
                    <span className="text">шт.</span>
                </div> 
            </label>
        </div>
        <div>
            <label>
                <span className="quantity-input-title">Цена</span>
                <div>
                    <input className="quantity-input"></input>
                    <span className="text">₽</span>
                </div>
            </label>
        </div>
        </div>
    );
};

export default MyInput;