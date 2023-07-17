import {
  createAction,
  createReducer,
  createAsyncThunk,
  PayloadAction,
} from "@reduxjs/toolkit";
import { FormService } from "@/services/form.service";
import { Form } from "@/types/form.types";
import { RootState } from "../store";

const initialState: Form = {
  _id: "",
  user: "",
  date: "",
  hasDrank: false,
  hasPsychotropicDrugs: false,
  hasEmotionalProblems: false,
};

export const setForm = createAction<Form>("SET_FORM");

export const getTodayForm = createAsyncThunk(
  "FORM/GET_TODAY_FORM",
  async (_, thunkAPI) => {
    const { user } = thunkAPI.getState() as RootState;

    const { data: form } = await FormService.getTodayForm(user);

    return form;
  }
);

export const getOrCreateTodayForm = createAsyncThunk(
  "FORM/CREATE_TODAY_FORM",
  async (
    {
      hasDrank,
      hasPsychotropicDrugs,
      hasEmotionalProblems,
    }: {
      hasDrank: boolean;
      hasPsychotropicDrugs: boolean;
      hasEmotionalProblems: boolean;
    },
    thunkAPI
  ) => {
    const { user } = thunkAPI.getState() as RootState;

    const { data: form } = await FormService.getOrCreateTodayForm(
      user,
      hasDrank,
      hasPsychotropicDrugs,
      hasEmotionalProblems
    );

    return form;
  }
);

const formReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setForm, (state, action: PayloadAction<Form>) => {
      return {
        ...state,
        ...action.payload,
      };
    })
    .addCase(
      getOrCreateTodayForm.fulfilled,
      (_state, action: PayloadAction<Form>) => {
        return action.payload;
      }
    )
    .addCase(getTodayForm.fulfilled, (_state, action: PayloadAction<Form>) => {
      return action.payload;
    })
    .addCase(getTodayForm.rejected, (state, _action) => {
      return state;
    });
});

export default formReducer;
