import { ChangeEvent, Dispatch, FC, SetStateAction } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { DeleteCategory } from "../../assets/svg";
import "./MyInput.scss";

interface InputProps {
  title: string;
  name?: string;
  value?: string;
  changeHandler?: (event: ChangeEvent<HTMLInputElement>) => void;
  fontWeight?: "bold" | "normal";
}

interface CategoryInputProps {
  title: string;
  categoryValues: {
    name: string;
    value: string;
  }[];
  actions: {
    addField: (name: string, value?: string | undefined) => void;
    editField: (name: string, value: string) => void;
    deleteField: (name: string) => void;
  };
}

interface TextareaProps {
  defaultValue: string;
  changeHandler: Dispatch<SetStateAction<string>>;
  labelText: string;
}

interface QuantityInputProps {
  first: { value: string };
  second: { value: string };
  changeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<InputProps> = ({
  title,
  name,
  value,
  changeHandler,
  fontWeight = "bold",
}) => {
  return (
    <div className="input-item">
      <label className={fontWeight === "bold" ? "input-title" : "title"}>
        {title}
        <input
          className="input"
          name={name}
          value={value}
          onChange={changeHandler}
        />
      </label>
    </div>
  );
};

export const CategoryInput: FC<CategoryInputProps> = ({
  title,
  categoryValues,
  actions,
}) => {
  return (
    <div>
      <div className="label__non-click">{title}</div>

      {categoryValues.map((category, i) => {
        return (
          <div key={i} className="category__field">
            <input
              className="category-input"
              name={category.name}
              value={category.value}
              onChange={(e) => actions.editField(e.target.name, e.target.value)}
            />
            <div onClick={() => actions.deleteField(category.name)}>
              <DeleteCategory />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const QuantityInput: FC<QuantityInputProps> = ({
  first,
  second,
  changeHandler,
}) => {
  return (
    <div className="quantity-input-item">
      <div>
        <label>
          <span className="quantity-input-title">Кол-во</span>
          <div>
            <input
              className="quantity-input"
              name="count"
              value={first.value}
              onChange={changeHandler}
            />
            <span className="text">шт.</span>
          </div>
        </label>
      </div>
      <div>
        <label>
          <span className="quantity-input-title">Цена</span>
          <div>
            <input
              className="quantity-input"
              name="price"
              value={second.value}
              onChange={changeHandler}
            />
            <span className="text">₽</span>
          </div>
        </label>
      </div>
    </div>
  );
};

export const Textarea: FC<TextareaProps> = ({
  defaultValue,
  changeHandler,
  labelText,
}) => {
  return (
    <div className="input-item">
      <label className="input-title">
        {labelText}
        <TextareaAutosize
          defaultValue={defaultValue}
          className="textarea"
          onChange={(event) => changeHandler(event.target.value)}
        />
      </label>
    </div>
  );
};
