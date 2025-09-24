import {useParams} from "react-router";

function UserEdit() {
    const {userId} = useParams()



  return <div>User Edit Component: {userId} </div>;
}

export default UserEdit;