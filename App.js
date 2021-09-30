import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Routes from "./src/routes/index";
import { AppProvider } from './src/hooks';

import * as serviceWorkerRegistration from "./src/serviceWorkerRegistration";

export default function App() {
  return (
    <NavigationContainer>
      <AppProvider>
        <Routes />
      </AppProvider>
    </NavigationContainer>
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
