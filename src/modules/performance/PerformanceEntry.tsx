import FramedEntry from "@components/FramedEntry";
import TextEntry from "@components/TextEntry";
import React from "react";

function PerformanceEntry() {
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="flex gap-2 items-center justify-end">
        <p>Cocher si complété</p>
        <div className="w-[20px] h-[20px] border border-2" />
      </div>
      <div className="flex gap-2 justify-between items-center">
        <TextEntry title="Team" />
        <TextEntry title="Heat/Ligne" />
      </div>
      <div className="flex gap-2">
        <TextEntry title="Judge" />
        <div className="flex flex-col gap-2 w-[50%]">
          <FramedEntry title="Time" content="CAP ou Temps" />
          <FramedEntry title="Reps at 16 minutes" content="Si CAP seulement" />
          <FramedEntry title="Signature Team" />
        </div>
      </div>
    </div>
  );
}

export default PerformanceEntry;
