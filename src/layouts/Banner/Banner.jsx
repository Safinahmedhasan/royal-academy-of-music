import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Banner.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import Container from "../../component/shared/Container/Container ";
const Banner = () => {
    return (
        <div>
            <Container>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide className="slide-1"><img className="opacity-50" src="https://i.ibb.co/2Snb3Rp/001-1417-5497m2600o.jpg" alt="" />
                        <div className="absolute">
                            <h2 className="md:text-5xl text-slate-200 font-bold">Welcome to Our Music School</h2>
                            <p className="text-slate-200 md:text-base text-sm w-96 mx-auto md:mt-5">At our music school, we offer comprehensive music education for students of all ages and skill levels.</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="slide-1"><img className="opacity-50" src="https://i.ibb.co/vLxKKWx/CS-CI-20190808-rehearsal14-18-DSC00197-HR-A-mod-2600x1000o-scaled.jpg" alt="" />
                        <div className="absolute">
                            <h2 className="md:text-5xl text-slate-200 font-bold">Welcome to Our Music School</h2>
                            <p className="text-slate-200 md:text-base text-sm w-96 mx-auto md:mt-5">At our music school, we offer comprehensive music education for students of all ages and skill levels.</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="slide-1"><img className="opacity-50" src="https://i.ibb.co/JCRhx69/p-Home-00512m-2600x1000-scaled.jpg" alt="" />
                        <div className="absolute">
                            <h2 className="md:text-5xl text-slate-200 font-bold">Welcome to Our Music School</h2>
                            <p className="text-slate-200 md:text-base text-sm w-96 mx-auto md:mt-5">At our music school, we offer comprehensive music education for students of all ages and skill levels.</p>
                        </div>
                    </SwiperSlide>
                    
                </Swiper>
            </Container>
        </div>
    );
};

export default Banner;