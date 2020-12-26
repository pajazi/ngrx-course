//feature selector for feature module

import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CoursesState } from "./reducers/course.reducers";

import * as fromCourses from './reducers/course.reducers';

export const selectCoursesState = createFeatureSelector<CoursesState>("courses");

export const selectAllCourses = createSelector(
    selectCoursesState,
    fromCourses.selectAll //list of courses with the natural order
);

export const selectBeginnerCourses = createSelector(
    selectAllCourses,
    courses => courses.filter(c => c.category === 'BEGINNER')
)

export const selectAdvancedCourses = createSelector(
    selectAllCourses,
    courses => courses.filter(c => c.category === 'ADVANCED')
)

export const selectPromoTotal = createSelector(
    selectAllCourses,
    courses => courses.filter(course => course.promo).length
)

export const areCoursesLoaded = createSelector(
    selectCoursesState,
    state => state.allCoursesLoaded
)
