import { NextArrow, PrevArrow } from "./customArrows";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
    dots: false,
    // arrows:true,
    infinite: true,
    speed: 1500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
        // {
        //   breakpoint: 1024,
        //   settings: {
        //     slidesToShow: 2,
        //     slidesToScroll: 1,
        //   }
        // },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
    // lazyLoad:"",


}
export default function Carousel() {
    return (
        <Slider className="flex relative max-w-full max-h-full w-fit h-fit flex-row  gap-[32px]  object-contain object-center items-start justify-center "
            {...settings}
        >
            <div key={1} className="flex w-[500px] h-[388px] pr-[32px] bg-black  ">
                <div className="flex w-full h-full  bg-[url(/assets/item1.jpg)] rounded-md bg-cover bg-center bg-no-repeat " />
            </div>
            <div key={2} className="flex w-[500px] h-[388px] bg-black pr-[32px] ">
                <div className="flex w-full h-full  bg-[url(/assets/item2.jpg)] rounded-md bg-cover bg-center bg-no-repeat " />
            </div>
            <div key={3} className="flex w-[500px] h-[388px] pr-[32px]  bg-black">
                <div className="flex w-full h-full   bg-[url(/assets/item3.jpg)] rounded-md bg-cover bg-center bg-no-repeat " />
            </div>
        </Slider>

    )
}