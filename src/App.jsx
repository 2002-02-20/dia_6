import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Cards from "./components/Cards";

function App() {
  const [users, setUsers] = useState([]);
  const [click, setClick] = useState([false])
  async function getData() {
    const fetchData = await fetch("users.json");

    const datajson = await fetchData.json();

    setUsers(datajson);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <input type="text" /> <button onclick={()=>setClick(!click)} >Search</button>
      <ul className="masContai">
        {users &&
          users.map((user) => (
            <Cards
              key={user.id}
              img={user.avatar}
              nombre={user.name}
              roles={user.role}
              correo={user.email}
            />
          ))}
      </ul>
    </>
  );
}

export default App;
