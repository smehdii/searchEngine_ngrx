import { Action } from '@ngrx/store';
import { Book } from '../models/book';

export enum BooksApiActionTypes {
    SearchSuccess = '[Books/API] Search Success',
    SearchFailure = '[Books/API] Search Failure',
}

export class SearchSuccess implements Action {
    readonly type = BooksApiActionTypes.SearchSuccess

    constructor( public payload : Book[] ){}
}

export class SearchFailure implements Action {
    readonly type = BooksApiActionTypes.SearchFailure

    constructor( public payload : string ){}
}

export type BooksApiActionsUnion = SearchSuccess | SearchFailure