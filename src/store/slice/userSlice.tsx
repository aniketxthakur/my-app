import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// create
export const fetchData = createAsyncThunk("user/addUser", async (data, { rejectWithValue }) => {
  try {
    const response = await axios.post("https://650426c5c8869921ae249820.mockapi.io/hi/crud", data)
    return response.data;
  } catch (error) {
    console.error("createData Error:", error);
    throw error;
  }
})
//read
export const readData = createAsyncThunk("user/readData", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get("https://650426c5c8869921ae249820.mockapi.io/hi/crud")
    return response.data
  } catch (error) {
    console.error("readData Error:", error);
    throw error
  }
})
//delete
export const deleteData = createAsyncThunk('user/deleteData', async (id, { rejectWithValue }) => {
  try {
    const response = await axios.delete(`https://650426c5c8869921ae249820.mockapi.io/hi/crud/${id}`)
    return response.data;
  } catch (error) {
    console.error("readData Error:", error);
    throw error;
  }
})

export const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      //Create
      .addCase(fetchData.pending, (state: any) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state: any, action: any) => {
        state.loading = false;
        state.users.push(action.payload)
      })
      .addCase(fetchData.rejected, (state: any, action: any) => {
        state.loading = false;
        state.error = action.error.message
      })
      //Read
      .addCase(readData.pending,(state:any)=>{
        state.loading = true;
      })
      .addCase(readData.fulfilled,(state:any , action:any)=>{
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(readData.rejected,(state:any , action:any)=>{
        state.loading = false;
        state.error = action.error.message;
      })
      //Delete
      .addCase(deleteData.pending, (state: any) => {
        state.loading = false
      })
      .addCase(deleteData.fulfilled, (state: any, action: any) => {
        state.loading = false;
        const userID = action.payload.id;
        if (userID) {
          state.users = state.users.filter((e: any) => e.id !== userID)
        }
      })
      .addCase(deleteData.rejected, (state: any, action: any) => {
        state.loading = false;
        state.error = action.error.message;
      })
  }
})

export default userSlice.reducer