import { FC } from "react";
import "./DoubleButton.scss";
import { AddIcon } from "../../assets/svg";

interface DoubleButtonProps {
  name: string;
}

const DoubleButton: FC<DoubleButtonProps> = ({ name }) => {
  return (
    <div className="double-button">
      <button className="double-button__item">
        <AddIcon />
      </button>
      <button className="double-button__item_shadow">{name}</button>
    </div>
  );
};

export default DoubleButton;
