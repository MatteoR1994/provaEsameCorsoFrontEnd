import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Beer } from 'src/app/models/beer';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.scss']
})
export class BeerDetailsComponent implements OnInit {

  public beer?: Beer;

  constructor(private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit(): void {
    this.getBeer();
  }

  getBeer(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (id) {
      this.api.getSingleBeer(id).subscribe({
        next: (beer) => (this.beer = beer[0]),
        error: (err) => console.log(err),
      });
    }
  }

}
