import React, { useEffect, useState } from "react";

const WeCreate = () => {
  const keywords = ["Websites", "App", "Games", "More"];
  const [currentKeywordIndex, setCurrentKeywordIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentKeywordIndex((currentIndex) => {
        const nextIndex = (currentIndex + 1) % keywords.length;
        return nextIndex;
      });
    }, 2000);
    return () => clearInterval(intervalId);
  }, [keywords]);

  return (
    <div>
      <h1 className="fw-bolder text-center mb-5">
        We create {keywords[currentKeywordIndex]}
      </h1>
    </div>
  );
};

export default WeCreate;
