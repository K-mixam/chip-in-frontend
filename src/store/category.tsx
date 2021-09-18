import { makeAutoObservable } from "mobx";

class Category {
  categories = [
    {
      id: 0,
      title: "Еда",
    },
    {
      id: 1,
      title: "Напитки",
    },
  ];
  constructor() {
    makeAutoObservable(this);
  }
}

export default new Category();
