import { makeAutoObservable } from "mobx";

class Room {
  rooms = [
    {
      id: 0,
      title: "Пятница развратница",
      date: 10000000,
      people_number: 12,
      owner: 123,
      amount: 0,
      is_categorized: false,
    },
    {
      id: 1,
      title: "Пятница развратница. Продолжение",
      date: 10001000,
      people_number: 3,
      owner: 1,
      amount: 10000,
      is_categorized: false,
    },
    {
      id: 2,
      title: "Пятница развратница. Финалочка",
      date: 10001000,
      people_number: 3,
      owner: 1,
      amount: -100,
      is_categorized: false,
    },
  ];
  constructor() {
    makeAutoObservable(this);
  }
}

export default new Room();
