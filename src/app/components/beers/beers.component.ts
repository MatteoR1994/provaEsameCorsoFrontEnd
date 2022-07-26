import { Component, OnInit } from '@angular/core';
import { Beer } from 'src/app/models/beer';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss']
})
export class BeersComponent implements OnInit {

  beers: Beer[] = [];

  constructor(private api: ApiService) { }
  
  ngOnInit(): void {
    this.getBeers();
  }

  getBeers(): void {
    this.api.getAllBeers().subscribe({
      next: (beers) => (this.beers = beers),
      error: (err) => console.log(err),
    });
  }

}
