import { FC } from "react";
import { AppRoot } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import Home from "./Panels/Home";
import store from "./store";
import { CurrentPanelEnum } from "./types/app";
import Room from "./Panels/Room";

const App: FC = () => {
  const app = store.app.currentPanel;

  const currentPanel = () => {
    switch (app) {
      case CurrentPanelEnum.home:
        return <Home />;
      case CurrentPanelEnum.room:
        return <Room />;
    }
  };

  return <AppRoot>{currentPanel()}</AppRoot>;
};

export default App;
