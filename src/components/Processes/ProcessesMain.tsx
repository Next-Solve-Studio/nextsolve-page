import InitialContent from "./Sections/InitialContent"
import ProcessesCards from "./Sections/ProcessesCards"
import CallCTA from "../home/CTAs/CallCTA"

export default function ProcessesMain() {
    return (
        <main className="">
            <InitialContent />
            <ProcessesCards />
            <CallCTA />
        </main>
    )
}