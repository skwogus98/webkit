import React from "react";
import Twit from "./component/Twit";
import twits from "./json/twits.json";
import { useEffect, useState } from "react";

function Main() {
  const [twitText, setTwitText] = useState("");
  return (
    <div className="w-1/2 border-l-2 border-r-2 min-h-screen p-4">
      <div className="my-2">
        <textarea
          className="w-full h-24 border-2 border-black-200 rounded-md p-2"
          onChange={(e) => setTwitText(e.target.value)}
          maxLength={256}
        ></textarea>
        <div className="flex justify-between text-sm my-2">
          <div
            className={
              twitText.replace(/<br\s*\/?>/gm, "\n").length < 256
                ? "text-gray-300"
                : "text-red-400"
            }
          >
            ( {twitText.replace(/<br\s*\/?>/gm, "\n").length} / 256 )
          </div>
          <div>
            <div>
              <button className="bg-sky-300 px-2 py-1 rounded-lg">게시</button>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      {twits.map((twitData, idx) => {
        return <Twit twitData={twitData} key={idx}></Twit>;
      })}
    </div>
  );
}

export default Main;
