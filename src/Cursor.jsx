import { useEffect, useRef } from "react";
import "./Cursor.css";

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;

    let ringX = 0;
    let ringY = 0;

    const moveMouse = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Small dot follows instantly
      dotRef.current.style.left = `${mouseX}px`;
      dotRef.current.style.top = `${mouseY}px`;
    };

    const animate = () => {
      // Smooth trailing animation
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;

      ringRef.current.style.left = `${ringX}px`;
      ringRef.current.style.top = `${ringY}px`;

      requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener("mousemove", moveMouse);

    const hoverItems = document.querySelectorAll(
      "a,button,.btn-main,.project-card,.skill-box"
    );

    hoverItems.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        ringRef.current.classList.add("cursor-hover");
      });

      item.addEventListener("mouseleave", () => {
        ringRef.current.classList.remove("cursor-hover");
      });
    });

    return () => {
      window.removeEventListener("mousemove", moveMouse);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring"></div>
      <div ref={dotRef} className="cursor-dot"></div>
    </>
  );
}