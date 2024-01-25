import React, { useState } from "react";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Accordion = ({ avatar, name, position, review }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div className="flex gap-4 mt-8 shadow-lg p-8">
        <img src={avatar} className=" w-24 h-24 object-fit object-center" />
        <div className="ml-8">
          <div>
            <p className="text-lg font-bold">{name}</p>
            <p className="text-cyan-500">{position}</p>
          </div>
          <div className="flex mt-4 gap-8 ">
            <p className={!expanded ? "line-clamp-3 text-sm md:text-base" : "text-sm md:text-base"}>{review}</p>
            {expanded && (
              <button
                onClick={() => setExpanded(false)}
                className="flex items-center rounded-full h-4 ml-4 py-4 px-2 bg-slate-200 text-orange-300 "
              >
                <FontAwesomeIcon icon={faMinus} />
              </button>
            )}
            {!expanded && (
              <button
                onClick={() => setExpanded(true)}
                className="flex items-center rounded-full h-4 ml-4 py-4 px-2 bg-slate-200 text-orange-300 "
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordion;
