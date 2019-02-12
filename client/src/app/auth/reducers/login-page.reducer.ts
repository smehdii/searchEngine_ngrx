import { LoginPageActions, AuthApiActions } from '../actions';

export interface State {
    error: string | null;
    pending: boolean;
}

export const initalState = {
    error: null,
    pending: false
}

export function reducer(
    state: State = initalState,
    action: AuthApiActions.AuthApiActionsUnion | LoginPageActions.LoginPageActionsUnion
): State {
    switch (action.type) {
        case AuthApiActions.AuthApiActionTypes.LoginSuccess:
            return {
                ...state,
                error: null,
                pending: false
            }

        case AuthApiActions.AuthApiActionTypes.LoginFailure:
            return {
                ...state,
                error: action.payload.error,
                pending: false
            }

        case LoginPageActions.LoginPageActionTypes.Login:
            return {
                ...state,
                error: null,
                pending: true
            }

        default:
            return state;
    }
}

export const getError = (state: State) => state.error;
export const getPending = (state: State) => state.pending;