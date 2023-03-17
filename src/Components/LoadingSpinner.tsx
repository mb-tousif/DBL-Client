import React from "react";
import { RotatingLines } from "react-loader-spinner";

export default function LoadingSpinner() {
  return (
    <div className="flex justify-center" >
      <RotatingLines
        strokeColor="#fca5a5"
        strokeWidth="5"
        animationDuration="2"
        width="140"
        visible={true}
      />
    </div>
  );
}
