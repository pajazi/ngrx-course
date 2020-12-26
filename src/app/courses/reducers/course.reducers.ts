// import { Course } from "../model/course";
// //entity format
// export interface CourseState {
//     entities: {[key: number]:Course} //ne array, jer ne moze da se loop-a trhough, vec koristimo dictionary
//     ids: number[] //ids of the courses from the natural order!
// }
// //Entity package from the store allows us to store the format seen above
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { CourseActions } from "../action-types";
import { compareCourses, Course } from "../model/course";

export interface CoursesState extends EntityState<Course> {
    allCoursesLoaded: boolean;
}

export const adapter = createEntityAdapter<Course>(
    {
        sortComparer: compareCourses,
        //selectId: course => course.courseId //id by default or courseId...
    }
)
//API za CRUD for Course Entities

export const initialCoursesState = adapter.getInitialState({
    allCoursesLoaded: false //initialLoad
});

export const coursesReducer = createReducer(
    initialCoursesState,
    on(CourseActions.allCoursesLoaded, (state, action) => adapter.addAll(action.courses, {...state, allCoursesLoaded: true})), //state initial store state
    
    on(CourseActions.courseUpdated, (state, action) => adapter.updateOne(action.update, state))
)

export const { selectAll } = adapter.getSelectors();
