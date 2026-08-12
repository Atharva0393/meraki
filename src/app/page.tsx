import { Hero } from "@/components/hero";
import { SelectedProjects } from "@/components/selected-projects";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <SelectedProjects />
    </main>
  );
}
