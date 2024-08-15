import {configureStore} from '@reduxjs/toolkit';
import objectiveReducer from '../Features/Objective/objectiveSlice';

export const store = configureStore({
    reducer: objectiveReducer
})