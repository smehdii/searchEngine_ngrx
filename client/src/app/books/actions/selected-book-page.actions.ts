import { Action } from '@ngrx/store';
import { Book } from '../models/book';

export enum SelectedBookPageActionTypes {
  AddBook = '[Selected Book Page] Add Book',
  RemoveBook = '[Selected Book Page] Remove Book',
}

export class AddBook implements Action {
  readonly type = SelectedBookPageActionTypes.AddBook;

  constructor(public payload: Book) {}
}

export class RemoveBook implements Action {
  readonly type = SelectedBookPageActionTypes.RemoveBook;

  constructor(public payload: Book) {}
}

export type SelectedBookPageActionsUnion = AddBook | RemoveBook;
