import Faq from "./components/faq";
import Features from "./components/features";
import Hero from "./components/hero";
import Integrations from "./components/integrations";
import LanguageSupport from "./components/languageSupport";
import Nav from "./components/nav";
import Testimonials from "./components/testimonials";
import UseCases from "./components/useCases";

const Home = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <UseCases />
      <Features />
      <Integrations />
      <LanguageSupport />
      <Testimonials />
      <Faq />
    </div>
  );
};

export default Home;
