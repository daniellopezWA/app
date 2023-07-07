import { Fragment, FunctionComponent, useEffect, useState } from "react";
import { characters } from "../api/character";
import { Button, DateBox, NumberBox, Popup, SelectBox } from "devextreme-react";
import { Details } from "devextreme-react/file-manager";
import { Propinas } from "../Interfaces/Interfaces";

const AgregarForm: FunctionComponent = () => {
  const [Meseros, setMeseros] = useState({});
  const [Mesero, setMesero] = useState(1);
  const [Mesa, setMesa] = useState(Number);
  const [Propina, setPropina] = useState(Number);
  const [Fecha, setFecha] = useState(String)
  const [Mesas, setMesas] = useState({});
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    characters.getMeseros().then((r) => {
      setMeseros(r.data);
    });
    characters.getMesas().then((r) => {
      setMesas(r.data);
    });
  }, []);
  const seleccionarMesa = (e:any) => {
    setMesa(e.value);
  };
  const seleccionarMesero = (e:any) => {
    setMesero(e);
  };
  const seleccionarFechas= (e:any)=>{
    setFecha(e)
  }
  const selecionarPropina = (e:any)=>{
    
      setPropina(e);
      console.log(e)
    
  }
  const guardar = () => {
    // Aquí va la lógica para guardar los datos
    const propinanew: Propinas ={
      idMesa:  Mesa,
      idMesero: Mesero,
      valorPropina: Propina,
      fecha: Fecha
    }
    characters.postPropinas(propinanew)
    console.log(propinanew);
    setVisible(false);
  };
  const mostrarPopup = () => {
    setVisible(true);
  };

  return (
    <Fragment>
      <h3>Guardar Propinas</h3>

      <div className="form">
        <p>selecione una Mesa</p>
        <SelectBox
          dataSource={Mesas}
          displayExpr="descripccion"
          valueExpr="id"
          width={300}
          onValueChanged={seleccionarMesa}
        />
        <p>selecione un Mesero</p>
        <SelectBox
          dataSource={Meseros}
          value={1}
          displayExpr={(item) => item?.nombre + " " + item?.apellido}
          valueExpr="id"
          width={300}
          onValueChange={seleccionarMesero}
        />
        <p>cantidad de propina</p>
        <NumberBox  
          
          min={0}
          showSpinButtons={true}
          showClearButton={true}
          onValueChange={selecionarPropina}
        /> 
        <p>Fecha</p>
        <DateBox
        displayFormat="yyyy-MM-dd"   
        dateSerializationFormat='yyyy-MM-dd'    
        onValueChange={seleccionarFechas}
        />
        <p/>
        <Button
          text="Guardar"
          icon="save"
          type="success"
          onClick={mostrarPopup}
        />
        <Popup
          visible={visible}
          title="Confirmar"
          showCloseButton={false}   
          hideOnOutsideClick={true}      
          width={"30%"}
          height={"30%"}
          onHiding={() => setVisible(false)}
        >
          <p>¿Está seguro de guardar los datos?</p>
          <Button text="Sí" type="success" onClick={guardar} />
          <Button text="No" type="danger" onClick={() => setVisible(false)} />
        </Popup>
      </div>
    </Fragment>
  );
};

export default AgregarForm;
