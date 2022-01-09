import { Component,ViewChild } from '@angular/core';
import { ngxCsv } from 'ngx-csv/ngx-csv';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'resume';

  name_check : boolean=false;
  age_check : boolean=false;
  average_check: boolean=false;
  headers :any=[];
  filedownlaod(){
    console.log(this.name_check, 'Value of checkbox');
    if(this.name_check ||this.average_check ||this.age_check){
      this.headers.push("name","age","average");

      //this.data=this.data["name"];
    }
    var options = { 
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true, 
      showTitle: true,
      //title: 'report data ',
      useBom: true,
      headers: this.headers
    };
    var original_data=this.data;
    var data1:any=[];
    this.headers.forEach(function(elm:any,key:any){
      console.log(elm);
      for(let i=0;i<original_data.length;i++){
        let obj={
          name:original_data[i].name,
          age:original_data[i].age,
          average:original_data[i].average

         };
        data1.push(obj);
      }
    });
    new  ngxCsv(data1, "report", options);
  }

  data = [
  {
    name: "Test 1",
    age: 13,
    average: 8.2,
    approved: true,
    description: "using 'Content here, content here' "
  },
  {
    name: 'Test 2',
    age: 11,
    average: 8.2,
    approved: true,
    description: "using 'Content here, content here' "
  },
  {
    name: 'Test 4',
    age: 10,
    average: 8.2,
    approved: true,
    description: "using 'Content here, content here' "
  },
  ];

  
}


