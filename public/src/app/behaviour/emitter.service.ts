import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmitterService {
  
  private static emitters: {
    [nomeEvento: string]: EventEmitter<any>
  } = {}

  static get (nomeEvento:string): EventEmitter<any> {
    if (!this.emitters[nomeEvento])
    this.emitters[nomeEvento] = new EventEmitter<any>();
    return this.emitters[nomeEvento];
  }
  
}
