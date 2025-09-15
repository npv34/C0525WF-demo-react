import "./counter.css";
import {Button} from "react-bootstrap";
import {useState} from "react";

function Counter() {
    const [count, setCount] = useState({
        title: "Counter app",
        value: 0
    });
    const [message, setMessage] = useState("")

    const handleClick = (): void => {
        // tao 1 bien hoan toan moi
        const newCount = {...count, value: count.value + 1};
        setCount(newCount);
    }

    return (
        <>
            <h1>{message}</h1>
            <h2>{count.title}: {count.value}</h2>
            <Button onClick={handleClick}>Click</Button>
        </>
    )
}

export default Counter;