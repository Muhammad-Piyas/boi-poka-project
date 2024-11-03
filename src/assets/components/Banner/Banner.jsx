import React from "react";
import bannerImg from "../../../image/books.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="space-y-8">
          <h1 className="text-5xl font-bold">
            Books to freshen up
            <br />
            your bookshelf
          </h1>

          <button className="btn btn-primary">Get Started</button>
        </div>
        <img src={bannerImg} className="max-w-sm rounded-lg shadow-2xl" />
      </div>
    </div>
  );
};

export default Banner;
