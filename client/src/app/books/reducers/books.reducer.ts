import { Book } from '../models/book';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { CollectionApiActionTypes } from '../actions/collection-api.actions';
import { BooksApiActionsUnion, BooksApiActionTypes } from '../actions/books-api.actions';
import { BooksApiActions, CollectionApiActions, ViewBookPageActions, BookActions } from '../actions';
import { ViewBookPageActionTypes } from '../actions/view-book-page.actions';
import { BookActionTypes } from '../actions/book.actions';


export interface State extends EntityState<Book>{
    selectBookId: string | null
}

export const adapter: EntityAdapter<Book> = createEntityAdapter<Book>({
    selectId: (book: Book) => book.id,
    sortComparer: false,
});

export const initialState = adapter.getInitialState({
    selectedBookId: null,
})

export function reducer (
    state : State , 
    action : 
    CollectionApiActions.CollectionApiActionsUnion |
    BooksApiActions.BooksApiActionsUnion |
    BookActions.BookActionsUnion |
    ViewBookPageActions.ViewBookPageActionsUnion
) : State {
    switch (action.type) {
        case CollectionApiActionTypes.LoadBooksSuccess:
        case BooksApiActionTypes.SearchSuccess:
            return adapter.addMany(action.payload, state)

        case ViewBookPageActionTypes.SelectBook:
            return {
                ...state , 
                selectBookId : action.payload
            }

        case BookActions.BookActionTypes.LoadBook:
            return adapter.addOne(action.payload , state)
        default:
            return state
    }
} 

export const getSelectedBook = (state : State ) => state.selectBookId