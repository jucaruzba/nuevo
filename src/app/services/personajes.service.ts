import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor(private http:HttpClient) { }

  getDatos(){
    return this.http.get('https://charlies-9cafd-default-rtdb.firebaseio.com/.json')
  }

  getPersonaje(id){
    return this.http.get('https://charlies-9cafd-default-rtdb.firebaseio.com/Personajes/'+id+'.json')
  }
}
