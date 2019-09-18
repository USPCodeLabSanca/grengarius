import React from "react";

export function useFullHeightOnNextDiv(){
  React.useEffect(()=>{
    const div = document.getElementById("__next");
    div.classList.add("h-screen");
    div.style.display = "grid";
    div.style.gridTemplateRows = "58px calc(100vh - 58px)";
  }, []);
}