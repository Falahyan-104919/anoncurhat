import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export default function CurhatanCardSekeleton() {
  const fakeCurhat = Array.from({ length: 9 }, (_, index) => index);
  return (
    <div className="flex flex-row flex-wrap flex-grow-0 p-8 gap-8 items-center justify-center bg-zinc-950">
      {fakeCurhat.map((item, index) => {
        return (
          <Card key={index}>
            <CardHeader>
              <CardTitle>
                <div className="flex items-center space-x-4">
                  <Skeleton className="h-12 w-12 rounded-md" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[250px]" />
            </CardContent>
            <CardFooter className="flex justify-between">
              <Skeleton className="h-4 w-[100px]" />
              <Skeleton className="h-4 w-[70px]" />
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
