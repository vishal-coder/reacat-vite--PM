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
        const editedList = state.projectList.filter(function (item) {
            return item.id != action.payload ? item : null ;
          });
         
          state.projectList = [...editedList];
    },
    updateProjectStatus: (state, action) => {
        const newlist = state.projectList.map((item) => {
            if (item.id == action.payload) {
              return {...item, is_completed: true};
            }
            return item;
          });        
          state.projectList = [...newlist];
    },
  },
});

export default projectSlice.reducer;

export const {
  setprojectList,
  addprojectToList,
  addNewproject,
  addEditedproject,
  deleteProjectFromList,
  updateProjectStatus
} = projectSlice.actions;