import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.css']
})
export class ContattiComponent implements OnInit {

  topics=['Informazioni', 'Lavorare con noi', 'Prenotazioni', 'Altro'];

  constructor() { }

  ngOnInit() {
  }

}
