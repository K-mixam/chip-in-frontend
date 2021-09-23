import { makeAutoObservable } from "mobx";
import { IRoom } from "../types/room";

class Room {
  rooms: IRoom[] = [
    {
      id: 0,
      title: "Пятница развратница",
      date: 10000000,
      people_number: 12,
      owner: 123,
      amount: 0,
    },
    {
      id: 1,
      title: "Пятница развратница. Продолжение",
      date: 10001000,
      people_number: 3,
      owner: 1,
      amount: 10000,
    },
    {
      id: 2,
      title: "Пятница развратница. Финалочка",
      date: 10001000,
      people_number: 3,
      owner: 1,
      amount: -100,
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
