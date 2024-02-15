import { createSlice } from "@reduxjs/toolkit";
import { api } from '../../api/api'

const currentUserDataSlice = createSlice({
    name: 'userData',
    initialState: {
        user: null
    },
    extraReducers: (builder) => {
        builder.addMatcher(api.endpoints.login.matchFulfilled, (state, action) => {
            state.user = action.payload.user
        }),
        builder.addMatcher(api.endpoints.register.matchFulfilled, (state, action) => {
            state.user = action.payload.user
        })
    }
})

export default currentUserDataSlice.reducer