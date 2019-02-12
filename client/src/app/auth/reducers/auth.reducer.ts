import { User } from '../models/user';
import { AuthApiActions, AuthActions } from '../actions';


export interface State {
    user: User | null
}

const initialState: State = {
    user: null
}

export function reducer(
    state: State = initialState,
    action: AuthActions.AuthActionsUnion | AuthApiActions.AuthApiActionsUnion
): State {
    switch (action.type) {
        case AuthApiActions.AuthApiActionTypes.LoginSuccess:
            return {
                user: action.payload.user
            }
        case AuthActions.AuthActionTypes.Logout:
            return initialState
        default:
            return state
    }
}

export const getUser = (state: State) => state.user;
