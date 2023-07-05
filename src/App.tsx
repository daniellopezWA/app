import React, { useEffect, useState } from "react";
import "devextreme/dist/css/dx.dark.css";
import "./App.css";
import Grid from "./Components/Grid";
import AgregarForm from "./Components/Form";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="contenedorGrid">
          <Grid />
          <AgregarForm></AgregarForm>
        </div>
      </header>
    </div>
  );
}

export default App;
