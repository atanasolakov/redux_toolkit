import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Neil Armstrong" },
  { id: "1", name: "Georgi Ivanov" },
  { id: "0", name: "Boyko Borisov" },
];

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer