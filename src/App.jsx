import Loading from "./components/Loading/Loading";
import useUserData from "./hook/useUserData";
import Hero from "./ui/Hero/Hero";
import Navbar from "./ui/Navbar/Navbar";
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
      <Testimonials/>
    </>
  );
};

export default App;
