// @ts-nocheck
/* eslint-disable */
"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import RankingList from "components/xiaomi/RankingList";
import ProductCard from "components/xiaomi/ProductCard";
import Footer from "components/xiaomi/Footer";
import Header from "components/xiaomi/Header";
import BannerImage from "statics/images/banner-icon.png";
import image1 from "statics/images/image.png";
import image2 from "statics/images/image2.png";
import image3 from "statics/images/image3.png";
import image4 from "statics/images/image4.png";
import image5 from "statics/images/image5.png";
import image6 from "statics/images/image6.png";
import NewProductBanner from "statics/images/image4.png";
import SalesBanner from "statics/images/image5.png";

export default function XiaomiPage() {
  const topProduct = [
    { image: image1, alt: "Product 1" },
    { image: image2, alt: "Product 2" },
    { image: image3, alt: "Product 3" },
    { image: image4, alt: "Product 4" },
    { image: image5, alt: "Product 5" },
    { image: image6, alt: "Product 6" },
    { image: image6, alt: "Product 7" },
    { image: image6, alt: "Product 8" },
    { image: image6, alt: "Product 9" },
    { image: image6, alt: "Product 10" },
    { image: image6, alt: "Product 11" },
  ];
  const bestSellingProducts = [
    { rank: 1, product: "XIAOMI MAX 24", quantity: "1,424,042", price: "$ 7,090,099" },
    { rank: 2, product: "XIAOMI MAX 24", quantity: "1,424,042", price: "$ 7,090,099" },
    { rank: 3, product: "XIAOMI MAX 24", quantity: "1,424,042", price: "$ 7,090,099" },
    { rank: 4, product: "XIAOMI MAX 24", quantity: "1,424,042", price: "$ 7,090,099" },
    { rank: 5, product: "XIAOMI MAX 24", quantity: "1,424,042", price: "$ 7,090,099" },
  ];

  const blackFridayBanners = [
    { image: image1, alt: "Black Friday Banner 1" },
    { image: image2, alt: "Black Friday Banner 2" },
    { image: image3, alt: "Black Friday Banner 3" },
  ];

  return (
    <div id="top" className="flex flex-col items-start w-full min-h-screen bg-black overflow-x-hidden">
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      {/* Header */}
      <div className="w-full flex flex-col items-start flex-shrink-0 self-stretch">
        <Header />
        {/* Banner Section */}
        <div className="relative w-full flex items-center justify-center overflow-hidden bg-black">
          <div className="relative w-full max-w-[1440px] aspect-[1440/642] h-auto min-h-[320px]">
            <Image
              src={BannerImage}
              alt="Xiaomi TV Banner"
              fill
              className="object-cover object-center w-full h-full select-none pointer-events-none"
              priority
              sizes="100vw"
              quality={90}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-start mt-[44px]">
              <h1
                className="text-center text-5xl md:text-6xl font-bold leading-normal capitalize"
                style={{
                  background: "linear-gradient(90deg, #FFFFFF 0%, #FFD3E3 45.19%, #FFEA9F 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                XIAOMI TV Max Series
              </h1>
              <p className="mt-4 text-white text-center text-2xl md:text-[32px] font-light leading-6">View to the max</p>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col items-start gap-20 flex-shrink-0 self-stretch px-4 md:px-12 lg:px-24 2xl:px-[236px] py-10 md:py-20">
        <div id="price" className="flex flex-col items-start gap-2 self-stretch">
          <div
            className="flex items-center justify-center gap-4 self-stretch py-2"
            style={{
              background: "linear-gradient(90deg, rgba(19, 20, 21, 0.00) 0%, rgba(255, 199, 0, 0.10) 51.05%, rgba(19, 20, 21, 0.00) 100%)",
            }}
          >
            <h2 className="text-xiaomi-text-primary text-2xl font-black italic uppercase leading-[48px]">TOP BEST-SELLING PRODUCTS</h2>
          </div>

          <div className="w-full overflow-x-auto">
            <div className="min-w-[500px]">
              <div className="flex items-center justify-between self-stretch px-6 py-2 rounded-lg ">
                <div className="w-10 text-xiaomi-text-invert-subdued text-center text-sm font-black italic capitalize leading-6">NO.</div>
                <div className="w-[170px] text-xiaomi-text-invert-subdued text-sm font-black italic capitalize leading-6">PRODUCTS</div>
                <div className="w-[170px] text-xiaomi-text-invert-subdued text-sm font-black italic capitalize leading-6">QUANTITY</div>
                <div className="w-[107px] text-xiaomi-text-invert-subdued text-right text-sm font-black italic capitalize leading-6">PRICE</div>
              </div>

              <div className="flex flex-col items-start gap-[14px] self-stretch">
                {bestSellingProducts.map((product) => (
                  <RankingList key={product.rank} {...product} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div id="products" className="flex flex-col items-start gap-2 w-full">
          <div className="flex items-center justify-between self-stretch">
            <h2 className="text-xiaomi-text-primary text-2xl font-black italic uppercase leading-[48px]">TOP PRODUCTS</h2>

            <div className="flex items-center gap-2">
              <button className="top-prev-btn flex items-center gap-2 p-2 rounded-xl bg-xiaomi-neutral-subdued hover:bg-xiaomi-neutral-subdued/80">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M8 12C8 11.8683 8.02522 11.7379 8.07499 11.616C8.12475 11.4942 8.19808 11.3834 8.29076 11.2899L14.2908 5.28994C14.4791 5.10164 14.7345 4.99585 15.0008 4.99585C15.2671 4.99585 15.5225 5.10164 15.7108 5.28994C15.8991 5.47825 16.0049 5.73364 16.0049 5.99994C16.0049 6.26624 15.8991 6.52164 15.7108 6.70994L10.4108 11.9999L15.7008 17.2899C15.8646 17.4812 15.9502 17.7273 15.9405 17.979C15.9307 18.2307 15.8264 18.4694 15.6483 18.6475C15.4702 18.8256 15.2315 18.9299 14.9798 18.9397C14.7281 18.9494 14.4821 18.8638 14.2908 18.6999L8.29076 12.6999C8.10601 12.5137 8.00186 12.2623 8.00076 11.9999Z"
                    fill="white"
                    fillOpacity="0.6"
                  />
                </svg>
              </button>

              <button className="top-next-btn flex items-center gap-2 p-2 rounded-xl bg-xiaomi-neutral-subdued hover:bg-xiaomi-neutral-subdued/80 rotate-180">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M8 12C8 11.8683 8.02522 11.7379 8.07499 11.616C8.12475 11.4942 8.19808 11.3834 8.29076 11.2899L14.2908 5.28994C14.4791 5.10164 14.7345 4.99585 15.0008 4.99585C15.2671 4.99585 15.5225 5.10164 15.7108 5.28994C15.8991 5.47825 16.0049 5.73364 16.0049 5.99994C16.0049 6.26624 15.8991 6.52164 15.7108 6.70994L10.4108 11.9999L15.7008 17.2899C15.8646 17.4812 15.9502 17.7273 15.9405 17.979C15.9307 18.2307 15.8264 18.4694 15.6483 18.6475C15.4702 18.8256 15.2315 18.9299 14.9798 18.9397C14.7281 18.9494 14.4821 18.8638 14.2908 18.6999L8.29076 12.6999C8.10601 12.5137 8.00186 12.2623 8.00076 11.9999Z"
                    fill="white"
                    fillOpacity="0.6"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="w-full">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation={{
                nextEl: ".top-next-btn",
                prevEl: ".top-prev-btn",
              }}
              pagination={{ clickable: true }}
              loop
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              slidesPerView={1.5}
              className="w-full"
              centeredSlides={false}
              spaceBetween={10}
              breakpoints={{
                320: {
                  slidesPerView: 2,
                  spaceBetween: 5,
                  centeredSlides: false,
                },
                480: {
                  slidesPerView: 2,
                  spaceBetween: 5,
                  centeredSlides: false,
                },
                640: {
                  slidesPerView: 3,
                  spaceBetween: 5,
                  centeredSlides: false,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                  centeredSlides: false,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                  centeredSlides: false,
                },
                1280: {
                  slidesPerView: 6,
                  spaceBetween: 20,
                  centeredSlides: false,
                },
              }}
            >
              {topProduct.map((item, index) => (
                <SwiperSlide key={`${item.alt}-${index}`} className="rounded-xl ">
                  <ProductCard image={item.image} alt={item.alt} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Section 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-4 items-start gap-6 self-stretch w-full">
          <div className="flex flex-col items-start gap-2 w-full lg:col-span-2">
            <div className="flex items-center justify-between self-stretch">
              <h2 className="text-xiaomi-text-primary text-2xl font-black italic uppercase leading-[48px]">Black Friday</h2>
              <div className="flex items-center gap-2">
                <button className="bf-prev-btn flex items-center gap-2 p-2 rounded-xl bg-xiaomi-neutral-subdued hover:bg-xiaomi-neutral-subdued/80">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M8 12C8 11.8683 8.02522 11.7379 8.07499 11.616C8.12475 11.4942 8.19808 11.3834 8.29076 11.2899L14.2908 5.28994C14.4791 5.10164 14.7345 4.99585 15.0008 4.99585C15.2671 4.99585 15.5225 5.10164 15.7108 5.28994C15.8991 5.47825 16.0049 5.73364 16.0049 5.99994C16.0049 6.26624 15.8991 6.52164 15.7108 6.70994L10.4108 11.9999L15.7008 17.2899C15.8646 17.4812 15.9502 17.7273 15.9405 17.979C15.9307 18.2307 15.8264 18.4694 15.6483 18.6475C15.4702 18.8256 15.2315 18.9299 14.9798 18.9397C14.7281 18.9494 14.4821 18.8638 14.2908 18.6999L8.29076 12.6999C8.10601 12.5137 8.00186 12.2623 8.00076 11.9999Z"
                      fill="white"
                      fillOpacity="0.6"
                    />
                  </svg>
                </button>
                <button className="bf-next-btn flex items-center gap-2 p-2 rounded-xl bg-xiaomi-neutral-subdued rotate-180 hover:bg-xiaomi-neutral-subdued/80">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M8 12C8 11.8683 8.02522 11.7379 8.07499 11.616C8.12475 11.4942 8.19808 11.3834 8.29076 11.2899L14.2908 5.28994C14.4791 5.10164 14.7345 4.99585 15.0008 4.99585C15.2671 4.99585 15.5225 5.10164 15.7108 5.28994C15.8991 5.47825 16.0049 5.73364 16.0049 5.99994C16.0049 6.26624 15.8991 6.52164 15.7108 6.70994L10.4108 11.9999L15.7008 17.2899C15.8646 17.4812 15.9502 17.7273 15.9405 17.979C15.9307 18.2307 15.8264 18.4694 15.6483 18.6475C15.4702 18.8256 15.2315 18.9299 14.9798 18.9397C14.7281 18.9494 14.4821 18.8638 14.2908 18.6999L8.29076 12.6999C8.10601 12.5137 8.00186 12.2623 8.00076 11.9999Z"
                      fill="white"
                      fillOpacity="0.6"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="h-60 self-stretch rounded-xl overflow-hidden">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation={{
                  nextEl: ".bf-next-btn",
                  prevEl: ".bf-prev-btn",
                }}
                pagination={{ clickable: true }}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                slidesPerView={1}
                loop
                className="w-full h-full"
              >
                {blackFridayBanners.map((banner) => (
                  <SwiperSlide key={banner.alt}>
                    <div className="relative w-full h-full">
                      <Image
                        src={banner.image}
                        alt={banner.alt}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          <div className="flex flex-col items-start gap-2 w-full lg:col-span-1">
            <div className="flex items-center justify-between self-stretch">
              <h2 className="flex-1 text-xiaomi-text-primary text-2xl font-black italic uppercase leading-[48px]">NEW PRODUCTS</h2>
            </div>
            <div className="relative w-full h-60 rounded-xl overflow-hidden">
              <Image src={NewProductBanner} alt="New Products" fill className="object-cover object-center" sizes="(max-width: 1024px) 100vw, 25vw" />
            </div>
          </div>

          <div className="flex flex-col items-start gap-2 w-full lg:col-span-1">
            <div className="flex items-center justify-between self-stretch">
              <h2 className="flex-1 text-xiaomi-text-primary text-2xl font-black italic uppercase leading-[48px]">Sales</h2>
            </div>
            <div className="relative w-full h-60 rounded-xl overflow-hidden">
              <Image src={SalesBanner} alt="Sales" fill className="object-cover object-center" sizes="(max-width: 1024px) 100vw, 25vw" />
            </div>
          </div>
        </div>
      </div>

      <div id="contact" className="w-full">
        <Footer />
      </div>
    </div>
  );
}
