import {useState} from "react";
import {Button, Card, Col, Row, Table} from "react-bootstrap";
import { v4 as uuidv4 } from 'uuid';
import InputSearch from "../../InputSearch";

const data =[
    {
        id: 1,
        name: "Nguyen Van Teo",
        age: 30,
        email: "a@gmail.com"
    },
    {
        id: 2,
        name: "Nguyen Van Bao",
        age: 25,
        email: "b@gmail.com"
    },
    {
        id: 3,
        name: "Nguyen Van Bao Loc",
        age: 28,
        email: "c@gmail.com"
    }
]

function UserList() {
    const [users, setUsers] = useState(data);
    const [userFilter, setUserFilter] = useState(data);
    const [showInputSearch, setShowInputSearch] = useState(false);

    const handleDelete = (id: number) => {
        if (!window.confirm("Are you sure to delete?")) {
            return;
        }
        const newUser = users.filter(user => user.id !== id);
        setUserFilter(newUser);
    }

    const searchUser = (keyword: string) => {
        if (keyword){
            const newUser = users.filter(user => user.name.toLowerCase().includes(keyword.toLowerCase()));
            setUserFilter(newUser);
        } else {
            setUserFilter(data);
        }
    }

    return (
        <>
            <Card className={"mt-2"}>
                <Card.Header>
                    <Row>
                        <Col xs={6}><h4>User List</h4></Col>
                        <Col xs={6}>
                            <Button onClick={() => setShowInputSearch(!showInputSearch)}>Show inputSearch</Button>
                            { showInputSearch && (
                                <InputSearch search={searchUser}/>
                            )}
                        </Col>
                    </Row>

                </Card.Header>
                <Card.Body>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        { userFilter.map((user, index) => (
                            <tr key={uuidv4()}>
                                <td>{ index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Button onClick={() => handleDelete(user.id)} className={"btn btn-danger"}>Delete</Button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>

        </>
    )
}

export default UserList;