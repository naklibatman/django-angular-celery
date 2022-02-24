import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { interval, Subscription } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private http: HttpClient){}
  subscription: Subscription
  httpdata
  title : String
  tempData : String
  taskHttpData
  progress: number
  total: number
  color : string
  buttonStatus : Boolean
  ngOnInit(){
    if(!this.progress){
      this.progress = 0;
    }
    this.buttonStatus = true
    //if we don't have a total aka no requirement, it's 100%.
    // if(this.total === 0) {
    //   this.total = this.progress;
    // } else if(!this.total) {
    //   this.total = 100;
    // }
    //if the progress is greater than the total, it's also 100%.
    // if(this.progress > this.total) {
    //   this.progress = 100;
    //   this.total = 100;
    // }
    // this.progress = (this.progress / this.total) * 100;
    console.log("init function")
    this.color = 'red'

    // if(this.progress < 55) {
    //   this.color = 'red';
    // } else if(this.progress < 75) {
    //   this.color= 'yellow';
    // } else {
    // this.color = 'green';
    // }
    // this.http.get('http://localhost:8000/app2/home/')
    // .pipe(map(res => res))
    // .subscribe((data) => this.httpdata = data);
    // const source = interval(1000)
    // this.subscription = source.subscribe(val => this.onShow())
    // const source = interval(1000)
    // this.subscription = source.subscribe(val => this.onShow())

  }
  displaydata(data){
    this.httpdata = data;
  }
  onShow(){
    this.http.get('http://localhost:8000/celery-progress/' + this.httpdata.index + '/')
    .pipe(map(res => res))
    .subscribe((data) => {
      this.taskHttpData = data
      this.progress = this.taskHttpData.progress.percent
      this.total = this.taskHttpData.progress.total
      if(this.progress >= 100){
        this.buttonStatus = true
      }
    })
    // this.progress = this.taskHttpData.progress.current
    // this.total = this.taskHttpData.progress.total
  }

  onDownloadClick(){
    this.buttonStatus = false
    this.http.get('http://localhost:8000/app2/home/')
    .pipe(map(res => res))
    .subscribe((data) => this.httpdata = data);
    const source = interval(1000)
    this.subscription = source.subscribe(val => this.onShow())
  }

  ngOnDestroy(){
    this.subscription && this.subscription.unsubscribe();
  }
}
