import { FC } from "react";
import "./DoubleButton.scss";
import { AddIcon } from "../../assets/svg";
import store from "../../store";
import { CurrentPanelEnum } from "../../types/app";

const DoubleButton: FC = () => {
  return (
    <div className="double-button">
      <button
        className="double-button__item"
        onClick={() => store.app.setCurrentPanel(CurrentPanelEnum.productSetup)}
      >
        <AddIcon />
      </button>
      <button className="double-button__item_shadow">Готово</button>
    </div>
  );
};

export default DoubleButton;
