import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioFamiliarService {

  hermanoGrande?: string;
  hermanoPequeño?: string;

  getHermanoGrande(): string {
    return this.hermanoGrande || '';
  }

  getHermanoPequeño(): string {
    return this.hermanoPequeño || '';
  }

  setHermanoGrande(hermano: string) {
    this.hermanoGrande = hermano;
  }

  setHermanoPequeño(hermano: string) {
    this.hermanoPequeño = hermano;
  }

  saludar(hermano: string) {
    console.log(`Hola ${hermano}`);
  }

  preguntarPorHijo():string {
    return '¿Cómo está tu hijo?'
  }

  constructor() { }
}
