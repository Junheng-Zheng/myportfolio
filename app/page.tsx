"use client";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import Noise from "./components/Noise";
import { Footer } from "./components/Footer";

export default function Home() {
  type video = {
    title: string;
    videolink: string;
  };
  let projectnumber = 0;
  const [isProjectHover, setIsProjectHover] = useState(false);
  const [videoInfo, setVideoInfo] = useState<video>();
  const projectsample = (videoinfo: video) => {
    return (
      <div className="fixed z-5000 w-[40%] right-15 opacity-95 h-[100vh] flex items-center text-black">
        <div className="bg-white border z-5000 w-full right-30 p-2 rounded-lg h-fit flex flex-col items-start shadow-md">
          <div className="w-full flex gap-3 items-center">
            <div className="flex items-center gap-2">
              <button className="w-[10px] rounded-full aspect-square bg-red-500"></button>
              <button className="w-[10px] rounded-full aspect-square bg-yellow-500"></button>
              <button className="w-[10px] rounded-full aspect-square bg-green-500"></button>
            </div>
            <div className="py-2 px-4 bg-gray-900 text-white rounded-t-lg">
              <p className="text-[12px]">{videoinfo.title}</p>
            </div>
          </div>
          <div className="flex w-full gap-2 p-2 bg-gray-800 rounded-t-lg items-center text-white">
            <i className="fa-solid fa-arrow-left text-[10px]"></i>
            <i className="fa-solid fa-arrow-right text-[10px]"></i>
            <i className="fa-solid fa-rotate-right text-[10px]"></i>
            <div className="w-full h-full text-gray-300 bg-gray-700 text-[8px] p-2 rounded-full">
              Tigersnackbox.com
            </div>
          </div>
          <img
            className="rounded-b-lg overflow-hidden"
            src="https://media.discordapp.net/attachments/1278889934882738258/1355347868885717083/Screenshot_2025-03-28_at_9.07.25_PM.png?ex=67e89991&is=67e74811&hm=033da8e8e1e399d722d14787ba1fcd0f3676eb17cc80a39ae0bc2800843b911d&=&format=webp&quality=lossless&width=2422&height=1446"
          ></img>
        </div>
      </div>
    );
  };
  const projectcard = (name: string, programs: string[]) => {
    projectnumber++;
    return (
      <div
        onMouseEnter={() => {
          setIsProjectHover(true);
          setVideoInfo({ title: name, videolink: "hf" });
        }}
        onMouseLeave={() => setIsProjectHover(false)}
        className="cursor-pointer py-6 sm:py-8 flex border-b border-gray-300 hover:bg-gray-100 justify-between items-center"
      >
        <div className="flex flex-col gap-3">
          <h2 className="text-[16px] sm:text-[25px]">{name}</h2>
          <div className="hidden sm:flex gap-2">
            {programs.map((i, index) => (
              <div
                key={index}
                className="p-2 px-4 bg-black rounded-full text-white"
              >
                <p>{i}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="text-gray-500 text-[16px] sm:text-[25px] font-bold uppercase">
          {projectnumber}
        </p>
      </div>
    );
  };
  const experiencecard = (name: string, description: string, year: string) => {
    return (
      <div className="py-6 sm:py-8 flex border-b border-gray-800 justify-between items-center">
        <div className="flex flex-col gap-3">
          <h2 className="text-[16px] sm:text-[25px]">{name}</h2>
          <p className="hidden sm:block text-gray-400">{description}</p>
        </div>
        <p className="text-white text-[16px] sm:text-[25px] font-bold uppercase">
          {year}
        </p>
      </div>
    );
  };
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);

  const [currOne, setOne] = useState(false);
  const [currTwo, setTwo] = useState(false);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [currPos, setCurrPos] = useState("none");

  useEffect(() => {
    if (isMobile) return; // Disable effect for mobile users
    const handleMouseMove = (event: MouseEvent | TouchEvent) => {
      const clientX =
        "touches" in event ? event.touches[0].clientX : event.clientX;
      const clientY =
        "touches" in event ? event.touches[0].clientY : event.clientY;
      setCoordinates({ x: clientX, y: clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleMouseMove);
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
    <div className="overflow-hidden bg-cover flex flex-col">
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
      {/* <div className="z-1000 fixed top-0 left-0 w-full h-full">
        <Noise
          patternSize={1000}
          patternScaleX={1.5}
          patternScaleY={1.5}
          patternRefreshInterval={2}
          patternAlpha={15}
        />
      </div> */}
      {/* {isProjectHover && videoInfo && projectsample(videoInfo)} */}
      <div className="relative gradientmobile sm:gradient overflow-hidden flex flex-col h-[100vh]">
        <div className="box-border absolute flex z-200 justify-between flex-col items-center w-full sm:translate-y-[0px] translate-y-[50px] bottom-0">
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
          <div className="w-[200px] h-[100px] sm:h-[100px] rounded-t-[80px] bg-white" />
        </div>
        <Navbar className="absolute" />
        <div className="box-border p-10 flex-grow flex flex-col w-full items-center justify-center">
          <div className="relative w-full items-center flex flex-col">
            <div className="w-fit flex items-center sm:items-start flex-col gap-3">
              <p className="text-[18px] w-full text-left sm:text-left sm:text-[21px]">
                Hello, my name is
              </p>
              <h1 className="namefont text-left w-full sm:text-left leading-none text-[32px] font uppercase sm:text-[80px]">
                Junheng Zheng
              </h1>
              {/* <p>Position: {currPos}</p> */}
              <div className="flex w-full items-center  flex-col gap-5 justify-between sm:items-center sm:flex-row">
                <p className="text-right sm:text-left text-[16px] sm:text-[21px]">
                  I am a frontend dev and UI/UX Designer
                </p>
                <div className="flex w-full sm:w-fit gap-3 justify-end">
                  <button className="flex gap-2 items-left py-4 px-8 border-b border-white/60 bg-black/20 sm:bg-black/80 text-white justify-center rounded-full">
                    Resume <i className="fa-solid fa-download"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="z-20 relative w-full sm:gap-15 gap-5 h-fit sm:flex-row flex-col flex bg-white text-black sm:px-30 sm:py-15 p-7 items-start">
        <div className="flex flex-col gap-4 sm:gap-20 opacity-80 w-full sm:w-[75%]">
          <div className="flex flex-col gap-2 sm:gap-5">
            <h1
              style={{ wordSpacing: "0.5px" }}
              className="namefont uppercase leading-none text-[27px] sm:text-[45px] sm:tracking-[-1.5px]"
            >
              Junheng Zheng is a Web & Mobile Computing Student at RIT.
            </h1>
            <p className="hidden sm:block sm:text-[18px] text-[16px]">
              I am passionate about building products with React and Next.js,
              focusing on user experience and aesthetics. I prioritize clean,
              intuitive design and strive to create engaging digital
              experiences. You can catch me building side projects in my free
              time.
            </p>
          </div>
          <div className="hidden sm:w-[70%] w-full sm:flex gap-3 sm:gap-10 justify-between items-start">
            <div className="w-full flex flex-col gap-0 sm:gap-2">
              <h2 className="purpletext leading-none namefont text-[42px] sm:text-[75px]">
                3rd
              </h2>
              <p className="text-[12px] sm:text-[16px]">Year @ RIT</p>
            </div>
            <div className="w-full flex flex-col gap-0 sm:gap-2">
              <h2 className="purpletext leading-none namefont text-[42px] sm:text-[75px]">
                3.6
              </h2>
              <p className="text-[12px] sm:text-[16px]">GPA | Honors</p>
            </div>
            <div className="w-full flex flex-col gap-0 sm:gap-2">
              <h2 className="purpletext leading-none namefont text-[42px] sm:text-[75px]">
                26'
              </h2>
              <p className="text-[12px] sm:text-[16px]">Dec 26' Grad</p>
            </div>
          </div>
        </div>
        <div className="flex w-full sm:w-[25%] items-end sm:items-center flex-col-reverse gap-3">
          <p className="p-2 rounded-full purple text-white text-[12px] sm:text-[16px] w-fit px-5">
            {/* My Current Favorites! <i className="fa-solid fa-heart"></i> */}
            My Current Favorites!
          </p>
          <div className="flex items-end w-[75%] sm:w-full">
            <div className="h-fit aspect-square flex items-center translate-x-8 sm:translate-x-4 rotate-5 justify-center p-2 rounded-full  bg-gray-400 border-3 border-white text-black">
              <img src="https://img.icons8.com/?size=100&id=122637&format=png&color=FFFFFF" />
            </div>
            <div className="h-fit aspect-square flex items-center translate-x-6 sm:translate-x-2 rotate-5 justify-center p-2 rounded-full bg-gray-400 border-3 border-white text-black">
              <img src="https://img.icons8.com/?size=100&id=39853&format=png&color=FFFFFF" />
            </div>
            <div className="h-fit aspect-square flex items-center sm:translate-x-0 translate-x-4 rotate-5 justify-center p-2 rounded-full  bg-gray-400  border-3 border-white text-black">
              <img src="https://img.icons8.com/?size=100&id=qOFWMoaAQIdR&format=png&color=FFFFFF" />
            </div>
            <div className="h-fit aspect-square flex items-center translate-x-2 sm:-translate-x-2 rotate-5 justify-center p-2 rounded-full  bg-gray-400 border-3 border-white text-black">
              <img src="https://img.icons8.com/?size=100&id=r2OarXWQc7B6&format=png&color=FFFFFF" />
            </div>
            <div className="h-fit aspect-square flex items-center translate-x-0 sm:-translate-x-4 rotate-5 justify-center p-2 rounded-full  bg-gray-400 border-3 border-white text-black">
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
        <div className=" pt-10 w-full sm:hidden flex gap-3 sm:gap-12 justify-between items-start">
          <div className="w-full flex flex-col gap-0 sm:gap-2">
            <h2 className="purpletext leading-none namefont text-[32px] sm:text-[75px]">
              3rd
            </h2>
            <p className="text-[14px] sm:text-[16px]">Year @ RIT</p>
          </div>
          <div className="w-full flex flex-col gap-0 sm:gap-2">
            <h2 className="purpletext leading-none namefont text-[32px] sm:text-[75px]">
              3.6
            </h2>
            <p className="text-[14px] sm:text-[16px]">GPA | Honors</p>
          </div>
          <div className="w-full flex flex-col gap-0 sm:gap-2">
            <h2 className="purpletext leading-none namefont text-[32px] sm:text-[75px]">
              26'
            </h2>
            <p className="text-[14px] sm:text-[16px]">Dec 26' Grad</p>
          </div>
        </div>
      </div>
      <div className="z-2000 overflow-hidden relative w-full h-fit sm:px-30 sm:py-15 p-7 gap-0 flex flex-col text-black bg-gray-100 border-t border-gray-300">
        <h1 className="text-[27px] sm:text-[45px] namefont font-bold uppercase">
          Projects
        </h1>
        {projectcard("Tiger Snack Box", [
          "Figma",
          "React",
          "Tailwind",
          "Next.js",
        ])}
        {projectcard("American Dream", [
          "Figma",
          "React",
          "Tailwind",
          "PostgresSQL",
          "Express",
          "Node",
        ])}
        {projectcard("MyInterface", [
          "Figma",
          "React",
          "Next.js",
          "Groq",
          "Firebase",
        ])}
        {/* <div className="hidden absolute sm:flex z-200 right-30 justify-between flex-col items-end w-full bottom-0">
          <div className="flex flex-col items-center">
            <div className="w-[150px] purple relative translate-y-[10px] h-[150px] rounded-full">
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
            <div className="w-[200px] rounded-t-full h-[30px] bg-black" />
          </div>
        </div> */}
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
      <div className="p-7 bg-black/95 w-full h-fit sm:px-30 sm:py-15  rounded-t-[25px] sm:rounded-t-[50px]">
        <h1 className="text-[27px] sm:text-[45px] namefont font-bold uppercase">
          Experience
        </h1>
        {experiencecard(
          "Liberty Mutual (Incoming)",
          "Incoming on the CTU UI/UX Team in Summer 2025",
          `25'`
        )}
        {experiencecard(
          "Tiger Snack Box",
          "Frontend Dev & UI/UX for official website & Upcoming mobile game",
          `25'`
        )}
        {experiencecard(
          "D&D Motor Systems",
          "UI/UX & Frontend Dev on the Web Dev Team",
          `24'`
        )}
      </div>
      <Footer />
    </div>
  );
}
