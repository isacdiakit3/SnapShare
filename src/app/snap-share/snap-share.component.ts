import { Component, OnInit, Input} from '@angular/core';
import { SnapShare } from '../model/snap-share.model';

@Component({
  selector: 'app-snap-share',
  templateUrl: './snap-share.component.html',
  styleUrls: ['./snap-share.component.scss']
})
export class SnapShareComponent implements OnInit{
    @Input() Isac!:SnapShare
    
    bouttontext!:string

    ngOnInit(): void {
      this.bouttontext="Oh snap !"
    }
    onSnap(){
      if(this.bouttontext==="Oh snap !"){
        this.Isac.snaps++
        this.bouttontext="Oops un snap !"

      }else {this.Isac.snaps--
      this.bouttontext="Oh snap !"
    }
    }
}
