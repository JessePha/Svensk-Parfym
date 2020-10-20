import React from "react";
let ImageSlideShow = ({ viewProduct }) => {
  return <img src={viewProduct.url} alt="perfume" style={{borderRadius:"10px"}} />;
};

export default ImageSlideShow;
