import React from 'react'
import { gamecard } from '../page';
interface props{
    index:number,
    gameset:(num:number)=>void,
    item:gamecard,
}

const GameCard:React.FC<props>=({index,gameset,item})=>{
  return (
    <div key={index} onClick={()=>gameset(item.gameid)} className=" flex rounded-tl-[4px] rounded-tr-[4px] flex-col items-center justify-center  h-[322px] w-[250px]  bg-[#181920] bg-opacity-[10%] backdrop-blur-lg">
    {/* img */}
    <div 
    style={{backgroundImage:`url(/assets/${item.img})`}}
    className={`flex  hover:cursor-pointer w-full h-[73%] ring-0 ring-white   bg-cover bg-top bg-no-repeat rounded-tl-[4px] rounded-tr-[4px]`}></div>
    {/* desc */}
    <div className="flex w-full h-[26%] ring-0 ring-white ">
      {/* text */}
      <div className=" flex flex-col px-[6%] py-[14%] gap-[6%] h-full w-full items-center justify-center   text-start text-white ring-0 ring-white">
        <span className="w-full text-start font-bold text-[14px]  leading-[19px]">{item.name}</span>
        <span className=" w-full text-start text-[12px] font-medium leading-[16px]">{item.pub}</span>
        <span className=" w-full text-start text-[12px] font-medium leading-[16px]">{item.categories}</span>

      </div>
    </div>
  </div>
  )
}

export default GameCard