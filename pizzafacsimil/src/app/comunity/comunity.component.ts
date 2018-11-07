import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comunity',
  templateUrl: './comunity.component.html',
  styleUrls: ['./comunity.component.css']
})
export class ComunityComponent implements OnInit {
    ultimicommenti="I vostri commenti";
    
    aggiornaUltimiCommenti(abc){
      this.ultimicommenti=abc;
    }

  constructor() { }

  ngOnInit() {
  }

}
