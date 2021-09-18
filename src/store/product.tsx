import { makeAutoObservable } from "mobx";

class Product {
  products = [
    {
      id: 0,
      title: "Шашлындос",
      count: 4,
      price: 450,
      category_id: 0,
    },
    {
      id: 0,
      title: "Помидорки",
      count: 10,
      price: 5,
      category_id: 0,
    },
    {
      id: 0,
      title: "Компот (вишневый)",
      count: 20,
      price: 10,
      category_id: 1,
    },
    {
      id: 0,
      title: "Шпроты",
      count: 200,
      price: 4,
      category_id: null,
    },
  ];
  constructor() {
    makeAutoObservable(this);
  }
}

export default new Product();
