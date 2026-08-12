import { Hero } from "@/components/hero";
import { StudioIntro } from "@/components/studio-intro";
import { SelectedProjects } from "@/components/selected-projects";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <StudioIntro />
      <SelectedProjects />
    </main>
  );
}
