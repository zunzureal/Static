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

  const [l_CB, setl_CB] = useState(0.5);
  const [l_B, setl_B] = useState(0.2);
  const [l_D, setl_D] = useState(0.2);
  const [l_A, setl_A] = useState(0.1);
  const [F, setF] = useState(400);

  const [ang_a, setang_a] = useState(0);
  const [ang_b, setang_b] = useState(0)
  const [len_w, setlen_w] = useState(0);
  const [aForce, setaForce] = useState(0);
  const [bForce, setbForce] = useState(0);

  function handleSubmit() {

    const ang_b = Math.atan(l_D / l_B) * (180 / Math.PI) //หามุมที่จุด B กระทำต่อแนวระนาบ
    const ang_bFloat = parseFloat(ang_b.toFixed(2));
    setang_b(ang_bFloat)

    const angle_bRad = ang_b * Math.PI / 180; //เปลี่ยนจาก Degree เป็น radian

    const l_horizon = l_CB / Math.tan(angle_bRad) //หาความยาวของเส้นที่ลากจาก CB ไปยังเส้นขนานที่ ลากจากมุม B มาตัด

    const len_plus = l_horizon - l_A;
    const updatedLenW = parseFloat(len_plus.toFixed(2));
    setlen_w(updatedLenW);

    const ang_tan = Math.atan((l_D + l_CB) / updatedLenW) * (180 / Math.PI); //หามุมที่จุด A กระทำต่อแนวระนาบ
    const ang_aFloat = parseFloat(ang_tan.toFixed(2));
    setang_a(ang_aFloat);

    const angle_aRad = ang_aFloat * Math.PI / 180; //เปลี่ยนจาก Degree เป็น radian

    const bForce_cal = -1 * F / (((Math.sin(angle_bRad) * Math.cos(angle_aRad)) / Math.sin(angle_aRad)) - Math.cos(angle_bRad)); //หาแรงปฏิกิริยาที่จุด A
    const bForce_calFloat = parseFloat(bForce_cal.toFixed(2));
    setbForce(bForce_calFloat);

    const aForce_cal = (bForce_cal * Math.sin(angle_bRad)) / Math.sin(angle_aRad)
    const aForce_calFloat = parseFloat(aForce_cal.toFixed(2));
    setaForce(aForce_calFloat);

  }
  return (
    <div className="w-full h-full">
      <MathJaxContext config={mathJaxConfig}>
        <div className="flex w-[1280px] h-auto">
          <div className="flex-col w-[500px] h-[500px]">
            <div className="relative h-[450px]">
              <img src="/ex3.jpg" alt="" className="w-full h-full object-contain" />
              <input
                type="number"
                className="absolute top-[30%] left-[54%] h-10 w-16 border border-gray-400 px-2"
                name='l_CB'
                value={l_CB}
                onChange={(e) => setl_CB(parseFloat(e.target.value))}
              />
              <input
                type="number"
                className="absolute top-[39%] left-[32%] h-10 w-16 border border-gray-400 px-2"
                name='l_B'
                value={l_B}
                onChange={(e) => setl_B(parseFloat(e.target.value))}
              />
              <input
                type="number"
                className="absolute top-[59%] left-[8%] h-10 w-16 border border-gray-400 px-2"
                name='l_D'
                value={l_D}
                onChange={(e) => setl_D(parseFloat(e.target.value))}
              />
              <input
                type="number"
                className="absolute top-[87%] left-[43%] h-10 w-16 border border-gray-400 px-2"
                name='l_A'
                value={l_A}
                onChange={(e) => setl_A(parseFloat(e.target.value))}
              />
              <input
                type="number"
                className="absolute top-[3%] left-[57%] h-10 w-16 border border-gray-400 px-2"
                name='F'
                value={F}
                onChange={(e) => setF(parseFloat(e.target.value))}
              />

            </div>
            <div className="flex w-full items-end">
              <button className='mr-[50px] ml-auto p-3 bg-blue-500 mt-3 rounded-md text-gray-50 hover:bg-blue-600' onClick={handleSubmit}>Calculate</button>
            </div>
          </div>

          <div className="flex flex-col border p-3 h-auto w-[700px]">
            <div className="flex w-full h-1/2 mb-[5px]">
              <div className="flex-col w-1/2 h-full mt-[5px] mr-[5px] border">
                <p className="mb-[10px] ml-[5px] mt-[5px]">หามุมของแรงปฏิกิริยา A กระทำกับแนวระนาบ</p>
                <div className="mb-[10px] ml-[10px]">
                  <MathJax inline>{`\\( \\theta = \\tan^{-1}\\left(\\frac{${l_D} + ${l_CB}}{${len_w}}\\right) \\)`}</MathJax>
                </div>
                <div className="ml-[10px]">
                  <MathJax className="mb-[10px]">{`\\( \\theta = ${ang_a}^o \\)`}</MathJax>
                </div>
              </div>
              <div className="flex-col w-1/2 h-full mt-[5px] border">
                <p className="mb-[10px] ml-[5px] mt-[5px]">หามุมของแรงปฏิกิริยา B กระทำกับแนวระนาบ</p>
                <div className="mb-[10px] ml-[10px]">
                  <MathJax inline>{`\\( \\tan \\theta = \\frac{${l_D}}{${l_B}} \\)`}</MathJax>
                </div>
                <div className="ml-[10px]">
                  <MathJax>{`\\( \\theta = ${ang_b}^o \\)`}</MathJax>
                </div>
              </div>
            </div>
            <div className="flex-col w-full h-1/2 border p-1 mt-[5px]">
              <p className="mb-[5px] mt-[5px] ml-[5px]">พิจารณาหาแรงปฏิกิริยาที่จุด A และจุด B </p>
              <div className="mb-[10px] ml-[5px]">
                <MathJax inline>{`\\( \\sum F_x = 0 ; F_A \\cos( ${ang_a} ) - F_B \\cos( ${ang_b} ) + ${F} = 0 \\)`}</MathJax>
              </div>
              <div className="mb-[10px] ml-[5px]">
                <MathJax >{`\\( \\sum F_y = 0 ; F_A \\sin( ${ang_a} ) - F_B \\sin( ${ang_b} ) = 0 \\)`}</MathJax>
              </div>
              <div className="mb-[10px] ml-[5px]">
                <MathJax >{`\\( \\ F_A = ${aForce} N \\)`}</MathJax>
              </div>
              <div className="mb-[10px] ml-[5px]">
                <MathJax >{`\\( \\ F_B = ${bForce} N \\)`}</MathJax>
              </div>
            </div>
          </div>
        </div>
      </MathJaxContext>
    </div>
  )
}

export default Page
