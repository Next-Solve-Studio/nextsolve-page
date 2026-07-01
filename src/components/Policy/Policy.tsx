import ContentInitial from "./Sections/ContentInitial"
import ContentPolicy from "./Sections/ContentPolicy"
import FAQSession from "../FAQ/FAQ"

export default function Policy() {
    return (
        <main className="">
            <ContentInitial />
            <ContentPolicy />
            <FAQSession />
        </main>
    )
}