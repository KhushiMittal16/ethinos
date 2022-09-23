import React from "react";
import Home from "./pages/Home";
import ViewportProvider from "./viewport";

function App() {
  return (
    <>
      <ViewportProvider>
        <Home />
      </ViewportProvider>
    </>
  );
}

export default App;
