import { User } from "@/types/user.types";
import axios from "axios";

export class FormService {
  static apiUrl = process.env.NEXT_PUBLIC_API_URL;

  static async getOrCreateTodayForm(
    user: User,
    hasDrank: boolean,
    hasPsychotropicDrugs: boolean,
    hasEmotionalProblems: boolean
  ) {
    const { data } = await axios.post(
      `${this.apiUrl}/form/today-form`,
      {
        userId: user._id,
        hasDrank,
        hasPsychotropicDrugs,
        hasEmotionalProblems,
      },
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );

    return data;
  }
}
