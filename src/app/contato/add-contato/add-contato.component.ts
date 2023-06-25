import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'

import { ContatoService } from '../contato.service';

 

import { ToastrService } from 'ngx-toastr';

 

@Component({

  selector: 'app-add-contato',

  templateUrl: './add-contato.component.html',

  styleUrls: ['./add-contato.component.scss']

})

export class AddContatoComponent implements OnInit{

  contatoForm: FormGroup;

 

  constructor(

    private contatoService: ContatoService,

    private fb: FormBuilder,

    private toastr: ToastrService){

      this.contatoForm = this.createForm();

    }

 

    ngOnInit(){

      this.contatoService.getContatoList();

    }

 

    createForm(){

      return this.fb.group({

        marca: new FormControl('', Validators.required),

        modelo: new FormControl('', Validators.required),

        ano: new FormControl('', Validators.required),

        placa: new FormControl('', Validators.required)

      });

    }

 

    resetForm(){

      this.contatoForm.reset();

    }

 

    submitForm(){

      this.contatoService.insertContato(this.contatoForm.value);

      this.toastr.success(

        this.contatoForm.controls['marca'].value + " adicionado"

      );

    }

 

    get marca(){

      return this.contatoForm.get('marca');

    }

    get modelo(){

      return this.contatoForm.get('modelo');

    }

    get ano(){

      return this.contatoForm.get('ano');

    }

 

    get placa(){

      return this.contatoForm.get('placa');

    }

}