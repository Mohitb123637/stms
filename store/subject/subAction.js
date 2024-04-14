// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axiosConfig from '../../utils/axiosConfig';

// export const fetchSubjects = createAsyncThunk(
//   'user/subject',
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axiosConfig.post('/user/subject');
//       return response.data;
//     } catch (error) {
//       return rejectWithValue({
//         error: error.response.data
//           ? error.response.data.message
//           : error.message,
//       });
//     }
//   }
// );

// export const setSelectedSubject = createAsyncThunk(
//   'user/subject',
//   async (subject, { rejectWithValue }) => {
//     try {
//       return subject;
//     } catch (error) {
//       return rejectWithValue({
//         error: error.response.data
//           ? error.response.data.message
//           : error.message,
//       });
//     }
//   }
// );

import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosConfig from '../../utils/axiosConfig';

export const fetchSubjects = createAsyncThunk(
  'user/fetchSubjects',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosConfig.post('/user/subject');
      return response.data;
    } catch (error) {
      return rejectWithValue({
        error: error.response.data
          ? error.response.data.message
          : error.message,
      });
    }
  }
);

export const setSelectedSubject = createAsyncThunk(
  'user/setSelectedSubject',
  async (subject, { rejectWithValue }) => {
    try {
      return subject;
    } catch (error) {
      return rejectWithValue({
        error: error.response.data
          ? error.response.data.message
          : error.message,
      });
    }
  }
);
