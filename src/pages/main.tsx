import { buttonVariants, Button } from "@/components/ui/button";
import { useStore } from "@/store";
export function Main() {
  const bears = useStore((s) => s.bears);
  const increasePopulation = useStore((s) => s.increasePopulation);
  const removeAllBears = useStore((s) => s.removeAllBears);

  return (
    <>
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
