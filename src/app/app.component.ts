import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup,FormBuilder, Validators} from '@angular/forms';
import { District, SelectService, State } from '../select.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  dataForm:FormGroup;
  myControl = new FormControl();
  displayedColumns: string[] = ['firstname', 'lastname', 'states', 'districts'];
  
  states:State[];
  districts:District[];
  data:string[]=[];
  dataSource: string[];

  constructor(private formBuilder: FormBuilder, 
    private selectService: SelectService) { }

   ngOnInit() {
    this.dataForm = this.formBuilder.group({
      firstname: ["", Validators.required],
      lastname: ["", Validators.required],
      states: ["", Validators.required],
      districts : ["", Validators.required]
    });
    this.states = this.selectService.getStates();
    this.dataForm.controls['states'].valueChanges.subscribe(value => { this.onSelect(value) });
  }

  onSelect(stateid:number) {
    this.districts = this.selectService.getDistricts(stateid);
  }

  onSubmit()
  {   if(this.dataForm.valid)
     {
        this.data.push(this.dataForm.value);
        this.dataSource=this.data;
        console.log(this.data);
        this.dataForm.reset();  
    }
  }
  
  resetdataForm(){
     this.dataForm.reset();
   } 
}
