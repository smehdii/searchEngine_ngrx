import { CollectionPageActions, BookActions, CollectionApiActions, SelectedBookPageActions } from '../actions'


export interface State {
    loading : boolean;
    loaded : boolean;
    ids: string[]
}

export const initialState = {
    loading: false,
    loaded: false,
    ids : null
}

export function reducer(
    state : State = initialState,
    action : 
        CollectionPageActions.CollectionPageActionsUnion |
        CollectionApiActions.CollectionApiActionsUnion |
        SelectedBookPageActions.SelectedBookPageActionsUnion
) : State {
    switch (action.type) {
        case CollectionPageActions.CollectionPageActionTypes.LoadCollection:
            return {
                ...state,
                loading: true,
            }

        case CollectionApiActions.CollectionApiActionTypes.LoadBooksSuccess:
            return {
                loaded: true, 
                loading : false , 
                ids : action.payload.map(book => book.id)
            }
        
        case CollectionApiActions.CollectionApiActionTypes.AddBookSuccess:
        case CollectionApiActions.CollectionApiActionTypes.RemoveBookFailure: {
            if (state.ids.indexOf(action.payload.id) > -1) {
                return state;
            }

            return {
                ...state,
                ids: [...state.ids, action.payload.id],
            };
        }

        case CollectionApiActions.CollectionApiActionTypes.RemoveBookSuccess:
        case CollectionApiActions.CollectionApiActionTypes.AddBookFailure:
            return {
                ...state , 
                ids : state.ids.filter( id => (id !== action.payload.id))
            }

    
        default:
            return state
    }
}

export const getLoading = (state : State) => state.loading

export const getLoaded = (state : State) => state.loaded

export const getIds = (state : State) => state.ids