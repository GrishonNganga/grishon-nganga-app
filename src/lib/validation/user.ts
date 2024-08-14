import { SignInData } from "../types";
import Joi from "joi";

export const validateSignIn = async (data?: SignInData) => {
  const schema = Joi.object({
    username: Joi.string().min(3).required(),
    password: Joi.string().min(3).required(),
  });
  try {
    await schema.validateAsync(data);
    return { status: true };
  } catch (err: any) {
    return { status: false, message: err.details[0].message };
  }
};
