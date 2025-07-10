import React, { memo } from "react";

interface SlideContentProps {
  title: string;
  subtitle: string;
  text: string;
  spansub: string;
}

const SlideContent: React.FC<SlideContentProps> = memo(({ title, subtitle, text, spansub }) => {
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

SlideContent.displayName = "SlideContent";

export default SlideContent;
