import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
  name: "project",
  initialState: {
    projectList: [],
  },
  reducers: {
    setprojectList: (state, action) => {
      state.projectList = action.payload;
    },
    addprojectToList: (state, action) => {    
      state.projectList = [...state.projectList, action.payload];
    },
    deleteProjectFromList: (state, action) => {
        console.log("action.payload in delete", action.payload)
        const editedList = state.projectList.filter(function (item) {
            return item.id != action.payload ? item : null ;
          });
          console.log("editedListin delete", editedList)
          state.projectList = [...editedList];
    },
    addEditedproject: (state, action) => {
      const editedList = state.projectList.map(function (item) {
        return item._id == action.payload._id ? action.payload : item;
      });
      state.projectList = editedList;
    },
  },
});

export default projectSlice.reducer;

export const {
  setprojectList,
  addprojectToList,
  addNewproject,
  addEditedproject,
  deleteProjectFromList
} = projectSlice.actions;