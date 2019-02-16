import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

import { CollectionPageActions } from '../actions';
import * as fromBooks from '../reducers';

@Component({
    selector: 'bc-collection-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <mat-card>
      <mat-card-title>My Collection</mat-card-title>
    </mat-card>

    <bc-book-preview-list [books]="books$ | async"></bc-book-preview-list>
  `,
    styles: [
        `
      mat-card-title {
        display: flex;
        justify-content: center;
      }
    `,
    ],
})
export class CollectionPageComponent implements OnInit {
    books$: Observable<Book[]>;

    constructor(private store: Store<fromBooks.State>) {
        this.books$ = store.pipe(select(fromBooks.getBookCollection));
    }

    ngOnInit() {
        this.store.dispatch(new CollectionPageActions.LoadCollection());
    }
}