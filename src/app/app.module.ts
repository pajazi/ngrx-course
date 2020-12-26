import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';

import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {HttpClientModule} from '@angular/common/http';

import {RouterModule, Routes} from '@angular/router';
import {AuthModule} from './auth/auth.module';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {RouterState, StoreRouterConnectingModule} from '@ngrx/router-store';

import {EffectsModule} from '@ngrx/effects';
import {EntityDataModule} from '@ngrx/data';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { reducers, metaReducers } from './reducers';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  {
    path: 'courses',
    loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule),
    canActivate: [AuthGuard] //any part will be protected by the auth guard
  },
  {
    path: '**',
    redirectTo: '/'
  }
];



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    HttpClientModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatToolbarModule,
    AuthModule.forRoot(),
    StoreModule.forRoot(reducers, { 
      metaReducers, //Its just like a plain reducer (example authReducer), difference is that this meta reducer is invoked before all other actions/reducers! 
      runtimeChecks: {
        strictStateImmutability: true, //property to check if OnPush doesen't brake!, state.user = user return state!!! X!!!!!NOT
        strictActionImmutability: true, //actions are immutable as well!
        strictActionSerializability: true, //actions are serializable, that can be saved by the 
        strictStateSerializability: true //Insures that the state inside the store is always serializable!
      }
    }), //Initializes store for the app (empty object) { }
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }), //For store development tools
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot({}), //no entity in app.module, everything in submodules
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
      routerState: RouterState.Minimal //saves the router in the store, in order to recreate the time travel debugger
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
