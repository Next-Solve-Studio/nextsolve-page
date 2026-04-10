import InitialInformation from "./InitialInformation";
import InitialContent from "./InitialContent";
import AboutHome from "./AboutHome";
import Service from "./ServiceHome";
import SolutionHome from "./SolutionHome";
/* import CommunityHome from "./CommunityHome"; */

export default function HomeMain() {
  return (
    <main className="w-full flex flex-col overflow-hidden">
      <InitialInformation />
      <InitialContent />
      <AboutHome />
      <Service />
      <SolutionHome />
{/*       <CommunityHome /> */}
    </main>
  );
}
