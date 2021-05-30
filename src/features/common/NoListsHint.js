import React from "react";
import emptyVector from "./empty-vector.svg";

const NoListHint = () => (
    <div
        className="p-8 mx-auto mt-8 text-center bg-white rounded shadow-sm"
        style={{ width: "min(70vw, 25rem)" }}
    >
        <img
            src={emptyVector}
            alt="Create tasks"
            className="px-8"
            style={{ filter: "grayscale(1)" }}
        />
        <p className="mt-8 text-xl">Select a list on the left to add tasks</p>
    </div>
);

export default NoListHint;
