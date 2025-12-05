// src/components/Square.jsx
import React, {useState} from "react";


/**
 * Square — a tiny presentational component.
 * Right now it only renders a button with some text.
 * No state, no props — pure and simple.
 */
export default function Square({ value, onClick }) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}
