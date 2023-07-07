import { FunctionComponent, useState } from "react";
import Grid from "../Components/Grid";
import AgregarForm from "../Components/Form";
import FormConsulta from "../Components/FormConsulta";
import { Button } from "devextreme-react";

const Menu: FunctionComponent = () => {
    const [PropinaVisible, setPropinaVisible] = useState(false)
    const [ConsultaVisible, setConsultaVisible] = useState(false)
    const [AgregarVisible, setAgregarVisible] = useState(false)
    
  return (
    <header className="App-header">
        <img src="https://wasolutions.co/pt/wp-content/uploads/2020/06/wa-solutions-logo-header.png" alt="Logo" />
        <p/>
        <div className="contenedorGrid">
        <Button text="Ver Propinas" icon="hidepanel" onClick={()=>{setPropinaVisible(!PropinaVisible)}}></Button>        
        <Grid show={PropinaVisible} />
        <Button text="Consultar Por Fechas" icon="hidepanel" onClick={()=>{setConsultaVisible(!ConsultaVisible)}}></Button>
        <FormConsulta show={ConsultaVisible} />
        <Button text="Ver Propinas" icon="hidepanel" onClick={()=>{setAgregarVisible(!AgregarVisible)}}></Button>
        <AgregarForm show={AgregarVisible} />
      </div>
    </header>
  );
};

export default Menu;
