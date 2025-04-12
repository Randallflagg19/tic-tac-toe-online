import { Label } from "@/shared/ui/label";
import { Input } from "@/shared/ui/input";
import React, { useId } from "react";

export function AuthFields() {
  const loginId = useId()
  const passwordId = useId()

  return (
    <>
      <div className="space-y-2">
        <Label htmlFor={loginId}>Email</Label>
        <Input
          id={loginId}
          type="text"
          name='login'
          autoComplete="username"
          placeholder="Enter your login"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor={passwordId}>Password</Label>
        <Input
          id={passwordId}
          type="password"
          name='password'
          autoComplete="current-password"
          required
        />
      </div>
    </>
  );
}