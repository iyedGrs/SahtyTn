/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { memo } from "react";

const SlideContent = memo(({ title, subtitle, text, spansub }) => {
  return (
    <div>
      <div>
        <p className="text-2xl text-blue-600 mb-20">{title}</p>
        <p className="uppercase font-bold text-5xl mb-10 ">
          {subtitle}
          <span className="block mt-2">
            {" "}
            your <span className="text-blue-700">{spansub} </span>
          </span>
        </p>
      </div>
      <div className="flex flex-col gap-10 items-start">
        <p className="w-3/5 text-xl font-semibold">{text}</p>
      </div>
    </div>
  );
});

export default SlideContent;
