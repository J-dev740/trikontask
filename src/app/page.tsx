'use client';
import Image from "next/image";
import { useEffect, useState } from "react";
import { format } from 'date-fns';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Carousel from "./components/carousel";
import Cta from "./components/cta";
import GameDescription from "./components/gameDes";
import GameCard from "./components/gamecard";
export interface gamecard {
  img: string,
  name: string,
  pub: string,
  categories: string,
  gameid: number,
  desc: string,
  chain: string,
  userslength: number,
  listedDate: Date,
  gamecategory: string,
  gameimages: string[],

}
interface gamedes {
  des: string,
  chain: string,
  userslength: number,
  listedDate: string,
  gamecategory: string,
  gameimages: string[],
  name: string,
}
enum categories {
  ALL = "ALL",
  PS5 = "PS5",
  PS4 = "PS4",
  XBOX = "X-Box"
}
function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className}+absolute left-[50%]`}
      // className="absolute "
      style={{ ...style, display: "flex", background: "green" }}
      onClick={onClick}
    />
  );
}
export default function Home() {

  const [category, setCategory] = useState<categories>(categories.ALL)
  const [game, setGame] = useState<gamedes>()
  const [games, setGames] = useState<gamecard[]>([
    {
      // img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgDoAoC251PN1hcwlZ-G8degSgFhO3HDEm3i0O54N2EHBms-eNb7trT-1XBnmNgBfiihA&usqp=CAU",
      img: 'game1.jpg',
      name: "Call of Duty:VanGuard",
      pub: "Activision",
      categories: "PS5,PS4,X-Box",
      gameid: 1,
      desc: "For single-player, the game features the return of the plot-driven Story Mode and the traditional form of Towers mode from the previous games, while introducing the addition of the seasonal Invasion mode, an online mode combining fighting mechanics with board game and role-playing game elements.",
      gamecategory: "Fighting Action-adventure",
      listedDate: new Date('2023-09-19'),
      userslength: 4321,
      chain: "ethereum",
      gameimages: ["g1.jpg", "g2.jpg", "g3.jpg", "g4.jpg"]


    },
    {
      // img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgDoAoC251PN1hcwlZ-G8degSgFhO3HDEm3i0O54N2EHBms-eNb7trT-1XBnmNgBfiihA&usqp=CAU",
      img: 'game2.jpg',
      name: "Fifa22",
      pub: "Activision",
      categories: "X-Box",
      gameid: 2,
      desc: "For single-player, the game features the return of the plot-driven Story Mode and the traditional form of Towers mode from the previous games, while introducing the addition of the seasonal Invasion mode, an online mode combining fighting mechanics with board game and role-playing game elements.",
      gamecategory: "Fighting Action-adventure",
      listedDate: new Date('2023-09-19'),
      userslength: 4321,
      chain: "ethereum",
      gameimages: ["f1.jpg", "f2.jpg", "f3.jpg", "f4.jpg"]

    },
    {
      // img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgDoAoC251PN1hcwlZ-G8degSgFhO3HDEm3i0O54N2EHBms-eNb7trT-1XBnmNgBfiihA&usqp=CAU",
      img: 'game3.jpg',
      name: "SaintsRow",
      pub: "Activision",
      categories: "PS5,X-Box",
      gameid: 3,
      desc: "For single-player, the game features the return of the plot-driven Story Mode and the traditional form of Towers mode from the previous games, while introducing the addition of the seasonal Invasion mode, an online mode combining fighting mechanics with board game and role-playing game elements.",
      gamecategory: "Fighting Action-adventure",
      listedDate: new Date('2023-09-19'),
      userslength: 4321,
      chain: "ethereum",
      gameimages: ["g1.jpg", "g2.jpg", "g3.jpg", "g4.jpg"]

    },
    {
      // img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgDoAoC251PN1hcwlZ-G8degSgFhO3HDEm3i0O54N2EHBms-eNb7trT-1XBnmNgBfiihA&usqp=CAU",
      img: 'game4.jpg',
      name: "Guardians of Galaxy",
      pub: "Activision",
      categories: "PS4,X-Box",
      gameid: 4,
      desc: "For single-player, the game features the return of the plot-driven Story Mode and the traditional form of Towers mode from the previous games, while introducing the addition of the seasonal Invasion mode, an online mode combining fighting mechanics with board game and role-playing game elements.",
      gamecategory: "Fighting Action-adventure",
      listedDate: new Date('2023-09-19'),
      userslength: 4321,
      chain: "ethereum",
      gameimages: ["h1.jpg", "h2.jpg", "h3.jpg", "h4.jpg"]

    },
    {
      // img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgDoAoC251PN1hcwlZ-G8degSgFhO3HDEm3i0O54N2EHBms-eNb7trT-1XBnmNgBfiihA&usqp=CAU",
      img: 'game5.jpg',

      name: "Prince of Persia",
      pub: "Activision",
      categories: "PS5,PS4",
      gameid: 5,
      desc: "For single-player, the game features the return of the plot-driven Story Mode and the traditional form of Towers mode from the previous games, while introducing the addition of the seasonal Invasion mode, an online mode combining fighting mechanics with board game and role-playing game elements.",
      gamecategory: "Fighting Action-adventure",
      listedDate: new Date('2023-09-19'),
      userslength: 4321,
      chain: "ethereum",
      gameimages: ["f1.jpg", "f2.jpg", "f3.jpg", "f4.jpg"]
    },
    {
      // img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgDoAoC251PN1hcwlZ-G8degSgFhO3HDEm3i0O54N2EHBms-eNb7trT-1XBnmNgBfiihA&usqp=CAU",
      img: 'game5.jpg',

      name: "Call of Duty:VanGuard",
      pub: "Activision",
      categories: "PS5,PS4",
      gameid: 5,
      desc: "For single-player, the game features the return of the plot-driven Story Mode and the traditional form of Towers mode from the previous games, while introducing the addition of the seasonal Invasion mode, an online mode combining fighting mechanics with board game and role-playing game elements.",
      gamecategory: "Fighting Action-adventure",
      listedDate: new Date('2023-09-19'),
      userslength: 4321,
      chain: "ethereum",
      gameimages: []
    },
  ]);
  const map: Map<Number, gamedes> = new Map()
  if (games.length > 0) {
    games.forEach((game) => {
      if (!map.has(game.gameid)) map.set(game.gameid, {
        des: game.desc,
        chain: game.chain,
        userslength: game.userslength,
        listedDate: format(game.listedDate, "MMMM d,yyyy"),
        gamecategory: game.gamecategory,
        gameimages: game.gameimages,
        name: game.name,

      });
    })
    useEffect(() => {
      setGame(map.get(games[0].gameid))
    }, [])
    // set it to initial game
  }
  // setGame(map.get(games[0].gameid));
  return (
    <main className="flex min-h-screen   container w-full max-w-[1440px] h-[1080px] ring-0 flex-col items-center justify-between  bg-black">
      <div className="w-full h-fit flex flex-col items-center ring-0">
        {/* carousel part */}
        <div className="flex w-full flex-col mb-8 md:mb-0 md:flex-row h-fit items-start justify-center">
          <div className=" w-full md:w-[40%] h-fit flex  items-center justify-center pt-[78px] pb-[102px] pr-[65px] pl-[79px]">
            <Cta Bool={false} />

          </div>
          {/* slider */}
          <div className="flex w-full md:w-[60%] h-[388px] slider-container">

            <Carousel />

          </div>

        </div>
        {/* games filter */}
        <div className="flex  bg-[url(/assets/bgimg.jpg)] bg-no-repeat bg-cover w-full h-fit   ">
          <div className="flex bg-black bg-opacity-20 w-full h-fit ">
            <div className="flex flex-col items-center w-full h-fit gap-[47px]   bg-opacity-100 bg-gradient-to-b from-black to-transparent pt-[78px] pb-[147px] ">
              {/* header */}
              <div className="flex flex-col items-center  gap-[16px] w-[356px] h-fit ">
                {/* heading */}
                <div className="flex flex-row items-center font-Mont font-medium leading-[48px] text-[30px] text-center
             text-white">
                  Newly Released Games
                </div>
                {/* filter */}
                <div className="flex flex-row w-[90%] h-fit justify-center items-center gap-[40px] text-white font-Mont font-medium text-[14px] leading-[17px] ">
                  {
                    Object.values(categories).map((val, index) => {
                      return (
                        <div key={index} className={`font-Mont
    hover:shadow-md hover:shadow-black hover:-translate-x-1 hover:-translate-y-1 duration-150 ease-linear

                     w-fit text-center mx-auto font-bold text-[16px] hover:cursor-pointer ${category == val ? 'bg-[#F68E5F] rounded-[48px] px-[16px] py-[6px]' : 'bg-transparent'}`} onClick={() => setCategory(val)}>{val}</div>
                      )
                    })
                  }

                </div>
              </div>
              {/* games */}
              <div className="  flex flex-row flex-wrap items-start justify-center w-full  no-scrollbar px-[40px]  gap-x-[24px] gap-y-[70px] ">
                {/* card */}
                {
                  games.filter((item) => {
                    if (categories.ALL !== category) {
                      if (item.categories.includes(category)) return item;
                    } else return item;
                  }).map((item, index) => {
                    return (
                      <GameCard item={item} index={index} gameset={(num: number) => setGame(map.get(num))} />
                    )
                  })
                }
              </div>

            </div>

          </div>

        </div>
        {/* selected game details */}
        {game && (
          <GameDescription game={game} />
        )}

        {/* cta */}
        <div className="flex w-full flex-col md:flex-row h-fit items-start justify-center">
          {/* cta */}
          <div className="md:w-[40%] w-full h-fit flex  items-center justify-center pt-[78px] pb-[102px] pr-[65px] pl-[79px]">
            <Cta Bool={true} />
          </div>
          {/* img */}
          <div
            className=" relative flex md:w-[60%] w-full h-[483px] bg-[url(/assets/banner1.jpg)] bg-cover bg-no-repeat bg-center ">
            <div className="flex absolute inset-x-0 h-[10%]  bg-opacity-35 bg-gradient-to-b from-black to-transparent"></div>
            <div className="flex absolute inset-y-0 w-[10%]  bg-opacity-35 bg-gradient-to-r from-black to-transparent"></div>
            {/* <div className="flex absolute  bottom-0 w-full  h-[5%]  bg-opacity-35 bg-gradient-to-t  from-black to-transparent"></div>
            <div className="flex absolute right-0 w-[5%] h-full  bg-opacity-10 bg-gradient-to-l from-black  to-transparent"></div> */}



          </div>

        </div>
      </div>

    </main>
  );
}
