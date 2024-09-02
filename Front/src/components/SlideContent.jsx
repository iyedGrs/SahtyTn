/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { memo } from "react";

const SlideContent = memo(({ title, subtitle, text, spansub }) => {
  return (
    <div>
      <div className="font-Nunito">
        <p className="text-5xl text-[#0D3B66] mb-10">{title}</p>
        <p className="uppercase font-bold text-4xl mb-10 ">
          {subtitle}
          <span className="block mt-2">
            {" "}
            your <span className="text-[#fff]">{spansub} </span>
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
