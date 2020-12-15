import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on
} from '@ngrx/store';
import { AuthActions } from '../action.types';
import { User } from '../model/user.model';

export interface AuthState { //Staet for the feature module
  user: User;
}

export const initialAuthState: AuthState = {
  user: undefined
}

//function that modifies the store in a certain way
export const authReducer = createReducer(
  initialAuthState,

  on(AuthActions.login, (state, action) => {
    return {
      user: action.user
    }
  })

)


//ng g store auth/Auth --module auth.module.ts
