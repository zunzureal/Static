'use client'
import React from 'react';
import { MathJax,MathJaxContext } from "better-react-mathjax";
export default function Home() {
  return (
    <div>
      <MathJaxContext>
        <h2>Basic MathJax example with Latex</h2>
        <MathJax>{"\\(\\frac{10}{4x} \\approx 2^{12}\\)"}</MathJax>
      </MathJaxContext>
    </div>
  );
}
