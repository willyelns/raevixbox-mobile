import React from "react";
import { YellowBox } from "react-native";
import Routes from "./routes";

//Ignorando warning do Websocket
YellowBox.ignoreWarnings(["Unrecognized WebSocket"]);

const App = () => <Routes />;

export default App;
