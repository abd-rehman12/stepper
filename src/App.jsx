import { Link, Outlet } from "react-router-dom";
import "./App.css";

import FirstName from "./Components/FirstName";
// import Home from "./Components/FirstName";

function App() {
  return (
    <>
      <Link to={"/"}>
        <div className=" text-3xl text-center text-blue-500 font-bold m-4">
          Sign up
        </div>
      </Link>

      <Outlet />
    </>
  );
}

export default App;
