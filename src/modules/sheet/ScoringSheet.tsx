import React from "react";

import PerformanceEntry from "@app/modules/performance/PerformanceEntry";
import WorkoutRecap from "@app/modules/sheet/WorkoutRecap";
import WorkoutScoring from "@app/modules/sheet/WorkoutScoring";

function ScoringSheet() {
  return (
    <div className="w-[64rem] flex flex-col gap-4">
      <WorkoutRecap />
      <WorkoutScoring />
      <PerformanceEntry />
    </div>
  );
}

export default ScoringSheet;
