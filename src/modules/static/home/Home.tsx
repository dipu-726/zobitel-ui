import Faq from "./components/faq"
import Features from "./components/features"
import Hero from "./components/hero"
import Integrations from "./components/integrations"
import LanguageSupport from "./components/languageSupport"
import UseCases from "./components/useCases"

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Integrations />
      <LanguageSupport />
      <UseCases />
      <Faq />
    </div>
  )
}

export default Home
