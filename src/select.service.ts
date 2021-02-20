import { Injectable } from '@angular/core';



 export interface State{
   sid:string;
    sname:string;
 }
 export interface District{
   did:number;
   dname:string;
   sname:string;
 }
const ALL_STATES : State[]=[
  { sid:"1",sname:"Karnataka"},
  { sid:"2", sname:"Andhra Pradesh"},
  {  sid:"3", sname: "Maharashtra"},
  
];
const ALL_DISTRICTS : District[]=[
  {did:1, dname:"Gadag",sname:"Karnataka"},
  {did:2, dname:"Hubli",sname:"Karnataka"},
  {did:3, dname:"Bangalore",sname:"Karnataka"},
  {did:4, dname:"Belgaum",sname:"Karnataka"},
  {did:5, dname:"Nellore",sname:"Andhra Pradesh"},
  {did:6, dname:"Guntur",sname:"Andhra Pradesh"},
  {did:7, dname:"East Godavari",sname:"Andhra Pradesh"},
  {did:8, dname:"West Godavari",sname:"Andhra Pradesh"},
  {did:9, dname:"Ratnagiri",sname: "Maharashtra"},
  {did:10, dname:"Kolhapur",sname: "Maharashtra"},
  {did:11, dname:"Mumbai",sname: "Maharashtra"},
  {did:12, dname:"Nasik",sname: "Maharashtra"},


];
@Injectable({
  providedIn: 'root'
})
export class SelectService {

  
  getStates() {
    return ALL_STATES;
  }
  
  getDistricts(statename) {
   return ALL_DISTRICTS.filter(d => d.sname===statename);
  }

}