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

  const [c_y, setc_y] = useState<number>(10);
  const [c_x, setc_x] = useState<number>(15);

  const [a_x, seta_x] = useState<number>(3);
  const [a_y, seta_y] = useState<number>(2);

  const [len_arm, setlen_arm] = useState<number>(24);

  const [F, setF] = useState<number>(840);

  const [vectorBC, setVectorBC] = useState<number[]>([0, 0, 0]);
  const [vectorF, setVectorF] = useState<number[]>([0, 0, 0]);
  const [vectorAC, setVectorAC] = useState<number[]>([0, 0, 0]);
  const [vectorConverter, setVectorConverter] = useState<number[]>([0, 0, 0]);

  const [matrix_i, getmatrixi] = useState<number>(0);
  const [matrix_j, getmatrixj] = useState<number>(0);

  const [M_A_X_result, getM_A_X_result] = useState<number>(0);
  const [M_A_Y_result, getM_A_Y_result] = useState<number>(0);


  function handleSubmit() {

    const vector_i = c_x - a_x;
    const vector_j = c_y - a_y;
    const vector_k = 0 - len_arm;

    const vectorAB = [vector_i, vector_j, vector_k];

    setVectorBC([vector_i, vector_j, vector_k]);

    // Define the scaling factor
    const scalingFactor = F;

    // Calculate the magnitude of the vector
    const magnitude = Math.sqrt(vector_i ** 2 + vector_j ** 2 + vector_k ** 2);

    // Normalize the vector by dividing each component by the magnitude
    const normalizedI = vector_i / magnitude;
    const normalizedJ = vector_j / magnitude;
    const normalizedK = vector_k / magnitude;

    // Scale the normalized vector by the scaling factor
    const scaledI = parseFloat((scalingFactor * normalizedI).toFixed(2));
    const scaledJ = parseFloat((scalingFactor * normalizedJ).toFixed(2));
    const scaledK = parseFloat((scalingFactor * normalizedK).toFixed(2));

    // Store the scaled vector components in an array
    const scaledVector = [scaledI, scaledJ, scaledK];
    setVectorF([scaledI, scaledJ, scaledK]);

    setVectorConverter([-scaledI, -scaledJ, -scaledK]);

    const vector_ac_i = c_x - 0;
    const vector_ac_j = c_y - 0;
    const vector_ac_k = 0 - 0;

    const matrix_i = parseFloat((c_y * scaledK).toFixed(2));
    const matrix_j = parseFloat((-c_x * scaledK).toFixed(2));

    getmatrixi(matrix_i);
    getmatrixj(matrix_j);
    
    const M_A_X_result = (-(matrix_i / 1000)).toFixed(2);
    const M_A_Y_result = (-(matrix_j / 1000)).toFixed(2);

    getM_A_X_result(M_A_X_result);
    getM_A_Y_result(M_A_Y_result);

    // console.log('matrix_i:', matrix_i);
    // console.log('matrix_j:', matrix_j);

  }
  return (
    <div className="w-full h-full">
      <MathJaxContext config={mathJaxConfig}>
        <div className="flex w-[1280px] h-auto">
          <div className="flex-col w-[500px] h-[500px]">
            <div className="relative h-[450px]">
              <img src="/ex4.jpg" alt="" className="w-full h-full object-contain" />
              <input
                type="number" //F
                className="absolute top-[30%] left-[54%] h-10 w-16 border border-gray-400 px-2"
                name='F'
                value={F}
                onChange={(e) => setF(parseFloat(e.target.value))}
              />
              <input
                type="number" //length A arm
                className="absolute top-[42%] left-[22%] h-10 w-16 border border-gray-400 px-2"
                name='len_arm'
                value={len_arm}
                onChange={(e) => setlen_arm(parseFloat(e.target.value))}
              />
              <input
                type="number" //A-x
                className="absolute top-[69%] left-[38%] h-10 w-16 border border-gray-400 px-2"
                name='a_y'
                value={a_y}
                onChange={(e) => seta_y(parseFloat(e.target.value))}
              />
              <input
                type="number" //C-y
                className="absolute top-[87%] left-[53%] h-10 w-16 border border-gray-400 px-2"
                name='c_y'
                value={c_y}
                onChange={(e) => setc_y(parseFloat(e.target.value))}
              />
              <input
                type="number" //C-x
                className="absolute top-[67%] left-[63%] h-10 w-16 border border-gray-400 px-2"
                name='c_x'
                value={c_x}
                onChange={(e) => setc_x(parseFloat(e.target.value))}
              />
              <input
                type="number" //A-y
                className="absolute top-[57%] left-[43%] h-10 w-16 border border-gray-400 px-2"
                name='a_x'
                value={a_x}
                onChange={(e) => seta_x(parseFloat(e.target.value))}
              />

            </div>
            <div className="flex w-full items-end">
              <button className='mr-[50px] ml-auto p-3 bg-blue-500 mt-3 rounded-md text-gray-50 hover:bg-blue-600' onClick={handleSubmit}>Calculate</button>
            </div>
          </div>

          <div className="flex flex-col border p-3 h-auto w-[700px]">
            <div className="flex w-full h-1/2 mb-[5px] w-[1355px] h-[450px]">
              <div className="flex-col w-1/2 h-full mt-[5px] mr-[5px] border">
                <div className="mb-[10px] ml-[10px]">
                  <MathJax inline>{`$$\\ r_{BC}   = ( ${c_x} - ${a_x} )i + ( ${c_y} - ${a_y} )j + ( 0 - 0 )k $$`}</MathJax>
                  <MathJax inline>{`$$ r_{BC} = \\ ${Math.sign(vectorBC[0]) === -1 ? '-' : '+'}${Math.abs(vectorBC[0])}i  ${Math.sign(vectorBC[1]) === -1 ? '-' : '+'}${Math.abs(vectorBC[1])}j  ${Math.sign(vectorBC[2]) === -1 ? '-' : '+'}${Math.abs(vectorBC[2])}k \\ $$`}</MathJax>
                </div>
                <div className="ml-[10px]">
                  <MathJax inline>{`$$ F = ${F} \\left[ \\frac{${Math.sign(vectorBC[0]) === -1 ? '-' : '+'}${Math.abs(vectorBC[0])}\\mathbf{i} + ${Math.sign(vectorBC[1]) === -1 ? '-' : '+'}${Math.abs(vectorBC[1])}\\mathbf{j} - ${Math.sign(vectorBC[2]) === -1 ? '-' : '+'}${Math.abs(vectorBC[2])}\\mathbf{k}}{\\sqrt{(${Math.sign(vectorBC[0]) === -1 ? '-' : '+'}${Math.abs(vectorBC[0])})^2 + (${Math.sign(vectorBC[1]) === -1 ? '-' : '+'}${Math.abs(vectorBC[1])})^2 + (${Math.sign(vectorBC[2]) === -1 ? '-' : '+'}${Math.abs(vectorBC[2])})^2}} \\right] = ${Math.sign(vectorF[0]) === -1 ? '-' : '+'}${Math.abs(vectorF[0])}\\mathbf{i} ${Math.sign(vectorF[1]) === -1 ? '-' : '+'}${Math.abs(vectorF[1])}\\mathbf{j} ${Math.sign(vectorF[2]) === -1 ? '-' : '+'}${Math.abs(vectorF[2])}\\mathbf{k} \\ \\text{N} $$`}</MathJax>
                  <MathJax inline>{`$$ A_x = ${Math.sign(vectorConverter[0]) === -1 ? '-' : '+'}${Math.abs(vectorConverter[0])} \\, \\text{N} $$`}</MathJax>
                  <MathJax inline>{`$$ A_y = ${Math.sign(vectorConverter[1]) === -1 ? '-' : '+'}${Math.abs(vectorConverter[1])} \\, \\text{N} $$`}</MathJax>
                  <MathJax inline>{`$$ A_z = ${Math.sign(vectorConverter[2]) === -1 ? '-' : '+'}${Math.abs(vectorConverter[2])} \\, \\text{N} $$`}</MathJax>
                </div>
              </div>
            </div>
            <div className="flex-col w-full h-1/2 border p-1 mt-[5px]">
              <div className="mb-[10px] ml-[5px]">
                <MathJax inline>{`$$\\ r_{ac}   = ( ${c_x} - 0 )i + ( ${c_y} - 0 )j + ( 0 - 0 )k $$`}</MathJax>
                <MathJax inline>{`$$ r_{ac} = \\ ${Math.sign(vectorAC[0]) === -1 ? '-' : '+'}${Math.abs(vectorAC[0])}i  ${Math.sign(vectorAC[1]) === -1 ? '-' : '+'}${Math.abs(vectorAC[1])}j \\ $$`}</MathJax>
              </div>
              <div className="mb-[10px] ml-[5px]">
                <MathJax>
                  {`
                  \\[
                  \\mathbf{M}_A + \\begin{vmatrix}
                  \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\
                  ${c_x} & ${c_y} & 0 \\\\
                  ${Math.sign(vectorF[0]) === -1 ? '-' : '+'}${Math.abs(vectorF[0])} & ${Math.sign(vectorF[1]) === -1 ? '-' : '+'}${Math.abs(vectorF[1])} & ${Math.sign(vectorF[2]) === -1 ? '-' : '+'}${Math.abs(vectorF[2])}
                  \\end{vmatrix} = 0
                  \\]

                  \\[
                  \\mathbf{M}_A ${Math.sign(matrix_i) === -1 ? '-' : '+'}${Math.abs(matrix_i)}\\mathbf{i} ${Math.sign(matrix_j) === -1 ? '-' : '+'}${Math.abs(matrix_j)}\\mathbf{j} = 0
                  \\]
                  `}
                </MathJax>
              </div>
              <div className="mb-[10px] ml-[5px]">
                <p>
                  <MathJax>
                    {`$$ M_{Ax} = ${M_A_X_result} \\, \\text{kN-m} $$`}
                  </MathJax>
                </p>

                <p>
                  <MathJax>
                    {`$$ M_{Ay} = ${M_A_Y_result} \\, \\text{kN-m} $$`}
                  </MathJax>
                </p>

                <p>
                  <MathJax>
                    {`$$ M_{Az} = 0 $$`}
                  </MathJax>
                </p>

              </div>
            </div>
          </div>
        </div>
      </MathJaxContext>
    </div>
  )
}

export default Page
