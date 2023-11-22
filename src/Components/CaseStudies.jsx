import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";
import CaseStudy from "./CaseStudy";
import { redirect } from "next/dist/server/api-utils";

const CaseStudies = () => {
  return (
    // <Carousel
    // loop={true}
    // slideSize={{ base: "90%", sm: "50%", md: "33.333333%" }}
    // slideGap="lg"
    // withControls={false}
    // withIndicators
    //   centerMode="false"
    //   useKeyboardArrows="true"
    //   preventMovementUntilSwipeScrollTolerance="true"
    //   infiniteLoop="true"
    //   showIndicators="false"
    //   // autoFocus="true"
    //   autoPlay="true"
    //   emulateTouch="true"
    //   className="section carousel-section"
    // >
    //   <CaseStudy />
    //   <CaseStudy />
    //   <CaseStudy />
    //   <CaseStudy />
    // </Carousel>
    <Swiper
      slidesPerView={2}
      spaceBetween={5}
      centeredSlides={true}
      loop={true}
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        800: {
          slidesPerView: 1,
        },
        1800: {
          slidesPerView: 2,
        },
        2700: {
          slidesPerView: 3,
        },
      }}
      pagination={{
        clickable: true,
      }}
      style={{ width: "100%", overflow: "hidden" }}
      modules={[Pagination]}
      className="mySwiper section carousel-section  "
    >
      <SwiperSlide
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CaseStudy />
      </SwiperSlide>
      <SwiperSlide
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CaseStudy />
      </SwiperSlide>
      <SwiperSlide
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CaseStudy />
      </SwiperSlide>{" "}
      <SwiperSlide
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CaseStudy />
      </SwiperSlide>{" "}
      <SwiperSlide
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CaseStudy />
      </SwiperSlide>
    </Swiper>
  );
};

export default CaseStudies;
