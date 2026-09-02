// src/GameApp.tsx
import React from "react";
import { Box } from "@mui/material";

const GameApp: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        flex: 1,
        minHeight: 0, // CRITICAL: Allows flex child to shrink below content size
        display: "flex",
        flexDirection: "column",
        bgcolor: "#000",
      }}
    >
      {/* ParkerSyndication — Partner ID: chqpuzzlegames — do not remove partner id from the URL */}
      <iframe
        src="https://parkersyndication.com/p/chqpuzzlegames"
        style={{
          width: "100%",
          height: "100%",
          flex: 1,
          border: "0",
          display: "block",
        }}
        title="ParkerSyndication Games"
        aria-label="ParkerSyndication Games Platform"
        loading="lazy"
        allow="autoplay; clipboard-write; fullscreen"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox allow-downloads"
      />
    </Box>
  );
};

export default GameApp;