import { forwardRef } from "react";

const Gamebtn = forwardRef(({ color, border, onclick, C }, ref) => (
  <button
    bg={C}
    className={`${border} ${color} w-[175px]  h-[175px]  m-2 duration-200 hover:scale-105 hover:opacity-75`}
    onClick={onclick}
    ref={ref}
  />
));

export default Gamebtn;
