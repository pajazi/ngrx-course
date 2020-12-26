import { Update } from "@ngrx/entity";
import { createAction, props } from "@ngrx/store";
import { Course } from "./model/course";

export const loadAllCourses = createAction( //request
    "[Course Resolver] Load All Courses"
);

export const allCoursesLoaded = createAction( //returned data
    "[Load Courses Effect] All Courses Loaded", //event
    props<{courses: Course[]}>()
)

export const courseUpdated = createAction(
    "[Edit Course Dialog] Course Updated",
    props<{update: Update<Course>}>() //update make easy to update ngrx entity package
)
