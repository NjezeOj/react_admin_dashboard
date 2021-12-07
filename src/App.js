import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import "./app.css";
import UserList from "./pages/userList/UserList";
import { BrowserRouter , Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <Routes>
          <Route path="/" element={<Home/>}/>          
          <Route path="/users" element={<UserList />}/>     
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
