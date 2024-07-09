import React from "react";

import AvailableMovements from "@app/modules/movements/AvailableMovements";
import ScoringSheet from "@app/modules/sheet/ScoringSheet";

function App() {
  return (
    <div className="h-full w-full flex flex-col items-center gap-4">
      <AvailableMovements />
      <ScoringSheet />
    </div>
  );
}

export default App;
