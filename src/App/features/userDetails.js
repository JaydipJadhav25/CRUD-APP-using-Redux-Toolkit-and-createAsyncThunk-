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

//read action

export const showUser = createAsyncThunk("showUser" ,async ()=>{
    const respone = await fetch("https://668411d956e7503d1adf3a99.mockapi.io/api/v1/curd"); //bydefult get req
    try {
        
        const result = respone.json();

        return result;

    } catch (error) {

        return isRejectedWithValue(error)
        
    }
})   


//Delete action

export const deleteUser = createAsyncThunk("deleteUser" ,async (id)=>{
    const respone = await fetch(`https://668411d956e7503d1adf3a99.mockapi.io/api/v1/curd/${id}`,{
        method : "DELETE"
    }); //bydefult get req
    try {
        
        const result = respone.json();
        return result;

    } catch (error) {

        return isRejectedWithValue(error)
        
    }
}) 


//Update action

export const updateUser = createAsyncThunk("updateUser" ,async (data)=>{
    console.log("updated data : " , data);

    const respone = await fetch(`https://668411d956e7503d1adf3a99.mockapi.io/api/v1/curd/${data.id}`, {
        method : "PUT",
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

///////
export const userDetail = createSlice({
    name : "userdetails",
    initialState :{
        users : [],
        loading : false,
        error : null,
        searchData :[],
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
    });

    //for show action

    builder.addCase(showUser.pending , (state , action) =>{
        state.loading = true;
    })
    builder.addCase(showUser.fulfilled , (state , action) =>{
        state.loading = false;
        //data direct user pass not push
        state.users = (action.payload);
    });
    builder.addCase(showUser.rejected , (state , action) =>{
        state.loading = true;
        state.error = action.payload;
    });

    //fro delete action

       
    builder.addCase(deleteUser.pending , (state , action) =>{
        state.loading = true;
    })
    builder.addCase(deleteUser.fulfilled , (state , action) =>{
        state.loading = false;
        //data direct user pass not push
        console.log("action payload: " , action.payload);
        // state.users = (action.payload);
        //server vrun data remove zala but store mdhil objet arr madhil pn remov krava lage

        const {id} = action.payload;
         //basically checking
        if(id){
                state.users.filter((user) => user.id !== id);
        }

    });
    builder.addCase(deleteUser.rejected , (state , action) =>{
        state.loading = true;
        state.error = action.payload;
    });

    // fro update user
    
    builder.addCase(updateUser.pending , (state , action) =>{
        state.loading = true;
    });
    builder.addCase(updateUser.fulfilled , (state , action) =>{
        state.loading = false;
        // state.users.push(action.payload);
        console.log(" payload : " , action.payload);

        // state.users.push(action.payload); wrong data push in arr

        //find first and change this
        state.users = state.users.map((ele) =>
            ele.id === action.payload.id ? action.payload : ele
        );

        
    });
    builder.addCase(updateUser.rejected , (state , action) =>{
        state.loading = false;
        state.error = action.payload;
    });



},
reducers :{
    searchUser : (state , action) =>{
        console.log("serach user : " , action.payload)
             state.searchData = action.payload
        //  state.searchData.push(state.users.filter((ele) => ele.name === action.payload.name));
         console.log("search data : " , state.searchData)
    }
}

});

export const { searchUser } = userDetail.actions;

export default userDetail.reducer