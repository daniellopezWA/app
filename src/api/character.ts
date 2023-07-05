import { instance } from "./base.api";



export const characters = {
    getPropinas: function(){
        return instance.get("propinas", {})
    },
    getMesas: function(){
        return instance.get("mesas", {})
    },
    getMeseros: function(){
        return instance.get("meseros", {})
    }
}