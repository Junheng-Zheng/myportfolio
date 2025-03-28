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
    <div className="bg-[url(/landing.png)] gradient bg-cover flex flex-col">
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
      <div className="fixed flex z-200 justify-between flex-col items-center w-full bottom-0">
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
      <div className="overflow-auto flex flex-col h-[100vh]">
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
      {/* <div className = "px-10 h-[100vh] -translate-y-[150px]">
      <div className="w-full flex overflow-hidden rounded-t-[50px]" style={{ height: 'calc(100% + 150px)' }}>
        <div onMouseEnter = {()=>setOne(true)} onMouseLeave = {()=>setOne(false)} className = {`p-6 border-r border-white flex flex-col items-start bg-white h-full transition-all duration-300 ${currTwo ? 'bg-red-500 w-[0px] opacity-0' : 'w-full'}`}>
          <h2 className = "p-3 w-[250px] text-center border border-black rounded-full namefont text-black text-[21px]">UI/UX Design</h2>
          {projectCard('Tiger Snack Box', 1)}
          {projectCard('RIT SIS Redesign', 2)}
          {projectCard('MyLife', 3)}
        </div>
        <div onMouseEnter = {()=>setTwo(true)} onMouseLeave = {()=>setTwo(false)}className = {`p-6 bg-white flex flex-col items-end h-full transition-all duration-300 ${currOne ?'bg-red-500 w-[0px] opacity-0' : ' w-full' }`}>
        <h2 className = "p-3 w-[250px] text-center border border-black rounded-full text-[21px] namefont text-black">Frontend Dev</h2>
          {projectCard('American Dream', 1)}
          {projectCard('Quality Coordinators', 2)}
        </div>
      </div>
      </div> */}
      {/* <div className = "flex flex-col gap-1 items-center justify-center absolute bottom-0 w-full">
        <div className = "bg-black p-5 flex flex-col gap-1">
        </div>
      </div> */}
    </div>
  );
}
