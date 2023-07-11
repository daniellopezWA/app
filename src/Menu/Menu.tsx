import { FunctionComponent, useState } from "react";
import Grid from "../Components/Grid";
import AgregarForm from "../Components/Form";
import FormConsulta from "../Components/FormConsulta";
import { Button } from "devextreme-react";

const Menu: FunctionComponent = () => {
    const [PropinaVisible, setPropinaVisible] = useState(false)
    const [ConsultaVisible, setConsultaVisible] = useState(false)
    const [AgregarVisible, setAgregarVisible] = useState(false)
    const [RecargarGrig, setRecargarGrig] = useState(false)
    
  return (
    <header className="App-header">
        <a href="https://wasolutions.co/es/">
        <img src="https://wasolutions.co/pt/wp-content/uploads/2020/06/wa-solutions-logo-header.png" alt="Logo" />
        </a>
        <p/>
        <div className="contenedorGrid">
        <Button text="Ver Propinas" icon="hidepanel" onClick={()=>{setPropinaVisible(!PropinaVisible)}}></Button>        
        <Grid show={PropinaVisible} recargar={RecargarGrig} />
        <Button text="Consultar Por Fechas" icon="search" onClick={()=>{setConsultaVisible(!ConsultaVisible)}}></Button>
        <FormConsulta show={ConsultaVisible} />
        <Button text="Agregar Propina" icon="add" onClick={()=>{setAgregarVisible(!AgregarVisible); setRecargarGrig(!RecargarGrig)}}></Button>
        <AgregarForm show={AgregarVisible} />
      </div>
    </header>
  );
};

export default Menu;
