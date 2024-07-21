
import React, { useEffect } from "react";
import anime from "animejs";
import "./Title.css";

const Title = () => {
  useEffect(() => {
    anime.timeline({ loop: false })
      .add({
        targets: '.ml5 .line',
        opacity: [0.5, 1],
        scaleX: [0, 1],
        easing: "easeInOutExpo",
        duration: 700
      }).add({
        targets: '.ml5 .line',
        duration: 600,
        easing: "easeOutExpo",
        translateY: (el, i) => (-0.625 + 0.625 * 2 * i) + "em"
      }).add({
        targets: '.ml5 .letters-left',
        opacity: [0, 1],
        translateX: ["0.5em", 0],
        easing: "easeOutExpo",
        duration: 600
      }).add({
        targets: '.ml5 .letters-right',
        opacity: [0, 1],
        translateX: ["-0.5em", 0],
        easing: "easeOutExpo",
        duration: 600
      });
  }, []);

  return (
    <div className="ml5 text-gray-500">
      <center>
        <span className="text-wrapper">
          <span className="line line1"></span>
          <span className="letters text-4xl letters-left">Department of Civil &amp;</span>
          <span className="letters text-4xl letters-right"> Environmental Engineering</span>
          <span className="line line2"></span>
        </span>
      </center>
    </div>
  );
};

export default Title;
