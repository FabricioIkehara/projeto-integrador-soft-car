import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { MenuSideComponent } from '../../components/menu-side/menu-side.component';

@Component({
  selector: 'app-clients-register',
  templateUrl: './clients-register.component.html',
  styleUrls: ['./clients-register.component.css'],
  standalone: true,
  imports: [MenuBarComponent, MenuSideComponent, HttpClientModule, FormsModule]
})
export class ClientsRegisterComponent {
  private apiUrl = 'http://localhost:8000/submit/';

  constructor(private http: HttpClient) { }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.http.post(this.apiUrl, form.value).subscribe(
        response => {
          console.log('Cliente adicionado com sucesso!', response);
          form.reset();
        },
        error => {
          console.error('Erro ao adicionar cliente', error);
        }
      );
    }
  }

  resetForm(form: NgForm) {
    form.reset();
  }
}
