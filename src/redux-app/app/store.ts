/* -- BYIMAAN -> THE FUTURE -- */

import { configureStore, Action, ThunkAction } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { useDispatch } from "react-redux";

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>()

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>