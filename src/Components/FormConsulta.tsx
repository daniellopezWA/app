import { Fragment, FunctionComponent, useEffect, useState } from "react";
import DataGrid from "devextreme-react/data-grid";
import { characters } from "../api/character";
import { Button, DateRangeBox, Popup, TextBox } from "devextreme-react";
import moment from "moment";
import { Fechas} from "../Interfaces/Interfaces";

 
const FormConsulta: FunctionComponent = () => {

 
  const [FechaFin, setFechaFin] = useState(String);
  const [FechaInicio, setFechaInicio] = useState(String);
  const [visible, setVisible] = useState(false);
  const [MayorMesero, setMayorMesero] = useState({});
  const [MeyorMesa, setMeyorMesa] = useState({});
  const [Promedio, setPromedio] = useState<{ Promedio: number }[]>([{ Promedio: 0 }]);
  

    
  const selecionarFechas = (e: any) => {
    setFechaInicio(moment(e[0]).format("YYYY-MM-DD"));
    setFechaFin(moment(e[1]).format("YYYY-MM-DD"));
  };

  const Calcular = async () => {
    const fechasconsulta: Fechas = {
      fechaInicio: FechaInicio,
      fechaFin: FechaFin,
    };
    const resultMesero = await characters.postMayorMesero(fechasconsulta);
    setMayorMesero(resultMesero.data);
    const resultMesa = await characters.postMayorMesa(fechasconsulta);
    setMeyorMesa(resultMesa.data);
    const resultpromedio = await characters.postPromedioPropina(fechasconsulta);
    setPromedio(resultpromedio.data);
    setVisible(true);
  };



    return (  
        <Fragment>
<h3>Consulta de Informacion</h3>
      <div style={{ display: "flex", gap: "9px", justifyContent: "center" }}>
        <DateRangeBox
          displayFormat="yyyy-MM-dd"
          onValueChange={selecionarFechas}
          dateSerializationFormat={"yyyy-MM-dd"}
          width={400}
        />
        <p />
        <Button text="Consultar" icon="search" width={30} height={30} onClick={Calcular} />
        <Popup
          visible={visible}
          title={"Consulta entre " + FechaInicio + " y " + FechaFin}
          showCloseButton={false}
          hideOnOutsideClick={true}
          width={500}
          height={450}
          onHiding={() => setVisible(false)}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p>Segun las fechas Seleccionadas:</p>
            <p>Mesero con Mayor Propina</p>
            <DataGrid dataSource={MayorMesero} width={200} />
            <p> Mesa con mayor Propina</p>
            <DataGrid dataSource={MeyorMesa} width={200} />
            <p>
              Promedio de Propinas entre {FechaInicio} y {FechaFin}
            </p>
            <TextBox  value={Promedio[0].Promedio.toString()}  >
            </TextBox>
          </div>
        </Popup>
      </div>
        </Fragment>
    );
}
 
export default FormConsulta;