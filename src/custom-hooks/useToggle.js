import React, { useState } from "react";

function useToggle(defaultVal ) {
  const [value, setValue] = useState(defaultVal);
  function toggleVal(val) {
    if (typeof val !== "boolean") {
      setValue(!value);
    } else {
      setValue(val);
    }
  }
  return [value, toggleVal];
}

export default useToggle;
