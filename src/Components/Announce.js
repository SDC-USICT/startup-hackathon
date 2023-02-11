import React from "react";

function Announce({ time, title, content }) {
  return (
    <div>
      {" "}
      <div className=" bg-[#232731] px-12 py-8 text-slate-400 rounded-lg mt-8">
        <div>
          <div className="text-slate-200 text-sm">{time}</div>
          <div className="text-lred text-xl">{title}</div>
          <div>{content}</div>
        </div>
      </div>
    </div>
  );
}

export default Announce;
