import { Form } from "react-bootstrap";
import {useEffect} from "react";

interface InputSearchProps {
    search: (keyword: string) => void
}

function InputSearch(props: InputSearchProps) {

    const handleSearch = (e: any) => {
        props.search(e.target.value)
    }

    useEffect(() => {
        console.log("InputSearch mounted")

        return () => {
            console.log("InputSearch unmounted")
        }
    }, [])

    return (
        <>
            <Form.Control type="text" placeholder="Enter keyword" onKeyUp={handleSearch} />
        </>
    )
}

export default InputSearch