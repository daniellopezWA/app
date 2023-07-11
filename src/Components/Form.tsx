import { Fragment, FunctionComponent, useEffect, useState } from "react";
import { characters } from "../api/character";
import { Button, DateBox, NumberBox, Popup, SelectBox , ValidationSummary, Validator} from "devextreme-react";
import { Propinas } from "../Interfaces/Interfaces";
import { RequiredRule } from "devextreme-react/validator";
import notify from 'devextreme/ui/notify';
interface Props {
  show: boolean
}

 

const AgregarForm: FunctionComponent<Props> = ({show}) => {
  const [Meseros, setMeseros] = useState({});
  const [Mesero, setMesero] = useState(1);
  const [Mesa, setMesa] = useState(Number);
  const [Propina, setPropina] = useState(Number);
  const [Fecha, setFecha] = useState(String)
  const [Mesas, setMesas] = useState({});
  const [visible, setVisible] = useState(false);
  const [Validarcampos, setValidarcampos] = useState({})
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
  }

  const cargar = () => {
    const propinanew: Propinas ={
      idMesa:  Mesa,
      idMesero: Mesero,
      valorPropina: Propina,
      fecha: Fecha
    }
    console.log(propinanew)

   if (Mesa!=0 && Mesero!=null&& Fecha!=null&&Fecha!=''&& Propina!=null &&Propina!=0) {
    setVisible(true);

  } else {
    notify({
      message: 'Por favor llenar todos los campos',
      position: {
        my: 'center',
        at: 'center',
      },
    }, 'error', 1000);
  }
      


  };
  const Guardar = () => {
    const propinanew: Propinas ={
      idMesa:  Mesa,
      idMesero: Mesero,
      valorPropina: Propina,
      fecha: Fecha
    }
    characters.postPropinas(propinanew)
    setVisible(false)
    notify({
      message: 'Datos Guardados',
      position: {
        my: 'center',
        at: 'center',
      },
    }, 'success', 1000);
  };
  if(show){
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
          >
            <Validator>
              <RequiredRule message="Digite el valor de la propina"></RequiredRule>
              </Validator></NumberBox> 
          <p>Fecha</p>
          <DateBox
          displayFormat="yyyy-MM-dd"   
          dateSerializationFormat='yyyy-MM-dd'    
          onValueChange={seleccionarFechas}
          />
          <p/>
          <ValidationSummary id="summary"></ValidationSummary>
          <Button
            text="Guardar"
            icon="save"
            type="success"
            onClick={cargar}
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
            <p>¿Está seguro de cargar los datos?</p>
            <Button text="Sí" type="success" onClick={Guardar} />
            <Button text="No" type="danger" onClick={() => setVisible(false)} />
          </Popup>
        </div>
      </Fragment>
    );
  }else{
    return null
  }

};

export default AgregarForm;
