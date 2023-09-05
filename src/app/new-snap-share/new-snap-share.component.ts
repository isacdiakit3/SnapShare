import { Component ,OnInit} from '@angular/core';
import{ FormGroup,FormBuilder,Validators} from '@angular/forms'
import { SnapShare } from '../model/snap-share.model';
import{Observable, map} from 'rxjs';
import { mapToCanActivate } from '@angular/router';

@Component({
  selector: 'app-new-snap-share',
  templateUrl: './new-snap-share.component.html',
  styleUrls: ['./new-snap-share.component.scss']
})
export class NewSnapShareComponent implements OnInit{

    snapForm!:FormGroup
    snapSharePreview$!:Observable<SnapShare>
    urlRegex!:RegExp
    constructor(private formBuilder:FormBuilder){}
    

  ngOnInit(): void {
    this.urlRegex=this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    this.snapForm = this.formBuilder.group({
      titre:[null, Validators.required],
      description:[null , Validators.required],
      imageUrl:[null , [Validators.required,Validators.pattern(this.urlRegex)]],
      date:[null],
      snaps:[null],
      location: [null]
    },
    {
      updateOn:'blur'
    }),
    this.snapSharePreview$ = this.snapForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        date:new Date(),
        id:0,
        snaps: 0
      })
      )
    )
  }

  onSubmitForm() :void{
    console.log(this.snapForm.value)
  }
}
