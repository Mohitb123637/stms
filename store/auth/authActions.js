import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosConfig from '../../utils/axiosConfig';

export const registerUser = createAsyncThunk(
  'user/register',
  async (
    {
      firstName,
      lastName,
      dob,
      contact,
      email,
      password,
      className,
      role,
      stream,
    },
    { rejectWithValue }
  ) => {
    try {
      const response = await axiosConfig.post('/auth/register', {
        firstName,
        lastName,
        dob,
        contact,
        email,
        password,
        className,
        role,
        stream,
      });

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

export const loginUser = createAsyncThunk(
  'user/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axiosConfig.post('/auth/login', {
        email,
        password,
      });

      return await response.data;
    } catch (error) {
      return rejectWithValue({
        error: error.response.data
          ? error.response.data.message
          : error.message,
      });
    }
  }
);

export const verifyUserDetails = createAsyncThunk(
  'user/verifySession',
  async ({ rejectWithValue }) => {
    try {
      const response = await axiosConfig.post('/user/verifySession');
      return await response.data;
    } catch (error) {
      return rejectWithValue({
        error: error.response.data
          ? error.response.data.message
          : error.message,
      });
    }
  }
);

export const logoutUser = createAsyncThunk(
  'user/logout',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosConfig.post('/auth/logout');
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
