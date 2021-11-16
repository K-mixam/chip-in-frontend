export interface IRoom {
  id: number;
  title: string;
  date: number;
  people_number: number;
  owner: number;
  amount: number;
}

export enum RoomEditTabEnum {
  setting = "setting",
  product_list = "product_list",
}

export enum RoomAdminTabEnum{
  guests_tracking = "guests_tracking",
  product_tracking = "product_tracking",
}

export enum RoomGuestTabEnum{
  product_select = "product_select",
  report = "report"
}