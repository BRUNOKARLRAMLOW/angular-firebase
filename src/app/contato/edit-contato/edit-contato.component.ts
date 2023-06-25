import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { ContatoService } from '../contato.service';

import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { Location } from '@angular/common';

 

@Component({

  selector: 'app-edit-contato',

  templateUrl: './edit-contato.component.html',

  styleUrls: ['./edit-contato.component.scss']

})

export class EditContatoComponent implements OnInit{

  contatoForm: FormGroup;

 

  constructor(

    private contatoService: ContatoService,

    private fb: FormBuilder,

    private location: Location,

    private activeRoute: ActivatedRoute,

    private router: Router,

    private toastr: ToastrService

  ){

    this.contatoForm = this.createForm();

  }

 

  createForm(){

    return this.fb.group({

      marca: new FormControl('', Validators.required),

      modelo: new FormControl('', Validators.required),

      ano: new FormControl('', Validators.required),

      placa: new FormControl('', Validators.required,)

    });

  }

 

  ngOnInit(){

    const id = this.activeRoute.snapshot.paramMap.get('id');

    if (id != null) {

      this.contatoService.getContatoById(id).valueChanges().subscribe(data => {

        this.contatoForm.setValue(data as any);

      });

    }

  }

 

  submitForm(){

    this.contatoService.updateContato(this.contatoForm.value);

    this.toastr.success(

      this.contatoForm.controls['marca'].value + " atualizado."

    );

    this.router.navigate(['list-contato']);

  }

  goBack(){

    this.location.back();

  }

 

  get marca(){

    return this.contatoForm.get('marca');

  }


  get modelo(){

    return this.contatoForm.get('marca');

  }


  get ano(){

    return this.contatoForm.get('ano');

  }

 

  get placa(){

    return this.contatoForm.get('placa');

  }

}