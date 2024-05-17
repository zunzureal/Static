'use client'
import React, { useState } from 'react';
import { MathJax, MathJaxContext } from 'better-react-mathjax';

function Page() {
  const mathJaxConfig = {
    displayAlign: "left", // Set display alignment to left
    extensions: ["TeX/color.js"],
    'fast-preview': { disabled: false },
    inline: false
  };

  const [A,setA] = useState(0)
  const [Ax,setAx] = useState(0)
  const [Ay,setAy] = useState(0)
  const [B,setB] = useState(0)
  const [theta,setTheta] = useState(0)

  const [rAx_B,setrAx_B] = useState(0)
  const [rB_Crane,setrB_Crane] = useState(0)
  const [rCrane_Box,setrCrane_Box] = useState(0)

  const [weightBox,setweightBox] = useState(0)
  const [weightCrane,setweightCrane] = useState(0)

const handleSubmit = () =>{
  console.log(rAx_B,rB_Crane,rCrane_Box,weightBox,weightCrane)
  const calculateB = rB_Crane * weightCrane *1000 + (rCrane_Box+rB_Crane) * weightBox*1000
  setB(calculateB/rAx_B)
}
  return (
    <div className="flex w-screen h-screen">
      <MathJaxContext config={mathJaxConfig}>
        <div className="flex w-full h-full justify-center items-center">
          <div className=' flex flex-col w-2/4 items-end justify-start'>
            <div className="relative w-4/5 ">
              <img src="/pic.jpg" alt="" className="w-full" />
              <input
                type="number"
                className="absolute top-[54%] left-[1%] h-10 w-16 border border-gray-400 px-2"
                name='rAx_B'
                value={rAx_B}
                onChange={(e)=>setrAx_B(e.target.value)}
              />
              <input
                type="number"
                className="absolute top-[34%] right-[8%] h-10  w-24 border border-gray-400 px-2"
                name='weightBox'
                value={weightBox}
                onChange={(e)=>setweightBox(e.target.value)}
              />
              <input
                type="number"
                className="absolute top-[67%] left-[35%] h-10 w-20 border border-gray-400 px-2"
                name='weightCrane'
                value={weightCrane}
                onChange={(e)=>setweightCrane(e.target.value)}
              />
              <input
                type="number"
                className="absolute top-[82%] left-[27%] h-10  w-10 border border-gray-400 p-1"
                name='rB_Crane'
                value={rB_Crane}
                onChange={(e)=>setrB_Crane(e.target.value)}
              />
              <input
                type="number"
                className="absolute top-[82%] right-[34%] h-10 w-10 border border-gray-400 p-1"
                name='rCrane_Box'
                value={rCrane_Box}
                onChange={(e)=>setrCrane_Box(e.target.value)}
              />
            </div>
            <button className=' p-3  bg-blue-500 mt-3 rounded-md text-gray-50 hover:bg-blue-600' onClick={handleSubmit}>Calculate</button>
          </div>

          {/* ZONE SOLUTION */}
          <div className=' grid grid-cols-2 gap-4 border p-3 w-2/4 scale-90'>

            <div className='flex flex-col justify-start items-start border p-1'>
              <MathJax>{`$$\\sum M_A = 0 $$`}</MathJax>
              <p>จะได้</p>
              <MathJax>{`$$\\ ${rAx_B}B - ${rB_Crane}(${weightCrane}) - ${rCrane_Box + rB_Crane}(${weightBox}) = 0 $$`}</MathJax>
              <MathJax>{`$$\\ B = ${B}kN Ans $$`}</MathJax>
            </div>

            <div className='flex flex-col justify-start items-start border p-1'>
              <MathJax>{`$$\\sum F_x = 0 $$`}</MathJax>
              <p>จะได้</p>
              <MathJax>{`$$\\ A_x + B = 0 $$`}</MathJax>
              <MathJax>{`$$\\ A_x + 107.26 = 0 $$`}</MathJax>
              <MathJax>{`$$\\ A_x = -107.26kN Ans $$`}</MathJax>
            </div>

            <div className='flex flex-col justify-start items-start border p-1'>
              <MathJax>{`$$\\sum F_y = 0 $$`}</MathJax>
              <p>จะได้</p>
              <MathJax>{`$$\\ A_y - 9810 - 23544 = 0 $$`}</MathJax>
              <MathJax>{`$$\\ A_y = 33.4kN Ans $$`}</MathJax>
            </div>

            <div className='flex flex-col justify-start items-start border p-1'>
              <h1 className=' text-lg font-bold'>พิจารณาแรงแฎิกิริยาที่จุด A</h1>
              <p>จะได้</p>
              <MathJax>{`$$\\ A = \\sqrt{(107.26)^2+(33.4)^2} $$`}</MathJax>
              <MathJax>{`$$\\ A = 112.3kN $$`}</MathJax>
              <MathJax>{`$$ \\theta = \\tan^{-1}\\left(\\frac{33.4}{112.3}\\right) = 17.3^o Ans $$`}</MathJax>
            </div>

          </div>
        </div>
      </MathJaxContext>
    </div>
  );
}

export default Page;
