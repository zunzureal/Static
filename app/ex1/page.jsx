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

  const [A, setA] = useState(0);
  const [Ax, setAx] = useState(0);
  const [Ay, setAy] = useState(0);
  const [B, setB] = useState(0);
  const [theta, setTheta] = useState(0);

  const [rAx_B, setrAx_B] = useState(1.5);
  const [rB_Crane, setrB_Crane] = useState(2);
  const [rCrane_Box, setrCrane_Box] = useState(4);
  const [rSum_B_Box, setSum] = useState(0);
  const [weightBox, setweightBox] = useState(23.544);
  const [weightCrane, setweightCrane] = useState(9.81);

  const handleSubmit = () => {
    // Parse input values
  const rCrane_BoxFloat = parseFloat(rCrane_Box);
  const rB_CraneFloat = parseFloat(rB_Crane);
  const weightCraneFloat = parseFloat(weightCrane);
  const weightBoxFloat = parseFloat(weightBox);
  const rAx_BFloat = parseFloat(rAx_B);

  // Calculate rSum
  const rSum = rCrane_BoxFloat + rB_CraneFloat;
  setSum(rSum.toFixed(2)); // Set rSum to 2 decimal places

  // Calculate B
  const calculateB = (rB_CraneFloat * weightCraneFloat + rSum * weightBoxFloat) / rAx_BFloat;
  setB(calculateB.toFixed(2)); // Set B to 2 decimal places

  // Calculate Ax
  const calculateAx = -calculateB;
  setAx(calculateAx.toFixed(2)); // Set Ax to 2 decimal places

  // Calculate Ay
  const calculateAy = weightCraneFloat + weightBoxFloat;
  setAy(calculateAy.toFixed(2)); // Set Ay to 2 decimal places

  // Calculate A (resultant force at A)
  const calculateA = Math.sqrt(Math.pow(calculateB, 2) + Math.pow(calculateAy, 2));
  setA(calculateA.toFixed(2)); // Set A to 2 decimal places

  // Calculate theta (angle)
  const calculateTheta = Math.atan(calculateAy / calculateB) * (180 / Math.PI); // Convert to degrees
  setTheta(calculateTheta.toFixed(2)); // Set theta to 2 decimal places
  }

  return (
    <div className="flex w-full h-full">
      <MathJaxContext config={mathJaxConfig}>
        <div className="flex w-full h-full justify-center items-center">
          <div className='flex flex-col w-2/5 items-end justify-start'>
            <div className="relative w-full ">
              <img src="/pic.jpg" alt="" className="w-full" />
              <input
                type="number"
                className="absolute top-[54%] left-[0%] h-10 w-14 border border-gray-400 px-2"
                name='rAx_B'
                value={rAx_B}
                onChange={(e) => setrAx_B(parseFloat(e.target.value))}
              />
              <input
                type="number"
                className="absolute top-[34%] right-[8%] h-10 w-24 border border-gray-400 px-2"
                name='weightBox'
                value={weightBox}
                onChange={(e) => setweightBox(parseFloat(e.target.value))}
              />
              <input
                type="number"
                className="absolute top-[67%] left-[32%] h-10 w-20 border border-gray-400 px-2"
                name='weightCrane'
                value={weightCrane}
                onChange={(e) => setweightCrane(parseFloat(e.target.value))}
              />
              <input
                type="number"
                className="absolute top-[82%] left-[27%] h-10 w-10 border border-gray-400 p-1"
                name='rB_Crane'
                value={rB_Crane}
                onChange={(e) => setrB_Crane(parseFloat(e.target.value))}
              />
              <input
                type="number"
                className="absolute top-[82%] right-[34%] h-10 w-10 border border-gray-400 p-1"
                name='rCrane_Box'
                value={rCrane_Box}
                onChange={(e) => setrCrane_Box(parseFloat(e.target.value))}
              />
            </div>
            <button className='p-3 bg-blue-500 mt-3 rounded-md text-gray-50 hover:bg-blue-600' onClick={handleSubmit}>Calculate</button>
          </div>

          {/* ZONE SOLUTION */}
          <div className='grid grid-cols-2 gap-4 border p-3 w-3/5 scale-90'>

            <div className='flex flex-col justify-start items-start border p-1'>
              <MathJax>{`$$\\sum M_A = 0 $$`}</MathJax>
              <p>จะได้</p>
              <MathJax>{`$$\\ ${rAx_B}B - ${rB_Crane}(${weightCrane}) - ${rSum_B_Box}(${weightBox}) = 0 $$`}</MathJax>
              <MathJax>{`$$\\ B = ${B}kN Ans $$`}</MathJax>
            </div>

            <div className='flex flex-col justify-start items-start border p-1'>
              <MathJax>{`$$\\sum F_x = 0 $$`}</MathJax>
              <p>จะได้</p>
              <MathJax>{`$$\\ A_x + B = 0 $$`}</MathJax>
              <MathJax>{`$$\\ A_x + ${B} = 0 $$`}</MathJax>
              <MathJax>{`$$\\ A_x = ${Ax}kN Ans $$`}</MathJax>
            </div>

            <div className='flex flex-col justify-start items-start border p-1'>
              <MathJax>{`$$\\sum F_y = 0 $$`}</MathJax>
              <p>จะได้</p>
              <MathJax>{`$$\\ A_y - ${weightCrane} - ${weightBox} = 0 $$`}</MathJax>
              <MathJax>{`$$\\ A_y = ${Ay}kN Ans $$`}</MathJax>
            </div>

            <div className='flex flex-col justify-start items-start border p-1'>
              <h1 className='text-lg font-bold'>พิจารณาแรงแฎิกิริยาที่จุด A</h1>
              <p>จะได้</p>
              <MathJax>{`$$\\ A = \\sqrt{(${B})^2+(${Ay})^2} $$`}</MathJax>
              <MathJax>{`$$\\ A = ${A}kN $$`}</MathJax>
              <MathJax>{`$$ \\theta = \\tan^{-1}\\left(\\frac{${Ay}}{${A}}\\right) = ${theta}^o Ans $$`}</MathJax>
            </div>

          </div>
        </div>
      </MathJaxContext>
    </div>
  );
}

export default Page;
