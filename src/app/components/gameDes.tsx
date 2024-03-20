import React from 'react'

interface gamedes {
    des: string,
    chain: string,
    userslength: number,
    listedDate: string,
    gamecategory: string,
    gameimages: string[],
    name: string,
}

interface props {
    game: gamedes,
}

const GameDescription: React.FC<props> = (props) => {
    const { game } = props

    return (
        <div className="flex md:flex-row flex-col items-start justify-center  w-full h-fit pt-[121px] pb-[98px] gap-[56px] pl-[19px] pr-[28px] ">
            {/* img */}
            <div className="grid grid-cols-3 w-full md:w-[54%] h-fit flex-wrap grid-flow-row gap-x-[10px] gap-y-[12px]">
                <div
                    style={{ backgroundImage: `url(/assets/${game?.gameimages[0]})` }}
                    className="hover:shadow-md hover:shadow-green-200 hover:-translate-x-2 hover:-translate-y-2 duration-150 ease-linear flex w-full h-[335px] col-span-3 bg-center bg-cover bg-no-repeat rounded-[20px]"></div>
                <div
                    style={{ backgroundImage: `url(/assets/${game?.gameimages[1]})` }}
                    className="hover:shadow-md hover:shadow-green-200 hover:-translate-x-2 hover:-translate-y-2 duration-150 ease-linear flex w-full h-[204px] col-span-1 bg-center bg-cover bg-no-repeat rounded-[20px] "></div>
                <div
                    style={{ backgroundImage: `url(/assets/${game?.gameimages[2]})` }}
                    className="hover:shadow-md hover:shadow-green-200 hover:-translate-x-2 hover:-translate-y-2 duration-150 ease-linear flex w-full h-[204px] col-span-1 bg-center bg-cover bg-no-repeat rounded-[20px] "></div>
                <div
                    style={{ backgroundImage: `url(/assets/${game?.gameimages[3]})` }}
                    className="hover:shadow-md hover:shadow-green-200 hover:-translate-x-2 hover:-translate-y-2 duration-150 ease-linear flex w-full h-[204px] col-span-1 bg-center bg-cover bg-no-repeat rounded-[20px] "></div>



            </div>
            {/* des */}
            <div className="flex md:w-[46%]  w-full items-start justify-start flex-wrap h-fit font-Mont gap-[18px]">
                {/* title */}
                <div className="w-full text-start text-[#BEF56E]  font-semibold text-[28px] leading-[34px] ">{game?.name}</div>
                {/* details */}
                <div className="flex  w-full h-fit flex-wrap flex-col items-start gap-[18px]">

                    <div className="w-full  font-normal text-start text-[16px] leading-[24px] text-[#BDC1C6] ">{game?.des}</div>
                    <div className="w-full  font-normal text-start text-[16px] leading-[24px] text-[#BDC1C6] ">Category: {game?.gamecategory}</div>
                    <div className="w-full  font-normal text-start text-[16px] leading-[24px] text-[#BDC1C6] ">ListedDate: {game?.listedDate}</div>
                    <div className="w-full  font-normal text-start text-[16px] leading-[24px] text-[#BDC1C6] ">Chain: {game?.chain}</div>
                    <div className="w-full  font-normal text-start text-[16px] leading-[24px] text-[#BDC1C6] ">Number of Users: {game?.userslength}</div>
                </div>
                {/* play cta */}
                <div className="  
            hover:shadow-md hover:shadow-green-200 hover:-translate-x-2 hover:-translate-y-2 duration-150 ease-linear
             hover:cursor-pointer flex flex-row items-center justify-center w-[130px] h-[50px] bg-[#BEF56E] text-[#141414] font-right font-normal text-[16px]  leading-[19px] text-center rounded-tl-[10px] rounded-br-[10px] ">
                    <span className=" tracking-widest text-[16px]">play</span>
                </div>
            </div>

        </div>
    )
}

export default GameDescription