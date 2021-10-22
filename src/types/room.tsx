export interface IRoom {
  id: number;
  title: string;
  date: number;
  people_number: number;
  owner: number;
  amount: number;
}

export enum RoomTabEnum {
  setting = "setting",
  product_list = "product_list",
}
