import React, { useEffect, useState } from "react";
import ProcessRender from "../../components/Process Component/Process/Process.js";

let ProcessView = () => {
  const [offSetY, setOffSetY] = useState(0);
  const handleScroll = () => {
    setOffSetY(window.pageYOffset);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offSetY]);

  return <ProcessRender yCord={offSetY} />;
};

export default ProcessView;
