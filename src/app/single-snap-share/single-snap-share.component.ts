import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SnapShare } from '../model/snap-share.model';
import { SnapShareService } from '../services/snap-share.service';

@Component({
  selector: 'app-single-snap-share',
  templateUrl: './single-snap-share.component.html',
  styleUrls: ['./single-snap-share.component.scss']
})
export class SingleSnapShareComponent {
  Isac!:SnapShare


    bouttontext!:string
    constructor(private snapShareService:SnapShareService,private route:ActivatedRoute){}
    ngOnInit(): void {
      this.bouttontext="Oh snap !"
      const snapShareid = +this.route.snapshot.params['id']
      this.Isac = this.snapShareService.getSnapShareById(snapShareid)
    }
    onSnap(){
      if(this.bouttontext==="Oh snap !"){
        this.snapShareService.snapSnapShare(this.Isac.id,"snap")
        this.bouttontext="Oops un snap !"

      }else {this.snapShareService.snapSnapShare(this.Isac.id, "unsnap")
      this.bouttontext="Oh snap !"
    }
    }
}
