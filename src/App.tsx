import './App.css'
import Login from "./components/Login";
import {Route, Routes} from "react-router";
import Register from "./components/Register";
import UserList from "./components/Users/UserList";
import Master from "./components/Layout/Master";
import UserCreate from "./components/Users/UserCreate";
import UserEdit from "./components/Users/UserEdit";

function App() {

  return (
    <>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin" element={<Master/>}>
                <Route path="users" element={<UserList />} />
                <Route path="users/create" element={<UserCreate />} />
                <Route path="users/:userId/edit" element={<UserEdit />} />
            </Route>
        </Routes>
    </>
  )
}

export default App
