import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Respuestas } from 'src/app/models/respuestas';
import { RespuestaService } from 'src/app/servicios/encuesta.service';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css'],
  providers :[RespuestaService]
})
export class EncuestaComponent implements OnInit {

  public user : User|any;
  page_title :string;
  public respuestas:Respuestas|any;
  public status :string|any;

  constructor(
    private _respuestaService :RespuestaService
  ) { 
    this.respuestas = new Respuestas(1,'','','','','','','','','')
    this.page_title = 'Encuesta Empresarial'
  }

  ngOnInit(): void {
  }
  onSubmit(from:any){
    this._respuestaService.create(this.respuestas).subscribe(
      response =>{
        if(response.status == 'success'){
            this.respuestas = response.respuestas;
            this.status = 'success';
        }else{
          this.status = 'error'
        }
      },error =>{
        console.log(error);
        this.status = 'error';
      }
    );
    
  }

}
