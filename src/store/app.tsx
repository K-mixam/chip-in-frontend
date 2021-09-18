import { makeAutoObservable } from "mobx";
import { ICurrentPanel } from "../types/app";

class App {
  currentPanel = ICurrentPanel.home;

  constructor() {
    makeAutoObservable(this);
  }
}

export default new App();
