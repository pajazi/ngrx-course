import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { concatMap, filter, first, map, tap } from "rxjs/operators";
import { CourseEntityService } from "./course-entity.service";

@Injectable()
export class CoursesResolver implements Resolve<boolean> {

    constructor(private service: CourseEntityService) {
        
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.service.loaded$.pipe( //loaded flag from ngrx data
            tap(loaded => {
                if(!loaded) {
                    this.service.getAll();
                }
            }),
            filter(loaded => !!loaded), //data is loaded before the beginning of the transmission
            first()
        )
    }
}
