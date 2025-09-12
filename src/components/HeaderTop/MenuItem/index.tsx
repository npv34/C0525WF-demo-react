import Nav from "react-bootstrap/Nav";
import type {MenuItemType} from "../../../../types/MenuItem.type.ts";

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
                    <Nav.Link href="#action1">{item.name}</Nav.Link>
                ))}

            </Nav>
        </>
    )
}

export default MenuItem;