import "animate.css";
import { IoPlayCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      style={{ maxHeight: "calc(100vh - 100px)" }}
      className="carousel w-full max-sm:min-h-[290px] shadow-2xl"
    >
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://images.bauerhosting.com/legacy/media/6217/9535/9649/1207/f543/24bb/vote-hero.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=1440&q=80"
          className="w-full object-cover"
        />

        <div class="absolute flex flex-col text-white  max-sm:justify-end max-sm:pb-10 h-full w-full bg-black bg-opacity-50">
          <div className="absolute bottom-20 left-20 max-sm:bottom-5 max-sm:left-6">
            <h1 class="animate__animated animate__backInRight text-6xl mb-4 max-sm:text-4xl max-sm:mb-2 max-md:text-5xl max-md:mb-3">
              The Godfather
            </h1>
            <p>
              <span className="text-xl opacity-70 max-sm:text-lg">
                ⭐⭐⭐⭐⭐
              </span>
              <br />
              <div className="bg-white bg-opacity-70 text-black btn w-fit mt-3 flex items-center gap-2 text-lg opacity-50 max-sm:text-xs">
                <IoPlayCircleOutline />
                <Link to={"/movies/6752e579b6ea44533532984f"}>Watch Now</Link>
              </div>
            </p>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between max-sm:left-2 max-sm:right-2">
          <a href="#slide3" className="btn btn-circle glass max-sm:btn-xs">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle glass max-sm:btn-xs">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://theconsultingdetectivesblog.com/wp-content/uploads/2014/06/the-dark-knight-original.jpg"
          className="w-full object-cover"
        />

        <div class="absolute flex flex-col text-white  max-sm:justify-end max-sm:pb-10 h-full w-full bg-black bg-opacity-50">
          <div className="absolute bottom-20 left-20 max-sm:bottom-5 max-sm:left-6">
            <h1 class="animate__animated animate__backInRight text-6xl mb-4 max-sm:text-4xl max-sm:mb-2 max-md:text-5xl max-md:mb-3">
              The Dark Knight
            </h1>
            <p>
              <span className="text-xl opacity-70 max-sm:text-lg">
                ⭐⭐⭐⭐⭐
              </span>
              <br />
              <div className="bg-white bg-opacity-70 text-black btn w-fit mt-3 flex items-center gap-2 text-lg opacity-50 max-sm:text-xs">
                <IoPlayCircleOutline />
                <Link to={"/movies/6752e819b1f503820f16d3fb"}>Watch Now</Link>
              </div>
            </p>
          </div>
        </div>

        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between max-sm:left-2 max-sm:right-2">
          <a href="#slide1" className="btn btn-circle glass max-sm:btn-xs">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle glass max-sm:btn-xs">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://www.digitaltrends.com/wp-content/uploads/2023/11/Avengers-featured.jpg?resize=1200%2C630&p=1"
          className="w-full"
        />
        <div class="absolute flex flex-col text-white  max-sm:justify-end max-sm:pb-10 h-full w-full bg-black bg-opacity-50">
          <div className="absolute bottom-20 left-20 max-sm:bottom-5 max-sm:left-6">
            <h1 class="animate__animated animate__backInRight text-6xl mb-4 max-sm:text-4xl max-sm:mb-2 max-md:text-5xl max-md:mb-3">
              The Avengers
            </h1>
            <p>
              <span className="text-xl opacity-70 max-sm:text-lg">
                ⭐⭐⭐⭐⭐
              </span>
              <br />
              <div className="bg-white bg-opacity-70 text-black btn w-fit mt-3 flex items-center gap-2 text-lg opacity-50 max-sm:text-xs">
                <IoPlayCircleOutline />
                <Link to={"/movies/6755904e7ebdb41c83fd76e6"}>Watch Now</Link>
              </div>
            </p>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between max-sm:left-2 max-sm:right-2">
          <a href="#slide2" className="btn btn-circle glass max-sm:btn-xs">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle glass max-sm:btn-xs">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
