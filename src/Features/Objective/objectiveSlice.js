import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    objectives: []
}


export const objectiveSlice = createSlice({
    name: 'objective',
    initialState,
    reducers: {
        addObjective: (state, action) => {
            const objective = {
                id: nanoid(), 
                text: action.payload
            }
            state.objectives.push(objective)
        },
        removeObjective: (state, action) => {
            state.objectives = state.objectives.filter((objective) => objective.id !== action.payload )
        },
    }
})

export const {addObjective, removeObjective} = objectiveSlice.actions

export default objectiveSlice.reducer