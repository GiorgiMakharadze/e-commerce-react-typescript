import { useState } from "react";
import { IProductImagesProps } from "../types";
import Wrapper from "../assets/wrappers/ProductImages";

const ProductImages = ({ images = [[]] }: IProductImagesProps) => {
  const [main, setMain] = useState(images[0]);
  return (
    <Wrapper>
      <img src={main.url} alt="" className="main " />
      <div className="gallery">
        {images.map((image, index) => {
          return (
            <img
              src={image.url}
              alt=""
              key={index}
              className={`${image.url === main.url ? "active" : null}`}
              onClick={() => setMain(images[index])}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

export default ProductImages;
