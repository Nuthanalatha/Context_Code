import logo from "./logo.svg";
import "./App.css";
import ComponentA from "./components/ComponentA";
import { DataProvider } from "./components/ContextApi";
import { DataConsumer } from "./components/ContextApi";
import ComponentB from "./components/ComponentB";
import { useState } from "react";
import { UserProvider } from "./components/contextapi/ContextUser";
function App() {
  let fName = "Ghana";
  let [userName, setUserName] = useState("Megha");
  return (
    <div className="App">
      <h1>{userName}</h1>
      <DataProvider value={fName}>
        <ComponentA />
      </DataProvider>

      <UserProvider value={setUserName}>
        <ComponentB />
      </UserProvider>
    </div>
  );
}

export default App;
