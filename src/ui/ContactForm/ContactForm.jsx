import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ContactSection from "./ContactSection/ContactSection";
import FormSection from "./FormSection/FormSection";

const ContactForm = () => {
  return (
    <section className="bg-gray-900 py-8 ">
      <div className="max-w-7xl mx-auto p-8 rounded-lg shadow-lg bg-gray-800">
        <SectionTitle title={"Contact Me"} />
        <div className="flex flex-col lg:flex-row items-center gap-5 justify-center">
          <FormSection />
          <ContactSection />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
