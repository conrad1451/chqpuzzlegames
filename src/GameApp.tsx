import './App.css'


const GameApp = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Embedded Website</h2>

      {/* <!-- ParkerSyndication — Partner ID: chqpuzzlegames — do not remove partner id from the URL --> */}
      <iframe 
          src="https://parkersyndication.com/p/chqpuzzlegames"
          style={{
            width: "100%",
            minHeight: "900px",
            border: "0",
            borderRadius: "12px"
          }} 
          title="ParkerSyndication Games" 
          loading="lazy" 
          allow="autoplay; clipboard-write" 
          referrerPolicy="strict-origin-when-cross-origin" 
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox allow-downloads">     
      </iframe>
    </div>
  );
};

export default GameApp
