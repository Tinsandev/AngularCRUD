import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.css']
})
export class TarjetaCreditoComponent implements OnInit {
listarTarjetas: any[] = [
  { titular: 'Ines Barera', numeroTarjeta: '1234567890', fechaExpiracion: '12/04', cvv: '123'},
  { titular: 'Martin Cho', numeroTarjeta: '0987654321', fechaExpiracion: '12/03', cvv: '123'}
];

  form:FormGroup;

  constructor(private fb: FormBuilder,
    private toastr: ToastrService) {
    this.form = fb.group({
      titular: ['', Validators.required],
      numeroTarjeta: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(16)]],
      fechaExpiracion: ['', [Validators.required, Validators.maxLength(5), Validators.minLength(5)]],
      cvv: ['', [Validators.required, Validators.maxLength(3), Validators.minLength(3)]],
    })
   }

  ngOnInit(): void {
  }

  agregarTarjeta() {

    const tarjeta: any = {
      titular: this.form.get('titular')?.value,
      numeroTarjeta: this.form.get('numeroTarjeta')?.value,
      fechaExpiracion: this.form.get('fechaExpiracion')?.value,
      cvv: this.form.get('cvv')?.value
    }
    this.listarTarjetas.push(tarjeta)
    this.toastr.success('La tarjeta fue registrada con exito!', 'Tarjeta Registrada');
    this.form.reset();    
  }

  eliminarTarjeta(index: number) {
    
    this.listarTarjetas.splice(index, 1);
    this.toastr.error('La tarjeta fue eliminada con exito!', 'Tarjeta Eliminada');


  }

}
