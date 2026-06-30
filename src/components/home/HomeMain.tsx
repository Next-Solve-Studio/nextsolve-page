"use client";
import InitialInformation from "./sections/InitialInformation";
import InitialContent from "./sections/InitialContent";
import AboutHome from "./sections/AboutHome";
import Service from "./sections/ServiceHome";
import SolutionHome from "./sections/SolutionHome";
import Loading from "@/layout/Loanding/Loanding";

import ContactCTA from "./CTAs/ContactCTA";

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
        <ContactCTA />
      </main>
    </>
  );
}