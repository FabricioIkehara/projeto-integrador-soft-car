import { AddProductModalComponent } from './../../components/add-product-modal/add-product-modal.component';
import { MenuSideComponent } from './../../components/menu-side/menu-side.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgForm, FormsModule } from '@angular/forms';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';

@Component({
  selector: 'app-clients-register',
  templateUrl: './clients-register.component.html',
  styleUrls: ['./clients-register.component.css'],
  standalone: true,
  imports: [MenuSideComponent, MenuBarComponent, FormsModule, HttpClientModule, ]
})
export class ClientsRegisterComponent {
  private apiUrl = 'http://127.0.0.1:8000/submit-order/';

  constructor(private http: HttpClient, private dialog: MatDialog) {}

  formData = {
    client: '',
    telefone: '',
    carro: '',
    cor: '',
    placa: '',
    observacoes: '',
  };

  onSubmit(form: NgForm) {
    if (form.valid) {
      const dialogRef = this.dialog.open(AddProductModalComponent, {
        width: '400px',
        data: form.value
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.saveClient(result);
        }
      });
    }
  }

  saveClient(data: any) {
    this.http.post(this.apiUrl, data).subscribe(
      response => {
        console.log('Cliente adicionado com sucesso!', response);
      },
      error => {
        console.error('Erro ao adicionar cliente', error);
      }
    );
  }
  resetForm(form: NgForm) {
    form.reset();
  }
}
