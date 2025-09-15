import Nav from "react-bootstrap/Nav";
import type {MenuItemType} from "../../../../types/MenuItem.type.ts";
import { v4 as uuidv4 } from 'uuid';
interface MenuItemProps {
    data: MenuItemType[]
}

function MenuItem(props: MenuItemProps) {
    return (
        <>
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                {props.data.map(item => (
                    <Nav.Link href="#action1" key={uuidv4()}>{item.name}</Nav.Link>
                ))}

            </Nav>
        </>
    )
}

export default MenuItem;