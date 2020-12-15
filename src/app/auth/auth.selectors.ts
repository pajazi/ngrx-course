import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./reducers";

export const selectAuthState = createFeatureSelector<AuthState>('auth'); //for typesafe selectors

export const isLoggedIn = createSelector( //ngrx selector -> maping function, has memory, as long as the input doesent change, the output wont be recalculated
    selectAuthState, //accesing the auth state, we can add multiple state selectors ... courses ...
    (authState) => !!authState.user
);

export const isLoggedOut = createSelector( //combine two selectors!
    isLoggedIn, //output of this is a boolean
    (loggedIn) => !loggedIn
)
