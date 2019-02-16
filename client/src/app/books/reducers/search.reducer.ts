import { BooksApiActions, FindBookPageActions } from '../actions';

export interface State {
    ids : string[];
    loading : boolean;
    error : string;
    query : string;
}

const initialState: State = {
    ids: [],
    loading: false,
    error: '',
    query: '',
};

export function reducer(
    state : State , 
    action : BooksApiActions.BooksApiActionsUnion |
            FindBookPageActions.FindBookPageActionsUnion 
) : State {

    switch (action.type) {


        case FindBookPageActions.FindBookPageActionTypes.SearchBooks: {
            const query = action.payload;

            if (query === '') {
                return {
                    ids: [],
                    loading: false,
                    error: '',
                    query,
                };
            }
            
            return {
                ...state , 
                loading : true , 
                error:'',
                query : action.payload
            }
        }

        case BooksApiActions.BooksApiActionTypes.SearchSuccess:
            return {
                query : state.query, 
                loading: false , 
                ids : (action.payload.map(book => book.id)),
                error: ''
            }

        case BooksApiActions.BooksApiActionTypes.SearchFailure:
            return {
                ...state ,
                loading : false , 
                error: action.payload
            }


        default:
            return state
    }
}

export const getIds = (state: State) => state.ids;

export const getQuery = (state: State) => state.query;

export const getLoading = (state: State) => state.loading;

export const getError = (state: State) => state.error;