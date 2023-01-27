import { createSlice } from "@reduxjs/toolkit";

const initialState = { mailData: [], firstTime: true, unreadMessageCount: 0 };

const mailSlice = createSlice({
  name: "mail",
  initialState: initialState,
  reducers: {
    firstTime(state, action) {
      state.firstTime = action.payload;
    },
    replace(state, action) {
      state.mailData = action.payload.mailData;
      state.firstTime = false;
      state.unreadMessageCount = action.payload.unreadMessageCount;
      // console.log(state.mailData);
    },
    add(state, action) {
      state.mailData = [action.payload, ...state.mailData];
      // console.log(state.mails);
    },
    remove(state, action) {},
  },
});

export const mailActions = mailSlice.actions;
export default mailSlice.reducer;
