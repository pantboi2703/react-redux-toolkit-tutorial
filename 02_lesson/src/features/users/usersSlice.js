import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: '0', name: 'Nick Burkhardt'},
    {id: '1', name: 'Hank Griffin'},
    {id: '2', name: 'Monroe'}
]

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
});

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer;