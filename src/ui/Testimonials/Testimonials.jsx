import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import useUserData from "../../hook/useUserData";
import TestimonialSlide from "./TestimonialSlide/TestimonialSlide";
import filterEnabled from "../../util/filterEnabled";

const Testimonials = () => {
  const { data: userData } = useUserData();

  const {
    user: { testimonials },
  } = userData;

  const testimonialData = filterEnabled(testimonials);

  return (
    <section className="w-full mt-10">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {testimonialData.map((testimonial) => (
          <SwiperSlide key={testimonial._id}>
            <TestimonialSlide testimonial={testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
