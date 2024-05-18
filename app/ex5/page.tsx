'use client'
import React, { useState } from 'react';
import { MathJax, MathJaxContext } from 'better-react-mathjax';

function page() {
  const mathJaxConfig = {
    displayAlign: "left",
    extensions: ["Tex/color.js"],
    'fast-preview': { disable: false },
    inline: false
  };

  const [a, setrA_floor_zaxis] = useState<number>(18)
  const [b, setrA_G_zaxis] = useState<number>(24)
  const [c, setrB_G_zaxis] = useState<number>(24)
  const [d, setrB_G_yaxis] = useState<number>(18)
  const [theta, setTheta] = useState<number>(30)

  const [sumABC, setSumABC] = useState(0)
  const [weight, setWeight] = useState<number>(100)
  const [Wd, setWd] = useState<number>()

  const [By, setBy] = useState<number>()

  const handleSubmit = () => {
    const hightB = a + b + c
    setSumABC(hightB)

    const Wd = weight * d
    setWd(Wd)

    const By = Wd/(hightB-d)
    setBy(By)
  }
  return (
    <div className="flex w-full h-full">
      <MathJaxContext config={mathJaxConfig}>
        <div className="flex w-full h-full justify-center items-start">
          <div className='flex flex-col w-2/5 h-full items-end justify-start'>
            <div className="relative w-full ">
              <img src="/ex5.jpg" alt="" className="w-full h-full" />

              <div className='absolute top-[54%] left-[0%]'>
                <input
                  type="number"
                  className=" h-10 w-20 border border-gray-400 px-2"
                  name='rAx_B'
                  value={b}
                  placeholder='b'
                  onChange={(e: any) => setrA_G_zaxis(parseFloat(e.target.value))}
                />
                <button className='bg-blue-500 p-2 text-white rounded-r-md'>cm</button>
              </div>

              <div className='absolute top-[72%] left-[0%]'>
                <input
                  type="number"
                  className=" h-10 w-20 border border-gray-400 px-2"
                  name='rAx_B'
                  value={a}
                  placeholder='a'
                  onChange={(e: any) => setrA_floor_zaxis(parseFloat(e.target.value))}
                />
                <button className='bg-blue-500 p-2 text-white rounded-r-md'>cm</button>
              </div>

              <div className='absolute top-[34%] left-[0%]'>
                <input
                  type="number"
                  className=" h-10 w-20 border border-gray-400 px-2"
                  name='rAx_B'
                  value={c}
                  placeholder='c'
                  onChange={(e: any) => setrB_G_zaxis(parseFloat(e.target.value))}
                />
                <button className='bg-blue-500 p-2 text-white rounded-r-md'>cm</button>
              </div>

              <div className='absolute top-[2%] left-[32%]'>
                <input
                  type="number"
                  className=" h-10 w-20 border border-gray-400 px-2"
                  name='rAx_B'
                  value={d}
                  onChange={(e: any) => setrB_G_yaxis(parseFloat(e.target.value))}
                />
                <button className='bg-blue-500 p-2 text-white rounded-r-md'>cm</button>
              </div>

              <div className='absolute bottom-[7%] right-[10%]'>
                <input
                  type="number"
                  className=" h-10 w-20 border border-gray-400 px-2"
                  name='rAx_B'
                  value={theta}
                  placeholder='มุม'
                  onChange={(e: any) => setTheta(parseFloat(e.target.value))}
                />
                <button className='bg-blue-500 p-2 text-white rounded-r-md'>o</button>
              </div>

              <div className='absolute bottom-[40%] right-[10%]'>
                <input
                  type="number"
                  className=" h-10 w-20 border border-gray-400 px-2"
                  name='rAx_B'
                  value={weight}
                  placeholder='weight'
                  onChange={(e: any) => setWeight(parseFloat(e.target.value))}
                />
                <button className='bg-blue-500 p-2 text-white rounded-r-md'>N</button>
              </div>

              <button className=' absolute bottom-[30%] right-[10%] p-3 bg-blue-500 mt-3 rounded-md text-gray-50 hover:bg-blue-600' onClick={handleSubmit}>Calculate</button>
            </div>
          </div>

          {/* ZONE SOLUTION */}
          <div className='flex flex-col gap-3 border p-3 w-3/5'>
            <div className='flex flex-col justify-start items-start border p-1'>
              <p className=' text-lg'>We are asked to determine the components of reaction at hinges A and B if hinge B resists only forces in the x and y directions and A resists forces in the x, y, z directions.</p>

            </div>

            <div className='flex flex-col justify-start items-start border p-1'>
              <p>To find Ay by taking moment along x-axis under equilibrium condition use the following relation.
              </p>
              <MathJax>{`$$\\ A_y(a) + B_y(a+b+c) - W(d) $$`}</MathJax>
              <p>Substitute the known values in the above expression.</p>
              <MathJax>{`$$\\ A_y(${a} cm) - B_y(${a} cm + ${b} cm +${c} cm)  - (${weight} N)(${d} cm) = 0 $$`}</MathJax>
              <MathJax>{`$$\\ A_y = \\frac{${Wd} N\\cdot cm - B_y(${sumABC} cm)}{${a} cm} $$`}</MathJax>
            </div>

            <div className='flex flex-col justify-start items-start border p-1'>
              <p>Find By by adding all the forces along y-axis using the following relation.
              </p>
              <MathJax>{`$$\\ A_y + B_y = 0 $$`}</MathJax>
              <p>Substitute the known values in the above expression.</p>
              <MathJax>{`$$\\ (\\frac{${Wd} N\\cdot cm - B_y(${sumABC} cm)}{${a} cm}) + B_y = 0 $$`}</MathJax>
              <MathJax>{`$$\\ ${Wd} N\\cdot cm - B_y(${sumABC} cm) + B_y(${d} cm) = 0 $$`}</MathJax>
              <MathJax>{`$$\\ B_y = \\frac{${Wd} N\\cdot cm}{${sumABC-d} cm} $$`}</MathJax>
              <MathJax>{`$$\\ B_y = ${By} N $$`}</MathJax>
            </div>

            <div className='flex flex-col justify-start items-start border p-1'>
              <p>To find Ay use the following relation.
              </p>
              <MathJax>{`$$\\ A_y + B_y = 0 $$`}</MathJax>
              <p>Substitute the known values in the above expression.</p>
              <MathJax>{`$$\\ A_y + ${By} N = 0 $$`}</MathJax>
              <MathJax>{`$$\\ A_y = -${By} N$$`}</MathJax>
            </div>

            <div className='flex flex-col justify-start items-start border p-1'>
              <p>Find Az by adding all the forces along z-axis using the following relation.
              </p>
              <MathJax>{`$$\\ A_z - W = 0 $$`}</MathJax>
              <p>Substitute the known values in the above expression.</p>
              <MathJax>{`$$\\ A_z - ${weight}N = 0 $$`}</MathJax>
              <MathJax>{`$$\\ A_z = ${weight}N $$`}</MathJax>
            </div>

            <div className='flex flex-col justify-start items-start border p-1'>
              <p>To find Ax by taking moment along y-axis under equilibrium condition use the following relation.
              </p>
              <MathJax>{`$$\\ A_x(a) + B_x(a + b + c) = 0 $$`}</MathJax>
              <p>Substitute the known values in the above expression.</p>
              <MathJax>{`$$\\ A_x${a} cm - B_x(${a} cm +${b} cm +${c} cm) = 0 $$`}</MathJax>
              <MathJax>{`$$\\ A_x = \\frac{-B_x(${sumABC} cm)}{${a} cm} $$`}</MathJax>
              
            </div>

            <div className='flex flex-col justify-start items-start border p-1'>
              <p>Find Bx by adding all the forces along x-axis using the following relation.
              </p>
              <MathJax>{`$$\\ A_x + B_x = 0 $$`}</MathJax>
              <p>Substitute the known values in the above expression.</p>
              <MathJax>{`$$\\ \\frac{-B_x(${sumABC} cm)}{${a} cm} + B_x = 0 $$`}</MathJax>
              <MathJax>{`$$\\ B_x = 0 $$`}</MathJax>
              
            </div>

            <div className='flex flex-col justify-start items-start border p-1'>
              <p>Find reaction Ax using the following relation.
              </p>
              <MathJax>{`$$\\ A_x + B_x = 0 $$`}</MathJax>
              <p>Substitute the known values in the above expression.</p>
              <MathJax>{`$$\\ A_x + 0 = 0 $$`}</MathJax>
              <MathJax>{`$$\\ A_x = 0 $$`}</MathJax>
              
            </div>
          </div>
        </div>
      </MathJaxContext>
    </div>
  )
}

export default page
