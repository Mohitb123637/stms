// import { createSlice } from '@reduxjs/toolkit';
// import { fetchSubjects } from './subAction.js';

// const initialState = {
//   subjects: [],
//   selectedSubject: {},
//   selectedChapter: {},
//   loading: false,
//   error: null,
//   success: false,
// };

// const subSlice = createSlice({
//   name: 'subjects',
//   initialState,
//   reducers: {
//     setSelectedSubject: (state, action) => {
//       state.selectedSubject = action.payload;
//     },
//     setSelectChapter: (state, action) => {
//       state.selectedChapter = action.payload;
//     },
//   },
//   extraReducers(builder) {
//     builder
//       .addCase(fetchSubjects.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchSubjects.fulfilled, (state, action) => {
//         state.loading = false;
//         state.subjects = action.payload.data;
//         state.error = null;
//         state.success = true;
//       })
//       .addCase(fetchSubjects.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload.error;
//       });
//   },
// });

// export const { setSelectedSubject, setSelectChapter } = subSlice.actions;
// export default subSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { fetchSubjects } from './subAction.js';

const initialState = {
  subjects: [],
  selectedSubject: {},
  selectedChapter: {},
  loading: false,
  error: null,
  success: false,
};

const subSlice = createSlice({
  name: 'subjects',
  initialState,
  reducers: {
    setSelectedSubject: (state, action) => {
      state.selectedSubject = action.payload;
      console.log('Selected Subject', action.payload);
    },
    setSelectChapter: (state, action) => {
      state.selectedChapter = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchSubjects.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSubjects.fulfilled, (state, action) => {
        state.loading = false;
        state.subjects = action.payload.data;
        state.error = null;
        state.success = true;
      })
      .addCase(fetchSubjects.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      });
  },
});

export const { setSelectedSubject, setSelectChapter } = subSlice.actions;
export default subSlice.reducer;
