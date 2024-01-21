import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css'],
})
export class Exercice2Component {
  public valeur!: string;
  @ViewChild('myInput') private myInput: ElementRef<HTMLInputElement>;

  public update(): void {
    this.valeur = this.myInput.nativeElement.value;
  }
}
