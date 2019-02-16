import * as fromCollection from './collection.reducer'
import * as fromBooks from './books.reducer'
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

export interface BooksState {
    collection : fromCollection.State,
    books : fromBooks.State
}

export interface State {
    books : BooksState
}

export const reducers: ActionReducerMap<BooksState , any> = {
    collection : fromCollection.reducer,
    books : fromBooks.reducer
}

export const getBooksState = createFeatureSelector<State , BooksState>('books');

export const getBookEntitiesState = createSelector(
    getBooksState,
    state => state.books
)