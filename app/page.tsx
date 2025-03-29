"use client";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import Noise from "./components/Noise";

export default function Home() {
  const projectCard = (name: string, number: number) => {
    return (
      <div className="w-full border-b border-white py-3 flex justify-between">
        <p className="text-[21px]">{name}</p>
        <p className="text-[21px]">{number}</p>
      </div>
    );
  };
  const [currOne, setOne] = useState(false);
  const [currTwo, setTwo] = useState(false);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [currPos, setCurrPos] = useState("none");

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCoordinates({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const screenHeightCenter = window.innerHeight / 2;
    const screenWidthThird = window.innerWidth / 3; // Divide screen width into thirds

    // Check left zone (less than one-third of the screen width)
    if (coordinates.x < screenWidthThird) {
      if (coordinates.y > screenHeightCenter + 40) {
        setCurrPos("bottomleft");
      } else if (coordinates.y < screenHeightCenter - 40) {
        setCurrPos("topleft");
      } else {
        setCurrPos("centerleft");
      }
    }
    // Check center zone (between one-third and two-thirds of the screen width)
    else if (
      coordinates.x >= screenWidthThird &&
      coordinates.x <= 2 * screenWidthThird
    ) {
      if (coordinates.y > screenHeightCenter + 40) {
        setCurrPos("bottomcenter");
      } else if (coordinates.y < screenHeightCenter - 40) {
        setCurrPos("topcenter");
      } else {
        setCurrPos("centercenter");
      }
    }
    // Check right zone (greater than two-thirds of the screen width)
    else {
      if (coordinates.y > screenHeightCenter + 40) {
        setCurrPos("bottomright");
      } else if (coordinates.y < screenHeightCenter - 40) {
        setCurrPos("topright");
      } else {
        setCurrPos("centerright");
      }
    }
  }, [coordinates]); // This will run every time `coordinates` changes

  return (
    <div className="bg-[url(/landing.png)] bg-cover flex flex-col">
      <div className="fixed top-0 left-0 w-full h-full">
        <Noise
          patternSize={1000}
          patternScaleX={1.5}
          patternScaleY={1.5}
          patternRefreshInterval={2}
          patternAlpha={15}
        />
      </div>
      {/* <div className = "w-full p-3 bg-[rgba(124,42,200,0.5)] flex items-center justify-between fixed bottom-0 z-20">
      <div className = "flex items-center gap-2">
        <p>Frontend Dev</p>
        <i className="fa-solid fa-star-of-life text-[12px]"></i>
        <p>User Interface</p>
        <i className="fa-solid fa-star-of-life text-[12px]"></i>
        <p>User Research</p>
      </div>
      <div className = "flex items-center gap-2">
        <p>React</p>
        <i className="fa-solid fa-star-of-life text-[12px]"></i>
        <p>Next.js</p>
        <i className="fa-solid fa-star-of-life text-[12px]"></i>
        <p>Node.js</p>
        <i className="fa-solid fa-star-of-life text-[12px]"></i>
        <p>Javascript</p>
        <i className="fa-solid fa-star-of-life text-[12px]"></i>
        <p>Figma</p>
      </div>
    </div> */}
      <div className="absolute flex z-200 justify-between flex-col items-center w-full bottom-0">
        <div className="w-[150px] relative translate-y-[10px] h-[150px] facegradient rounded-full">
          <div className="absolute top-0 w-full h-full items-center justify-center gap-4 flex flex-col">
            <div className="blinking flex gap-7">
              <div
                className={`relative transition-all duration-750 purple ${currPos} opacity-80 w-[15px] h-[25px] rounded-full`}
              >
                <div className="bg-white w-[5px] h-[5px] rounded-full absolute top-1 left-1" />
              </div>
              <div
                className={` relative transition-all duration-750 ${currPos} purple opacity-80 w-[15px] h-[25px] rounded-full`}
              >
                <div className="bg-white w-[5px] h-[5px] rounded-full absolute top-1 left-1" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[200px] h-[100px] rounded-t-[80px] bg-white" />
      </div>
      <div className="gradient overflow-auto flex flex-col h-[100vh]">
        <Navbar className="absolute" />
        <div className="flex-grow flex flex-col items-center justify-center">
          <div className="w-fit flex flex-col gap-3">
            <p className="text-[21px]">Hello, my name is </p>
            <h1 className="namefont leading-none text-[80px] font uppercase">
              Junheng Zheng
            </h1>
            {/* <p>Position: {currPos}</p> */}
            <div className="flex w-full justify-between items-center">
              <p className="text-[21px]">
                I am a frontend developer and UI/UX Designer
              </p>
              <div className="flex gap-3 items-center">
                <button className="flex gap-2 items-center py-4 px-8 purple text-white rounded-full">
                  Resume <i className="fa-solid fa-download"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="z-20 relative w-full gap-15 h-fit flex bg-white text-black px-30 py-15 items-start">
        <div className="flex flex-col gap-20 opacity-80 w-[75%]">
          <div className="flex flex-col gap-5">
            <h1
              style={{ wordSpacing: "0.5px" }}
              className="namefont uppercase leading-none font-extrabold text-[45px] tracking-[-1.5px]"
            >
              Junheng Zheng is a Web & Mobile Computing Student at RIT.
            </h1>
            <p className="text-[18px]">
              I enjoy building projducts in react and nextjs. I put a large
              empahsis on user experence and aeshtetics. I never settle for
              less, and I love creating engaging and appealling expereinces. You
              will find me working on side projects during my free time.
            </p>
          </div>
          <div className="w-[70%] flex gap-10 justify-between items-start">
            <div className="w-full flex flex-col gap-1">
              <h2 className="purpletext leading-none namefont text-[75px]">
                3rd
              </h2>
              <p>Year @ RIT</p>
            </div>
            <div className="w-full flex flex-col gap-2">
              <h2 className="purpletext leading-none namefont text-[75px]">
                3.6
              </h2>
              <p>GPA | Honors</p>
            </div>
            <div className="w-full flex flex-col gap-2">
              <h2 className="purpletext leading-none namefont text-[75px]">
                26'
              </h2>
              <p>Dec 2026 Graduate</p>
            </div>
          </div>
        </div>
        <div className="flex w-[25%] items-center flex-col-reverse gap-3">
          <p className="p-2 rounded-full purple text-white w-fit px-5">
            My Current Favorites! <i className="fa-solid fa-heart"></i>
          </p>
          <div className="flex items-center justify-center w-fit">
            <div className="h-fit aspect-square flex items-center translate-x-4 rotate-5 justify-center p-2 rounded-full  bg-purple-400 border-3 border-white text-black">
              <img src="https://img.icons8.com/?size=100&id=122637&format=png&color=FFFFFF" />
            </div>
            <div className="h-fit aspect-square flex items-center translate-x-2 rotate-5 justify-center p-2 rounded-full bg-purple-400 border-3 border-white text-black">
              <img src="https://img.icons8.com/?size=100&id=39853&format=png&color=FFFFFF" />
            </div>
            <div className="h-fit aspect-square flex items-center rotate-5 justify-center p-2 rounded-full  bg-purple-400  border-3 border-white text-black">
              <img src="https://img.icons8.com/?size=100&id=qOFWMoaAQIdR&format=png&color=FFFFFF" />
            </div>
            <div className="h-fit aspect-square flex items-center -translate-x-2 rotate-5 justify-center p-2 rounded-full  bg-purple-400 border-3 border-white text-black">
              <img src="https://img.icons8.com/?size=100&id=r2OarXWQc7B6&format=png&color=FFFFFF" />
            </div>
            <div className="h-fit aspect-square flex items-center -translate-x-4 rotate-5 justify-center p-2 rounded-full  bg-purple-400 border-3 border-white text-black">
              <img src="https://img.icons8.com/?size=100&id=amXjtNWVYSKP&format=png&color=FFFFFF" />
            </div>
            {/* <div className="h-fit aspect-square flex items-center translate-x-4 rotate-5 justify-center p-2 rounded-full bg-white border-2 border-black text-black">
              <img src="https://img.icons8.com/?size=100&id=122637&format=png&color=000000" />
            </div>
            <div className="h-fit aspect-square flex items-center translate-x-2 rotate-5 justify-center p-2 rounded-full bg-white border-3 border-black text-black">
              <img src="https://img.icons8.com/?size=100&id=FQlr_bFSqEdG&format=png&color=000000" />
            </div>
            <div className="h-fit aspect-square flex items-center rotate-5 justify-center p-2 rounded-full bg-white border-3 border-black text-black">
              <img src="https://img.icons8.com/?size=100&id=qOFWMoaAQIdR&format=png&color=000000" />
            </div>
            <div className="h-fit aspect-square flex items-center -translate-x-2 rotate-5 justify-center p-2 rounded-full bg-white border-3 border-black text-black">
              <img src="https://img.icons8.com/?size=100&id=r2OarXWQc7B6&format=png&color=000000" />
            </div>
            <div className="h-fit aspect-square flex items-center -translate-x-4 rotate-5 justify-center p-2 rounded-full bg-white border-3 border-black text-black">
              <img src="https://img.icons8.com/?size=100&id=amXjtNWVYSKP&format=png&color=000000" />
            </div> */}
          </div>
          {/* <div className="absolute bottom-10 w-fit gap-2 right-20 items-center flex-col rounded-full justify-end flex">
            <h1 className="text-[21px] namefont">Contact Me!</h1>
            <div className="flex justify-between gap-2 items-center">
              <i className="text-[30px] fa-brands fa-linkedin"></i>
              <i className="text-[30px] fa-solid fa-envelope"></i>
              <i className="text-[30px] fa-solid fa-message"></i>
            </div>
          </div> */}
        </div>
      </div>
      <div className="overflow-hidden relative w-full h-fit px-30 py-15 gap-4 flex flex-col text-black bg-white border-t border-gray-300">
        <h1 className="text-[45px] namefont font-bold uppercase">Projects</h1>
        <div className="py-8 flex border-b border-gray-300 justify-between items-center">
          <h2 className="text-[25px]">Tiger Snack Box</h2>
          <p className="text-purple-500 text-[25px] font-bold uppercase">01</p>
        </div>
        <div className="py-8 flex border-b border-gray-300 justify-between items-center">
          <h2 className="text-[25px]">American Dream</h2>
          <p className="text-purple-600 text-[25px] font-bold uppercase">02</p>
        </div>
        <div className="py-8 flex border-b border-gray-300 justify-between items-center">
          <h2 className="text-[25px]">MyInterface</h2>
          <p className="text-purple-700 text-[25px] font-bold uppercase">03</p>
        </div>
        <div className="py-8 cursor-pointer z-20 flex border-b border-gray-300 justify-between items-center">
          <h2 className="text-[25px]">RIT SIS Redesign</h2>
          <p className="text-purple-800 text-[25px] font-bold uppercase">04</p>
        </div>
        <div className="absolute flex z-200 right-50 justify-between flex-col items-end w-full bottom-0">
          <div className="w-[150px] purple relative translate-y-1/3 h-[150px] rounded-t-full">
            <div className="absolute top-0 w-full h-full items-center justify-center gap-4 flex flex-col">
              <div className="blinking flex gap-7">
                <div
                  className={`relative transition-all duration-750 bg-white ${currPos} opacity-100 w-[15px] h-[25px] rounded-full`}
                >
                  <div className="bg-white w-[5px] h-[5px] rounded-full absolute top-1 left-1" />
                </div>
                <div
                  className={` relative transition-all duration-750 ${currPos} bg-white opacity-100 w-[15px] h-[25px] rounded-full`}
                >
                  <div className="bg-white w-[5px] h-[5px] rounded-full absolute top-1 left-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex gap-5 h-[350px]">
          <div className="overflow-hidden p-2 rounded-[10px] relative w-full">
            <div className="absolute top-0 left-0 w-full h-full">
              <img
                className="absolute top-0 left-0 w-full h-full"
                src="https://media.discordapp.net/attachments/1278889934882738258/1355347868885717083/Screenshot_2025-03-28_at_9.07.25_PM.png?ex=67e89991&is=67e74811&hm=033da8e8e1e399d722d14787ba1fcd0f3676eb17cc80a39ae0bc2800843b911d&=&format=webp&quality=lossless&width=1100&height=656"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/10 to-black"></div>
            </div>
            <div className="absolute bottom-4 items-end flex gap-2 flex-col right-4">
              <h2 className="text-[21px] uppercase font-bold">
                Tiger Snack Box
              </h2>
              <p>Part-time UI/UX & Frontend Dev</p>
              <div className="flex gap-3">
                <p className="w-fit purple text-white rounded-full py-2 px-5">
                  Figma
                </p>
                <p className="w-fit purple text-white rounded-full py-2 px-5">
                  React
                </p>
                <p className="w-fit purple text-white rounded-full py-2 px-5">
                  Next.js
                </p>
              </div>
            </div>
          </div>
          <div className="overflow-hidden p-2 rounded-[20px] relative w-full">
            <div className="absolute top-0 left-0 w-full h-full">
              <img
                className="absolute top-0 left-0 w-full h-full"
                src="https://media.discordapp.net/attachments/1278889934882738258/1355347868885717083/Screenshot_2025-03-28_at_9.07.25_PM.png?ex=67e89991&is=67e74811&hm=033da8e8e1e399d722d14787ba1fcd0f3676eb17cc80a39ae0bc2800843b911d&=&format=webp&quality=lossless&width=1100&height=656"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/10 to-black"></div>
            </div>
            <div className="absolute bottom-4 items-end flex gap-2 flex-col right-4">
              <h2 className="text-[21px] uppercase font-bold">
                Tiger Snack Box
              </h2>
              <p>Part-time UI/UX & Frontend Dev</p>
              <div className="flex gap-3">
                <p className="w-fit purple text-white rounded-full py-2 px-5">
                  Figma
                </p>
                <p className="w-fit purple text-white rounded-full py-2 px-5">
                  React
                </p>
                <p className="w-fit purple text-white rounded-full py-2 px-5">
                  Next.js
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <div className="bg-black w-full h-[50vh] rounded-t-[50px]"></div>
    </div>
  );
}
