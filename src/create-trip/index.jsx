import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

const CreateTrip = () => {
  const [place, setPlace] = useState();
  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10">
      <h2 className="font-bold text-3xl">Tell us your travel preferences</h2>
      <p className="mt-3 text-grey-500 text-xl">
        Just provide some basic information, and our trip planner will generate
        a customized itinerary based on your preferences.
      </p>
      <div className="mt-20 flex flex-col gap-10">
        <div>
          <h2 className="text-xl my-3 font-medium">
            What is destination of choise?
          </h2>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
            selectProps={{
              place,
              onChange: (v) => {
                setPlace(v);
                console.log(place);
              },
            }}
          />
        </div>
        <div>
          <h2 className="text-xl my-3 font-medium">
            How many days are you planning your trip?
          </h2>
          <Input type={"number"} placeholder={"ex: 3...."} />
        </div>
      </div>
      <div>
        <h2 className="text-xl my-3 font-medium">What is your budget?</h2>
      </div>
    </div>
  );
};

export default CreateTrip;
