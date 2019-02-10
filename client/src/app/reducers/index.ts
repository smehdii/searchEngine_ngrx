import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromtLayout from '../core/reducers/layout.reducer'
import * as fromRouter from '@ngrx/router-store';

export interface State {
    layout: fromtLayout.State,
    router: fromRouter.RouterReducerState
}

export const reducers: ActionReducerMap<State, any> = {
    layout: fromtLayout.reducer,
    router: fromRouter.routerReducer
}

const getLayoutState = createFeatureSelector<State, fromtLayout.State>("layout")

export const getSidenavState = createSelector(
    getLayoutState,
    fromtLayout.getShowSidenav
)