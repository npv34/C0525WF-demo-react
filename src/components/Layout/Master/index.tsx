import Container from "react-bootstrap/Container";
import HeaderTop from "../../HeaderTop";
import {Outlet} from "react-router";

function Master() {
    return (
        <Container>
            <HeaderTop title={"shop"}/>
            <Outlet/>
        </Container>
    )
}

export default Master;