import { AfterViewChecked, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy, AfterViewChecked{
  title = 'kodo';
  page:any;
  showSearch:boolean =true;

  constructor(private _http:HttpService, private router:Router, private activatedRoute: ActivatedRoute) {



  }

  ngOnInit(){



  }

  ngAfterViewChecked(){
    console.log(this.router.routerState.snapshot.url)
    this.page = this.router.routerState.snapshot.url.toString();

    console.log('page = ' , this.page.includes('get'))
    if( this.page.includes('get')){
      this.showSearch=false;
    }
  }

  ngOnDestroy(){

  }
}
