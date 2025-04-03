import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";

export function GameCard({login, rating}: {login: string, rating: number}) {
  return (
    <div className='grid grid-cols-2 gap-4'>
      <Card>
        <CardHeader>
          <CardTitle> Организатор: {login}</CardTitle>
        </CardHeader>
        <CardContent>Рейтинг: {rating}</CardContent>
      </Card>
    </div>)
}