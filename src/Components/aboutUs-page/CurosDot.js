import React, { useState, useEffect } from "react";

const CursorFollowDot = () => {
  const [dotPosition, setDotPosition] = useState(0);
  let animationFrameId = null;

  useEffect(() => {
    const updateDotPosition = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight; // Max scrollable area

      const container = document.querySelector(".container");
      if (!container) return;

      const containerHeight = container.clientHeight; // Vertical bar height
      const dotMaxMove = containerHeight - 20; // Max movement range for dot

      // Map scroll position to dot movement
      const newTop = (scrollY / maxScroll) * dotMaxMove;

      // Use requestAnimationFrame for smooth animation
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => setDotPosition(newTop));
    };

    // Add listeners for all scrolling types (mouse, trackpad, touch)
    window.addEventListener("scroll", updateDotPosition);
    window.addEventListener("wheel", updateDotPosition);
    window.addEventListener("touchmove", updateDotPosition);

    return () => {
      window.removeEventListener("scroll", updateDotPosition);
      window.removeEventListener("wheel", updateDotPosition);
      window.removeEventListener("touchmove", updateDotPosition);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);


  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "7px",
      }}
    >
      {/* Scrollable Container with 65% Height */}
      <div
        className="container"
        style={{
          position: "relative",
          height: "65vh", // Set to 65% of viewport height
          width: "5px",
          backgroundColor: "#f3ece5",
        }}
      >
        {/* Moving Dot */}
        <div
          style={{
            position: "absolute",
            width: "20px",
            height: "20px",
            backgroundColor: "black",
            borderRadius: "50%",
            left: "50%",
            transform: "translateX(-50%)",
            top: `${dotPosition}px`, // Moves with cursor
          }}
        ></div>
      </div>
    </div>
  );
};

export default CursorFollowDot;
