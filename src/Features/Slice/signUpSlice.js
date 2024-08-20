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
        const info={
            firstName:action.payload
        };
      state.info.firstName=info.firstName;
      console.log("from slice", info.firstName, action.payload  );
      localStorage.setItem("info", JSON.stringify(state.info)); // Save to localStorage
    },
    addLastName: (state, action) => {
        const info={
            lastName:action.payload
        };
        state.info.lastName=info.lastName;
      console.log("from slice", info.lastName, action.payload  );
      localStorage.setItem("info", JSON.stringify(state.info)); // Save to localStorage
    },
    addPhoneNumber: (state, action) => {
      const info={
          PhoneNum:action.payload
      };
      state.info.PhoneNum=info.PhoneNum;
    console.log("from slice", info.PhoneNum, action.payload  );
    localStorage.setItem("info", JSON.stringify(state.info)); // Save to localStorage
  },
  addEmail: (state, action) => {
    const info={
        Email:action.payload
    };
    state.info.Email=info.Email;
  console.log("from slice", info.Email, action.payload  );
  localStorage.setItem("info", JSON.stringify(state.info)); // Save to localStorage
},
  },
});

export const { addFirstName,addLastName,addEmail,addPhoneNumber } = signUpSlice.actions;
export default signUpSlice.reducer;
