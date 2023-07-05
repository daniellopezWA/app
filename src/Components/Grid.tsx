import { Fragment, FunctionComponent, useEffect, useState } from "react";
import DataGrid, {
  Column,
  FilterRow,
  Selection,
  ColumnChooser,
} from "devextreme-react/data-grid";
import { characters } from "../api/character";
interface GridProps {
  Propinas: any;
}

const Grid: FunctionComponent = () => {
  const [Propinas, setPropinas] = useState({});
  const [Mesas, setMesas] = useState({})
  const [error, seterror] = useState();
  useEffect(() => {
    characters.getPropinas().then((r) => {
      setPropinas(r.data);
    });
    characters.getMesas().then((r) => {
        setMesas(r.data);
      });
  }, []);
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
      <h3>Mesas</h3>
      <DataGrid
        dataSource={Mesas}
        noDataText="No hay datos"
        showBorders={true}
        columnAutoWidth={true}
      ></DataGrid>
    </Fragment>
  );
};

export default Grid;
