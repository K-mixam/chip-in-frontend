import { FC, useEffect } from "react";
import { AppRoot } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import Home from "./Panels/Home";
import store from "./store";
import { CurrentPanelEnum } from "./types/app";
import Room from "./Panels/Room";
import ProductSetup from "./Panels/ProductSetup";
import bridge from "@vkontakte/vk-bridge";
import { observer } from "mobx-react-lite";
import AdminPanel from "./Panels/AdminPanel";

const App: FC = observer(() => {
  bridge.send("VKWebAppInit", {});

  const app = store.app.currentPanel;

  useEffect(() => {
    bridge.subscribe(({ detail: { type } }) => {
      if (type === "VKWebAppUpdateConfig") {
        const schemeAttribute = document.createAttribute("scheme");
        document.body.attributes.setNamedItem(schemeAttribute);
      }
    });
    async function fetchData() {
      const user = await bridge.send("VKWebAppGetUserInfo");
      store.user.setUser(user);
    }
    fetchData();
  }, []);

  const currentPanel = () => {
    switch (app) {
      case CurrentPanelEnum.home:
        return <Home />;
      case CurrentPanelEnum.room:
        return <Room />;
      case CurrentPanelEnum.productSetup:
        return <ProductSetup />;
      case CurrentPanelEnum.adminPanel:
        return <AdminPanel/>;
    }
  };

  return <AppRoot>{currentPanel()}</AppRoot>;
});

export default App;
