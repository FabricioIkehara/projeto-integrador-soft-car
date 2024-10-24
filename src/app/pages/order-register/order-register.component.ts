import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { AddProductModalComponent } from '../../components/add-product-modal/add-product-modal.component';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { MenuSideComponent } from '../../components/menu-side/menu-side.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-register',
  standalone: true,
  imports: [MenuBarComponent, MenuSideComponent, FormsModule, CommonModule, HttpClientModule],
  templateUrl: './order-register.component.html',
  styleUrls: ['./order-register.component.css'],
})
export class OrderRegisterComponent {
  formData = {
    client: '',
    telefone: '',
    carro: '',
    cor: '',
    placa: '',
    observacoes: '',
  };

  responseMessage = '';

  constructor(private dialog: MatDialog, private http: HttpClient) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(AddProductModalComponent, {
      panelClass: 'custom-dialog',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Serviço adicionado:', result);
      } else {
        console.log('Adição de serviço cancelada.');
      }
    });
  }

  onSubmit(): void {
    const url = 'http://127.0.0.1:8000/submit_form';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    console.log('Enviando formulário:', this.formData);

    this.http.post(url, JSON.stringify(this.formData), { headers }).subscribe(
      (response: any) => {
        this.responseMessage = `Pedido enviado com sucesso! ID: ${response.id}`;
        console.log('Resposta do servidor:', response);
      },
      (error) => {
        this.responseMessage = 'Erro ao enviar o pedido.';
        console.error('Erro ao enviar:', error);
        console.error('Status do erro:', error.status);
        console.error('Corpo do erro:', error.error);
      }
    );
  }
}
