// src/FirstApp.tsx

import React, { useState, useCallback } from "react";
import { Button, Box, Typography } from "@mui/material";
import GameApp from "./GameApp";

export interface NavigationButtonsProps {
  navigate: (path: string) => void;
}

const SimplePage: React.FC<{ title: string; body: string }> = ({ title, body }) => (
  <Box sx={{ p: 4, maxWidth: 800, mx: "auto", overflowY: "auto", height: "100%" }}>
    <Typography variant="h4" gutterBottom>
      {title}
    </Typography>
    <Typography variant="body1" color="text.secondary">
      {body}
    </Typography>
  </Box>
);

const MainApp = (props: {
  currentPath: string;
  content: React.JSX.Element;
  navigate: (path: string) => void;
}) => {
  const { currentPath, content, navigate } = props;

  return (
    <Box
      sx={{
        fontFamily: "Inter, sans-serif",
        bgcolor: "#f4f7f9",
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      {/* Top Header: 5vh height */}
      <Box
        sx={{
          height: "5vh",
          minHeight: "36px",
          bgcolor: "#fff",
          borderBottom: "1px solid #e0e0e0",
          display: "flex",
          alignItems: "center",
          px: 2,
          flexShrink: 0,
        }}
      >
        {currentPath !== "/" && (
          <Button onClick={() => navigate("/")} variant="text" size="small">
            ← Back to Home
          </Button>
        )}
      </Box>

      {/* Main Game Container: Fills 90vh (remaining height) */}
      <Box
        sx={{
          height: "90vh",
          width: "100%",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {content}
      </Box>

      {/* Bottom Footer: 5vh height */}
      <Box
        sx={{
          height: "5vh",
          minHeight: "36px",
          width: "100%",
          bgcolor: "#fff",
          borderTop: "1px solid #e0e0e0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: 2,
          flexShrink: 0,
        }}
      >
        <div id="apitiny-adz-container" />
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button size="small" onClick={() => navigate("/terms")}>
            Terms of Use
          </Button>
          <Button size="small" onClick={() => navigate("/privacy")}>
            Privacy Policy
          </Button>
          <Button size="small" onClick={() => navigate("/disclaimer")}>
            Disclaimer
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

const NavigationButtons: React.FC<NavigationButtonsProps> = ({ navigate }) => (
  <Box sx={{ display: "flex", gap: 2, justifyContent: "center", p: 4 }}>
    <Button variant="contained" size="large" onClick={() => navigate("/game")}>
      Launch Game
    </Button>
  </Box>
);

export default function FirstApp() {
  const [currentPath, setCurrentPath] = useState<string>("/");

  const navigate = useCallback((path: string) => {
    setCurrentPath(path);
  }, []);

  let content;

  switch (currentPath) {
    case "/game":
      content = <GameApp />;
      break;
    case "/terms":
      content = <SimplePage title="Terms of Use" body="Terms of service details go here." />;
      break;
    case "/privacy":
      content = <SimplePage title="Privacy Policy" body="Privacy policy details go here." />;
      break;
    case "/disclaimer":
      content = <SimplePage title="Disclaimer" body="Disclaimer details go here." />;
      break;
    case "/":
    default:
      content = (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Typography variant="h3" gutterBottom>
            Welcome
          </Typography>
          <NavigationButtons navigate={navigate} />
        </Box>
      );
      break;
  }

  return (
    <MainApp
      currentPath={currentPath}
      content={content}
      navigate={navigate}
    />
  );
}