import { createAction, props } from "@ngrx/store";
import { User } from "./model/user.model";

export const login = createAction(
    "[Login Page] User Login", //convetion, where the action has come from, one action per component/screen, what the action corresponds to
    props<{user: User}>() //<Payload type>
)
//Constructor ^^^ for creating actions 


export const logout = createAction(
    "[Top Menu] Logout"
)
