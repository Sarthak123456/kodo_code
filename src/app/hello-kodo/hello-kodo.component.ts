import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { toArray } from 'rxjs';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-hello-kodo',
  templateUrl: './hello-kodo.component.html',
  styleUrls: ['./hello-kodo.component.css']
})
export class HelloKodoComponent implements OnInit {

  constructor(private _http:HttpService, private route:ActivatedRoute, private router:Router) { }
  cards :any=[];
  cardLength=6;
  page:any;
  out:any;
  searchTerm=new FormControl;

  ngOnInit(): void {
    this._http.getLocalData().subscribe(item => this.cards.push(item));
    this.router.routeReuseStrategy.shouldReuseRoute= function() {
      return false;
  };

    console.warn('page is = ' , this.route.snapshot.paramMap.get('page'));
    this.page =this.route.snapshot.paramMap.get('page');
    length = this.cards.length -1;
    const start=this.page*this.cardLength-this.cardLength
    const end = this.page*this.cardLength;
    console.log(`start = ${start} end = ${end}`)
    this.out = this.cards.slice(start,end);


  }

  nextPage(){
    // this.page++;
    this.router.navigate(['/get/',++this.page]);


  }

  prevPage(){
    if(this.page !=1){

      this.router.navigate(['/get/',--this.page])
    }


  }


}
