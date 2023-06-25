import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';

import { Contato } from './contato';

 

@Injectable({

  providedIn: 'root'

})

export class ContatoService {

  listaContatosRef: AngularFireList<Contato>;

  contatoRef: AngularFireObject<Contato>;

 

  constructor(private db: AngularFireDatabase) {

    //inicialização dos caminhos ao firebase

    this.listaContatosRef = this.db.list('lista-contato');

    this.contatoRef = this.db.object('lista-contato/' + 0);

  }

 

  // Inserir Contato

  insertContato(contato: Contato) {

    this.listaContatosRef.push({

      marca: contato.marca,

      modelo: contato.modelo,

      placa: contato.placa,

      ano: contato.ano,

    });

  }

 

  // Buscar um único Objeto Contato pelo seu ID

  getContatoById(id: string): AngularFireObject<Contato> {

    this.contatoRef = this.db.object('lista-contato/' + id);

    return this.contatoRef;

  }

 

  // Fetch Students List

  getContatoList(): AngularFireList<Contato> {

    return this.listaContatosRef;

  }

 

  // Update Student Object

  updateContato(contato: Contato) {

    this.contatoRef.update({

      marca: contato.marca,

      modelo: contato.modelo,

      placa: contato.placa,

      ano: contato.ano,

    });

  }

 

  // Delete Student Object

  deleteContato(id: String) {

    this.contatoRef = this.db.object('lista-contato/' + id);

    this.contatoRef.remove();

  }

}