import React from "react";
import { Navbar } from "./components/Navbar";
import { appRoutes } from "./routes";
import {useRootStore} from './hooks/useRootStore';
import {observer} from 'mobx-react';

const App: React.FC = observer(() => {
  const rootStore = useRootStore()
  const isLoggedIn = rootStore.authStore.isLoggedIn
  const routes = appRoutes(isLoggedIn);

  return (
      <>
        {isLoggedIn && <Navbar />}
        <div className="container-fluid">{routes}</div>
      </>
  );
});

export default App;
