## Getting Started

Install

```bash
npm install

```

First, run the development server:

```bash
npm run dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.


## Example 1: Basic example with Latex
Standard setup using MathJax version 3 with default MathJax config and no extra options.

```bash
export default function App() {

    return (
        <MathJaxContext>
              <h2>Basic MathJax example with Latex</h2>
              <MathJax>{"\\(\\frac{10}{4x} \\approx 2^{12}\\)"}</MathJax>
        </MathJaxContext>
    );
    
}

```

## Dev Code Page EX1-5
/ตามโฟลเดอร์ที่ต้องการ

```bash
http://localhost:3000/ex1

```
