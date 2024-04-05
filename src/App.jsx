import ErrorPage from "./components/ErrorPage/ErrorPage";
import Loading from "./components/Loading/Loading";
import useUserData from "./hook/useUserData";
import About from "./ui/About/About";
import ContactForm from "./ui/ContactForm/ContactForm";
import Hero from "./ui/Hero/Hero";
import Navbar from "./ui/Navbar/Navbar";
import Projects from "./ui/Projects/Projects";
import Services from "./ui/Services/Services";
import Skills from "./ui/Skills/Skills";
import Testimonials from "./ui/Testimonials/Testimonials";
import Timeline from "./ui/Timeline/Timeline";

const App = () => {
  const { isLoading, isError, error } = useUserData();

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <ErrorPage error={error} />;
  }

  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <About />
      <Services />
      <Timeline />
      <Skills />
      <Projects />
      <Testimonials />
      <ContactForm />
    </>
  );
};

export default App;
