import { makeAutoObservable } from "mobx";

class User {
  current_user = {
    id: 1,
  };

  constructor() {
    makeAutoObservable(this);
  }
}

export default new User();
