interface MessageProps {
    text: string
}

function Message(props: MessageProps) {
    return <h1>{props.text}</h1>
}

export default Message;