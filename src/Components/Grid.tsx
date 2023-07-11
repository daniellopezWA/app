import { Fragment, FunctionComponent, useEffect, useState } from "react";
import DataGrid from "devextreme-react/data-grid";
import { characters } from "../api/character";
import { Button, DateRangeBox, Popup, TextBox } from "devextreme-react";
import moment from "moment";
import { Fechas} from "../Interfaces/Interfaces";
interface GridProps {
  show: boolean
  recargar?: boolean
}
export interface group {
  [key: string]: any;
}
const Grid: FunctionComponent<GridProps> = ({show, recargar=true}) => {
  const [Propinas, setPropinas] = useState({});
  // const [DataFiltrada, setDataFiltrada] = useState()
  // const PropinasArray = Object.values(Propinas)

  useEffect(() => {
    characters.getPropinasNames().then((r) => {
      setPropinas(r.data);
      console.log("recargue")
    });
  }, [recargar]);

  // useEffect(()=>{
  //   const dataFiltrada = PropinasArray.filter((item: any) => {
  //     const fechaItem: Date = new Date(item.Fecha);
  //     return fechaItem >= new Date(FechaInicio) && fechaItem <= new Date(FechaFin);
  //   });

  //   const agrupadoPorMesero = dataFiltrada.reduce((agrupacion: any, item: any) => {
  //     if (!agrupacion[item.Nombre]) {
  //       agrupacion[item.Nombre] = [];
  //     }
  //     agrupacion[item.Nombre].push(item);

  //     return agrupacion;
  //   }, {});
  //   console.log(dataFiltrada)
  //   console.log(agrupadoPorMesero)

  // },[FechaFin, FechaInicio])


if (show){
    return (
    <Fragment>
      <h3>Propinas</h3>
      <DataGrid
        dataSource={Propinas}
        noDataText="No hay datos"
        showBorders={true}
        columnAutoWidth={true}
      ></DataGrid>
      <p></p>
      
    </Fragment>
  );
}else{
  return null
}

};

export default Grid;
