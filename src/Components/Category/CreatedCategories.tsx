
import { FC } from "react";
import "./CreatedCategories.scss";

const CreatedCategories:FC = () => {
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
            
            {/* Как насчет добавлять категории, созданные на странице RoomSetting, в массив, 
            а здесь через map генерировать кнопки, доставая их нащвание из массива?*/}
        </div>
    );
};

export default CreatedCategories;