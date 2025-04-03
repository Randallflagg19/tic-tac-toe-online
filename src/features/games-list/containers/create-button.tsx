"use client";

import { Button } from "@/shared/ui/button";
import { createGameAction } from "@/features/games-list/actions/create-game";
import { useActionState } from "@/shared/lib/react";
import { matchEither, right } from "@/shared/lib/either";

export function CreateButton() {
  const [data, dispatch, isPending] =
    useActionState(createGameAction, right(undefined))

  return <div className='flex flex-col gap-1'>
          <Button disabled={isPending} onClick={dispatch}>Создать игру</Button>
          {matchEither(data,{
            right: () => null,
            left: (error) =>
              ({
                ['can-create-only-one-game']: 'Вы можете создать только одну игру',
                ['user not found']: 'Пользователя нет'
              })[error]
          })}
         </div>
}