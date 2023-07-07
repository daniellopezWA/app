export interface Mesero {
    id:       number;
    nombre:   string;
    apellido: string;
    cedula:   number;
}



export interface Fechas {
    fechaInicio: string,
    fechaFin: string
}

export interface Mesas {
    id:           number;
    descripccion: string;
}

export interface Propinas {
    id?:          number;
    idMesa:       number;
    idMesero:     number;
    valorPropina: number;
    fecha:        string;
}
export interface PropinasNames {
    id?:          number;
    Nombre:       string;
    valorPropina: number;
    fecha:        string;
}