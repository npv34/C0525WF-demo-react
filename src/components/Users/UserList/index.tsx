import {useState} from "react";
import {Button, Card, Table} from "react-bootstrap";
import { v4 as uuidv4 } from 'uuid';

function UserList() {
    const [users, setUsers] = useState([
        {
            id: 1,
            name: "Nguyen Van A",
            age: 30,
            email: "a@gmail.com"
        },
        {
            id: 2,
            name: "Nguyen Van B",
            age: 25,
            email: "b@gmail.com"
        },
        {
            id: 3,
            name: "Nguyen Van C",
            age: 28,
            email: "c@gmail.com"
        }
    ])

    const handleDelete = (id: number) => {
        if (!window.confirm("Are you sure to delete?")) {
            return;
        }
        const newUser = users.filter(user => user.id !== id);
        setUsers(newUser);
    }

    return (
        <>
            <Card className={"mt-2"}>
                <Card.Header>User List</Card.Header>
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
                        { users.map((user, index) => (
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