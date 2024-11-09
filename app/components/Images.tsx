import React from "react";

const ImageReact = ({ img1, img2, img3, img4, img5, img6 }:any) => {
  return (
    <div className="container px-4 py-2 flex justify-center items-center">
      <div className="-m-1 flex flex-col md:flex-row md:flex-wrap md:-m-2">
        <div className="flex w-full md:w-1/2 flex-col md:flex-wrap lg:flex-row">
          <div className="w-full lg:w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src={img1}
            />
          </div>
          <div className="w-full lg:w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src={img2}
            />
          </div>
          <div className="w-full p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src={img3}
            />
          </div>
        </div>
        <div className="flex w-full md:w-1/2 flex-col sm:flex-row sm:flex-wrap">
          <div className="w-full p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src={img4}
            />
          </div>
          <div className="w-1/2 sm:w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src={img5}
            />
          </div>
          <div className="w-1/2 sm:w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src={img6}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageReact;
