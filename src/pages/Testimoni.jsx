import { Swiper, SwiperSlide } from "swiper/react"
import Heading from "../components/Heading"
import testimoni from "../data/testimoni"
import SwiperItem from "../components/SwiperItem"

import "swiper/css"
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

import { Autoplay, Pagination } from "swiper"

const Testimoni = () => {
    return (
        <div className="container pt-20" id="Testimoni">
            <Heading>Testimoni</Heading>
            <Swiper
                modules={[Pagination, Autoplay]}
                slidesPerView={1}
                pagination={{ clickable: true, dynamicBullets: true }}
                autoplay={{
                    delay: 3500,
                }}
                loop={true}
                className="mt-4 mb-10 pb-10"
            >
                {testimoni.map((test, _i) => (
                    <SwiperSlide key={_i}>
                        <SwiperItem nama={test.nama} pesan={test.pesan} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Testimoni
