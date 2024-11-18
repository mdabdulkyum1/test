import Banner from "../../components/Banner/Banner"
import About from "../../components/shared/About/About"
import Faq from "../../components/shared/Faq/Faq"
import HowItWorks from "../../components/shared/HowItWorks/HowItWorks"
import HowYouCanHelp from "../../components/shared/HowYouCanHelp/HowYouCanHelp"

function Home() {
  return (
    <>
    <Banner></Banner>
    <About></About>
    <HowItWorks></HowItWorks>
    <HowYouCanHelp></HowYouCanHelp>
    <Faq></Faq>
    </>
  )
}

export default Home