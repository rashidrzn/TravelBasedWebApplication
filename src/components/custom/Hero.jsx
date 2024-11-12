import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex flex-col items-center mx-56 gap-9">
      <h2 className="font-extrabold text-[50px] mt-16  text-center ">
        <span className="text-[#f56551]">
          {" "}
          Discover Your Next Adventure with AI:{" "}
        </span>{" "}
        <br />
        <br />
        Personalized Itineraries at Your Fingertips
      </h2>
      <p className="text-xl text-center">
        Your personal trip planner and travel curator, creating custom
        itineraries tailored to your interests and budget.
      </p>
      <Link to={"/create-trip"}>
        <Button>Get Started, It's Freee</Button>
      </Link>
    </div>
  );
};

export default Hero;
