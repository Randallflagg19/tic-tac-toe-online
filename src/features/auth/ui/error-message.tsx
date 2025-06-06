import { Alert, AlertDescription } from "@/shared/ui/alert";
import type React from "react";
import { Either, matchEither } from "@/shared/lib/either";

export function ErrorMessage({error}: {error: Either<string, unknown>}) {
  return matchEither(error, {
    left: (error) => (
    <Alert variant="destructive">
      <AlertDescription>{error}</AlertDescription>
    </Alert>
  ),
    right: () => null,
  })
}