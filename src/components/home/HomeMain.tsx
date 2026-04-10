"use client";
import InitialInformation from "./InitialInformation";
import InitialContent from "./InitialContent";
import AboutHome from "./AboutHome";
import Service from "./ServiceHome";
import SolutionHome from "./SolutionHome";
import Loading from "@/utils/Loanding/Loanding";
import Messenger from "@/utils/Loanding/Messeger";

export default function HomeMain() {
  return (
    <>
      <Loading />
      <main className="w-full flex flex-col overflow-hidden bg-black">
        <InitialInformation />
        <InitialContent />
        <AboutHome />
        <Service />
        <SolutionHome />
        {/* <CommunityHome /> */}
        <Messenger />
      </main>
    </>
  );
}