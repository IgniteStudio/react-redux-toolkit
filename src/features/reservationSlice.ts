import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ReservationState{
    value: string[]
}

const initialState: ReservationState = {
  value: [],
};

export const reservationSlice = createSlice({
  name: "reservations",
  initialState,
  reducers: {
      addReservation: (state, action: PayloadAction<string>) => {
          state.value.push(action.payload)
      },
      // Uses number type because we're looking up value by index
      removeReservation: (state, action: PayloadAction<number>) => { 
        state.value.splice(action.payload, 1);
      }
  },
});

export const { addReservation, removeReservation } = reservationSlice.actions;

export default reservationSlice.reducer;