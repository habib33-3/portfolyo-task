import Loading from "./components/Loading/Loading";
import useUserData from "./hook/useUserData";
import About from "./ui/About/About";
import Hero from "./ui/Hero/Hero";
import Navbar from "./ui/Navbar/Navbar";
import Projects from "./ui/Projects/Projects";
import Skills from "./ui/Skills/Skills";
import Testimonials from "./ui/Testimonials/Testimonials";

const App = () => {
  const { isLoading } = useUserData();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
    </>
  );
};

export default App;
