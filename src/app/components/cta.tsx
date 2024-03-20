import React from 'react'

function Cta(props: any) {
    const { Bool } = props;
    return (
        <div className="flex w-[434px] h-fit flex-col  items-start  ">
            <div className="flex flex-row items-center h-[32px]  font-galactus text-[#BEF56E] font-medium text-[15px] leading-[16px] ">
                {
                    Bool && (
                        <span className=" border-2 border-b-[#BEF56E] -mb-0 w-[40px] "></span>
                    )
                }
                <span className=" font-galactus p-[8px]">EXPLORE A NEW DIMENSION</span>
            </div>
            <div className="flex w-full text-wrap text-[40px] mt-[16px] font-Mont leading-[52px] font-normal uppercase  text-white ">Ready to unlock your potentials in a world of fun?</div>
            <div
                onClick={() => { }}
                className="
    hover:shadow-md hover:shadow-green-200 hover:-translate-x-2 hover:-translate-y-2 duration-150 ease-linear  hover:cursor-pointer
    flex flex-row  w-[220px] h-[50px] mt-[48px]  items-center justify-center text-center bg-[#BEF56E] rounded-tl-[10px] rounded-br-[10px] ">
                <span
                    className="font-right py-auto text-[16px] font-normal leading-[20px] w-full text-center uppercase text-[#141414] hover:cursor-pointer ">get started</span>
            </div>

        </div>
    )
}

export default Cta