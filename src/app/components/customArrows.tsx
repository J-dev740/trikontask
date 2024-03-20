import React from "react";
import { BsArrowRightSquare, BsArrowLeftSquare } from "react-icons/bs";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

const NextArrow = ({ onClick }: any) => (
    <div
        className="absolute top-[120%] md:left-20 left-[55%] z-10 -translate-y-1/2 transform cursor-pointer rounded-full bg-transparent p-2 text-white"
        onClick={onClick}
    >
        {/* <i className="fa fa-chevron-left"></i>
		 */}
        <div className=" h-auto w-auto -translate-y-0 translate-x-2 scale-150  transform  rounded-full  bg-stone-700 p-3  backdrop-blur-lg transition-all duration-150 hover:translate-x-0 hover:translate-y-0">
            <GrLinkNext className=""> </GrLinkNext>
        </div>
    </div>
);

const PrevArrow = ({ onClick }: any) => (

    <div
        onClick={onClick}
        className="absolute top-[120%] md:left-5 z-10 left-[35%] -translate-y-1/2 transform cursor-pointer rounded-full  bg-transparent p-2 text-white">
        <div className="w-auto h-auto -translate-y-0 -translate-x-2 hover:translate-y-0 hover:translate-x-0 scale-150 transform rounded-full transition-all duration-150 bg-stone-700 p-3 ">
            <GrLinkPrevious className="flex w-auto h-auto"> </GrLinkPrevious>

        </div>
    </div>
);

export { NextArrow, PrevArrow };