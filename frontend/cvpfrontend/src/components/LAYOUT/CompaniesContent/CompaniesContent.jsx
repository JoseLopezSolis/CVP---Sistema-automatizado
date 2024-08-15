// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

const imageUrl = 'https://comunidadblogger.net/wp-content/uploads/2021/02/logo-ibm.jpg'; 
const imageUrl2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsYxhoVGQgaG9RT-aQk4SsPdG_TtKgmUsjYw&s'; 
const imageUrl3 = 'https://joselopezsolis.github.io/Images/Companies/FLEX.png'; 
const imageUrl4 = 'https://cdn.cookielaw.org/logos/b53abdb2-31cd-46f6-8017-f40e68b8194a/7c45c70a-b4e7-4479-8911-7159fff625a8/46fe07db-8c82-4ea0-9d90-4bf5fdb735ad/salesloft-logo-full-color-rgb.png'; 
const imageUrl5 = 'https://ceblog.s3.amazonaws.com/wp-content/uploads/2023/03/31002923/oracle-brand-logo-1-1.png'; 

//Importing component styles
import "./CompaniesContent.scss"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/a11y';

export default () => {
  return (
    <>
      <div className='container'>

        <h2 className='section-header-custom-style'>Empresas participantes</h2>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={100}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 1000,  // Cambia la velocidad del autoplay en milisegundos (3 segundos)
            disableOnInteraction: false, // Para que no se detenga cuando el usuario interactúe
          }}
          scrollbar={{ draggable: true }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <div className='image-container'>
            <SwiperSlide><img className='img-styles' src={imageUrl}/></SwiperSlide>
            <SwiperSlide><img className='img-styles' src={imageUrl2}/></SwiperSlide>
            <SwiperSlide><img className='img-styles' src={imageUrl3}/></SwiperSlide>
            <SwiperSlide><img className='img-styles' src={imageUrl4}/></SwiperSlide>
            <SwiperSlide><img className='img-styles' src={imageUrl5}/></SwiperSlide>
          </div>
        </Swiper>
      </div>
    </>
  );
};
