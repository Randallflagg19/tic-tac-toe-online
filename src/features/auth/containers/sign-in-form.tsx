"use client";

import React, { useActionState } from "react";
import { AuthFormLayout } from "@/features/auth/ui/auth-form-layout";
import { AuthFields } from "@/features/auth/ui/fields";
import { SubmitButton } from "@/features/auth/ui/submit-button";
import { BottomLink } from "@/features/auth/ui/bottom-link";
import { right } from "@/shared/lib/either";
import { ErrorMessage } from "@/features/auth/ui/error-message";
import { signInAction } from "@/features/auth/actions/sign-in";

export function SignInForm() {
  const [formState, action, isPending] = useActionState(
    signInAction,
    right(undefined),
  );

  return (
    <AuthFormLayout
      title="Sign in"
      description="Welcome back! Please sign in to your account"
      action={action}
      fields={<AuthFields />}
      actions={<SubmitButton isPending={isPending}>Sign In</SubmitButton>}
      error={<ErrorMessage error={formState} />}
      link={
        <BottomLink
          text={"Don't have an account?"}
          linkText="Sign Up"
          url="/sign-up"
        />
      }
    />
  );
}
