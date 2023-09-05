import { Component, OnInit, Input} from '@angular/core';
import { SnapShare } from '../model/snap-share.model';
import { SnapShareService } from '../services/snap-share.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-snap-share',
  templateUrl: './snap-share.component.html',
  styleUrls: ['./snap-share.component.scss']
})
export class SnapShareComponent implements OnInit{
    @Input() Isac!:SnapShare
    
    bouttontext!:string
    constructor(private snapShareService:SnapShareService, private router:Router){}
    ngOnInit(): void {
      this.bouttontext="Oh snap !"
    }
    onSnap(){
      if(this.bouttontext==="Oh snap !"){
        this.snapShareService.snapSnapShare(this.Isac.id,"snap")
        this.bouttontext="Oops un snap !"

      }else {this.snapShareService.snapSnapShare(this.Isac.id, "unsnap")
      this.bouttontext="Oh snap !"
    }
    }

    onVoirSnap(){
      this.router.navigateByUrl(`snapShare/${this.Isac.id}`)
    }
}
