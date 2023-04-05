import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./pages/Home";
import Theme from "./Theme"

// HOSPITAL IMPORTS
import Dashboard from "./pages/Dashboard/Dashboard";
import ResearchPapers from "./pages/Dashboard/ResearchPapers"
import CheckPlagiarism from "./pages/Dashboard/CheckPlagiarism";

const App = () => {
  return (
    <ChakraProvider theme={Theme}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />

          {/* HOSPITAL ROUTES */}
          <Route exact path="/dashboard">
            <Route index element={<Dashboard />} />
            <Route path="papers" element={<ResearchPapers />} />
            <Route path="plagiarism" element={<CheckPlagiarism />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
