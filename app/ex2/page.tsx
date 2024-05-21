// ChatGPT โคตรโหดอะคับน้อนๆ

"use client"
import React, { useState } from 'react';
import { MathJax, MathJaxContext } from 'better-react-mathjax';

function Page() {
  const mathJaxConfig = {
    displayAlign: "left", // Set display alignment to left
    extensions: ["TeX/color.js"],
    'fast-preview': { disabled: false },
    inline: false
  };

  const [T_angle, setT_angle] = useState(30); // Angle in degrees
  const [T_AB, setT_AB] = useState(0);
  const [C_x, setC_x] = useState(0);
  const [C_y, setC_y] = useState(0);
  const [forceDownA, setForceDownA] = useState(3); // Force at point A in kN
  const [forceDownB, setForceDownB] = useState(4); // Force at point B in kN
  const d = 2;

  const handleSubmit = () => {
    const cos = Math.cos((Math.PI / 180) * T_angle);
    const sin = Math.sin((Math.PI / 180) * T_angle);

    // Moment equation to solve for T_AB
    // T_AB * cos(30) * 2 + T_AB * sin(30) * 4 - 3 * 2 - 4 * 4 = 0
    const T_AB_value = (forceDownA * d + forceDownB * 2 * d) / (cos * d + sin * 2 * d);
    setT_AB(parseFloat(T_AB_value.toFixed(2)));

    // Horizontal force equilibrium to solve for C_x
    // C_x - T_AB * cos(30) = 0
    const C_x_value = T_AB_value * cos;
    setC_x(parseFloat(C_x_value.toFixed(2)));

    // Vertical force equilibrium to solve for C_y
    // C_y + T_AB * sin(30) - 3 - 4 = 0
    const C_y_value = 3 + 4 - T_AB_value * sin;
    setC_y(parseFloat(C_y_value.toFixed(2)));
  };

  return (
    <div className="flex w-full h-full">
      <MathJaxContext config={mathJaxConfig}>
        <div className="flex w-full h-full justify-center items-center">
          <div className='flex flex-col w-2/5 items-end justify-start'>
            <div className="relative w-full">
              <img src="/pic2.jpg" alt="" className="w-full" />

              <input
                type="number"
                className="absolute top-[32%] left-[36%] h-10 w-16 border border-gray-400 px-2"
                name='T_angle'
                value={T_angle}
                onChange={(e) => setT_angle(parseFloat(e.target.value))}
              />
              <input
                type="number"
                className="absolute bottom-[10%] left-[29%] h-10 w-12 border border-gray-400 px-2"
                name='forceDownA'
                value={forceDownA}
                onChange={(e) => setForceDownA(parseFloat(e.target.value))}
              />
              <input
                type="number"
                className="absolute bottom-[9%] right-[35%] h-10 w-12 border border-gray-400 px-2"
                name='forceDownB'
                value={forceDownB}
                onChange={(e) => setForceDownB(parseFloat(e.target.value))}
              />

            </div>
            <button className='p-3 bg-blue-500 mt-3 rounded-md text-gray-50 hover:bg-blue-600' onClick={handleSubmit}>Calculate</button>
          </div>

          {/* ZONE SOLUTION */}
          <div className='grid grid-cols-2 gap-4 border p-3 w-3/5 scale-90'>

            <div className='flex flex-col col-span-2 justify-start items-start border p-1'>
              <MathJax>{`$$\\sum M_C = 0 $$`}</MathJax>
              <p>Thus,</p>
              <MathJax>{`$$(T_{AB} \\cos(${T_angle}^\\circ) \\cdot 2) + (T_{AB} \\sin(${T_angle}^\\circ) \\cdot 4) - (${forceDownA} \\cdot 2) - (${forceDownB} \\cdot 4) = 0$$`}</MathJax>
              <MathJax>{`$$T_{AB} = ${T_AB} \\text{kN}$$`}</MathJax>
            </div>

            <div className='flex flex-col justify-start items-start border p-1'>
              <MathJax>{`$$\\sum F_x = 0 $$`}</MathJax>
              <p>Thus,</p>
              <MathJax>{`$$C_x = T_{AB} \\cos(${T_angle}^\\circ)$$`}</MathJax>
              <MathJax>{`$$C_x = ${C_x} \\text{kN}$$`}</MathJax>
            </div>

            <div className='flex flex-col justify-start items-start border p-1'>
              <MathJax>{`$$\\sum F_y = 0 $$`}</MathJax>
              <p>Thus,</p>
              <MathJax>{`$$C_y + T_{AB} \\sin(${T_angle}^\\circ) - ${forceDownA} - ${forceDownB} = 0$$`}</MathJax>
              <MathJax>{`$$C_y = ${C_y} \\text{kN}$$`}</MathJax>
            </div>
          </div>
        </div>
      </MathJaxContext>
    </div>
  );
}

export default Page;
