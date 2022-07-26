import { Component, Input, OnInit } from '@angular/core';
import { Beer } from 'src/app/models/beer';

@Component({
  selector: 'app-single-beer',
  templateUrl: './single-beer.component.html',
  styleUrls: ['./single-beer.component.scss']
})
export class SingleBeerComponent implements OnInit {

  public beer?: Beer;

  @Input() set beerP(value: Beer){
    this.beer = value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
