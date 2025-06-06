"use server";

import { left, mapLeft } from "@/shared/lib/either";
import { z } from "zod";
import { sessionService, verifyUserPassword } from "@/entities/user/server";
import { redirect } from "next/navigation";


type SignInFormState = {
  formData?: FormData,
  errors?: {
    login?:string,
    password?:string,
    _errors?:string,
  }
}

const formDataSchema = z.object({
  login: z.string().min(3),
  password: z.string().min(3),
});

export const signInAction = async (
  previousState: unknown,
  formData: FormData,
) => {
  const data = Object.fromEntries(formData.entries());

  const result = formDataSchema.safeParse(data);

  if (!result.success) {
    return left(`Ошибка валидации: ${result.error.message}`);
  }

  const verifyUserResult = await verifyUserPassword(result.data);

  if (verifyUserResult.type === "right") {
    await sessionService.addSession(verifyUserResult.value);

    redirect("/");
  }

  return mapLeft(verifyUserResult, (error) => {
    return {
      "wrong login or password": "Неверный логин или пароль",
    }[error];
  });
};
