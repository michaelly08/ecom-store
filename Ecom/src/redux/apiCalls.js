import { loginStart, loginSuccess, loginFailure } from "./userRedux";
import {publicRequest} from "../requestMethods"



export const login = async (dispatch, user) => {
    dispatch(loginStart())
    try {
        const res = await publicRequest.post("https://ecom-store00.herokuapp.com/api/auth/login", user)
        dispatch(loginSuccess(res.data))
    }
    catch (err) {
        dispatch(loginFailure())
    }
}