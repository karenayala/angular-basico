import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ContadorComponente } from "./contador/contador.component";


@NgModule({
    declarations:[
        ContadorComponente
 
    ],
    exports:[
        ContadorComponente
    ]
})

export class ContadorModule {}