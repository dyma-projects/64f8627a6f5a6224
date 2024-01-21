import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css'],
})
export class Exercice1EnfantComponent {
  @Input() public compteur: number;
  @Output() private updateCompteurEvent: EventEmitter<number> =
    new EventEmitter();

  public updateCompteur(value: number): void {
    this.compteur = value;
    this.updateCompteurEvent.emit(this.compteur);
  }
}
