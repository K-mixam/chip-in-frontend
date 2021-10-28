import { FC } from "react";
import "./ChoosedCategories.scss";

const ChoosedCategories:FC = () => {
    return(
        <div className="item">
            <span className="title">
                Категория
            </span>
            <div>
                <button className="selected">Еда</button>
                <button>Напитки</button>
                <button>Развлечения</button>
            </div>
        </div>
    );
};

export default ChoosedCategories;