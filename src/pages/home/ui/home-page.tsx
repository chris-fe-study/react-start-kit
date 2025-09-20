import { buttonVariants, Button } from "@/components/ui/button";
import { useBearStore } from "@/store";
import { HomeUser } from "./home-user";

export function HomePage() {
  const bears = useBearStore((s) => s.bears);
  const increasePopulation = useBearStore((s) => s.increasePopulation);
  const removeAllBears = useBearStore((s) => s.removeAllBears);

  return (
    <>
      <HomeUser />
      test
      <p>{bears}</p>
      <Button
        onClick={increasePopulation}
        className={buttonVariants({ variant: "default" })}
      >
        increase
      </Button>
      <Button
        onClick={removeAllBears}
        className={buttonVariants({ variant: "destructive" })}
      >
        removeAllBears
      </Button>
    </>
  );
}
