import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

import { Credentials, User } from '../models/user';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor() { }

    login({ username, password }: Credentials): Observable<User> {

        if (username !== 'test' && username !== 'ngrx') {
            return throwError('Invalid username or password');
        }

        return of({ name: 'Viirtual' });
    }

    logout() {
        return of(true);
    }
}
