import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import SearchForm from "./SearchForm";
import type {MenuItemType} from "../../../types/MenuItem.type.ts";
import MenuItem from "./MenuItem";


const listMenuItem: MenuItemType[] = [
    {
        name: "Home",
        url: "/home"
    },
    {
        name: "Shop",
        url: "/shop"
    }
]

interface HeaderTopProps {
    title: string
}

function HeaderTop({title}: HeaderTopProps) {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#">{title}</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                   <MenuItem data={listMenuItem}/>
                   <SearchForm/>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default HeaderTop;