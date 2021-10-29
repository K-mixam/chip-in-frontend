import { UserInfo } from "@vkontakte/vk-bridge";
import { makeAutoObservable } from "mobx";

class User {
  user: UserInfo | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setUser(user: UserInfo) {
    this.user = user;
  }
}

export default new User();
