import { useState, useRef, useEffect } from "react";
import Gamebtn from "./gamebtn";
const colors = ["green", "red", "yellow", "blue"];
function Simongame() {
  const [sequence, setsequence] = useState([]);
  const [playing, setplaying] = useState(false);

  function addNewColor() {
    const color = colors[Math.floor(Math.random() * 4)];
    const newSequence = [...sequence, color];
    setsequence(newSequence);
  }
  const handleNextLevel = () => {
    if (!playing) {
      setplaying(true);
      addNewColor();
    }
  };
  let [play, setplay] = useState("play");
  const greenRef = useRef(null);
  const redRef = useRef(null);
  const yellowRef = useRef(null);
  const blueRef = useRef(null);
  let count = 0;
  useEffect(() => {
    const showSequence = (idx = 0) => {
      let ref = null;
      if (sequence[idx] === "green") ref = greenRef;
      if (sequence[idx] === "red") ref = redRef;
      if (sequence[idx] === "yellow") ref = yellowRef;
      if (sequence[idx] === "blue") ref = blueRef;
      setTimeout(() => {
        ref.current.classList.add("brightness-[4]");
        setTimeout(() => {
          ref.current.classList.remove("brightness-[4]");
          if (idx < sequence.length - 1) showSequence(idx + 1);
        }, 250);
      }, 250);
    };
    if (!(sequence.length == 0)) {
      showSequence();
    }
  }, [sequence]);

  const handelcolorclick = (e) => {
    if (playing) {
      const clickcolor = e.target.getAttribute("bg");
      if (sequence[count] === clickcolor && count === sequence.length - 1) {
        count = 0;
        addNewColor();
      } else if (sequence[count] === clickcolor) {
        count++;
      } else {
        setplaying(false);
        setplay(() => `Your score is ${sequence.length}`);
        setsequence([]);
        count = 0;
        setTimeout(() => {
          setplay("play");
        }, 3000);
      }
    }
  };

  return (
    <>
      <div className="flex justify-center items-center text-red-500 bg-neutral-800 w-screen h-screen">
        <div className=" relative flex flex-col justify-center items-center">
          <div>
            <Gamebtn
              C="green"
              color="bg-green-500"
              border="rounded-tl-full"
              ref={greenRef}
              onclick={handelcolorclick}
            />
            <Gamebtn
              C="red"
              color="bg-red-500"
              border="rounded-tr-full"
              ref={redRef}
              onclick={handelcolorclick}
            />
          </div>
          <div>
            <Gamebtn
              C="yellow"
              color="bg-yellow-400"
              border="rounded-bl-full"
              ref={yellowRef}
              onclick={handelcolorclick}
            />
            <Gamebtn
              C="blue"
              color="bg-blue-500"
              border="rounded-br-full"
              ref={blueRef}
              onclick={handelcolorclick}
            />
          </div>
          <button
            className="absolute bg-neutral-900 text-white text-xl sm:text-2xl font-bold rounded-full w-[150px]  h-[150px]  duration-200 hover:scale-105"
            onClick={handleNextLevel}
          >
            {sequence == 0 ? play : sequence.length}
          </button>
        </div>
      </div>
    </>
  );
}

export default Simongame;
