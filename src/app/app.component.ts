import { Component , OnInit} from '@angular/core';
import { Observable, filter, of,interval, map, tap,concatMap,mergeMap,switchMap,exhaustMap,take,delay } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'SnapShare';
  interval$!:Observable<string>
  redTrainsCalled = 0
  yellowTrainsCalled=0

  
  ngOnInit(): void {
    
    // this.interval$ = interval(1000).pipe(
    //   filter(value=>value % 3 ===0),
    //   map(value=>value % 2 ===0 ?
    //     `je suis ${value} et je suis pair`:
    //     `je suis ${value} et je suis impair`),
        
    // )
      }
      // onlogger(text:string) :void{
      //   console.log(text)
      // }
    }
    
    
  //   interval(500).pipe(
  //     take(10),
  //     map(value => value % 2 === 0 ? 'rouge' : 'jaune'),
  //     tap(color => console.log(`La lumière s'allume en %c${color}`, `color: ${this.translateColor(color)}`)),
  //     mergeMap(color => this.getTrainObservable$(color)),
  //     tap(train => console.log(`Train %c${train.color} ${train.trainIndex} arrivé !`, `font-weight: bold; color: ${this.translateColor(train.color)}`))
  //   ).subscribe();
  // }

  // getTrainObservable$(color: 'rouge' | 'jaune') {
  //   const isRedTrain = color === 'rouge';
  //   isRedTrain ? this.redTrainsCalled++ : this.yellowTrainsCalled++;
  //   const trainIndex = isRedTrain ? this.redTrainsCalled : this.yellowTrainsCalled;
  //   console.log(`Train %c${color} ${trainIndex} appelé !`, `text-decoration: underline; color: ${this.translateColor(color)}`);
  //   return of({ color, trainIndex }).pipe(
  //     delay(isRedTrain ? 5000 : 6000)
  //   );
  // }

  // translateColor(color: 'rouge' | 'jaune') {
  //   return color === 'rouge' ? 'red' : 'yellow';
  // }

  // }
  

