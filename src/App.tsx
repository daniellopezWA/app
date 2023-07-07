
import "devextreme/dist/css/dx.dark.css";
import "./App.css";
import Grid from "./Components/Grid";
import AgregarForm from "./Components/Form";
import FormConsulta from "./Components/FormConsulta";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="contenedorGrid">
          <Grid />
          <FormConsulta/>
          <AgregarForm/>
        </div>
      </header>
    </div>
  );
}

export default App;
