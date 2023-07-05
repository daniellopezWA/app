import Ract, { Fragment, FunctionComponent, useEffect, useState } from "react";
import { characters } from "../api/character";
import { SelectBox } from "devextreme-react";


const AgregarForm: FunctionComponent = () => {
    const [Meseros, setMeseros] = useState({});
  const [Mesas, setMesas] = useState({})
    useEffect(() => {
        characters.getMeseros().then((r) => {
            setMeseros(r.data);
          });
        characters.getMesas().then((r) => {
            setMesas(r.data);
          });
      }, []);
     
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
                ></SelectBox>
                <p>selecione un Mesero</p>
                <SelectBox
                dataSource={Meseros}
                placeholder="Select..."
                displayExpr={(item) => item?.nombre + ' ' + item?.apellido}
                valueExpr="id"                
                width={300}                
                ></SelectBox>
                <p>cantidad de propina</p>

            </div>
        </Fragment>
     );
}
 
export default AgregarForm;