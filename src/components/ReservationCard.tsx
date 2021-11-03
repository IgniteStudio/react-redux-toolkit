import React from "react";
import { useDispatch } from "react-redux";
import '../App'
import { removeReservation } from "../features/reservationSlice";

interface ReservationCardTypes { 
    name: string,
    index: number,

}

export default function ReservationCard({name, index}: ReservationCardTypes) {
  
  const dispatch = useDispatch();

  
  return <div className="reservation-card-container" onClick={() => {
    dispatch(removeReservation(index));
  }}>{name}</div>;
}
