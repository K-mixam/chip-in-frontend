import { FC } from "react";
import store from "../../store";
import "./ChoosedCategories.scss";

interface ChoosedCategoriesProps {
  choseCategoryId: string | undefined;
  chooseHandler: (id: string) => void;
}

const ChoosedCategories: FC<ChoosedCategoriesProps> = ({
  choseCategoryId,
  chooseHandler,
}) => {
  const categories = store.product.categories;

  return (
    <div className="item">
      <span className="title">Категория</span>
      <div>
        {categories.map((category) => {
          return (
            category.id !== "0" && (
              <button
                className={`category-button${
                  choseCategoryId === category.id ? "__selected" : ""
                }`}
                onClick={() => chooseHandler(category.id)}
                key={category.id}
              >
                {category.title}
              </button>
            )
          );
        })}
      </div>
    </div>
  );
};

export default ChoosedCategories;
