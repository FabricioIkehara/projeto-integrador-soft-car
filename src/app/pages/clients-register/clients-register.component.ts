import { Component } from '@angular/core';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { MenuSideComponent } from '../../components/menu-side/menu-side.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clients-register',
  standalone: true,
  imports: [MenuBarComponent, MenuSideComponent, FormsModule, CommonModule, HttpClientModule],
  templateUrl: './clients-register.component.html',
  styleUrls: ['./clients-register.component.css'],
})
export class ClientsRegisterComponent {

  formData: {
    client: string;
    telefone: string;
    carro: string;
    cor: string;
    placa: string;
    observacoes: string;
  } = {
    client: '',
    telefone: '',
    carro: '',
    cor: '',
    placa: '',
    observacoes: '',
  };

  responseMessage = '';
  isLoading = false;

  constructor(private http: HttpClient) {}

  onSubmit() {

    const status = 'pendente';

    const postData = {
      ...this.formData,
      status: status
    };

    this.http.post('/api/submit_form/', postData)
      .subscribe(
        (response: any) => {
          this.responseMessage = 'Cliente adicionado com sucesso!';
          console.log(response);
        },
        (error) => {
          console.error('Erro ao adicionar cliente:', error);
          this.responseMessage = 'Erro ao adicionar cliente.';
        }
      );
  }


  resetForm() {
    this.formData = {
      client: '',
      telefone: '',
      carro: '',
      cor: '',
      placa: '',
      observacoes: '',
    };
  }
}
