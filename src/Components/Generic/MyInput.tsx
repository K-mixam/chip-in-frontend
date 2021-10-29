import { ChangeEvent, Dispatch, FC, SetStateAction } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { DeleteCategory } from "../../assets/svg";
import "./MyInput.scss";

interface InputProps {
  title: string;
  name?: string;
  value?: string;
  changeHandler?: (event: ChangeEvent<HTMLInputElement>) => void;
}

interface CategoryInputProps {
  title: string;
  categoryValues: string[];
  setCategoryValues: Dispatch<SetStateAction<string[]>>;
}

interface TextareaProps {
  defaultValue: string;
  changeHandler: Dispatch<SetStateAction<string>>;
  labelText: string;
}

export const Input: FC<InputProps> = ({
  title,
  name,
  value,
  changeHandler,
}) => {
  return (
    <div className="input-item">
      <label className="input-title">
        {title}
        <input
          className="input"
          name={name}
          value={value}
          onChange={changeHandler}
        ></input>
      </label>
    </div>
  );
};

export const CategoryInput: FC<CategoryInputProps> = ({
  title,
  categoryValues,
  setCategoryValues,
}) => {
  return (
    <div>
      <label className="category-input-title">
        {title}
        {categoryValues.map((category, i) => {
          return (
            <div key={i}>
              <input className="category-input"></input>
              <DeleteCategory />
            </div>
          );
        })}
        {/* <input className="category-input"></input>
        <DeleteCategory /> */}
      </label>
    </div>
  );
};

export const QuantityInput: FC = () => {
  return (
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
