import React from "react";
import SavedShows from "../components/SavedShows";
// test commit
const Account = () => {
  return (
    <>
      <div className="w-full text-white">
      <img
        className="w-full h-[400px] bject-cover "
        src="https://assets.nflxext.com/ffe/siteui/vlv3/5ea364b1-8e59-4693-8ad8-f0eaee32d1bf/8521927a-abf7-498a-9bda-de3c0ac9e526/TR-tr-20220530-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt=""
      />
      <div className="fixed top-0 left-0 w-full bg-black/60 h-[550px]">
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text-3xl font-bold md:text-5xl">My Shows</h1>
        </div>
      </div>
      </div>
      <SavedShows />
    </>
  );
};

export default Account;
