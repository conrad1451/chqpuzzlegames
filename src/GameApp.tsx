import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'


// CHQ: Gemini AI generated component
const IframeExample = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Embedded Website</h2>

      {/* Iframe with security and responsive styling */}
      <iframe
        src="https://example.com" // Replace with your desired URL
        title="Example Website"
        style={{
          width: "80%",
          height: "500px",
          border: "2px solid #ccc",
          borderRadius: "8px"
        }}
        loading="lazy" // Improves performance
        sandbox="allow-scripts allow-same-origin allow-popups" // Security restrictions
      ></iframe>
    </div>
  );
};

// function GameApp() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Hi</h2>
 
//         </div>
   
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }
 
export default IframeExample
