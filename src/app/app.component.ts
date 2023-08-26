import { Component , OnInit} from '@angular/core';
import { SnapShare } from './model/snap-share.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'SnapShare';
  snapShares!:SnapShare[]
  monSnap!: SnapShare
  maFleurPreferee!: SnapShare
  ngOnInit(): void {
    this.snapShares = [
      {
        titre:"Fleur",
        description:"tournesol",
        imageUrl:"https://cdn.pixabay.com/photo/2023/08/17/17/41/coneflower-8197067_640.jpg",
        date:new Date(),
        snaps:0,
        location:"Chine"
      },
      {
        titre:"Fleur",
        description:"Ma Fleur Preferee",
        imageUrl:"https://cdn.pixabay.com/photo/2020/07/24/12/08/water-lily-5433828_640.jpg",
       date:new Date,
        snaps:0,
        location:"France"
      },
      {
        titre:"Cerveau",
        description:"Isac Newton",
        imageUrl:"https://cdn.pixabay.com/photo/2023/08/16/03/51/ai-generated-8193209_640.jpg",
        date:new Date(),
        snaps:0,
        location:"laboratoire"
      },
      {
        titre:"Vacances",
        description:"au bord de la mer",
        imageUrl:"https://cdn.pixabay.com/photo/2023/08/12/21/08/clipart-8186457_640.jpg",
       date:new Date,
        snaps:0,
        location:"Miami"
      },
      {
        titre:"Rue",
        description:"bande dessinée",
        imageUrl:"https://cdn.pixabay.com/photo/2023/08/16/03/52/ai-generated-8193214_640.jpg",
       date:new Date,
        snaps:0,
        location:"Bamako"
      }
    ]
    
  }
}
