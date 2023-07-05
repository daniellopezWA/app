export interface Mesero {
    id:       number;
    nombre:   string;
    apellido: string;
    cedula:   number;
}

export interface Mesas {
    id:           number;
    descripccion: string;
}

export interface Propinas {
    id:           number;
    idMesa:       number;
    idMesero:     number;
    ValorPropina: number;
    fecha:        Date;
}