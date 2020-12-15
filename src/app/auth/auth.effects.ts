import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, tap } from "rxjs/operators";
import { AuthActions } from "./action.types";


@Injectable()
export class AuthEffects { //sideeffect for action store

    login$ = createEffect(() => this.actions$.pipe(
        ofType(AuthActions.login),
        tap(action => localStorage.setItem('user', JSON.stringify(action.user)))
        ), {dispatch: false} //dont dispatch any further actions
      );

    logout$ = createEffect(() => this.actions$.pipe(
        ofType(AuthActions.logout),
        tap(() => {
            localStorage.removeItem('user')
            this.router.navigateByUrl('/login');
        })
    ), {dispatch:false})
    
    constructor(private actions$: Actions,
                private router: Router) {

    }

}