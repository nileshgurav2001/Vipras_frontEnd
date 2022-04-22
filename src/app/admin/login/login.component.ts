import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

     data: any = "";
  constructor(private api:ApiService, ) { }

  ngOnInit(): void {
    this.data = new FormGroup({
      email : new FormControl("",Validators.compose([Validators.required])),
      password: new FormControl("", Validators.compose([Validators.required]))
    })
  }

  submit(info:any){
  
    let data = {data:info}
 

    this.api.getdata("admin/login", data).subscribe((result:any)=>{
    if(result.status == "success"){
      // alert("successfully Login")
      window.location.href = "./admin/dashboard";
    }
    else{
      alert("please try again")
    }
     console.log(result);
     
      
    })
    
    
  }

}
