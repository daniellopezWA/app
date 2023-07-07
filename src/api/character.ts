import { Propinas, Fechas } from "../Interfaces/Interfaces";
import { instance } from "./base.api";



export const characters = {
    getPropinas: function(){
        return instance.get("propinas", {})
    },
    getPropinasNames: function(){
        return instance.get("propinas/FullName", {})
    },
    getMesas: function(){
        return instance.get("mesas", {})
    },
    getMeseros: function(){
        return instance.get("meseros", {})
    },
    postPropinas: function(propinas: Propinas){
        return instance.post("propinas", propinas)
    },

    postMayorMesero: function(fechas : Fechas){
        return instance.post("meseros", fechas)

    },
    postMayorMesa: function(fechas : Fechas){
        return instance.post("mesas", fechas)
    },
    postPromedioPropina: function(fechas: Fechas){
        return instance.post("Propinas/Promedio", fechas)
    }
}