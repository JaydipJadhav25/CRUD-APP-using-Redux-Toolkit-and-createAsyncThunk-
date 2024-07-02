import { createSlice  , createAsyncThunk, isRejectedWithValue} from "@reduxjs/toolkit";


//create action 
export const createUser = createAsyncThunk("createUser", async(data)=>{
    const respone = await fetch("https://668411d956e7503d1adf3a99.mockapi.io/api/v1/curd" , {
       method : "POST",
       headers :{
        "Content-Type" : "application/json"
       },
       body : JSON.stringify(data)
    });
    try {
        const result = await respone.json();
         return result;
    } catch (error) {
        console.log("error : " , error);

        return isRejectedWithValue(error);
        
    }
})

export const userDetail = createSlice({
    name : "userdetails",
    initialState :{
        users : [],
        loading : false,
        error : null,
    },
extraReducers : (builder) =>{
    builder.addCase(createUser.pending , (state , action) =>{
        state.loading = true;
    });
    builder.addCase(createUser.fulfilled , (state , action) =>{
        state.loading = false;
        state.users.push(action.payload);
    });
    builder.addCase(createUser.rejected , (state , action) =>{
        state.loading = false;
        state.error = action.payload;
    })

}
});

export default userDetail.reducer