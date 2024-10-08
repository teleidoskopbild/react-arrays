import "./App.css";
import { useState } from "react";
import { users } from "./data/users.js";
import Buttons from "./components/Buttons.jsx";
import UserDisplay from "./components/UserDisplay.jsx";

function App() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredUsers = (() => {
    switch (activeFilter) {
      case "women":
        return users.filter((user) => user.gender === "female");
      case "men":
        return users.filter((user) => user.gender === "male");
      case "byName":
        return users.toSorted((a, b) => (a.name.first > b.name.first ? 1 : -1));
      case "byAge":
        return users.toSorted((a, b) => a.dob.age - b.dob.age);
      default:
        return users;
    }
  })();

  return (
    <div className="App">
      <Buttons activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      <UserDisplay users={filteredUsers} />
    </div>
  );
}

export default App;
