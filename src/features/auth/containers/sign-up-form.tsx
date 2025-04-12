"use client";

import React, { useActionState } from "react";
import { AuthFormLayout } from "@/features/auth/ui/auth-form-layout";
import { AuthFields } from "@/features/auth/ui/fields";
import { SubmitButton } from "@/features/auth/ui/submit-button";
import { BottomLink } from "@/features/auth/ui/bottom-link";
import { right } from "@/shared/lib/either";
import { ErrorMessage } from "@/features/auth/ui/error-message";
import { signUpAction } from "@/features/auth/actions/sign-up";

export function SignUpForm() {
  const [formState, action, isPending] = useActionState(
    signUpAction,
    right(undefined),
  );

  return (
    <AuthFormLayout
      title="Sign Up"
      description="Create your account to get started"
      action={action}
      fields={<AuthFields />}
      actions={<SubmitButton isPending={isPending}>Sign Up</SubmitButton>}
      error={<ErrorMessage error={formState} />}
      link={
        <BottomLink
          text={"Already have an account?"}
          linkText="Sign In"
          url="/sign-in"
        />
      }
    />
  );
}
