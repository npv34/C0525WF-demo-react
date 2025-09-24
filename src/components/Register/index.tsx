import {Link} from "react-router";

function Register() {
    return (
        <>
            <div>Register Component</div>
            <Link to={"/login"}>
                <p>Login</p>
            </Link>

        </>
    );
}

export default Register;