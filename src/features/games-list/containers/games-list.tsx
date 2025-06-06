import { Layout } from "./../ui/layout";
import { getIdleGames } from "@/entities/game/server";
import { GameCard } from "@/features/games-list/ui/game-card";
import { CreateButton } from "@/features/games-list/containers/create-button";

export async function GamesList() {
  const games = await getIdleGames();
  console.log(games);
  return (
    <Layout actions={<CreateButton/>}>
      {games.map((game) => (
        <GameCard
          key={game.id}
          login={game.creator.login}
          rating={game.creator.rating}
        />
      ))}
    </Layout>
  );
}