import { makeAutoObservable } from "mobx";
import { IRoom, RoomTabEnum } from "../types/room";

class Room {
  is_filtered_owner = false;
  currentRoomTab = RoomTabEnum.setting;
  rooms: IRoom[] = [
    {
      id: 0,
      title: "Майские праздники",
      date: 1619948098000,
      people_number: 7,
      owner: 2,
      amount: 532,
    },
    {
      id: 1,
      title: "День рождения Андрея",
      date: 1619516098000,
      people_number: 16,
      owner: 1,
      amount: -271,
    },
    {
      id: 2,
      title: "Выпускной",
      date: 1622540098000,
      people_number: 25,
      owner: 2,
      amount: 1532,
    },
    {
      id: 3,
      title: "Новый год",
      date: 1599493698000,
      people_number: 11,
      owner: 2,
      amount: 0,
    },
    {
      id: 4,
      title: "Поступление",
      date: 1630575298000,
      people_number: 19,
      owner: 1,
      amount: 0,
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

  toggleFilter() {
    this.is_filtered_owner = !this.is_filtered_owner;
  }

  setCurrentRoomTab(roomTab: RoomTabEnum) {
    this.currentRoomTab = roomTab;
  }
}

export default new Room();
