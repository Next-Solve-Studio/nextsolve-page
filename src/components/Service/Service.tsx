import ContentServiceInitial from "./sections/ContentServiceInitial"
import CardsService from "./sections/CardsService"
import FAQSession from "../FAQ/FAQ"

import ContactCTA from "../home/CTAs/ContactCTA"

export default function Service() {
    return (
        <main className='w-full h-auto bg-black'>
            <ContentServiceInitial />
            <CardsService />
            <FAQSession />
            <ContactCTA />
        </main>
    )
}
