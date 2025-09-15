import './App.css'
import HeaderTop from "./components/HeaderTop";
import UserList from "./components/Users/UserList";
import Container from "react-bootstrap/Container";

function App() {

  return (
    <>
        <HeaderTop title={"Eshop"}/>
        <Container>
            <UserList/>
        </Container>
    </>
  )
}

export default App
