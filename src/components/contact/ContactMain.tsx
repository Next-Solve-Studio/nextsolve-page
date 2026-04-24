import InitialContact from "./sections/InitialContact"
import FormContact from "./sections/FormContact"
import FAQSession from "../FAQ/FAQ"

export default function ContactMain() {
  return (
    <section className="w-full min-h-screen bg-[#050505] flex flex-col items-center justify-center">
      <InitialContact />
      <FormContact />
      <FAQSession />
    </section>
  )
}
