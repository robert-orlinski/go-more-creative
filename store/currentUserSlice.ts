import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Session } from 'next-auth';
import { getSession } from 'next-auth/client';

const initialState = '';

export const fetchCurrentUser = createAsyncThunk('entries/fetchCurrentUser', async () => {
  const session = (await getSession()) as Session;

  return session.user.id;
});

const slice = createSlice({
  name: 'entries',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(fetchCurrentUser.fulfilled, (state, { payload }) => payload),
});

export default slice.reducer;
