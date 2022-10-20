import { Component } from '@angular/core';

@Component({
    selector:'app-contador',
    templateUrl: 'app-contador.html'
    
})

export class ContadorComponent{
    title = 'app-contador';
    numero: number = 10;
    base: number = 5;
    
    acumular(valor : number){
      this.numero += valor;
    }
}

function button(click: any) {
    throw new Error('Function not implemented.');
}
