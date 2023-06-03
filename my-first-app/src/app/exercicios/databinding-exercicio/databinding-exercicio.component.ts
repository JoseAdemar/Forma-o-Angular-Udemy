import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding-exercicio',
  templateUrl: './databinding-exercicio.component.html',
  styleUrls: ['./databinding-exercicio.component.css']
})
export class DatabindingExercicioComponent {

  name: string = '';
  showSecret: boolean;
  showDetailsLog = [];

  isInputNameEmpty(name: String){
    name = this.name;
    if(name === ''){
      return true;
    }
  }

  clearInput(name: string){
    name =  this.name = '';
  }

  onAddToggleDetails(){
    this.showSecret = !this.showSecret;
    this.showDetailsLog.push(this.showDetailsLog.length + 1);
  }
}
