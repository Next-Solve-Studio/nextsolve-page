import InitialContent from "./InitialContent";
import SolutionHome from "./SolutionHome";

export default function HomeMain() {
  return (
    <main className="w-full flex flex-col overflow-hidden">
      <InitialContent />
      <SolutionHome />
    </main>
  );
}
