import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    info: {
      firstName:"",
      lastName:"",
      PhoneNum:"",
      Email:""
    }
};

const signUpSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {
    addFirstName: (state, action) => {
        
      state.info.firstName=action.payload;
      // console.log("from slice", info.firstName, action.payload  );
      localStorage.setItem("info", JSON.stringify(state.info)); // Save to localStorage
    },
    addLastName: (state, action) => {
        // const info={
        //     lastName:
        // };
        state.info.lastName=action.payload;
      // console.log("from slice", info.lastName, action.payload  );
      localStorage.setItem("info", JSON.stringify(state.info)); // Save to localStorage
    },
    addPhoneNumber: (state, action) => {
      // const info={
      //     PhoneNum:action.payload
      // };
      state.info.PhoneNum=action.payload;
    // console.log("from slice", info.PhoneNum, action.payload  );
    localStorage.setItem("info", JSON.stringify(state.info)); // Save to localStorage
  },
  addEmail: (state, action) => {
    // const info={
    //     Email:action.payload
    // };
    state.info.Email=action.payload;
  // console.log("from slice", info.Email, action.payload  );
  localStorage.setItem("info", JSON.stringify(state.info)); // Save to localStorage
},
  },
});

export const { addFirstName,addLastName,addEmail,addPhoneNumber } = signUpSlice.actions;
export default signUpSlice.reducer;
