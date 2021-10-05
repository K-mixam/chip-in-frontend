import { makeAutoObservable } from "mobx";
import { IRoom } from "../types/room";

class Room {
  rooms: IRoom[] = [
    {
      id: 0,
      title: "Майские праздники",
      date: "2 мая",
      people_number: 7,
      owner: 1,
      amount: "532p",
    },
    {
      id: 1,
      title: "День рождения Андрея",
      date: "27 апреля",
      people_number: 16,
      owner: 1,
      amount: "271p",
    },
    {
      id: 2,
      title: "Выпускной",
      date: "1 июня",
      people_number: 25,
      owner: 1,
      amount: "1532p",
    },
    {
      id: 3,
      title: "Новый год",
      date: "1 января",
      people_number: 11,
      owner: 1,
      amount: "0",
    },
    {
      id: 4,
      title: "Поступление",
      date: "2 сентября",
      people_number: 19,
      owner: 1,
      amount: "0",
    },
  ];
  constructor() {
    makeAutoObservable(this);
  }

  create(room: IRoom) {
    this.rooms.push(room);
  }

  edit(room_id: number, title: string) {
    const foundRoom = this.rooms.find((room) => room.id === room_id);
    if (foundRoom) {
      foundRoom.title = title;
    }
  }
}

export default new Room();
