import { Injectable } from "@angular/core";
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from "@ngrx/data";
import { Course } from "../model/course";

@Injectable()
export class CourseEntityService extends EntityCollectionServiceBase<Course> {

    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
        super('Course', serviceElementsFactory);
    }

}

// const service = new CourseEntityService();
//add all to cache
//service.get backend
//^^^^ service.couress/api autimatically performs an http request
//facade service
