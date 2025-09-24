import {Button, Card, Col} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import {useFormik} from "formik";
import * as Yup from 'yup';
import {Link} from "react-router";
const loginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .required('Required')
});


function Login() {

    const formLogin = useFormik({
        initialValues: {
            email: "",
            password: "",
            rememberMe: false
        },
        validationSchema: loginSchema,
        onSubmit: values => {
            console.log(values);
        }
    })

    return (
        <>
            <Col xs={12} md={4} className={"mx-auto"}>
                <Card className={"mt-2"}>
                    <Card.Header style={{textAlign: "center"}}>Login</Card.Header>
                    <Card.Body>
                        <Form className="mx-auto" onSubmit={formLogin.handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="email"
                                    onChange={formLogin.handleChange}
                                    placeholder="Enter email"
                                    isInvalid={formLogin.touched.email && !!formLogin.errors.email}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {formLogin.errors.email}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    onChange={formLogin.handleChange}
                                    placeholder="Password"
                                    isInvalid={formLogin.touched.password && !!formLogin.errors.password}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {formLogin.errors.password}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" name={"rememberMe"} onChange={formLogin.handleChange} label="Remember me" />
                            </Form.Group>
                            <Button  variant="primary" type="submit">
                                Login
                            </Button>
                            <Link to={"/register"} className={"btn ms-2"}>Register</Link>
                        </Form>
                    </Card.Body>

                </Card>
            </Col>
        </>
    )
}

export default Login;