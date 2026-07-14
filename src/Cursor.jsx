import { useEffect, useRef } from "react";
import "./Cursor.css";

export default function Cursor() {

  const cursor = useRef(null);

  useEffect(() => {

    const moveCursor = (e) => {

      cursor.current.style.left = e.clientX + "px";
      cursor.current.style.top = e.clientY + "px";

    };

    window.addEventListener("mousemove", moveCursor);

    return () => window.removeEventListener("mousemove", moveCursor);

  }, []);

  return <div ref={cursor} className="cursor"></div>;

}