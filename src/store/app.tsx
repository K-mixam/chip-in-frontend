import { makeAutoObservable } from "mobx";
import { CurrentPanelEnum } from "../types/app";

class App {
  currentPanel = CurrentPanelEnum.productSetup;

  constructor() {
    makeAutoObservable(this);
  }
}

export default new App();
