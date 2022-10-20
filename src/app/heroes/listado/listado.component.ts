import { NgIf } from '@angular/common';
import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitán América'];
  heroeBorrado: string = '';
  borrado: boolean = false;

  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
    if (this.heroeBorrado != ''){
      this.borrado=true;
    }else{
      this.borrado=false;
    }
  }
}
