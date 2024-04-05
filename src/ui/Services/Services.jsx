import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useUserData from "../../hook/useUserData";
import filterEnabled from "../../util/filterEnabled";
import ServiceCard from "./ServiceCard/ServiceCard";

const Services = () => {
  const { data: userData } = useUserData();

  const {
    user: { services },
  } = userData;

  const servicesData = filterEnabled(services);

  return (
    <section className="max-w-7xl mx-auto">
      <SectionTitle title={"My Services"} />
      <div className="grid grid-cols-1 md:grid-cols-2 w-full mx-auto gap-5">
        {servicesData.map((service) => (
          <ServiceCard
            key={service._id}
            service={service}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
