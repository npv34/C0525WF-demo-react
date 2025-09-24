import {Link} from "react-router";

function UserCreate() {
    return (
        <>
            <div>User Create Component</div>
            <Link to={"/admin/users"}>
                <p>Back</p>
            </Link>
        </>
    );
}

export default UserCreate;