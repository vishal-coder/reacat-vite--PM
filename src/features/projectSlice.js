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
      //   state.projectList.push({ ...action.payload });
      state.projectList = action.payload;
    },
    addNewproject: (state, action) => {
      state.projectList.push({ ...action.payload });
      //   state.projectList = action.payload;
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
} = projectSlice.actions;