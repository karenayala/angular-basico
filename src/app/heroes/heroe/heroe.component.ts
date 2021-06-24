import { Component } from "@angular/core";

@Component({
    selector:'app-heroe',
    templateUrl:'heroe.componente.html'
})
export class HeroeComponent{
    nombre:string ='Ironman';
    edad:number=54

    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
    }

    obtenerNombre():string {

        return ` ${this.nombre} - ${this.edad}`;
    }

    cambiarNombre():void{
    this.nombre='Spiderman';
    }

    cambiarEdad():void{
        this.edad=30;
        }


}