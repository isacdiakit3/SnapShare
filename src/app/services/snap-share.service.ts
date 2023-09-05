import { Injectable } from "@angular/core";
import { SnapShare } from "../model/snap-share.model";
import { throwError } from "rxjs";


@Injectable({
    providedIn:'root'
})
export class SnapShareService {
    snapShares:SnapShare[] = [
        {  
          id:1 , 
          titre:"Fleur",
          description:"tournesol",
          imageUrl:"https://cdn.pixabay.com/photo/2023/08/17/17/41/coneflower-8197067_640.jpg",
          date:new Date(),
          snaps:0,
          location:"Chine"
        },
        {
            id:2,
          titre:"Fleur",
          description:"Ma Fleur Preferee",
          imageUrl:"https://cdn.pixabay.com/photo/2020/07/24/12/08/water-lily-5433828_640.jpg",
         date:new Date,
          snaps:0,
          location:"France"
        },
        {
            id:3,
          titre:"Cerveau",
          description:"Isac Newton",
          imageUrl:"https://cdn.pixabay.com/photo/2023/08/16/03/51/ai-generated-8193209_640.jpg",
          date:new Date(),
          snaps:0,
          location:"laboratoire"
        },
        {
            id:4,
          titre:"Vacances",
          description:"au bord de la mer",
          imageUrl:"https://cdn.pixabay.com/photo/2023/08/12/21/08/clipart-8186457_640.jpg",
         date:new Date,
          snaps:0,
          location:"Miami"
        },
        {
            id:5,
          titre:"Rue",
          description:"bande dessinée",
          imageUrl:"https://cdn.pixabay.com/photo/2023/08/16/03/52/ai-generated-8193214_640.jpg",
         date:new Date,
          snaps:0,
          location:"Bamako"
        }
      ]

      getAllSnapShare():SnapShare[]{
        return this.snapShares
      }

      getSnapShareById(snapShareid:number) : SnapShare{
        const snapShare = this.snapShares.find(snapShare => snapShare.id===snapShareid)
        if(!snapShare){
            throw new Error("Snap Share non trouvé")
        }else{
           return snapShare
        }
      }
      snapSnapShare(snapShareid:number,snaptype: "snap" | "unsnap") :void{
        const snapShare = this.getSnapShareById(snapShareid)
        snaptype === "snap" ? snapShare.snaps++ : snapShare.snaps--
      }
     
}