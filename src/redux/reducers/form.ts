import {
  createAction,
  createReducer,
  createAsyncThunk,
  PayloadAction,
} from "@reduxjs/toolkit";
import { User } from "@/types/user.types";
import { FormService } from "@/services/form.service";
import { Form } from "@/types/form.types";

const initialState: Form = {
  _id: "",
  user: "",
  date: "",
  hasDrank: false,
  hasPsychotropicDrugs: false,
  hasEmotionalProblems: false,
};

export const setForm = createAction<Form>("SET_FORM");

export const getOrCreateTodayForm = createAsyncThunk(
  "FORM/TODAY_FORM",
  async ({
    user,
    hasDrank,
    hasPsychotropicDrugs,
    hasEmotionalProblems,
  }: {
    user: User;
    hasDrank: boolean;
    hasPsychotropicDrugs: boolean;
    hasEmotionalProblems: boolean;
  }) => {
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
    );
});

export default formReducer;
