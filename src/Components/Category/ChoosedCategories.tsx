import { FC } from "react";
import "./ChoosedCategories.scss";

const ChoosedCategories:FC = () => {
    return(
        <div className="item">
            <span className="title">
                Категория
            </span>
            <div>
                <button className="category-button selected">Еда</button>
                <button className="category-button">Напитки</button>
                <button className="category-button">Развлечения</button>
            </div>
        </div>
    );
};

export default ChoosedCategories;