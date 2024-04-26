import axios from "axios";
import { MyUserFail, MyUserReq, MyUserSuc } from "../action/Myuseraction";

const getUser = () => {
    return (dispatch) => {
        dispatch(MyUserReq())

        return axios.get('https://jsonplaceholder.typicode.com/users').then(
            y => dispatch(MyUserSuc(y)),
            err => dispatch(MyUserFail(err))

        )
    }
}

export default getUser;