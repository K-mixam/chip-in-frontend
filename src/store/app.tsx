import { makeAutoObservable } from "mobx";
import { CurrentPanelEnum } from "../types/app";

class App {
  currentPanel = CurrentPanelEnum.room;

  constructor() {
    makeAutoObservable(this);
  }
}

export default new App();
