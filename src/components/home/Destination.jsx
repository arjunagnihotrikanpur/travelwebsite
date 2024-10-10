import { Link } from "react-router-dom";
import img from "../../assets/featureImage.jpg";

const Destination = () => {
  return (
    <div className="min-h-screen lg:min-h-[90vh] flex flex-col justify-center lg:flex-row  items-center md:mx-32 mx-5 ">
      <div className="flex flex-col text-center lg:text-start gap-5">
        <h1 className="font-semibold text-5xl leading-tight">
          Discover the Best Destinations!
        </h1>
        <p className="text-base font-semibold text-gray-500	 ">
          With TripPixie you can experience new travel and the best tourist
          destination that we have to offer.
        </p>
        <div className="lg:pl-24">
          <Link to="/destination">
            <button className="text-black bg-[#F9EC70] rounded-full px-8 py-1  hover:bg-[#8482ff] hover:text-white transition-all font-semibold">
              Destinations✈️
            </button>
          </Link>
        </div>
      </div>
      <div className="mt-14 lg:mt-0 w-full lg:w-4/5">
        <img src={img} alt="img" />
      </div>
    </div>
  );
};

export default Destination;
