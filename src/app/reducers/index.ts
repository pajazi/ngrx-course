import { routerReducer } from '@ngrx/router-store';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

export interface AppState { //Correspons to the global app state

}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer //router store navigation actions
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [logger] : []; //the order matters of the array

//Meta reducer, logging meta reducer
export function logger(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    console.log('State before: ', state)
    console.log('Action: ', action)

    return reducer(state, action); //pipes (passes this on!)
  }
}
