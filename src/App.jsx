import React from "react";
import UserCard from "./components/UserCard";

const App = () => {
  return (
    <div style={{display: "flex", gap: "24px", padding: "20px"}}>
      <UserCard
        name="Juan Camilo Montes"
        email="jm3876602@gmail.com.com"
        avatar="https://i.pravatar.cc/150?img=1"
      />
      <UserCard
        name="Laura Gómez"
        email="laura@example.com"
        avatar="https://i.pravatar.cc/150?img=2"
      />
    </div>
  );
};

export default App;
