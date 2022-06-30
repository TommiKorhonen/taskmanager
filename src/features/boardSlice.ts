import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IBoard {
  id: string;
  name: string;
  columns: string[];
}

interface IBoards {
  value: IBoard[];
}
// interface AddFoodToCustomerPayload {
//   food: string;
//   id: string;
// }

const initialState: IBoards = {
  value: [],
};

export const boardSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {
    addBoard: (state, action: PayloadAction<IBoard>) => {
      state.value.push(action.payload);
    },
    // removeReservation: (state, action: PayloadAction<number>) => {
    //   state.value.splice(action.payload, 1);
    // },
  },
});

export const { addBoard } = boardSlice.actions;

export default boardSlice.reducer;
