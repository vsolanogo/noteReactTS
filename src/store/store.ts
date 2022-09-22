import {  AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import { NotesState } from "../redux/notes/notesReducer";
import { notesReducer } from "../redux/notes/notesReducer";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export type AppThunkAction<R = void> = ThunkAction<
  R,
  AppStore,
  undefined,
  AnyAction
>;

export interface AppStore {
  notes: NotesState;
}

export const store = configureStore({
  reducer: { notes: notesReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
