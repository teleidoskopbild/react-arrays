import "./App.css";
import { useState } from "react";
import { users } from "./data/users.js";
import Buttons from "./components/Buttons.jsx";
import UserList from "./components/UserList.jsx";

function App() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredUsers = (() => {
    switch (activeFilter) {
      case "women":
        return users.filter((user) => user.gender === "female");
      case "men":
        return users.filter((user) => user.gender === "male");
      case "byName":
        return [...users].sort((a, b) =>
          a.name.first.localeCompare(b.name.first)
        );

      case "byAge":
        return [...users].sort((a, b) => a.age - b.age);
      default:
        return users;
    }
  })();

  return (
    <div className="App">
      <Buttons activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      <UserList users={filteredUsers} />
    </div>
  );
}

export default App;
