import { Component ,OnInit} from '@angular/core';
import { SnapShare } from '../model/snap-share.model';
import { SnapShareService } from '../services/snap-share.service';

@Component({
  selector: 'app-snap-share-liste',
  templateUrl: './snap-share-liste.component.html',
  styleUrls: ['./snap-share-liste.component.scss']
})
export class SnapShareListeComponent implements OnInit{

  snapShares!: SnapShare[]
  constructor(private snapShareService : SnapShareService){}
  ngOnInit(): void {
    this.snapShares=this.snapShareService.snapShares
  }
}
