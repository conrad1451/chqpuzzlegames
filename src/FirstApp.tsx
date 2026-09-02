// src/FirstApp.tsx

import React, { useState, useCallback } from "react";
import { Button, Box, Typography } from "@mui/material";

// import OldApp from "./ExampleApp";
import GameApp from "./GameApp";

export interface NavigationButtonsProps {
  navigate: (path: string) => void;
}

const MainApp = (props: {
  currentPath: string;
  content: React.JSX.Element;
  navigate: (path: string) => void;
}) => {
  const { currentPath, content, navigate } = props;

  return (
    <Box
      sx={{
        fontFamily: "Inter",
        bgcolor: "#f4f7f9",
        flex: 1,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "auto",
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: "100%", pt: 4 }}>
        {currentPath !== "/" && (
          <Button
            onClick={() => navigate("/")}
            sx={{ mb: 2, ml: 2 }}
            variant="text"
          >
            ← Back to Home
          </Button>
        )}
        {content}
        <div id="apitiny-adz-container" style={{ minHeight: "100px" }} />
        <div className="footer">
          <Button onClick={() => navigate("/terms")}>Terms of Use</Button>
          <Button onClick={() => navigate("/privacy")}>Privacy Policy</Button>
          <Button onClick={() => navigate("/disclaimer")}>Disclaimer</Button>
        </div>
      </Box>
    </Box>
  );
};

const NavigationButtons: React.FC<NavigationButtonsProps> = ({ navigate }) => {
  return (
    <Box sx={{ display: "flex", gap: 2, justifyContent: "center", p: 4 }}>
      {/* <Button variant="contained" onClick={() => navigate("/example")}>
        Original Example
      </Button> */}
      <Button variant="contained" onClick={() => navigate("/game")}>
        Game
      </Button> 
    </Box>
  );
};
 

function FirstApp() {
  const [currentPath, setCurrentPath] = useState<string>("/");

  const navigate = useCallback((path: string) => {
    setCurrentPath(path);
  }, []);

  let content;

  switch (currentPath) {
    // case "/example":
    //   content = <OldApp />;
    //   break;
    case "/game":
      content = <GameApp />;
      break; 
    case "/":
    default:
      content = (
        <Box sx={{ p: 4, textAlign: "center" }}>
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

export default FirstApp;